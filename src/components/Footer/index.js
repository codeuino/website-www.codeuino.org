import React from "react";
import "./Footer.css";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className=" container footer-container">
        <div className="row text-left">
          <div className="col-md-10">
            <p className="footer-para-question">Want to know more about CodeUino?</p>
            <p>
              Codeuino is an Open Source Social Networking organisation that
              provides various robust frameworks solutions which could span the
              entire world through building all kinds of social environments,
              discussion portals and collaboration.
            </p>
            <button
              type="button"
              id="discover1"
              className="footer-button ml-0 btn btn-primary shadow lift"
              style={{color:" #22247A",backgroundColor:"white"}}
            >
              Discover more
            </button>
          </div>
        </div>
        <div className="col-md-6 footer-clickables">
          <div className="footer-links">
            <div className="footer-route-links">
              <div>
                <a className="footer-link" href="/">Home</a>
              </div>
              <div>
                <Link className="footer-link" to="/#aboutUs">About Us</Link>
              </div>
              <div>
                <Link className="footer-link" to="/#projects">Project</Link>
              </div>
              <div>
                <Link className="footer-link" to="/#programs">Programs</Link>
              </div>
              <div>
                <Link className="footer-link" to="/team">Team</Link>
              </div>
            </div>
            <div className="ml-8">
              <div>
                <a className="footer-link" href="https://docs.codeuino.org/documentation/">Docs</a>
              </div>
              <div>
                <Link className="footer-link" className="footer-link" to="/#collaborate">Collaborate</Link>
              </div>
              <div>
                <Link className="footer-link" to="/codeofconduct">Code Of Conduct</Link>
              </div>
              <div>
                <Link className="footer-link" to="/joinus">Join Us</Link>
              </div>
            </div>
          </div>
          <div className="my-5">
            <a className="mr-6" href="https://twitter.com/codeuino?lang=en">
              <i class="fab fa-twitter fa-2x text-white"></i>
            </a>
            <a className="mr-6" href="https://www.facebook.com/codeuino/">
              <i class="fab fa-facebook-f fa-2x text-white"></i>
            </a>
            <a className="mr-6" href="https://github.com/codeuino">
              <i class="fab fa-github fa-2x text-white"></i>
            </a>
            <a
              className="mr-6"
              href="https://www.linkedin.com/company/codeuino/"
            >
              <i class="fab fa-linkedin-in fa-2x text-white"></i>
            </a>
            <a
              className="mr-6"
              href="https://www.youtube.com/channel/UCmC2EOPv_oyJIevTyzlZTDQ"
            >
              <i class="fab fa-youtube fa-2x text-white"></i>
            </a>
            <a className="" href="https://medium.com/codeuino">
              <i class="fab fa-medium-m fa-2x text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
