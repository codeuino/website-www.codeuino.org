import React from 'react'
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
        <Link class="navbar-brand" to="/"><Image id="logo" src={logo} alt="codeuino logo" style={{heigth:"20vh",width:"10vw"}}/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Activities
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://docs.codeuino.org/documentation/activities/google-summer-of-code-2019" style={{textAlign : "center"}}>GSOC 2019</a>
                <a class="dropdown-item" href="https://github.com/codeuino/gci" style={{textAlign : "center"}}>GCI 2019-20</a>
                <a class="dropdown-item" href="https://kwoc.kossiitkgp.org/" style={{textAlign : "center"}}>KWOC 2018</a>
                <a class="dropdown-item" href="https://www.gssoc.tech/index.html" style={{textAlign : "center"}}>GSSOC 2019</a>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/team">Team<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" to="https://docs.codeuino.org/documentation/">Docs<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About Us<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/bloglist">Blogs<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/joinus">Join Us<span class="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}
export default NavBar