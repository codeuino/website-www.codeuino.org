import React from "react";
import "./NewHome.css";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn.js";
import Projects from "./Components/Projects";
import LandingPageComponent from "./Components/LandingPageComponent";
import Activities from "./Components/Activities";
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
          id="gatsby-focus-wrapper"
        >
          <div class="mt-12">
            <LandingPageComponent />
            <div id="projects">
              <Projects />
            </div>
            <div id="programs">
              <Activities />
            </div>
            <Partners />
            <TweetFeeds />
            <ScrollToTopBtn />
            <div class="twitter-feed mt-10 container">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="codeuino"
                options={{ height: 500, fontSize: 2 }}
                noHeader="true"
                noBorders="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
