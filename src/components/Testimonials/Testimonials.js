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
      breakpoint: { max: 768, min: 370 },
      items: 1,
    },
  };
  return (
    <Row className="testimonials-container">
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
          {Data.map((testimonial,index) => {
            return (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-card-text">{testimonial.quote}</div>
                <div className="testimonial-card-footer-container">
                  <div className="testimonial-card-footer">
                    <div className="testimonial-image">
                      <Image
                        alt="User Image"
                        width="100%"
                        src={testimonial.image}
                      />
                    </div>
                    <h3 className="testimonial-person-name">{testimonial.name}</h3>
                    <h4 className="testimonial-person-role">{testimonial.role}</h4>
                    <p className="testimonial-person-description">
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
