import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent(props) {
  return (
    <>
      {props.locations ? (
        <Carousel
          infiniteLoop
          autoPlay
          stopOnHover={true}
          showStatus={false}
          interval={3000}
          showThumbs={false}
          swipable={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={40}
          // onCLick{Function} to route to show page of carousel haunted list
        >
          {props.locations.map((location, index) => {
            return (
              <Link
                to={`/location/${location._id}`}
                key={index}
                className="featured-img"
              >
                <img src={location.image} alt={location.location} />
                {/* the data set had encoded characters for ampersands, so we used dangerouslySetInnerHTML to render it as HTML  */}
                <h3 dangerouslySetInnerHTML={{ __html: location.location }} />
              </Link>
            );
          })}
        </Carousel>
      ) : (
        <h3>Loading data...</h3>
      )}
    </>
  );
}

export default CarouselComponent;
