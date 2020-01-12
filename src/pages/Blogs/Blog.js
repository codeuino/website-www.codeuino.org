import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';
import Markdown from 'react-markdown';
import marked from "marked";
import{Card} from 'react-bootstrap'
class Blog extends Component {
    constructor(props){
        super(props);
        this.state={
            blogList:[
                {
                    path:"test.md",
                    title:"test",
                    author:"Ayush Nagar",
                    intro:"aefafcavvacmj n mca nacac jc akj;dc; ja;jdc;jacn jao;nCOILNAL",
                    tags:["test1","test2","test3"]
                },
                {
                    path:"test.md",
                    title:"test",
                    author:"Ayush Nagar",
                    intro:"aefafcavvacmj n mca nacac jc akj;dc; ja;jdc;jacn jao;nCOILNAL",
                    tags:["test1","test2","test3"]
                }
            ],
            thisBlog:{
                path:"test.md",
                title:"test",
                author:"Ayush Nagar",
                tags:["test1","test2","test3"]
            }
        };
        this.ContentMarkdown = "# Hello"
    }
    componentDidMount() {
        const readmePath = require(`./Blogs/${this.state.thisBlog.path}`);
      
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
                    <div className="blog col-md-8 col-12">
                        <h1>{this.state.thisBlog.title}</h1>
                        {
                            this.state.thisBlog.tags.map((each,index)=>
                                <span class="badge badge-light" style={{border:"1px solid black",marginLeft:"1vh"}}>{each}</span>
                            )
                            
                        }
                        <br/>                        

                        <hr/>
                        <article dangerouslySetInnerHTML={{__html: markdown}} style={{textAlign:"left"}}></article>
                    </div>
                    <div className="col-md-4 col-12">
                        {
                            this.state.blogList.map((each,index)=>
                            <Card style={{marginBottom:"2vh"}}>
                                <Card.Body>
                                    <Card.Title>{each.title}</Card.Title>
                                    <Card.Text>
                                    {each.intro}<br/>
                                        {/* <article dangerouslySetInnerHTML={{__html: markdown}} style={{textAlign:"left"}}></article> */}
                                    {
                                        each.tags.map((each,index)=>
                                            <span class="badge badge-light" style={{border:"1px solid black",marginLeft:"1vh"}}>{each}</span>
                                        )
                                    }
                                    </Card.Text>
                                    <Card.Text><button className="btn btn-default" key={index}>Read</button></Card.Text>
                                </Card.Body>
                                </Card>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


Blog.propTypes = {
    
};


export default Blog;
