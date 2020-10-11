import React from "react";
import Heading from "../../../components/Layout/Heading";
import { Row, Col, Image } from "react-bootstrap";
import spansberryImage from "../images/spansberry.png";
import codebadgeImage from "../images/Codebadge.png";
import donutImage from "../images/donut.jpg";
import designImage from "../images/designSketch.svg";

const Projects = () => {
  return (
    <React.Fragment>
      <Heading
        section="projects"
        heading="Our Projects"
        subheading="Have a look at the amazing products we have built"
      />
      <Row className="project-container">
        <Col md={5} className="project-image-container">
          <Image
            src={donutImage}
            className="project-image"
            alt="Donut Platform"
          />
        </Col>
        <Col md={7}>
          <h2 className="project-heading">Donut</h2>
          <h6 className="project-subheading">
            Open source, community-oriented social media platform
          </h6>
          <p>
            Donut is an open-source, feature-rich, highly flexible and
            privacy-friendly, social networking platform built for
            community-oriented collaboration in a customized way. It has been
            built on the Node.js framework allowing an essential impetus to
            provide custom and friendly rich widgets and an expansive library of
            modules to make communication and collaboration easy and successful.
            With a powerful module system, you can customize this platform by
            using third party tools, writing your own or integrating other
            software.
          </p>
          <a
            href="https://github.com/codeuino/social-platform-donut-frontend"
            className="program-anchor-text"
          >
            Frontend
          </a>
          <a
            href="https://github.com/codeuino/social-platform-donut-backend"
            className="program-anchor-text"
          >
            Backend
          </a>
          <a
            href="https://www.figma.com/file/iZvb7rLYRp3Di3wILVQ7V9/CodeUino-Donut"
            className="program-anchor-text"
          >
            Design
          </a>
          <a
            href="https://www.youtube.com/watch?v=wYk71_KY6Bk"
            className="program-anchor-text"
          >
            Youtube
          </a>
          <a
            href="https://docs.codeuino.org/documentation/donut-docs/donut-documentation"
            className="program-anchor-text"
          >
            Documentation
          </a>
        </Col>
      </Row>
      <Row className="project-container">
        <Col md={7}>
          <h2 className="project-heading">CodeBadge</h2>
          <h6 className="project-subheading">
            Tool for measuring contributor's health in the community
          </h6>
          <p>
            Codebadge is an open-source, user-friendly, visual-oriented
            collaboration tool which incorporates development of badges and
            integrating with forums in a customized way. Codebadge communicate
            skills, achievements and contribution tracking by providing visual
            symbols of accomplishments packed with verifiable data and evidence
            that can be shared across the web. It is a standard
            organization-oriented project that provides an essential impetus to
            Admins and users with an appropriate dashboards.
          </p>
          <a
            href="https://github.com/codeuino/codebadge-frontend"
            className="program-anchor-text"
          >
            Frontend
          </a>
          <a
            href="https://github.com/codeuino/codebadge-backend"
            className="program-anchor-text"
          >
            Backend
          </a>
          <a
            href="https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=0%3A1"
            className="program-anchor-text"
          >
            Design
          </a>
          <a
            href="https://www.youtube.com/watch?v=s1gDGjJtmpk"
            className="program-anchor-text"
          >
            Youtube
          </a>
          <a
            href="https://docs.codeuino.org/documentation/codebadge/codebadge-documentation"
            className="program-anchor-text"
          >
            Documentation
          </a>
        </Col>
        <Col md={5} className="project-image-container">
          <Image
            src={codebadgeImage}
            className="project-image"
            alt="CodeBadge Platform"
          />
        </Col>
      </Row>
      <Row className="project-container">
        <Col md={5} className="project-image-container">
          <Image
            src={spansberryImage}
            className="project-image"
            alt="Spansberry Platform"
          />
        </Col>
        <Col md={7}>
          <h2 className="project-heading">Spansberry</h2>
          <h6 className="project-subheading">
            Open source, community-oriented discussion platform
          </h6>
          <p>
            Spansberry is a community-oriented discussion platform that comes
            with an intelligent dashboard mechanism that helps manage the
            ongoing discussions in organized and structural ways. Within the
            discussion forum, it allows tracking and assigning tasks within the
            discussion forum from the replied thread itself. It helps review
            team workload alongside creating polls and surveys, and schedule
            draft messages inside the discussions. The exuberant feature of this
            project is that it helps turn a new or existing message within the
            ongoing discussion into a task, set a deadline for any user, assign
            it to a teammate or anyone, add comments or attach documents and
            files, and get reminded automatically for meetings, announcements,
            projects and any discussions through the bot.
          </p>
          <a
            href="https://github.com/codeuino/community-forum-frontend"
            className="program-anchor-text"
          >
            Frontend
          </a>
          <a
            href="https://github.com/codeuino/community-forum-backend"
            className="program-anchor-text"
          >
            Backend
          </a>
          <a
            href="https://www.figma.com/file/iZvb7rLYRp3Di3wILVQ7V9/CodeUihttps://www.figma.com/file/mctd10gi5LjvAmZzaxC7vS/Forums-Project-Donut?node-id=0%3A1no-Donut"
            className="program-anchor-text"
          >
            Design
          </a>
          <a href="#" className="program-anchor-text">
            Youtube
          </a>
          <a href="#" className="program-anchor-text">
            Documentation
          </a>
        </Col>
      </Row>
      <Row className="project-design-container">
        <Col md={7}>
          <h3 className="project-design-heading">Design Project</h3>
          <h6 className="project-design-text">COMING SOON</h6>
          <p>
            To all the designers in the world something big is coming soon!
            Update your tools for the battle.
          </p>
        </Col>
        <Col md={5} className="project-design-image-container">
          <Image
            src={designImage}
            className="project-design-image"
            alt="Design Sketch"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Projects;
