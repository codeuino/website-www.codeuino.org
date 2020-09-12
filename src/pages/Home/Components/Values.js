import React from "react";
import { Row, Col } from "react-bootstrap";
import { VALUES_CONTENT } from "./valuesContent";
import ValueTab from "./ValueTab";
import Heading from "../../../components/Layout/Heading";

class ValueComponent extends React.Component {
  state = {
    currentActive: VALUES_CONTENT[0],
  };

  handleActive = (currentActiveTab) => {
    this.setState({ currentActive: currentActiveTab });
  };

  render() {
    return (
      <React.Fragment>
        <Heading
          section="values"
          heading="Our Values"
          subheading="Here are the values we believe in"
        />
        <Row>
          <Col xs={6} sm={4} className="value-tabs-container">
            {VALUES_CONTENT.map((value) => {
              return (
                <ValueTab
                  value={value}
                  active={this.state.currentActive}
                  onActive={this.handleActive}
                />
              );
            })}
          </Col>
          <Col xs={6} sm={8} md={5} className="padding-description-container">
            <p className="value-description">
              {this.state.currentActive.valueDesc}
            </p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ValueComponent;
