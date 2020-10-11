import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Heading from "../../../components/Layout/Heading";
import { TIMELINE_CONTENT } from "./timelineContent";
import aboutSketch from "../images/aboutSketch.svg";

const TimelineComponent = () => {
  return (
    <React.Fragment>
      <Heading
        section="timeline"
        heading=" History"
        subheading="Have a look at our journey so far"
      />
      <Row className="timeline-container">
        <Col xs={12} sm={10} md={8} lg={5} className="timeline-card-container">
          <div className="timeline-summary-container timeline-card">
            <h3 className="timeline-summary-heading">A brief history</h3>
            <hr className="timeline-summary-hr" />
            <p className="timeline-summary-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        {TIMELINE_CONTENT.map((milestone, index) => {
          return (
            <Col
              key={index}
              xs={12}
              sm={7}
              md={6}
              lg={4}
              className="timeline-card-container"
            >
              <div className="timeline-card">
                <p className="timeline-card-content">{milestone.brief}</p>
                <h4 className="timeline-year">{milestone.year}</h4>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Image
          alt="Community Sketch"
          className="about-sketch"
          src={aboutSketch}
        />
      </Row>
    </React.Fragment>
  );
};

export default TimelineComponent;
