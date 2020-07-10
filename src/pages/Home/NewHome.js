import React from "react";
import "./NewHome.css";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn.js";
import Projects from "./Components/Projects";
import LandingPageComponent from "./Components/LandingPageComponent";
import Activities from "./Components/Activities";
import Collaborate from "./Components/Collaborate";
import Partners from "./Components/Partners";
import TweetFeeds from "../../components/TwitterFeeds/TwitterFeeds";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const NewHome = () => {
  return (
    <div>
      <div id="___gatsby">
        <div
          style={{ outline: "none" }}
          tabindex="-1"
          role="group"
          id="gatsby-focus-wrapper">
          <div class="mt-12">
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
            <div className="mt-10">
              <Partners />
            </div>
            <ScrollToTopBtn />
            <div class="twitter-feed d-flex flex-column align-items-center mt-10 mb-10 container">
              <h1 className="mb-10 component-heading">Latest Updates</h1>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="codeuino"
                options={{ height: 500, width: 700, fontSize:1 }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
