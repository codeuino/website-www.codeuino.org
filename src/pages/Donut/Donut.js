import React, { Component } from 'react'
import PropTypes from 'prop-types'
import img from './donutImage.png'
import marked from 'marked'
import './Donut.css'
class Donut extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const readmePath = require(`./Donut.md`)

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text),
        })
      })
  }
  render() {
    const { markdown } = this.state
    return (
      <>
        <div withd="80vw">
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
                    <h1>Social Platform Donut</h1>
                    <div className="image-container">
                      <img src={img} style={{ height: '60vh' }} alt="images" />
                    </div>
                    <article
                      dangerouslySetInnerHTML={{ __html: markdown }}
                      style={{ textAlign: 'left' }}
                    ></article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

Donut.propTypes = {}

export default Donut
