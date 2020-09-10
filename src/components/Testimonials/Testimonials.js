import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Image } from "react-bootstrap";
import Data from "./content";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1170 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1170, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 320 },
      items: 1,
    },
  };
  return (
    <Row>
      <Col>
        <Carousel
          ssr={true}
          deviceType="desktop"
          responsive={responsive}
          showDots={false}
          transitionDuration={500}
          infinite={true}
          keyBoardControl={true}
          containerClass="testimonial-container"
          itemClass="testimonial-item"
        >
          {Data.map((testimonial) => {
            return (
              <div class="testimonial-card">
                <div class="testimonial-card-text">{testimonial.quote}</div>
                <div class="testimonial-card-footer-container">
                  <div class="testimonial-card-footer">
                    <div class="testimonial-image">
                      <Image
                        alt="User Image"
                        width="100%"
                        src={testimonial.image}
                      />
                    </div>
                    <h3 class="testimonial-person-name">{testimonial.name}</h3>
                    <h4 class="testimonial-person-role">{testimonial.role}</h4>
                    <p class="testimonial-person-description">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Col>
    </Row>
  );
};

export default Testimonials;
