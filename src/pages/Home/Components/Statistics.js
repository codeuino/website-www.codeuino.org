import React from "react";
import { Row, Col } from "react-bootstrap";
import Heading from "../../../components/Layout/Heading";
const axios = require("axios");

class Statistics extends React.Component {
  state = {
    members: 0,
    forks: 0,
    stars: 0,
    contributors: 0,
  };

  getMembers = async () => {
    this.setState({
      members: (await axios.get("https://api.github.com/orgs/codeuino/members"))
        .data.length,
    });
  };

  getForksAndStars = async () => {
    let totalStars = 0;
    let totalForks = 0;
    await axios
      .get("https://api.github.com/orgs/codeuino/repos")
      .then((response) => {
        response.data.forEach((repo) => {
          totalForks += repo["forks"];
          totalStars += repo["stargazers_count"];
        });
      });
    this.setState({ forks: totalForks, stars: totalStars });
  };

  getContributors = async () => {
    let response = (
      await axios.get("https://api.github.com/orgs/codeuino/repos")
    ).data;
    let totalContributors = 0;
    response.forEach(async (repo) => {
      let contributors = (
        await axios.get(
          `https://api.github.com/repos/codeuino/${repo.name}/contributors`
        )
      ).data.length;
      totalContributors += contributors;
      this.setState({ contributors: totalContributors });
    });
  };

  componentDidMount() {
    this.getMembers();
    this.getForksAndStars();
    this.getContributors();
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
