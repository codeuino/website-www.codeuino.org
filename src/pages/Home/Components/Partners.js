import React from "react";
import wwc from "../images/wwc.jpeg";
import dgocean from "../images/dgocean.svg";
import jetbrains from "../images/jetbrains.png";
import gitbook from "../images/gitbook.png";
import linuxFoundation from "../images/LinuxFoundation.png";
import DonateCard from "../../../components/DonateUs/Donate";
import "./common.css";
const Partners = () => {
  return (
    <section>
      <span class="badge badge-pill badge-primary-soft mb-3 text-center">
        <span class="h6 text-uppercase font-weight-bold">Donate</span>
      </span>
      <div className="container mb-7">
        <h1 className="component-heading">
          Codeuino's supporters and friends
        </h1>
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
            alt="the linux fondation"
            style={{ width: "15%", marginRight: 70 }}
          />
          <img
            src={gitbook}
            alt="gitbook"
            style={{ width: "15%", marginRight: 0 }}
          />
        </div>
      </div>
      <section class="pt-4 pt-md-5">
        <div class="container">
          <DonateCard />
        </div>
      </section>
    </section>
  );
};
export default Partners;
