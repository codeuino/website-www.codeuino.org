import React from "react";
import { Row, Col } from "react-bootstrap";
import Heading from "../../../components/Layout/Heading";
const axios = require("axios");

class Statistics extends React.Component {
  state = {
    stats: 0,
  };

  getMembers = async () => {
    try {
      return {
        members: (
          await axios.get("https://api.github.com/orgs/codeuino/members")
        ).data.length,
      };
    } catch (err) {
      console.log(err);
    }
  };

  getForksAndStars = async () => {
    let totalStars = 0;
    let totalForks = 0;
    try {
      let response = await axios.get(
        "https://api.github.com/orgs/codeuino/repos"
      );
      response.data.forEach((repo) => {
        totalForks += repo["forks"];
        totalStars += repo["stargazers_count"];
      });
      return { forks: totalForks, stars: totalStars };
    } catch (err) {
      console.log(err);
    }
  };

  getContributors = async () => {
    let totalContributors = 0;
    try {
      let response = await axios.get(
        "https://api.github.com/orgs/codeuino/repos"
      );
      for (let repo of response.data) {
        try {
          let contributors = (
            await axios.get(
              `https://api.github.com/repos/codeuino/${repo.name}/contributors`
            )
          ).data.length;
          totalContributors += contributors;
        } catch (err) {
          console.log(err);
        }
      }
      return { contributors: totalContributors };
    } catch (err) {
      console.log(err);
    }
  };

  getStatistics = async () => {
    let stats = {
      ...(await this.getMembers()),
      ...(await this.getForksAndStars()),
      ...(await this.getContributors()),
    };
    if (this._mounted == true) {
      this.setState(stats);
    }
  };

  componentDidMount() {
    this._mounted = true;
    this.getStatistics();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <Heading
          section="statistics"
          heading="Impact in Numbers"
          subheading="Our impact and contributions in the Opensource community"
        />
        <Row className="statistics-row">
          <Col sm={6} md={3} className="statistics-column">
            <h4 className="statistics-heading">{this.state.members}</h4>
            <p className="statistics-subheading">Members</p>
          </Col>
          <Col sm={6} md={3} className="statistics-column">
            <h4 className="statistics-heading">{this.state.forks}</h4>
            <p className="statistics-subheading">Forks</p>
          </Col>
          <Col sm={6} md={3} className="statistics-column">
            <h4 className="statistics-heading">{this.state.stars}</h4>
            <p className="statistics-subheading">Stars</p>
          </Col>
          <Col sm={6} md={3} className="statistics-column">
            <h4 className="statistics-heading">{this.state.contributors}</h4>
            <p className="statistics-subheading">Contributors</p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Statistics;
