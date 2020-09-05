import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
      <p style={{ textAlign: "justify" }}>
        Whether you're helping us fix bugs, improve the docs, or spread the
        word, we'd love to have you as part of the Codeuino community! Check out
        our{" "}
        <Link to="https://github.com/codeuino" className="custom-links">
          Contributing Guide
        </Link>{" "}
        for ideas on contributing and setup steps for getting our repositories
        up and running on your local machine.
      </p>
    )
  },
  {
    icon: <BugIcon />,
    title: "Report a feature/bug?",
    description: (
      <p style={{ textAlign: "justify" }}>
        If you don't know how to code, you can even make your contribution by
        reporting bugs or suggesting new features/improvements in our products.
        You can open an issue for it{" "}
        <a
          href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"
          className="custom-links"
        >
          Open Issue
        </a>
        {"."}
      </p>
    )
  },
  {
    icon: <DonationIcon />,
    title: "Support Codeuino?",
    description: (
      <p style={{ textAlign: "justify" }}>
        By sponsoring Codeuino you can support the ongoing development of
        various projects our community has built. We'll appreciate some support.
        If you want to donate, you can{" "}
        <a
          href="https://funding.communitybridge.org/projects/f88b09ee-432d-4714-ad09-304b7a24e1e6"
          className="custom-links"
        >
          Donate Here
        </a>
        {"."}
      </p>
    )
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
          className="custom-links"
        >
          The Linux Foundation Mentorship Platform
        </a>
        {"."}
      </p>
    )
  }
];

const Collaborate = () => {
  return (
    <div
      class="container pt-10"
      id="collaborate"
      style={{ width: "100%", alignContent: "left" }}
    >
      <span class="badge badge-pill badge-primary-soft mb-3 text-center">
        <span class="h6 text-uppercase font-weight-bold">Collaborate</span>
      </span>
      <h1 class="component-heading">How Can I Support?</h1>
      <div class="row" style={{ textAlign: "left" }}>
        {collaborationMethods.map((ele, index) => (
          <div className="col-md-3 p-0">
            <CollaborateCard {...ele} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborate;
