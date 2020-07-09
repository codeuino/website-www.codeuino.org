import React, { useRef } from "react";
import { Image, Navbar } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../newlogo.png";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = ({ onScroll }) => {

  const navbarRef = useRef(null);
  
  const smoothScroll = el => {
    console.log(navbarRef.current.offsetHeight);
    window.scrollTo({
      top: el.offsetTop - navbarRef.current.offsetHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (

    <React.Fragment>

    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light`}>
      <Link className="navbar-brand" to="/">
        <Image
          id="logo"
          src={logo}
          alt="codeuino logo"
          style={{ heigth: "20vh", width: "10vw" }}
        />
      </Link>
    </nav>

    <Navbar variant="light" bg="light" expand="lg" fixed="top" className={`${onScroll}`} id="myNav" ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Image
            id="logo"
            src={logo}
            alt="codeuino logo"
            style={{ heigth: "20vh", width: "10vw" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link scroll={smoothScroll} className="nav-link" to="/#aboutUs">
                About Us<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link scroll={smoothScroll} className="nav-link" to="/#projects">
                Project<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link scroll={smoothScroll} className="nav-link" to="/#programs">
                Programs<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                Team<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://docs.codeuino.org/documentation/"
              >
                Docs<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link scroll={smoothScroll} className="nav-link" to="/#collaborate">
                Collaborate<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/codeofconduct">
                Code of Conduct<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/joinus">
                Join Us<span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
    </React.Fragment>
  );
};
export default NavBar;
