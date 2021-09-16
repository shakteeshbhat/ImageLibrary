import React, {useEffect, useState} from 'react';
import {imageDiv, maindiv} from './constants';
import Skeleton from '@material-ui/lab/Skeleton';
import ControlledCarousel from './carousel';
import Footer from './footer';

function ImageOfTheDay() {

  let [item, setItem] = useState(false);
  let [jsonData, setJsonData] = useState('');

  useEffect(() => {
        let lastWeekDate = new Date(new Date().setDate(new Date().getDate() - 7));
        let date = new Date();
        let dateString = date.getFullYear() + '-' + `${date.getMonth()+1}` + '-' +
            date.getDate();
        let lastDateString = lastWeekDate.getFullYear() + '-' +
            `${lastWeekDate.getMonth()+1}` + '-' + lastWeekDate.getDate();
        
        const apiKey = 'L6PqsNMcfp5DpkMXvA80baHOv9ZWcs0vrQ3wpLYW';
        const requestOptions = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        };

        fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${lastDateString}&end_date=${dateString}`,
            requestOptions).then(response => response.json()).then(data => {

          setJsonData(data);
          setItem(true);

        });
      }
      , []);

  return <div style={maindiv}>
    <div style={imageDiv}>
      {item ?
          <ControlledCarousel jsonData={jsonData}/> :
          <Skeleton variant="rect" width={500} height={500}/>}
    </div>
    <Footer/>
  </div>;
}

export default ImageOfTheDay;