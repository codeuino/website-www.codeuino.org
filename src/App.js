import React from 'react';
import logo from './newlogo.png';
import './App.css';
import Home from "./pages/Home/NewHome";
import {Nav,Navbar,Container,Image,NavDropdown} from 'react-bootstrap';
import Team from './pages/Team/Team';
import NewBlog from './pages/NewBlog/NewBlog'
import NewHome from './pages/Home/NewHome';
import JoinUs from './pages/JoinUs/JoinUs'
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
              <NavDropdown title="Activities" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#/gsoc19">GSOC 2019</NavDropdown.Item>
                <NavDropdown.Item href="/#/gci19">GCI 2019-20</NavDropdown.Item>
                <NavDropdown.Item href="/#/kwoc18">KWOC 2018</NavDropdown.Item>
                <NavDropdown.Item href="/#/gssoc19">GSSOC 2019</NavDropdown.Item>
              </NavDropdown>
                {/* <Navbar.Dropdown>

                </Navbar.Dropdown> */}
              <Link to="/team"><Nav.Link href="/team">Team</Nav.Link></Link>
              <Nav.Link href="https://docs.codeuino.org/documentation/">Docs</Nav.Link>
              <Link to="/about"><Nav.Link href="/about">About Us</Nav.Link></Link>
              <Link to="/bloglist"><Nav.Link href="/bloglist">Blog</Nav.Link></Link>
              <Link to="/joinus"><Nav.Link href="/joinus">Join Us</Nav.Link></Link>
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
              <JoinUs/>
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
            <Route path="/gsoc19">
              <NewHome/>
            </Route>
            <Route path="/gssoc19">
              <NewHome/>
            </Route>
            <Route path="/gci19">
              <NewHome/>
            </Route>
            <Route path="/kwoc19">
              <NewHome/>
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
                <div><a href="/">Home</a></div>
                <div><a href="/about">About</a></div>
                <div><a href="/blog">Blog</a></div>
                <div><a href="/join">Join Us</a></div>
              </div>
              <div className="col-md-6">
                  <p>Codeuino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration.</p>
              </div>
              <div className="col-md-3">
                <p><i class="fa fa-envelope"></i> codeuino@gmail.com</p>
                <p><i class="fa fa-map-marker"></i> Coduino</p>
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
