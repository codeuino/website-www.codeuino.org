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
    //this.fetchBlogs();
  }

  render() {
    return (
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
    );
  }
}

export default Medium;
