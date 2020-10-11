import React from "react";
import { Col } from "react-bootstrap";
import TeamCard from "./TeamCard";

var BoardMembers = [
  {
    name: "Jaskirat Singh",
    post: "Founder",
    headline:
      "Codeuino Project Administrator | GSoD at Chaoss | GSoC & GCI Mentor",
    profile:
      "https://avatars0.githubusercontent.com/u/10228651?s=460&u=a6f2e9e4b66bee96cee734be7dc7fc9daf098c8a&v=4",
    github: "https://github.com/jaskirat2000",
    linkedin: "https://www.linkedin.com/in/jaskiratsingh2000/",
  },
  {
    name: "Devesh Verma",
    post: "System Administrator",
    headline: "SDE at Shaw Academy | Mentor GSoC'20, GCI'19, GSoC'19",
    profile:
      "https://avatars0.githubusercontent.com/u/20336672?s=460&u=bc54a04b2b823c0d6c6b33406a27074de1bfbaa3&v=4",
    github: "https://github.com/devesh-verma",
    linkedin: "https://www.linkedin.com/in/devesh-verma/",
  },
  {
    name: "Vaibhav D. Aren",
    post: "Backend Developer",
    headline:
      "SDE at browserstack | GSoC 18 , 19 , 20 | Mentor at The Linux Foundation",
    profile:
      "https://avatars1.githubusercontent.com/u/17678138?s=460&u=11bec25e127cdbaf6d69c1b9350177aa2e170cd0&v=4",
    github: "https://github.com/vaibhavdaren",
    linkedin: "https://www.linkedin.com/in/vaibhavdaren/",
  },
];

const InjectedJSX = BoardMembers.map((member, index) => (
  <Col md={6} lg={4} className="team-content-wrapper">
    <TeamCard key={index} member={member} />
  </Col>
));

const BoardMembersWrapper = () => {
  return <React.Fragment>{InjectedJSX}</React.Fragment>;
};

export default BoardMembersWrapper;
