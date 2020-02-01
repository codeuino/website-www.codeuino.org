import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import './NavBar.css'
import logo from '../../newlogo.png'

import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      fixed="top"
      class="navbar "
      id="myNav"
    >
      <div className="container">
        <Navbar.Brand href="/">
          <Link to="/">
            <Image
              id="logo"
              src={logo}
              alt="codeuino logo"
              style={{ heigth: '20vh', width: '10vw' }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          data-toggle="collapse"
          data-target="#myDropdown"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: 'white' }}
        >
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/">
              <Nav.Link href="/" className="nav-key">
                Home
              </Nav.Link>
            </Link>
            <NavDropdown
              title="Activities"
              className="nav-key"
              id="responsive-navbar-nav"
            >
              <NavDropdown.Item
                data-target=".navbar-collapse.show"
                href="/#/gsoc19"
                style={{ textAlign: 'center' }}
              >
                GSOC 2019
              </NavDropdown.Item>
              <NavDropdown.Item
                data-target=".navbar-collapse.show"
                href="/#/gci19"
                style={{ textAlign: 'center' }}
              >
                GCI 2019-20
              </NavDropdown.Item>
              <NavDropdown.Item
                data-target=".navbar-collapse.show"
                href="/#/kwoc18"
                style={{ textAlign: 'center' }}
              >
                KWOC 2018
              </NavDropdown.Item>
              <NavDropdown.Item
                data-target=".navbar-collapse.show"
                href="/#/gssoc19"
                style={{ textAlign: 'center' }}
              >
                GSSOC 2019
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Navbar.Dropdown>

                </Navbar.Dropdown> */}
            <Link to="/team">
              <Nav.Link href="/team" className="nav-key">
                Team
              </Nav.Link>
            </Link>
            <Nav.Link
              href="https://docs.codeuino.org/documentation/"
              className="nav-key"
            >
              Docs
            </Nav.Link>
            <Link to="/about">
              <Nav.Link href="/about" className="nav-key">
                About Us
              </Nav.Link>
            </Link>
            <Link to="/bloglist">
              <Nav.Link href="/bloglist" className="nav-key">
                Blog
              </Nav.Link>
            </Link>
            <Link to="/joinus">
              <Nav.Link href="/joinus" className="nav-key">
                Join Us
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
import {
    Navbar,
    Nav,
    NavDropdown,
    Image,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'
import './NavBar.css'
import logo from '../../newlogo.png';
import {Link, Route} from 'react-router-dom';
const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="myNav">
        <div className="container">
        <a class="navbar-brand" href="/"><Image id="logo" src={logo} alt="codeuino logo" style={{heigth:"20vh",width:"10vw"}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Activities
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://docs.codeuino.org/documentation/activities/google-summer-of-code-2019" style={{textAlign : "center"}}>GSOC 2019</a>
                <a class="dropdown-item" href="https://github.com/codeuino/gci" style={{textAlign : "center"}}>GCI 2019-20</a>
                <a class="dropdown-item" href="https://kwoc.kossiitkgp.org/" style={{textAlign : "center"}}>KWOC 2018</a>
                <a class="dropdown-item" href="https://www.gssoc.tech/index.html" style={{textAlign : "center"}}>GSSOC 2019</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/team">Team<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://docs.codeuino.org/documentation/">Docs<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About Us<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bloglist">Blogs<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bloglist">Join Us<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}
export default NavBar
