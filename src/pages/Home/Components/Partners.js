import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Heading from "../../../components/Layout/Heading";
import wwcImage from "../images/wwc.jpeg";
import dgoceanImage from "../images/dgocean.svg";
import jetbrainsImage from "../images/jetbrains.png";
import gitbookImage from "../images/gitbook.png";
import linuxFoundationImage from "../images/LinuxFoundation.png";
import DonateCard from "../../../components/DonateUs/Donate";

const Partners = () => {
  return (
    <React.Fragment>
      <Heading
        section="donate"
        heading="Our Backers"
        subheading="Codeuino's supporters and friends"
      />
      <Row className="backer-row">
        <Col lg={7} className="backer-logo-container">
          <Image
            className="backer-logo"
            src={wwcImage}
            alt="Women Who Code Logo"
          />
          <Image
            className="backer-logo"
            src={dgoceanImage}
            alt="Digital Ocean Image"
          />
          <Image
            className="backer-logo"
            src={jetbrainsImage}
            alt="Women Who Code Logo"
          />
        </Col>
        <Col lg={5} className="backer-logo-container">
          <Image
            className="backer-logo2"
            src={linuxFoundationImage}
            alt="Women Who Code Logo"
          />
          <Image
            className="backer-logo2 backer-gitbook-logo"
            src={gitbookImage}
            alt="Gitbook Image"
          />
        </Col>
      </Row>
      <DonateCard />
    </React.Fragment>
  );
};

export default Partners;
