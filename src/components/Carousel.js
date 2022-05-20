import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = (props) => {
  if (!props.locations) {
    return (
      <h3>Loading locations...</h3>
    );
  }
  return (
    <Carousel interval={3000}>
      {props.locations.map((location, index) => {
        // loop through all of the locations and render a carousel item for each one
        // with an image and caption
        return (
          <Carousel.Item
            // use the location id as the key
            key={location._id}
            // we need to render each item as a Link so that we can navigate to the show page (with the `to` prop)
            as={Link}
            to={`/location/${location._id}`}
          >
            <Image
              className="d-block carousel-img"
              src={location.image}
              alt={location.location}
            />
            <Carousel.Caption>
              <h5 dangerouslySetInnerHTML={{ __html: location.location }} />
              <p>
                {location.city}, {location.state_abbrev}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
