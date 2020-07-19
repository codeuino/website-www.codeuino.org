import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "./content";
import "./Testimonials.css";
import React from "react";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div class="d-flex flex-column align-items-center mt-10 mb-10 container p-0">
      <span class="badge badge-pill badge-primary-soft mb-3 text-center">
        <span class="h6 text-uppercase font-weight-bold">Testimonials</span>
      </span>
      <h1 className="component-heading">What others say about Coduino?</h1>
      <Carousel
        ssr={true}
        deviceType="desktop"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={false}
        transitionDuration={500}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item-class"
      >
        {Data.map(testimonial => {
          return (
            <div class="container">
              <div class="testimonial-card">
                <div class="text">
                  {testimonial.quote} <i class="fas fa-quote-right quote"></i>
                </div>
                <div class="testimonial-card-footer-outer">
                  <div class="testimonial-card-footer">
                    <div class="image">
                      <img
                        alt="testimonial pic"
                        width="100%"
                        src={testimonial.image}
                      />
                    </div>
                    <h3 class="person">{testimonial.name}</h3>
                    <h4 class="person-role">{testimonial.role}</h4>
                    <p class="person-description">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;
