import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Heading from "../../../components/Layout/Heading";
import wwc from "../images/wwc.jpeg";
import dgocean from "../images/dgocean.svg";
import jetbrains from "../images/jetbrains.png";
import gitbook from "../images/gitbook.png";
import linuxFoundation from "../images/LinuxFoundation.png";
import DonateCard from "../../../components/DonateUs/Donate";

const Partners = () => {
  return (
    <React.Fragment>
      <Heading
        section="donate"
        heading="Our Backers"
        subheading="Codeuino's supporters and friends"
      />

      <div className="" style={{ width: "100%" }}>
        <img
          src={wwc}
          alt="women who code"
          style={{ width: "15%", marginRight: 70 }}
        />
        <img
          src={dgocean}
          alt="digital ocean"
          style={{ width: "15%", marginRight: 70 }}
        />
        <img
          src={jetbrains}
          alt="jet brains"
          style={{ width: "15%", marginRight: 70 }}
        />
        <img
          src={linuxFoundation}
          alt="the linux foundation"
          style={{ width: "15%", marginRight: 70 }}
        />
        <img
          src={gitbook}
          alt="gitbook"
          style={{ width: "15%", marginRight: 0 }}
        />
      </div>
      <DonateCard />
    </React.Fragment>
  );
};

export default Partners;
