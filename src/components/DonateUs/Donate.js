import React from "react";
import { Row, Col, Button } from "react-bootstrap";
const DonateCard = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <div className="home-mission">
            <Row>
              <Col md={6} lg={5}>
                <h1 className="home-mission-heading">Donate Us</h1>
                <h4 className="donate-subheading">
                  COMMUNITY FUND AND PROJECT INCUBATION
                </h4>
              </Col>
              <Col md={6} lg={7}>
                <p>
                  Codeuino is an Open Source Social Networking organisation that
                  provides various robust frameworks solutions which could span
                  the entire world through building all kinds of social
                  environments, discussion portals and collaboration.
                </p>
                <Button
                  href="https://funding.communitybridge.org/projects/codeuino-mentorship"
                  className="donate-button"
                >
                  The Linux Foundation Mentorship Platform
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DonateCard;
