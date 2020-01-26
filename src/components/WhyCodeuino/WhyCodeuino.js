import React from 'react';
import PropTypes from 'prop-types';
import {Nav,NavDropdown,Navbar,Container,Image,Button} from 'react-bootstrap';

// import 'bootstrap';
import whycodeuino from './WhyCodeuino.png'
import "./WhyCodeuino.css";

const WhyCodeuino = () => {
    return (
        <div className="container">
            <div class="row">
                <Container className="col-md-6 col-0" id="whycodeuino1" style={{paddingTop:"8%",paddingBottom:"12%"}} >
                    <Image src={whycodeuino} style={{height:"100%"}} alt="why codeuino"/>
                </Container>
                <Container className="col-md-6 col-12" style={{paddingTop:"8%",paddingBottom:"12%",textAlign:"left"}}>
                   <h1>What is CODEUINO?</h1> 
                   <p>Codeuino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration platforms by giving prospectus to various other organisations, users and outreachers to showcase their products in a custom way. This wide social open networking framework organisation is driven by the volunteers all over the globe. This helps open source enthusiast to build up various technocratic social wide living softwares and researching FOSS projects under code survivors and challenging world. Codeuino takes into house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world.</p>
                   {/* <button type="button" class="btn btn-default">Join Us</button> */}
                </Container>
                <Container className="col-md-0 col-12" id="whycodeuino" style={{paddingTop:"8%",paddingBottom:"12%"}} >
                    <Image src={whycodeuino}  alt="why codeuino"/>
                </Container>
            </div>
        </div>
    );
};


WhyCodeuino.propTypes = {
    
};


export default WhyCodeuino;
