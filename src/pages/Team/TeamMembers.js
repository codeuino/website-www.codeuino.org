import React from "react";
import { Col } from "react-bootstrap";
import TeamCard from "./TeamCard";

var TeamMembers = [
  {
    name: "Siddharth Simharaju",
    post: "Senior Product Designer",
    headline:
      "Product Designer at HackerRank | GSOC'20 Mentor, GCI'19 Mentor at The Terasology Foundation",
    profile: "https://avatars1.githubusercontent.com/u/33068322?s=460&v=4",
    github: "https://github.com/SiddharthSimharaju",
    linkedin: "https://www.linkedin.com/in/siddharthsimharaju/",
  },
  {
    name: "Rupesh Jha",
    post: "Full Stack Developer and Maintainer",
    headline:
      "GSOC'20 Developer | Mentor at Linux Foundation | Full Stack Web Developer",
    profile: "https://avatars0.githubusercontent.com/u/31209617?s=460&v=4",
    github: "https://github.com/Rupeshiya",
    linkedin: "https://www.linkedin.com/in/rupesh-jha-7aab6b155/",
  },
  {
    name: "Asel Peiris",
    post: "Full Stack Developer and Maintainer",
    headline: "GSoC '20 Developer | Mentor at Linux Foundation",
    profile:
      "https://avatars3.githubusercontent.com/u/31003923?s=460&u=c2c911e24cc6533df2048b20f35a9714e2227e83&v=4",
    github: "https://github.com/AuraOfDivinity",
    linkedin: "https://www.linkedin.com/in/asel-peiris-76536158/",
  },
  {
    name: "Saurabh Raj",
    post: "Maintainer",
    headline: "CommunityBridge Mentee at Codeuino | MERN developer",
    profile:
      "https://avatars1.githubusercontent.com/u/39027928?s=460&u=e9678c517c8ba536b5f8bba195dc5ea33b637ed8&v=4",
    github: "https://github.com/ksraj123",
    linkedin: "https://www.linkedin.com/in/kumarsaurabhraj/",
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

const InjectedJSX = TeamMembers.map((member, index) => (
  <Col md={6} lg={4} className="team-content-wrapper">
    <TeamCard key={index} member={member} />
  </Col>
));

const TeamMembersWrapper = () => {
  return <React.Fragment>{InjectedJSX}</React.Fragment>;
};

export default TeamMembersWrapper;
