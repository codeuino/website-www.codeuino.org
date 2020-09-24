import React from "react";
import { Row, Col } from "react-bootstrap";

class Heading extends React.Component {
  render() {
    let mainClass;
    if (this.props.classname) {
      mainClass = "main-heading " + this.props.classname;
    } else {
      mainClass = "main-heading";
    }
    return (
      <Row className={mainClass} id={this.props.section}>
        <Col>
          <h1 className="main-heading-text">{this.props.heading}</h1>
          <h6 className="main-heading-subtext">{this.props.subheading}</h6>
          <hr className="main-heading-line" />
        </Col>
      </Row>
    );
  }
}

export default Heading;
