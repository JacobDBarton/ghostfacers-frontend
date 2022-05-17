import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselComponent(props) {
  const url = "our API???";

  const [scaryInfo, setScaryInfo] = useState([]);

  useEffect(() => {
    const getScaryInfo = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setScaryInfo(data);
      } catch (err) {
        console.log("hellllp");
      }
    };

    getScaryInfo();
  }, []);

  function loaded() {
    return (
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          stopOnHover={true}
          showStatus={false}
          interval={6000}
          showThumbs={false}
        >
          {scaryInfo.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.image} alt={image.location} />
                <h3>{image.location}</h3>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }

  function loading() {
    return <h3>Loading data...</h3>;
  }

  return <>{scaryInfo ? loaded() : loading()}</>;
}

export default CarouselComponent;
