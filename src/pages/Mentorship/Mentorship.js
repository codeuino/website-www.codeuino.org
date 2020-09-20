import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Heading from "../../components/Layout/Heading";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn.js";
import MENTORSHIP_CONTENT from "./mentorshipContent";

class Mentorship extends Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Heading
            heading="Mentorships"
            subheading="All the amazing mentees who contributed at Codeuino"
          />
          {MENTORSHIP_CONTENT.map((mentorship) => {
            return (
              <Row className="mentorship-container">
                <Col md={3} className="mentorship-image-container">
                  <Image
                    src={mentorship.menteeImage}
                    className="mentorship-mentee-image"
                  />
                </Col>
                <Col md={9}>
                  <h4 className="mentorship-mentee-name">
                    {mentorship.menteeName}
                  </h4>
                  <h6 className="mentorship-program-name">
                    {mentorship.programName}
                  </h6>
                  <hr className="mentorship-hr" />
                  <h5 className="mentorship-project-name">
                    {mentorship.projectName}
                  </h5>
                  <p className="mentorship-project-desc">
                    {mentorship.projectDesc}
                  </p>
                  <div className="mentorship-link-container">
                    <a
                      href={mentorship.menteeGithub}
                      className="program-anchor-text"
                    >
                      Github Link
                    </a>
                    <a
                      href={mentorship.projectLink}
                      className="program-anchor-text"
                    >
                      Project Link
                    </a>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
        <ScrollToTopBtn />
      </Container>
    );
  }
}

export default Mentorship;
