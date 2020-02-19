import React, { Component } from "react";
import ActivityCard from "../../../components/Activities/ActivityCard";
import KWoC from "../images/kwoc_logo.png";
import workshop19 from "../images/workshop.jpg";
import "./common.css";

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    let activities = [];
    fetch("https://medium-article-fetcher.herokuapp.com/posts", {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        for (let i = 0; i < 4; i++) {
          let obj = {};
          obj.title = resData.items[i].title;
          obj.link = resData.items[i].link;

          let m,
            urls = [],
            str = resData.items[i].content_encoded,
            rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

          while ((m = rex.exec(str))) {
            urls.push(m[1]);
          }
          obj.img = urls[0];
          activities.push(obj);
        }
        this.setState({ activities: activities }, () => {
          console.log(this.state.activities);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id="activity">
        <h1 className="component-heading">Activities</h1>
        <div class="container">
          <div
            class="row"
            style={{
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            {this.state.activities.map((currentActivity, index) => {
              return <ActivityCard key={index} activity={currentActivity} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
