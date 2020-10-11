import React from "react";
import TeamCard from "./TeamCard";
import jaskirat from "./Jaskirat.jpeg";
import devesh from "./Devesh.jpeg";
import vaibhav from "./Vaibhav.jpeg";
import "./TeamCardWrapper.css";

var BoardMembers = [
  {
    name: "Jaskirat Singh",
    post: "Founder",
    headline:
      "Founder @Codeuino, Google summer of code & Code In mentor at @sugar_labs, @jbossorg, member at @OpenSourceOrg, Mentor at @kossiitkgp, @microsoft Educator Expert",
    profile: jaskirat,
    github: "https://github.com/jaskiratsingh2000",
    linkedin: "https://www.linkedin.com/in/jaskiratsingh2000/"
  },
  {
    name: "Devesh",
    post: "Donut Maintainer",
    headline:
      "foss contributor|board member@CODEUINO|software engineer@SHAW ACADEMY|ex-intern@SHAW ACADEMY|HASURA| INTERNSHALA|HIREINK|INDICIUMHUB|",
    profile: devesh,
    github: "https://github.com/devesh-verma",
    linkedin: "https://www.linkedin.com/in/devesh-verma/"
  },
  {
    name: "Vaibhav D. Aren",
    post: "Board Member",
    headline:
      "SDE at HashedIn | GSOC 2018 Developer @SugarLabs | GSOC-19 Mentor @JBOSS(Codeuino)| GCI -18 Mentor @SugarLabs .",
    profile: vaibhav,
    github: "https://github.com/vaibhavdaren",
    linkedin: "https://www.linkedin.com/in/vaibhavdaren/"
  },
  {
    name: "Ayush Nagar",
    post: "CodeBadge Maintainer",
    headline: "Student Mentor at Google Code-in",
    profile: "https://avatars1.githubusercontent.com/u/32647423?s=460&v=4",
    github: "https://github.com/ayushnagar123",
    linkedin: "https://www.linkedin.com/in/ayushnagar123/"
  },
  {
    name: "Siddharth",
    post: "Designer",
    headline: "Student Mentor at Google Code-in",
    profile: "https://avatars1.githubusercontent.com/u/33068322?s=460&v=4",
    github: "https://github.com/SiddharthSimharaju",
    linkedin: "https://www.linkedin.com/in/siddharthsimharaju/"
  }
];

const InjectedJSX = BoardMembers.map((member, index) => (
  <TeamCard key={index} member={member} />
));

const BoardMembersWrapper = () => {
  return <div className="grid">{InjectedJSX}</div>;
};

export default BoardMembersWrapper;
