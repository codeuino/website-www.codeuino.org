import React from "react";
import Heading from "../../../components/Layout/Heading";
import { Row, Col } from "react-bootstrap";
import BugIcon from "../icons/BugIcon";
import CodeIcon from "../icons/CodeIcon";
import HelpIcon from "../icons/HelpIcon";
import DonationIcon from "../icons/DonationIcon";
import CollaborateCard from "../../../components/Collaborate/CollaborateCard";

const collaborationMethods = [
  {
    icon: <CodeIcon />,
    title: "Want to contribute?",
    description: (
      <p>
        Whether you want to fix bugs, improve the docs, or spread the word, we'd
        love to have you as part of the Codeuino community! Check out our{" "}
        <a
          href="https://docs.codeuino.org/documentation/community-guidelines"
          className="anchor-text"
        >
          Community Guidelines
        </a>{" "}
        to get started.
      </p>
    ),
  },
  {
    icon: <DonationIcon />,
    title: "Support Codeuino?",
    description: (
      <p>
        By sponsoring Codeuino you can support the ongoing development of
        various projects our community has built. We will appreciate some
        support.{" "}
        <a
          href="https://funding.communitybridge.org/projects/f88b09ee-432d-4714-ad09-304b7a24e1e6"
          className="anchor-text"
        >
          Donate Here
        </a>
        {"."}
      </p>
    ),
  },
  {
    icon: <BugIcon />,
    title: "Report a feature/bug?",
    description: (
      <p>
        If you don't know how to code, you can even make your contribution by
        reporting bugs or suggesting new features/ improvements in our products.{" "}
        <a
          href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"
          className="anchor-text"
        >
          Open Issue
        </a>
        {"."}
      </p>
    ),
  },
  {
    icon: <HelpIcon />,
    title: "Helping our Interns",
    description: (
      <p>
        We provide people to participate in our internship program. So if you
        are happy to support then donate some bucks on{" "}
        <a
          href="https://people.communitybridge.org/project/7deb8e48-6797-4115-bb96-9cf4ccee022e"
          className="anchor-text"
        >
          The Linux Foundation Mentorship Platform
        </a>
        {"."}
      </p>
    ),
  },
];

const Collaborate = () => {
  return (
    <React.Fragment>
      <Heading
        section="collaborate"
        heading="Collaborate"
        subheading="How you can contribute and help us"
      />
      <Row className="about-card-container">
        {collaborationMethods.map((ele, index) => (
          <Col key={index}  sm={6} md={4} lg={3} className="collaborate-card-container">
            <CollaborateCard {...ele}  />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Collaborate;
