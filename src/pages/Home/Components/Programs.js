import React from "react";
import { Row, Col } from "react-bootstrap";
import Heading from "../../../components/Layout/Heading";
import ProgramCard from "../../../components/Programs/ProgramCard";
import { CURRENT_PROGRAMS } from "./currentPrograms";

class Programs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading
          section="programs"
          heading="Our Participation"
          subheading="All the programs we have been a part of"
        />
        <Row className="about-card-container">
          {CURRENT_PROGRAMS.map((currentProgram, index) => {
            if (index === 3) {
              return (
                <Col key={index} md={6} lg={12}>
                  <ProgramCard key={index} program={currentProgram} />
                </Col>
              );
            } else {
              return (
                <Col key={index} md={6} lg={4}>
                  <ProgramCard key={index} program={currentProgram} />
                </Col>
              );
            }
          })}
        </Row>
      </React.Fragment>
    );
  }
}

export default Programs;
