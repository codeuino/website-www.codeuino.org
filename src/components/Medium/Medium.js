import React from "react";
import axios from "axios";
import "./Medium.css";
import base from "../../helpers/apiBase";
import ReactHtmlParser from 'react-html-parser';

class Medium extends React.Component {
  state = {
    posts: []
  };

  fetchBlogs = async () => {
    try {
      this.setState({
        posts: (await axios.get(base+"/getBlogs")).data
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  componentDidMount() {
   // this.fetchBlogs()
  }

  render() {
    return (
      <div className="container" style={{ width: "100%", alignContent: "left" }}>
        <h1 className="component-heading">Latest Blogs</h1>
        <div
          className="row justify-content-center Medium"
          style={{ textAlign: "left" }}
        >
          {/*this.state.posts.map((post, index) => (
            <div className="col-md-4 Medium-post" key={index}>
              <a class="outer-link" href={post.link[0]}>
                <div>
                  { ReactHtmlParser(post["content:encoded"][0]) }
                </div>
                <div className="fading-box">
                  <div className="view-more">View More</div>
                </div>
              </a>
            </div>
          ))*/}
        </div>
      </div>
    );
  }
}

export default Medium;
