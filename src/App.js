import React from 'react';
import logo from './codeuino.png';
import './App.css';
// import React from "react"
import PropTypes from "prop-types"
// import Header from "./components/Header/header"
import Home from "./pages/Home/Home";
import { createHistory, useBasename } from 'history';
import {Nav,NavDropdown,Navbar,Container,Image} from 'react-bootstrap';
import Team from './pages/Team/Team'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
  Redirect
} from "react-router-dom";
import About from './pages/About/About'
import Donut from './pages/Donut/Donut';
import Blog from './pages/Blogs/Blog'
import Codebadge from './pages/Codebadge/Codebadge';
import Codo from './pages/Codo/Codo';
// import Header from "./Header/header"
function App() {
  return (
    <>
    <div className="App" style={{width:"100%"}}>
      
      <HashRouter>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" class="navbar">
        <Container className="col-xl-8 col-12">
          <Navbar.Brand href="/"><Link to="/"><Image src={logo} alt="codeuino logo" style={{paddingTop:"3vh",height:"8vh"}}/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:"white"}}>
            <Nav className="mr-auto">
              
            </Nav>
            <Nav>
              <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
              <Link to="/team"><Nav.Link href="/team">Team</Nav.Link></Link>
              <Link to="/projects"><Nav.Link href="/projects">Projects</Nav.Link></Link>
              <Link to="/about"><Nav.Link href="/about">About Us</Nav.Link></Link>
              <Link to="/blog"><Nav.Link href="/blog">Blog</Nav.Link></Link>
              <Link to="/joinus"><Nav.Link href="/joinus">Join Us</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="main container-fluid"
        style={{maxWidth: 960}}
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
              <Team/>
            </Route>
            <Route path="/joinus" >
              <Home/>
            </Route>
            <Route path="/projects" >
              <Home/>
            </Route>
            <Route path="/donut">
              <Donut/>
            </Route>
            <Route path="/codebadge">
              <Codebadge/>
            </Route>
            <Route path="/codo">
              <Codo/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/" >
              <Home/>
            </Route>
          </Switch>
      
        </main>
        
      </div>
      </HashRouter>
      <footer>
            <div className="container">
              <h3 style={{alignContent:"left"}}>Want to know more about CodeUino?</h3>
              <button type="button" id="discover1" className="btn btn-default" style={{alignContent:"right"}}>Discover more</button>
            {/* <button type="button" id="discover2" class="btn btn-default col-md-3">Discover more</button> */}
          </div>
            <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h6>Resources</h6>
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
                <div>Join Us</div>
              </div>
              <div className="col-md-3">
                <h6>Company</h6>
                <div>Product</div>
                <div>FAQ</div>
                <div>Privacy Policy</div>
                <div>Terms & Conditions
        
                </div>
              </div>
              <div className="col-md-3">
                <h6>Contact Details</h6>
                <div><a href="http://github.io/codeuino">website</a></div>
                <div>a</div>
              </div>
              <div className="col-md-3">
                <h6>Sign up for Newsletter</h6>
                <div className="container">
                  <div className="row">
                    {/* <div class="col-10"><input type="email"/>
                    <button style={{backgroundColor:"purple",alignContent:"center"}} className= "col-1"><i class="fa fa-paper-plane" aria-hidden="true" style={{color:"white"}}></i></button></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="http://codeuino.org/">Codeuino</a>
        </footer>
    </div>
  </>
  );
}

export default App;
