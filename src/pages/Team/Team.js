import React, { Component } from "react";
import BoardMembersWrapper from "./BoardMembers";
import CoreContributorsWrapper from "./CoreContributors";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn.js";
import axios from "axios";
import "./Team.css";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardMembers: [],
      contributors: [],
    };
  }

  componentDidMount() {
    var jsonURL =
      "https://s3.ap-south-1.amazonaws.com/pr-webhook-contributors-json/contributors.json";
    axios.get(jsonURL).then((res) => {
      this.setState({ contributors: res.data });
    });
    window.scrollTo(0, 0);
  }
  render() {
    let contributors = this.state.contributors;
    var contrilist = contributors.map((contri) => {
      return (
        <div class="col-xs-2 lawyer-post g-mb-50 m-4">
          <a href={contri.url}>
            <img
              class="img-responsive full-width g-mb-25"
              title={contri.name}
              src={" " + contri.image + " "}
              alt=""
              style={{ width: "8vw", height: "8vw", borderRadius: "50%" }}/>
          </a>{" "}
        </div>
      );
    });
    return (
      <>
        <div>
          <div>
            <div id="___gatsby">
              <div
                style={{ outline: "none" }}
                tabindex="-1"
                role="group"
                id="gatsby-focus-wrapper">
                <div class="mt-12"></div>
                <h3 className="team-heading">Our Team</h3>
                <div class="container pt-8 pb-6 mb-10">
                  <BoardMembersWrapper />
                </div>
                <h3 className="team-sub-heading">Our Backbone</h3>
                <div
                  class="container pt-8 pb-6 mb-10"
                  style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <CoreContributorsWrapper />
                </div>
                <h3 className="team-sub-heading">Our Awesome Contributors</h3>
                <div id="cotributors" className="container d-flex">
                  <div
                    class="row mt-7 mb-10"
                    style={{ display: "flex", justifyContent: "center" }}>
                    {contrilist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTopBtn />
      </>
    );
  }
}

export default Team;
