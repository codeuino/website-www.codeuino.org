import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Code from '../images/code.svg';
import Bug from '../images/bug.svg';
import Help from '../images/handshake.svg';
import Donation from '../images/donation.svg';
import CollaborateCard from '../../../components/Collaborate/CollaborateCard';

const collaborationMethods = [
  {
    image: Code,
    title: "Want to code?",
    description: <p style={{ textAlign: "justify" }}>
        Whether you're helping us fix bugs, improve the docs, or
        spread the word, we'd love to have you as part of the Codeuino
        community! Check out our{" "}
        <Link to="/joinus" className="custom-links">
          Contributing Guide
        </Link>{" "}
        for ideas on contributing and setup steps for getting our
        repositories up and running on your local machine.
      </p>
  },
  {
    image: Bug,
    title: "Report a feature/bug?",
    description: <p style={{ textAlign: "justify" }}>
        If you don't know how to code, you can even make your
        contribution by reporting bugs or suggesting new
        features/improvements in our products. You can open an issue
        for it{" "}
        <a
          href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"
          className="custom-links">
          Open Issue
        </a>
        {"."}
      </p>
  },
  {
    image: Donation,
    title: "Support Codeuino?",
    description: <p style={{ textAlign: "justify" }}>
        By sponsoring Codeuino you can support the ongoing development
        of various projects our community has built. We'll appreciate
        some support. If you want to donate, you can{" "}
        <a
          href="https://funding.communitybridge.org/projects/f88b09ee-432d-4714-ad09-304b7a24e1e6"
          className="custom-links">
          Donate Here
        </a>
        {"."}
      </p>
  },
  {
    image: Help,
    title: "Helping our Interns",
    description: ""
  }
];

const Collaborate = () => {
  return (
    <section class="pt-4 pt-md-5">
      <div class="container">
        <div
          class="container mt-10 ml-0"
          id="collaborate"
          style={{ width: "100%", alignContent: "left" }}>
          <span class="badge badge-pill badge-primary-soft mb-3 text-center">
            <span class="h6 text-uppercase font-weight-bold">Collaborate</span>
          </span>
          <h1 class="component-heading">Collaborate</h1>
          <div class="row" style={{ textAlign: "left" }}>
            {collaborationMethods.map((ele, index) => <div className="col-md-3 p-0">
              <CollaborateCard {...ele} key={index}/>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
