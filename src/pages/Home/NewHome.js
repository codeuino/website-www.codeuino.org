import React from "react";
import "./NewHome.css";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn.js";
import Projects from "./Components/Projects";
import LandingPageComponent from "./Components/LandingPageComponent";
import Activities from "./Components/Activities";
import Collaborate from "./Components/Collaborate";
import Partners from "./Components/Partners";
import JoinUs from "./Components/JoinUs";
import Updates from "./Components/Updates";

const NewHome = () => {
  return (
    <div>
      <div id="___gatsby">
        <div
          style={{ outline: "none" }}
          tabIndex="-1"
          role="group"
          id="gatsby-focus-wrapper"
        >
          <div className="mt-10">
            <LandingPageComponent />
            <div id="projects">
              <Projects />
            </div>
            <div id="programs">
              <Activities />
            </div>
            <div id="collaborate">
              <Collaborate />
            </div>
            <div id="joinUs">
              <JoinUs />
            </div>
            <div id="donate">
              <Partners />
            </div>
            <div id="updates">
              <Updates />
            </div>
            <ScrollToTopBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
