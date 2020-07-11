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
      {/* <div>
        <div
          className="container"
          style={{
            justifyContent: "space-evenly",
            display: "flex",
            marginTop: 50,
          }}
        >
          <div class="row">
            <div class="col-6">
              <h2 className="component-heading">Our Partners</h2>
              <img src={wwc} alt="image" style={{ width: "60%" }} />
            </div>
            <div class="col-6">
              <h2 className="component-heading">Our Sponsors</h2>
              <img src={dgocean} alt="image" style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div> */}
      <span class="badge badge-pill badge-primary-soft mb-3 text-center">
        <span class="h6 text-uppercase font-weight-bold">Donate</span>
      </span>
      <div className="container mb-7">
        <div className="component-heading">
          Codeuino's supporters and friends
        </div>
        <div className="" style={{ width: "100%" }}>
          <img
            src={wwc}
            alt="image"
            style={{ width: "15%", marginRight: 70 }}
          />
          <img
            src={dgocean}
            alt="image"
            style={{ width: "15%", marginRight: 70 }}
          />
          <img
            src={jetbrains}
            alt="image"
            style={{ width: "15%", marginRight: 70 }}
          />
          <img
            src={linuxFoundation}
            alt="image"
            style={{ width: "15%", marginRight: 70 }}
          />
          <img
            src={gitbook}
            alt="image"
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
