import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div>
          <img src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU5NTM0OTYxNjc2Nzg5MzM2/halloween-haunted-house-social-getty-108309587.jpg" />
        </div>
        <div>
          <img src="https://images.indianexpress.com/2019/10/Abandoned-psychiatric-hospital_759.jpg" />
        </div>
        <div>
          <img src="https://whyy.org/wp-content/uploads/2019/10/2018-07-25-e-lee-philadelphia-eastern-state-penitentiary-historic-preservation-training.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
