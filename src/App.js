import React from 'react';
import logo from './codeuino.png';
import './App.css';
// import React from "react"
import PropTypes from "prop-types"
// import Header from "./components/Header/header"
import Home from "./pages/Home/Home";
import { createHistory, useBasename } from 'history';
import {Nav,NavDropdown,Navbar,Container,Image} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import About from './pages/About/About'
// import Header from "./Header/header"
function App() {
  return (
    <>
    <div className="App">
      
      <HashRouter>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" style={{height:'10vh'}}>
        <Container className="col-xl-8 col-12">
          <Navbar.Brand href="/"><Link to="/"><Image src={logo} alt="codeuino logo" style={{paddingTop:"3vh",height:"7vh"}}/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:"white", marginTop:"-3vh"}}>
            <Nav className="mr-auto">
              
            </Nav>
            <Nav>
              <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
              <Link to="/team"><Nav.Link href="/team">Team</Nav.Link></Link>
              <Link to="/projects"><Nav.Link href="/projects">Projects</Nav.Link></Link>
              <Link to="/about"><Nav.Link href="/about">About Us</Nav.Link></Link>
              <Link to="/joinus"><Nav.Link href="/joinus">Join Us</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          margin: `0 auto`,
          marginTop:"10vh",
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
      
        
        <main>
      
          <Switch>
          
            
            <Route path="/about" >
              <About/>
            </Route>
            <Route path="/team/board" >
              <Home/>
            </Route>
            <Route path="/team" >
              <Home/>
            </Route>
            <Route path="/team/donut" >
              <Home/>
            </Route>
            <Route path="/team/codebadge" >
              <Home/>
            </Route>        
            <Route path="/team/docs" >
              <Home/>
            </Route>
            <Route path="/team/design" >
              <Home/>
            </Route>
            <Route path="/joinus" >
              <Home/>
            </Route>
            <Route path="/projects" >
              <Home/>
            </Route>
            <Route path="/" >
              <Home/>
            </Route>
          </Switch>
      
        </main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="http://codeuino.org/">Codeuino</a>
        </footer>
      </div>
      </HashRouter>
    </div>
  </>
  );
}

export default App;
