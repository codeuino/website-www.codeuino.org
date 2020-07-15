import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row style={{textAlign: "left"}}>
          <Col lg={8} sm={12}>
            <h1 className="footer-para-question">Wants to know about Codeuino Founder?</h1>
            <p>
              Codeuino is an Open Source Social Networking organisation that
              provides various robust frameworks solutions which could span the
              entire world through building all kinds of social environments,
              discussion portals and collaboration.
            </p>
            <button
              type="button"
              id="discover1"
              className="footer-button ml-0 btn btn-primary shadow lift"
              style={{color:" #22247A",backgroundColor:"white"}}
            >
              Discover more
            </button>
          </Col>
          <Col lg={4} sm={12}>
            <Row style={{marginBottom: "30px", height: "80%"}}>
              <Col lg={6} sm={12} xs={6} className="footer-links">
                  <a className="footer-link" href="/">Home</a>
                  <Link className="footer-link" to="/#aboutUs">About Us</Link>
                  <Link className="footer-link" to="/#projects">Project</Link>
                  <Link className="footer-link" to="/#programs">Programs</Link>
                  <Link className="footer-link" to="/team">Team</Link>
              </Col>
              <Col lg={6} sm={12} xs={6} className="footer-links">
                  <a className="footer-link" href="https://docs.codeuino.org/documentation/">Docs</a>
                  <Link className="footer-link" to="/#collaborate">Collaborate</Link>
                  <Link className="footer-link" to="/codeofconduct">Code Of Conduct</Link>
                  <Link className="footer-link" to="/joinus">Join Us</Link>
                  <div className="blank"></div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={0} lg={8}></Col>
          <Col md={12} lg={4}>
            <Row>
              <Col className="footer-icon" sm={2} xs={4}>
                <a href="https://twitter.com/codeuino?lang=en">
                  <i class="fab fa-twitter fa-2x text-white"></i>
                </a>
              </Col>
              <Col className="footer-icon" sm={2} xs={4}>
                <a href="https://www.facebook.com/codeuino/">
                  <i class="fab fa-facebook-f fa-2x text-white"></i>
                </a>
              </Col>
              <Col className="footer-icon" sm={2} xs={4}>
                <a href="https://github.com/codeuino">
                  <i class="fab fa-github fa-2x text-white"></i>
                </a>
              </Col>
              <Col className="footer-icon" sm={2} xs={4}>
                <a href="https://www.linkedin.com/company/codeuino/">
                  <i class="fab fa-linkedin-in fa-2x text-white"></i>
                </a>
              </Col>
              <Col className="footer-icon" sm={2} xs={4}>
                <a href="https://www.youtube.com/channel/UCmC2EOPv_oyJIevTyzlZTDQ">
                  <i class="fab fa-youtube fa-2x text-white"></i>
                </a>
              </Col>
              <Col className="footer-icon" sm={2} xs={4}>
                <a href="https://medium.com/codeuino">
                  <i class="fab fa-medium-m fa-2x text-white"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
