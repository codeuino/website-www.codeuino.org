import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList'
class Blog extends Component {
    constructor(props){
        super(props);
        this.state={
            blogList:[
                {
                    title:"1",
                    content:`<h1>Ayush 1</h1>`
                }
            ],
            content:'',
        };
    }
    render() {
        return (
            <div className="blog">
                {
                    this.state.blogList.map(blog=>{
                        <BlogList title = {blog.title} content = {blog.content}/>
                    })               
                }
            </div>
        );
    }
}


Blog.propTypes = {
    
};


export default Blog;
