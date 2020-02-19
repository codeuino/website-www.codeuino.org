import React from "react";
import ActivityCard from "../../../components/Activities/ActivityCard";
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
        console.log(resData);
        for (let i = 0; i < 3; i++) {
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

          let reg = /<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/;
          let stream = resData.items[i].content_encoded.match(reg);

          obj.description =
            stream[1]
              .split(" ")
              .slice(0, 20)
              .join(" ") + "...";

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
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {this.state.activities.map((currentActivity, index) => {
              return (
                <div className="col-md-4">
                  <ActivityCard key={index} activity={currentActivity} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
