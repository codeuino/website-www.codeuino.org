import React from "react";
import { Image } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../newlogo.png";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = ({ onScroll }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${onScroll}`}
      id="myNav"
    >
      <div className="container">
        <Link class="navbar-brand" to="/">
          <Image
            id="logo"
            src={logo}
            alt="codeuino logo"
            style={{ heigth: "20vh", width: "10vw" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/#aboutUs">
                About Us<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/#projects">
                Project<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/#programs">
                Programs<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/team">
                Team<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://docs.codeuino.org/documentation/"
              >
                Docs<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/#collaborate">
                Collaborate<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/codeofconduct">
                Code of Conduct<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/joinus">
                Join Us<span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
