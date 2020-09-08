import React from "react";
import SlackIcon from "../icons/SlackIcon";
import GithubIcon from "../icons/GithubIcon";
import { HashLink as Link } from "react-router-hash-link";
import CollaborateCard from "../../../components/Collaborate/CollaborateCard";

const joinUsMethods = {
  slack: {
    icon: <SlackIcon />,
    title: "Join Us on Slack",
    description: (
      <p style={{ textAlign: "justify" }}>
        To get started, the first step is to meet the community. We use Slack to
        communicate, and there the helpful community will guide you. Slack is an
        instant messaging service used by developers and users of Github. Slack
        uses chat rooms, where developers can join in and can talk about a
        particular topic. Join Us on our{" "}
        <Link to="http://slack.codeuino.org/" className="custom-links">
          Slack Channel
        </Link>{" "}
      </p>
    )
  },
  github: {
    icon: <GithubIcon />,
    title: "Contribute on Github",
    description: (
      <p style={{ textAlign: "justify" }}>
        Whether you're helping us fix bugs, improve the docs, or spread the
        word, we'd love to have you as part of the Codeuino community! Check out
        our{" "}
        <Link to="https://github.com/codeuino" className="custom-links">
          Github
        </Link>{" "}
        for ideas on contributing and setup steps for getting our repositories
        up and running on your local machine.
      </p>
    )
  }
};

const JoinUs = () => {
  return (
    <div
      className="container pt-10"
      style={{ width: "100%", alignContent: "left" }}
    >
      <span className="badge badge-pill badge-primary-soft mb-3 text-center">
        <span className="h6 text-uppercase font-weight-bold">Join Us</span>
      </span>
      <h1 className="component-heading">How can I get Involved?</h1>
      <div className="row justify-content-center" style={{ textAlign: "left" }}>
        <div className="col-md-4 p-0">
          <a href="http://slack.codeuino.org/">
            <CollaborateCard {...joinUsMethods.slack} />
          </a>
        </div>
        <div className="col-md-4 p-0">
          <a href="https://github.com/codeuino">
            <CollaborateCard {...joinUsMethods.github} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
