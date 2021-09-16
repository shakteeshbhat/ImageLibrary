import {Carousel} from "react-bootstrap";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../index.css';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function ControlledCarousel({jsonData}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const matches = useMediaQuery(
        json2mq({
          minWidth: 600,
        }),
      );
      

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}  className="w-75 m-4 border-light border p-3 " fade >
            {jsonData.map(data => {
                if (data.url.endsWith('.jpg')|| data.url.endsWith('.png')){
                return <Carousel.Item bsPrefix="carousel-item" >
                    <img
                        className="d-block w-100"
                        src={data.hdurl}
                        alt={data.title}
                        width={matches?"10vw":"14vw"}
                        height={matches?"500vh":"300vh"}
                    />
                    <Carousel.Caption>

                        <p>{data.title}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            }})}

        </Carousel>
    );
}

export default ControlledCarousel;