import React, { useRef } from "react";
import { Image, Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../newlogo.png";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {

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
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand className="mr-0">
        <Link to="/">
          <Image
            id="logo"
            src={logo}
            alt="codeuino logo"
            style={{ heigth: "20vh", width: "12vw" }}/>
        </Link>
      </Navbar.Brand>
    </Navbar>

    <Navbar variant="light" bg="light" expand="lg" fixed="top" id="myNav" ref={navbarRef}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image
              id="logo"
              src={logo}
              alt="codeuino logo"
              style={{ heigth: "20vh", width: "12vw" }}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          lable="Toggle navigation"
          aria-controls="navbarSupportedContent">
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link scroll={smoothScroll} className="nav-link" to="/#aboutUs">
                About Us<span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link scroll={smoothScroll} className="nav-link" to="/#projects">
                Project<span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link scroll={smoothScroll} className="nav-link" to="/#programs">
                Programs<span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/team">
                Team<span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                className="nav-link"
                href="https://docs.codeuino.org/documentation/">
                Docs<span className="sr-only">(current)</span>
              </a>
            </Nav.Item>
            <Nav.Item>
              <Link scroll={smoothScroll} className="nav-link" to="/#collaborate">
                Collaborate<span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/codeofconduct">
                Code of Conduct<span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/joinus">
                Join Us<span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </React.Fragment>
  );
};
export default NavBar;
