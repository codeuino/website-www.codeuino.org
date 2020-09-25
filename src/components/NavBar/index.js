import React, { createRef } from "react";
import {
  HashLink as Link,
  NavHashLink as NavLink,
} from "react-router-hash-link";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import logo from "../../logo.png";

class NavBar extends React.Component {
  state = {
    navDrop: null
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

  handleToggle = (dropdown) => {
    this.setState({
      navDrop: this.state.navDrop === dropdown ? null : dropdown,
    });
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
                  this.handleToggle("first");
                }}
                onMouseLeave={() => {
                  this.handleToggle("first");
                }}
                show={this.state.navDrop === "first"}
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
                  this.handleToggle("second");
                }}
                onMouseLeave={() => {
                  this.handleToggle("second");
                }}
                show={this.state.navDrop === "second"}
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
                  this.handleToggle("third");
                }}
                onMouseLeave={() => {
                  this.handleToggle("third");
                }}
                show={this.state.navDrop === "third"}
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
                  this.handleToggle("fourth");
                }}
                onMouseLeave={() => {
                  this.handleToggle("fourth");
                }}
                show={this.state.navDrop === "fourth"}
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
