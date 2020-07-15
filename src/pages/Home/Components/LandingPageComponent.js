import React from "react";
import Banner from "../images/banner.svg";
import poster from "../images/poster.svg";
import { HashLink as Link } from "react-router-hash-link";

const LandingPageComponent = () => {
  return (
    <React.Fragment>
    <section class="pt-4 pt-md-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5 col-lg-6 order-md-2">
            <img
              src={Banner}
              class="img-fluid mw-md-100 mw-lg-100 mb-6 mb-md-0"
              alt="all-channels"
            />
          </div>
          <div class="col-12 col-md-7 col-lg-6 order-md-1">
            <h1 class="display-3 text-center text-md-left">
              Learn, Build, Contribute, Grow.
              <br />
              <span class="text-primary">
                <span>
                  <span></span>
                </span>
              </span>
            </h1>
            <h2 className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              The Codeuino Community - An open source social networking software development 
              community which accounts the house of sustainable and networking products line.
            </h2>
            <div className="text-center text-md-left">
              <a
                href="https://github.com/codeuino"
                class="btn btn-primary shadow lift pr-5 mr-5"
                style={{ backgroundColor: " #22247A" }}
              >
              <span className="fe fe-github mr-1"></span>Github
              </a>
              <a
                href="http://slack.codeuino.org"
                class="btn btn-primary shadow lift pr-5"
                style={{ backgroundColor: " #22247A" }}
              >
              <span className="fe fe-slack mr-1"></span>Slack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="mt-10 container lift" style={{borderRadius:"25px",textAlign:"left",color:"white",backgroundColor:" #22247A",width:"100%"}}>
			<div class="row pt-6 pb-6 pl-md-6 pr-md-6">
            <div className="col-md-3 text-center p-0" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
				      <h1 className="m-0 display-3">Mission</h1>
              <p className="m-0">Of our Community</p>
            </div>
				    <p className="col-md-9 m-0 p-md-0" style={{textAlign: 'justify'}}>
              Communications technology has enabled new approaches to communities and 
              end-users in which stakeholders across sectors and organizations are engaged 
              in consensus building and implementation processes for open source ecosystem. 
              So Codeuino works with a vision to have open sustainability within social 
              networking and build OSS/FOSS social-environmental tools with a sole motive 
              to benefit organizations and individuals to have a common platform for 
              collaboration.
            </p>

			</div>
		</div>
    <section class="pt-10"
      id="aboutUs"
      style={{ width: "100%", alignContent: "left" }}>
      <div class="container">
        <span class="badge badge-pill badge-primary-soft mb-6 mb-md-8 text-center">
          <span class="h6 text-uppercase font-weight-bold">About Us</span>
        </span>
        <div class="row align-items-center">
          <div class="row" style={{ textAlign: "left" }}>
            <div class="col-md-4 col-12">
              <p className="text-md-left text-center mb-md-0"><span
                class="fa fa-question-circle fa-2x mr-1 "
                style={{ color: " #22247A" }}></span></p>
              <h2 className="text-md-left text-center">What is Codeuino?</h2>
              <p style={{ textAlign: "justify" }}>
                Codeuino is an Open Source Social Networking organisation that
                provides various robust frameworks solutions which could span
                the entire world through building all kinds of social
                environments, discussion portals and collaboration platforms by
                giving prospectus to various other organisations, users and
                outreaches to showcase their products in a custom way. This wide
                social open networking framework organisation is driven by
                volunteers all over the globe. This helps open source enthusiast
                to build up various technocratic social wide living software and
                researching FOSS projects under code survivors and challenging
                world. Codeuino takes into the house the development of some of
                the coolest Open Source Projects that are made with the sole
                motive to benefit more and more people present all over the
                world..
              </p>
            </div>
            <div class="col-md-4 col-12 pt-md-0 pt-6">
              <p className="text-md-left text-center mb-md-0"><span
                class="fa fa-user-circle fa-2x mr-1"
                style={{ color: " #22247A" }}></span></p>
              <h2 className="text-md-left text-center">Who we Are?</h2>
              <p style={{ textAlign: "justify" }}>
                We are a group of young open-source contributors creatively
                leveraging our expertise in Social networking and development
                projects to improve the quality of outreaching, interaction and
                collaboration for the people in developing nations. We consist
                of various teams from Development, Documentation, Designers and
                &nbsp;
                <Link to="#" className="custom-links">
                  Donut Platform
                </Link>
                . Everyone at Codeuino contributes to increase efficiency,
                outreaching for the user and expedite idea generation for social
                networking.
              </p>
            </div>
            <div class="col-md-4 col-12 pt-md-0 pt-6">
              <p className="text-md-left text-center mb-md-0"><span
                class="fa fa-check fa-2x mr-1"
                style={{ color: " #22247A" }}></span></p>
              <h2 className="text-md-left text-center">What do we do?</h2>
              <p style={{ textAlign: "justify" }}>
                Codeuino takes into the house the development of some of the
                coolest{" "}
                <Link to="/#projects" className="custom-links">
                  Open Source Projects
                </Link>{" "}
                that are made with the sole motive to benefit more and more
                people present all over the world. Teams within organization
                design and develop some basic set of software and networking
                plugins to help users/organisations to build up their own
                platform to interact for feeds, projects, Scholarships, etc. We
                build social networking Kit/FOSS for various organisations to
                build up the social environment for their organisation to
                showcase their products and services for their community along
                with the collaboration platform to interact with one another.
              </p>
            </div>
          </div>
        </div>
        <img alt="about us graphics" class="mt-10" src={poster} style={{ width: "100%" }} />
      </div>
    </section>
    </React.Fragment>
  );
};

export default LandingPageComponent;
