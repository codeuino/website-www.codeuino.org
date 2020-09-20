import React from "react";
import { Row, Col, Button } from "react-bootstrap";
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
          <Col xs={5} className="value-tabs-container">
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
          <Col
            xs={7}
            sm={8}
            md={6}
            className="value-padding-description-container"
          >
            <div className="value-description-container">
              <h5 className="value-description-heading">
                {this.state.currentActive.valueName}
              </h5>
              <p className="value-description">
                {this.state.currentActive.valueDesc}
              </p>
              <Button
                className="value-button"
                href={this.state.currentActive.valueLink}
              >
                Know More
              </Button>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ValueComponent;
