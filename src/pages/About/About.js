import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import BlogList from './BlogList';
import Markdown from 'react-markdown';
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
            <div className="container">
                <div className="row">
                    <div className="blog">
                      <img src={codeuino} alt="img"/>
                        <article dangerouslySetInnerHTML={{__html: markdown}} style={{textAlign:"left"}}></article>
                    </div>
                </div>
            </div>
        );
    }
}


Blog.propTypes = {
    
};


export default Blog;
