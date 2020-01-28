import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import img from './CodebadgeImage.png'
import marked from 'marked'
import './Codebadge.css'
class Codebadge extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const readmePath = require(`./Codebadge.md`)

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
        <div>
          <h1>Codebadge</h1>
          <div className="image-container">
            {/* <img src={img} style={{width:"100%",height:"60vh"}} alt="images"/> */}
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: markdown }}
            style={{ textAlign: 'left' }}
          ></article>
        </div>
      </>
    )
  }
}

Codebadge.propTypes = {}

export default Codebadge
