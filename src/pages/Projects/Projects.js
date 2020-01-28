import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import Banner from './doughnut.png'

class Projects extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div id="___gatsby">
              <div
                style={{ outline: 'none' }}
                tabindex="-1"
                role="group"
                id="gatsby-focus-wrapper"
              >
                <div class="mt-12"></div>
                <h2>Projects</h2>
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-4 col-12">
                      <Card style={{ maxWidth: '90vw', margin: '2vw' }}>
                        <Card.Img variant="top" src={Banner} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div class="col-md-4 col-12">
                      <Card style={{ maxWidth: '90vw', margin: '2vw' }}>
                        <Card.Img variant="top" src={Banner} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {}

export default Projects
