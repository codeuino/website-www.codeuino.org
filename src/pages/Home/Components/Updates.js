import React from "react";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Twitter from "../../../components/Twitter/Twitter";
import Medium from "../../../components/Medium/Medium";

const Updates = () => {
  return (
    <div className="pt-10">
      <span class="badge badge-pill badge-primary-soft mb-3 text-center">
        <span class="h6 text-uppercase font-weight-bold">UPDATES</span>
      </span>
      <Medium />
      <Testimonials />
      <h1 className="mb-10 component-heading">Latest Updates</h1>
      <Twitter />
    </div>
  );
};

export default Updates;
