import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import GithubIcon from "../images/github.svg";
import SlackIcon from "../images/slack.svg";
import BannerImage from "../images/homeBanner.svg";

const HomeBannerComponent = () => {
  return (
    <React.Fragment>
      <Row className="main-content">
        <Col md={6}>
          <h1 className="home-heading">
            Learn. Build. <br /> Contribute. Grow.
          </h1>
          <p className="home-subheading">
            An open source social networking software development community
            which accounts the house of sustainable and networking products
            line.
          </p>
          <Button
            className="home-github-button"
            href="https://github.com/codeuino"
          >
            <Image
              src={GithubIcon}
              className="home-github-icon"
              alt="Github Icon"
            />
            Github
          </Button>
          <Button
            className="home-slack-button"
            href="http://slack.codeuino.org/"
          >
            <Image
              src={SlackIcon}
              className="home-slack-icon"
              alt="Slack Icon"
            />
            Slack
          </Button>
        </Col>
        <Col md={6} className="home-image-container">
          <Image
            src={BannerImage}
            className="home-banner"
            alt="Community Banner"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="home-mission">
            <Row>
              <Col md={4} lg={3}>
                <h1 className="home-mission-heading">
                  Our <br /> Mission
                </h1>
              </Col>
              <Col md={8} lg={9}>
                <p className="home-mission-content">
                  Communications technology has enabled new approaches to
                  communities and end-users. To support that Codeuino works with
                  a vision to have open sustainability within social networking
                  and build OSS/FOSS social-environmental tools with a sole
                  motive to benefit organizations and individuals to have a
                  common platform for collaboration.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomeBannerComponent;
