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
        {TIMELINE_CONTENT.map((milestone, index) => {
          return (
            <Col
              key={index}
              xs={12}
              sm={5}
              md={4}
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
