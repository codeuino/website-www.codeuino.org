import React from 'react';
import {Fade } from 'react-slideshow-image';
import img1 from './donutImage.png';
import img2 from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter,Redirect
  } from "react-router-dom";
const images = [
  {image:img1,project:"Social Platform Donut",link:"/#/donut",content:"We build social networking Kit/FOSS for various organisations to build up social environment for their organisation to showcase their productivity and services for their community along with the collaboration platform to interact with one another."},
  {image:img2,project:"Codebadge",link:"/#/codebadge",content:"Platform to give each contributor a token of appriciation to the organization one contributes to."},
  {image:img1,project:"Codo",link:"/#/codo",content:"Chatting platform for open source organisations"}
];

  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale:0.4,
    arrows:false,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
  function readmore(link){
      console.log(link)
      window.location=link
  }
const ProjectSlide = () => {
    return (
      <div className="slide-container">
        <h1>Our Projects</h1>
        <Fade {...fadeProperties}>  
        {
          images.map((each, index) =>  
           <div className="row">
             <div className="col-md-12">
               <div className="each-fade">
                <div className="image-container">
                  <img key={index} src={each.image} style={{width:"100%",height:"60vh"}} alt="images"/>
                </div>
                <h2>{each.project}</h2>
                  <p style={{fontSize:"1.2rem"}}>{each.content}</p>
                <button type="button" className="btn btn-default" key={index} onClick={function(e){readmore(each.link)}}>Read More</button>
              </div>
             </div>
           </div>
          )
        }
        </Fade>
        
      </div>
    )
}

export default ProjectSlide;