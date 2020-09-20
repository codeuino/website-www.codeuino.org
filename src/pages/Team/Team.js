import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Heading from "../../components/Layout/Heading";
import TeamMembersWrapper from "./TeamMembers";
import BoardMembersWrapper from "./BoardMembers";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn.js";
import axios from "axios";

class Team extends Component {
  state = {
    contributors: [],
  };

  componentDidMount() {
    var jsonURL =
      "https://s3.ap-south-1.amazonaws.com/pr-webhook-contributors-json/contributors.json";
    axios.get(jsonURL).then((res) => {
      this.setState({ contributors: res.data });
    });
    window.scrollTo(0, 0);
  }
  render() {
    let { contributors } = this.state;
    var contributorsList = contributors.map((contri, index) => {
      return (
        <div key={index} className="team-contributor">
          <a href={contri.url}>
            <img
              className="team-contributor-image"
              title={contri.name}
              src={" " + contri.image + " "}
            />
          </a>
        </div>
      );
    });

    return (
      <Container fluid>
        <Container>
          <Heading
            heading="Team"
            subheading="Meet the amazing people leading this community"
          />
          <Row>
            <TeamMembersWrapper />
          </Row>
          <Heading classname="team-second-heading" heading="Board Members" />
          <Row>
            <BoardMembersWrapper />
          </Row>
          <Heading
            heading="Contributors"
            subheading="Kudos to the amazing people contributing to Codeuino"
          />
          <Row>
            <div className="team-contributors-container">
              {contributorsList}
            </div>
          </Row>
        </Container>
        <ScrollToTopBtn />
      </Container>
    );
  }
}

export default Team;
