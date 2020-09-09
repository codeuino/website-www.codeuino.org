import React, { useRef } from "react";
import {
  HashLink as Link,
  NavHashLink as NavLink,
} from "react-router-hash-link";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import logo from "../../logo.png";

const NavBar = () => {
  const navbarRef = useRef(null);

  const smoothScroll = (el) => {
    window.scrollTo({
      top: el.offsetTop - navbarRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <Navbar
        className="navbar-container"
        variant="light"
        bg="white"
        expand="lg"
        fixed="top"
        ref={navbarRef}
      >
        <Link to="/">
          <Image className="navbar-logo" src={logo} alt="Codeuino Logo" />
        </Link>
        <Navbar.Toggle
          lable="Toggle navigation"
          aria-controls="navbarSupportedContent"
        ></Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto">
            <NavLink scroll={smoothScroll} to="/#aboutUs">
              About Us
            </NavLink>
            <NavLink scroll={smoothScroll} to="/#projects">
              Projects
            </NavLink>
            <NavLink scroll={smoothScroll} to="/#programs">
              Programs
            </NavLink>
            <NavLink scroll={smoothScroll} to="/#collaborate">
              Collaborate
            </NavLink>
            <NavDropdown
              className="navbar-nav active"
              title="Updates"
              id="navbarUpdates"
            >
              <Link
                className="dropdown-item"
                scroll={smoothScroll}
                to="/#blogs"
              >
                Blog Posts
              </Link>
              <Link
                className="dropdown-item"
                scroll={smoothScroll}
                to="/#testimonials"
              >
                Testimonials
              </Link>
              <Link
                className="dropdown-item"
                scroll={smoothScroll}
                to="/#updates"
              >
                Social Handles
              </Link>
            </NavDropdown>
            <NavLink scroll={smoothScroll} to="/#joinUs">
              Join Us
            </NavLink>
            <NavLink scroll={smoothScroll} to="/#donate">
              Donate
            </NavLink>
            <NavDropdown
              className="navbar-nav active"
              title="Documentation"
              id="navbarDocumentation"
            >
              <a
                className="dropdown-item"
                href="https://docs.codeuino.org/documentation/"
              >
                Codeuino <br /> Documentation
              </a>
              <Link
                className="dropdown-item"
                scroll={smoothScroll}
                to="/codeofconduct"
              >
                Code of Conduct
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
