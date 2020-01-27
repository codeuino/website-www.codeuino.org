import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import BlogList from './BlogList';
import Markdown from 'react-markdown';
import './About.css'
import marked from "marked";
import codeuino from './codeuino-banner.jpg'
class Blog extends Component {
    constructor(props){
        super(props);
        this.state={
        };
        this.ContentMarkdown = "# Hello"
    }
    componentDidMount() {
        const readmePath = require(`./About.md`);
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
      }
    render() {
        const { markdown } = this.state;

        return (
          <div>
      <div>
            <div id="___gatsby">
		<div style={{outline:"none"}} tabindex="-1" role="group" id="gatsby-focus-wrapper">
			
			<div class="mt-12"></div>
            <div className="cover-img-wrapper">
              <img src={codeuino} alt="img" />
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="blog" style={{maxWidth:"100%",textAlign:'justify'}}>
                      <h2><b>What is CodeUino?</b></h2>
                      <p>CodeUino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration platforms by giving prospectus to various other organisations, users and outreachers to showcase their products in a custom way.</p>
                      <p>This wide social open networking framework organisation is driven by the volunteers all over the globe. This helps open source enthusiast to build up various technocratic social wide living softwares and researching FOSS projects under code survivors and challenging world. CodeUino takes into house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world.</p>
                      {/* <article class="col-12" dangerouslySetInnerHTML={{__html: markdown}} style={{textAlign:"left"}}></article> */}
                      <h2><b>Who are we?</b></h2>
                      <p>We are a group of young open source contributors creatively leveraging our expertise in Social networking and development projects to improve the quality of outreaching, interaction and collaboration for the people in developing nations. We consists of various teams from Development, Documentation, Designers and Donut Platform. Everyone at CodeUino contributes to increase efficiency, outreaching for the user and expedite idea generation for social networking.</p>
                      <h2><b>What do we do?</b></h2>
                      <p>CodeUino takes into house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world.</p>
                      <p>Teams within organization design and develop some basic set of softwares and networking plugins to help users/organisations to build up their own platform to interact for feeds, projects, Scholarships, etc.</p>
                      <p>We build social networking Kit/FOSS for various organisations to build up social environment for their organisation to showcase their productivity and services for their community along with the collaboration platform to interact with one another.</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}


Blog.propTypes = {
    
};


export default Blog;
