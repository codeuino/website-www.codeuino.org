import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

class Footer extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  smoothScroll = (el) => {
    window.scrollTo({
      top: el.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid className="footer-container-fluid">
          <Container>
            <Row>
              <Col lg={8}>
                <h1 className="footer-heading">
                  Want to know about Codeuino Founder?
                </h1>
                <p>
                  Jaskirat is an Open Source Research Strategist and Tech
                  Diversity Specialist, developing new and improving existing,
                  computer-based technologies, system and solutions in advanced
                  open source computer vision topics.
                </p>
                <button className="footer-button">
                  <a href="https://www.linkedin.com/in/jaskiratsingh2000/">
                    Discover more
                  </a>
                </button>
              </Col>
              <Col lg={4}>
                <Row>
                  <Col xs={4} className="footer-links">
                    <h6>
                      <Link to="" onClick={() => this.scrollToTop()}>
                        Home
                      </Link>
                    </h6>
                    <h6>
                      <Link scroll={this.smoothScroll} to="/#aboutUs">
                        About Us
                      </Link>
                    </h6>
                    <h6>
                      <Link scroll={this.smoothScroll} to="/#projects">
                        Project
                      </Link>
                    </h6>
                    <h6>
                      <Link scroll={this.smoothScroll} to="/#programs">
                        Programs
                      </Link>
                    </h6>
                    <h6>
                      <Link scroll={this.smoothScroll} to="/team">
                        Team
                      </Link>
                    </h6>
                  </Col>
                  <Col xs={8} className="footer-links">
                    <h6>
                      <a
                        className="footer-link"
                        href="https://docs.codeuino.org/documentation/"
                      >
                        Docs
                      </a>
                    </h6>
                    <h6>
                      <Link scroll={this.smoothScroll} to="/#collaborate">
                        Collaborate
                      </Link>
                    </h6>
                    <h6>
                      <Link scroll={this.scrollToTop} to="/codeofconduct">
                        Code Of Conduct
                      </Link>
                    </h6>
                    <h6>
                      <Link scroll={this.smoothScroll} to="/#joinUs">
                        Join Us
                      </Link>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="footer-icon-container">
              <Col xs={2} md={1}>
                <a href="https://twitter.com/codeuino?lang=en">
                  <TwitterIcon className="footer-icon" />
                </a>
              </Col>
              <Col xs={2} md={1}>
                <a href="https://www.facebook.com/codeuino/">
                  <FacebookIcon className="footer-icon" />
                </a>
              </Col>
              <Col xs={2} md={1}>
                <a href="https://github.com/codeuino">
                  <GitHubIcon className="footer-icon" />
                </a>
              </Col>
              <Col xs={2} md={1}>
                <a href="https://www.linkedin.com/company/codeuino/">
                  <LinkedInIcon className="footer-icon" />
                </a>
              </Col>
              <Col xs={2} md={1}>
                <a href="https://www.youtube.com/channel/UCmC2EOPv_oyJIevTyzlZTDQ">
                  <YouTubeIcon className="footer-icon" />
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}
export default Footer;
