import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import base from "../../helpers/apiBase";
import ReactHtmlParser from "react-html-parser";

class Medium extends React.Component {
  state = {
    posts: [],
  };

  fetchBlogs = async () => {
    try {
      this.setState({
        posts: (await axios.get(base + "/getBlogs")).data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  componentDidMount() {
<<<<<<< HEAD
   // this.fetchBlogs()
=======
    this.fetchBlogs();
>>>>>>> 5f39e11a78b2020372b1e618c95d41be694b7e18
  }

  render() {
    return (
<<<<<<< HEAD
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
=======
      <React.Fragment>
        <Row className="medium-post-container">
          {this.state.posts.map((post, index) => (
            <Col md={6} lg={4} className="medium-post">
              <div className="medium-post-content" key={index}>
                <a class="medium-outer-link" href={post.link[0]}>
                  <div>{ReactHtmlParser(post["content:encoded"][0])}</div>
                  <div className="medium-fading-box">
                    <div className="medium-view-more-bar">View More</div>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </React.Fragment>
>>>>>>> 5f39e11a78b2020372b1e618c95d41be694b7e18
    );
  }
}

export default Medium;
