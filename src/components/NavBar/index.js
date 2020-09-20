import React, { createRef } from "react";
import {
  HashLink as Link,
  NavHashLink as NavLink,
} from "react-router-hash-link";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import logo from "../../logo.png";

class NavBar extends React.Component {
  state = {
    firstIsOpen: false,
    secondIsOpen: false,
    thirdIsOpen: false,
    fourthIsOpen: false,
  };

  navbarRef = createRef();

  smoothScroll = (el) => {
    window.scrollTo({
      top: el.offsetTop - this.navbarRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  handleOpen = (dropdownNo) => {
    let newState = {};
    newState[dropdownNo] = true;
    this.setState(newState);
  };

  handleClose = (dropdownNo) => {
    let newState = {};
    newState[dropdownNo] = false;
    this.setState(newState);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          className="navbar-container"
          variant="light"
          bg="white"
          expand="lg"
          fixed="top"
          ref={this.navbarRef}
        >
          <Link to="" onClick={this.scrollToTop}>
            <Image className="navbar-logo" src={logo} alt="Codeuino Logo" />
          </Link>
          <Navbar.Toggle
            lable="Toggle navigation"
            aria-controls="navbarSupportedContent"
          ></Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto">
              <NavDropdown
                className="navbar-nav active"
                title="About"
                id="navbarJoin"
                onMouseEnter={() => {
                  this.handleOpen("firstIsOpen");
                }}
                onMouseLeave={() => {
                  this.handleClose("firstIsOpen");
                }}
                show={this.state.firstIsOpen}
              >
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#aboutUs"
                >
                  About Us
                </Link>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#values"
                >
                  Our Values
                </Link>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#timeline"
                >
                  History
                </Link>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/team"
                >
                  Team
                </Link>
              </NavDropdown>
              <Nav.Item>
                <NavLink scroll={this.smoothScroll} to="/#projects">
                  Projects
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink scroll={this.smoothScroll} to="/#programs">
                  Programs
                </NavLink>
              </Nav.Item>
              <NavDropdown
                className="navbar-nav active"
                title="Collaborate"
                id="navbarJoin"
                onMouseEnter={() => {
                  this.handleOpen("secondIsOpen");
                }}
                onMouseLeave={() => {
                  this.handleClose("secondIsOpen");
                }}
                show={this.state.secondIsOpen}
              >
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#collaborate"
                >
                  Collaborate
                </Link>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#donate"
                >
                  Donate
                </Link>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#joinUs"
                >
                  Join Us
                </Link>
              </NavDropdown>
              <NavDropdown
                className="navbar-nav active"
                title="Updates"
                id="navbarUpdates"
                onMouseEnter={() => {
                  this.handleOpen("thirdIsOpen");
                }}
                onMouseLeave={() => {
                  this.handleClose("thirdIsOpen");
                }}
                show={this.state.thirdIsOpen}
              >
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#blogs"
                >
                  Blog Posts
                </Link>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#testimonials"
                >
                  Testimonials
                </Link>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/#updates"
                >
                  Social Handles
                </Link>
              </NavDropdown>
              <Nav.Item>
                <NavLink className="active" to="/mentorship">
                  Mentorships
                </NavLink>
              </Nav.Item>
              <NavDropdown
                className="navbar-nav active"
                title="Documentation"
                id="navbarDocumentation"
                onMouseEnter={() => {
                  this.handleOpen("fourthIsOpen");
                }}
                onMouseLeave={() => {
                  this.handleClose("fourthIsOpen");
                }}
                show={this.state.fourthIsOpen}
              >
                <a
                  className="dropdown-item"
                  href="https://docs.codeuino.org/documentation/"
                >
                  Codeuino <br /> Documentation
                </a>
                <Link
                  className="dropdown-item"
                  scroll={this.smoothScroll}
                  to="/codeofconduct"
                >
                  Code of Conduct
                </Link>
              </NavDropdown>
              <Nav.Item></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
