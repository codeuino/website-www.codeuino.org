import React from 'react';
import logo from './newlogo.png';
import './App.css';
import Home from "./pages/Home/NewHome";
import {Nav,Navbar,Container,Image} from 'react-bootstrap';
import Team from './pages/Team/Team';
import NewBlog from './pages/NewBlog/NewBlog'
import NewHome from './pages/Home/NewHome'
import {
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import About from './pages/About/About'
import Donut from './pages/Donut/Donut';
import Blog from './pages/Blogs/Blog';
import BlogList from './pages/Blogs/BlogList'
import Codebadge from './pages/Codebadge/Codebadge';
// import Header from "./Header/header"
function App() {
  return (
    <>
    <div className="App" style={{width:"100%"}}>
      
      <HashRouter>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" class="navbar">
        <Container className="col-md-8 col-12">
          <Navbar.Brand href="/"><Link to="/"><Image id="logo" src={logo} alt="codeuino logo" style={{heigth:"20vh",width:"10vw"}}/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:"white"}}>
            <Nav className="mr-auto">
              
            </Nav>
            <Nav>
              <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
              <Link to="/team"><Nav.Link href="/team">Team</Nav.Link></Link>
              <Nav.Link href="https://docs.codeuino.org/documentation/">Docs</Nav.Link>
              <Link to="/about"><Nav.Link href="/about">About Us</Nav.Link></Link>
              <Link to="/bloglist"><Nav.Link href="/bloglist">Blog</Nav.Link></Link>
              <Nav.Link href="https://github.com/codeuino">Join Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
          <Switch>
          
            
            <Route path="/about" >
              <div class="main container-fluid"
                style={{maxWidth: "100vw",margin:"0"}}
              >
              <main>
              <About/>
              </main>
              </div>
            </Route>
            <Route path="/team" >
              <Team/>
            </Route>
            <Route path="/joinus" >
              <NewHome/>
            </Route>
            <Route path="/bloglist">
              <BlogList/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/newblog">
              <NewBlog/>
            </Route>
            <Route path="/" >
              <NewHome/>
            </Route>
            
          </Switch>
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
