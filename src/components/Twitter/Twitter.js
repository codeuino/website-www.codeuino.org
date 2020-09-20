import React from "react";
import axios from "axios";
import base from "../../helpers/apiBase";
import { Row, Col, Button } from "react-bootstrap";
import { TwitterTweetEmbed } from "react-twitter-embed";

class Twitter extends React.Component {
  state = {
    allTweetsDisplay: [],
    likedTweetsDisplay: [],
    retweetedTweetsDisplay: [],
  };

  allTweets = null;
  likedTweets = null;
  retweetedTweets = null;

  componentDidMount() {
    axios
      .get(base + "/getTweets")
      .then((Response) => {
        this.allTweets = Response.data.filter(
          (tweet) => !tweet.retweeted_status
        );
        this.retweetedTweets = Response.data.filter(
          (tweet) => tweet.retweeted_status
        );
        this.loadAllTweets();
        this.loadRetweetedTweets();
      })
      .catch((err) => console.log(err));

    axios
      .get(base + "/getLikedTweets")
      .then((Response) => {
        console.log(Response);
        this.likedTweets = Response.data;
        this.loadLikedTweets();
      })
      .catch((err) => console.log(err));
  }

  loadAllTweets = () => {
    let allTweetsDisplay = [...this.state.allTweetsDisplay];
    allTweetsDisplay = this.allTweets.slice(0, allTweetsDisplay.length + 3);
    this.setState({ allTweetsDisplay: allTweetsDisplay });
  };

  loadLikedTweets = () => {
    let likedTweetsDisplay = [...this.state.likedTweetsDisplay];
    likedTweetsDisplay = this.likedTweets.slice(
      0,
      likedTweetsDisplay.length + 3
    );
    this.setState({ likedTweetsDisplay: likedTweetsDisplay });
  };

  loadRetweetedTweets = () => {
    let retweetedTweetsDisplay = [...this.state.retweetedTweetsDisplay];
    retweetedTweetsDisplay = this.retweetedTweets.slice(
      0,
      retweetedTweetsDisplay.length + 3
    );
    this.setState({ retweetedTweetsDisplay: retweetedTweetsDisplay });
  };

  render() {
    
    return (
      <React.Fragment>
        <Row className="twitter-container">
          <Col md={6} lg={4} className="twitter-column-container">
            <div id="likedTweets" className="twitter-container">
              {
                <React.Fragment>
                  {this.state.likedTweetsDisplay.map((tweet, index) => (
                    <TwitterTweetEmbed key={index} tweetId={tweet.id_str} />
                  ))}
                  {this.likedTweets && (
                    <Button
                      id="loadTweets"
                      className="donate-button tweet-button"
                      onClick={this.loadLikedTweets}
                    >
                      Load More
                    </Button>
                  )}
                </React.Fragment>
              }
            </div>
          </Col>
          <Col md={6} lg={4} className="twitter-column-container">
            <div id="allTweets" className="twitter-container">
              {
                <React.Fragment>
                  {this.state.allTweetsDisplay.map((tweet, index) => (
                    <TwitterTweetEmbed key={index} tweetId={tweet.id_str} />
                  ))}
                  {this.allTweets && (
                    <Button
                      id="loadTweets"
                      className="donate-button tweet-button"
                      onClick={this.loadAllTweets}
                    >
                      Load More
                    </Button>
                  )}
                </React.Fragment>
              }
            </div>
          </Col>
          <Col md={6} lg={4} className="twitter-column-container">
            <div id="retweetedTweets" className="twitter-container">
              {
                <React.Fragment>
                  {this.state.retweetedTweetsDisplay.map((tweet, index) => (
                    <TwitterTweetEmbed key={index} tweetId={tweet.id_str} />
                  ))}
                  {this.retweetedTweets && (
                    <Button
                      id="loadTweets"
                      className="donate-button tweet-button"
                      onClick={this.loadRetweetedTweets}
                    >
                      Load More
                    </Button>
                  )}
                </React.Fragment>
              }
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Twitter;
