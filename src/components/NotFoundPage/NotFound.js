import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Container>
          <div className="main-content mx-auto" id="not-found-content">
            <h2>404</h2>
            <h4>Oops! Page Not Found</h4>
            <p>
              The page you are looking for does not exist. You may have mistyped
              the address or the page may have moved.
            </p>
            <Link to="/">Back to Home Page</Link>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
