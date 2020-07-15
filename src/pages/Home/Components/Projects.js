import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import donut from "../images/donut.jpg";
import spansberry from "../images/spansberry.png";
import codebadge from "../images/Codebadge.png";
import card from "../images/card.svg";
import "./common.css";

const Projects = () => {
  const [donutIndex, setDonutIndex] = useState(0);
  const [codebadgeIndex, setCodebadgeIndex] = useState(0);

  const handleSelect = (key) => (selectedIndex, e) => {
    if (key === "donut") {
      setDonutIndex(selectedIndex);
    } else if (key === "codebadge") {
      setCodebadgeIndex(selectedIndex);
    }
  };
  return (
    <section class="pt-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-11 col-lg-11 text-center">
            <span class="badge badge-pill badge-primary-soft mb-3">
              <span class="h6 text-uppercase font-weight-bold">Opensource</span>
            </span>
            <h1 class="component-heading">Our Projects</h1>
            <div class="row">
              <div
                class="col-md-6 col-12"
                style={{ display: "flex", justifyContent: "space-around" }}>
                <Carousel
                  className="mt-7"
                  activeIndex={donutIndex}
                  onSelect={handleSelect("donut")}>
                  <Carousel.Item>
                    <img alt="donut project" src={donut} className="d-block w-100" />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div class="col-md-6 col-12">
                <h1 className="mb-0">Donut</h1>
                <h3 className="muted mb-4">Open source, community-oriented social media platform</h3>
                <p style={{ textAlign: "justify" }}>
                  Donut is an open-source, feature-rich, highly flexible and
                  privacy-friendly, social networking platform built for
                  community-oriented collaboration in a customized way. It has
                  been built on the Node.js framework allowing an essential
                  impetus to provide custom and friendly rich widgets and an
                  expansive library of modules to make communication and
                  collaboration easy and successful. With a powerful module
                  system, you can customize this platform by using third party
                  tools, writing your own or integrating other software.
                </p>
                <div
                  class="container mt-2"
                  style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div class="row">
                    <a
                      href="https://github.com/codeuino/social-platform-donut-frontend"
                      class="custom-links mr-2 ml-2">
                      Frontend Code on Github
                    </a>
                    <a
                      href="https://github.com/codeuino/social-platform-donut-backend"
                      class="custom-links mr-2 ml-2">
                      Backend Code on Github
                    </a>
                    <a
                      href="https://github.com/codeuino/Social-Platform-Donut"
                      class="custom-links mr-2 ml-2">
                      Donut Design Mockups
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=wYk71_KY6Bk"
                      class="custom-links mr-2 ml-2">
                      Youtube
                    </a>
                    <a
                      href="https://docs.codeuino.org/documentation/donut-docs/donut-documentation"
                      class="custom-links mr-2 ml-2">
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-10">
                <h1 className="mb-0">Codebadge</h1>
                <h3 className="muted mb-4">Tool for measuring contributor's health in the community</h3>
                <p style={{ textAlign: "justify" }}>
                  Codebadge is an open-source, user-friendly, visual-oriented
                  collaboration tool which incorporates development of badges
                  and integrating with forums in a customized way. Codebadge
                  communicate skills, achievements and contribution tracking by
                  providing visual symbols of accomplishments packed with
                  verifiable data and evidence that can be shared across the
                  web. It is a standard organization-oriented project that
                  provides an essential impetus to Admins and users with an
                  appropriate dashboards.
                </p>
                <div
                  class="container mt-2"
                  style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div class="row">
                    <a
                      href="https://github.com/codeuino/codebadge-frontend"
                      class="custom-links mr-2 ml-2">
                      Frontend Code on Github
                    </a>
                    <a
                      href="https://github.com/codeuino/codebadge-backend"
                      class="custom-links mr-2 ml-2">
                      Backend Code on Github
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=s1gDGjJtmpk"
                      class="custom-links mr-2 ml-2">
                      Youtube
                    </a>
                    <a
                      href="https://docs.codeuino.org/documentation/codebadge/codebadge-documentation"
                      class="custom-links mr-2 ml-2">
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-12 mt-10"
                style={{ display: "flex", justifyContent: "space-around" }}>
                <Carousel
                  className="mt-7"
                  activeIndex={codebadgeIndex}
                  onSelect={handleSelect("codebadge")}>
                  <Carousel.Item>
                    <img alt="codebage project" src={codebadge} className="d-block w-100" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-6 col-12 mt-10"
                style={{ display: "flex", justifyContent: "space-around" }}>
                <Carousel
                  className="mt-7"
                  activeIndex={donutIndex}
                  onSelect={handleSelect("donut")}>
                  <Carousel.Item>
                    <img alt="spansberry project" src={spansberry} className="d-block w-100" />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div class="col-md-6 col-12 mt-10">
                <h1 className="mb-0">Spansberry</h1>
                <h3 className="muted mb-4">Open source, community-oriented discussion platform</h3>
                <p style={{ textAlign: "justify" }}>
                  Spansberry is a community-oriented discussion platform that
                  comes with an intelligent dashboard mechanism that helps
                  manage the ongoing discussions in organized and structural
                  ways. Within the discussion forum, it allows tracking and
                  assigning tasks within the discussion forum from the replied
                  thread itself. It helps review team workload alongside
                  creating polls and surveys, and schedule draft messages inside
                  the discussions. The exuberant feature of this project is that
                  it helps turn a new or existing message within the ongoing
                  discussion into a task, set a deadline for any user, assign it
                  to a teammate or anyone, add comments or attach documents and
                  files, and get reminded automatically for meetings,
                  announcements, projects and any discussions through the bot.
                </p>
                <div
                  class="container mt-2"
                  style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div class="row">
                    <a
                      href="https://github.com/codeuino/community-forum-frontend"
                      class="custom-links mr-2 ml-2">
                      Frontend Code on Github
                    </a>
                    <a
                      href="https://github.com/codeuino/community-forum-backend"
                      class="custom-links mr-2 ml-2">
                      Backend Code on Github
                    </a>
                    <a
                      href="#"
                      class="custom-links mr-2 ml-2">
                      Youtube
                    </a>
                    <a
                      href="#"
                      class="custom-links mr-2 ml-2">
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="index-content">
          <div class="shadow-light-lg overflow-hidden">
            <div class="row m-0">
              <div class="col-12">
                <div class="card mt-5 mb-10 shadow-light-lg overflow-hidden text-center text-lg-left">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="card-body ml-5 py-7 py-md-9">
                        <h4 class="font-weight-bold design-banner-heading">
                          Design Project
                          <span className="coming-soon">COMING SOON</span>
                        </h4>
                        <p class="text-muted banner-text mb-0">
                          To all the designers in the world something big is
                          comming soon! Update your tools for the battle.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-2">
                      <img
                        alt="image"
                        src={card}
                        class="h-75 position-absolute right-0 mt-6 mr-11"
                        alt="Productivity"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="pt-20 mt-n17 bg-gray-200 position-relative"></section>
    </section>
  );
};
export default Projects;
