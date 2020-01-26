import React from 'react';
import PropTypes from 'prop-types';
import {Nav,NavDropdown,Navbar,Container,Image,Button, Media} from 'react-bootstrap';
// import 'bootstrap';
import banner from './banner.png'
import "./Banner.css"
const Banner = () => {
    return (
        <div className="container">
            <div class="row">
                <Container className="col-md-6 col-12" style={{paddingTop:"10%",paddingBottom:"10%",textAlign:"left"}}>
                   <h1>Learn, Build, Contribute, Grow.</h1> 
                   <p>We are a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world.</p>
                   <button type="button" class="btn btn-default">Join Us</button>
                </Container>
                <Container className="col-md-6 col-12">
                    <Image src={banner} alt="codeuino banner"/>
                </Container>
            </div>
        </div>
    );
};


Banner.propTypes = {
    
};


export default Banner;
