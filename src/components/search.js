import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from 'react-bootstrap/Card'
import './search.css';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';



function Search() {
  const [input, setInput] = useState('');
  const [request, setRequest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryData, setQueryData] = useState([]);
  // const [isError, setisError] = useState(false);
  // const [isData, setIsData] = useState(false);


  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const changeInput = event => {
    let value = event.target.value;
    setInput(value);
    if(input === "moo" || input ==="mar" ){setInput('mars rover');}
  
  };
  const fetch = async () =>{
    setLoading(true);
      await axios({
      url: `https://images-api.nasa.gov/search?q=${input}`,
      method: 'get'
    }).then(response=>{
      if (response.data.length === 0) { setRequest(false); setLoading(false); }
      else {
        setQueryData([]);
        setQueryData(response.data.collection.items);
        // console.log(response.data.collection);
      }

      setLoading(false);
      setRequest(true);
      }).then(err =>{
        
        console.log(err);
      }) 
    };
    
  
  return <div >


    <div className="mycontainer h-100 " >
      <div className="d-flex justify-content-center row h-100 p-4 w-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..." onChange={changeInput} />

        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={fetch}
        >
          SEARCH
      </Button>
      </div>
    </div>
    <div className="d-flex flex-row flex-wrap justify-content-around p-1 ">
      {request ? queryData.map(data => {

        return (
          <Card key={data.data[0].nasa_id} style={{ width: '28rem',height:"auto" ,margin: "1rem" ,padding:'0',backgroundColor:'black'}}>
            <Card.Body>
            <Card.Title style={{color:"white"}}>{data.data[0].title}</Card.Title>
            </Card.Body>
            <Card.Img variant="bottom" src={data.links[0].href}  />
          </Card>
          

          
          
        );
      }) : loading ? <div className="d-flex flex-row flex-wrap justify-content-around" >
        {Array.from(new Array(6)).map(function () {
          return <Skeleton variant="rect" width={310} height={218} style={{ margin: "10px" }} />
        })}
      </div> : <div></div>}
    </div>

  </div>;
}

export default Search;


