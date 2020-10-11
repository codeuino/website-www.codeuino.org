import React from "react";
import Heading from "../../../components/Layout/Heading";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Twitter from "../../../components/Twitter/Twitter";
import Medium from "../../../components/Medium/Medium";

const Updates = () => {
  return (
    <React.Fragment>
      <Heading
        section="blogs"
        heading="Blog Posts"
        subheading="Updates from the Codeuino Community"
      />
      <Medium />
      <Heading
        section="testimonials"
        heading="What others say about Coduino"
        subheading="Testimonials"
      />
      <Testimonials />
      <Heading
        section="updates"
        heading="Latest Updates"
        subheading="Tune in to our social handles"
      />
      <Twitter />
    </React.Fragment>
  );
};

export default Updates;
