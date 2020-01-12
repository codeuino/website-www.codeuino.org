import React,{Component} from 'react'
import PropTypes from 'prop-types';
import img from './donutImage.png'
import marked from "marked";
import './Donut.css'
class Donut extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount() {
    const readmePath = require(`./Donut.md`);
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }
  render() {
    const { markdown } = this.state;
    return (
      <>
      <div>
            <h1>Social Platform Donut</h1>
            <div className="image-container">
                <img src={img} style={{width:"100%",height:"60vh"}} alt="images"/>
              </div>
              <article dangerouslySetInnerHTML={{__html: markdown}} style={{textAlign:"left"}}></article>
        </div>
    </>
    );
  }
}


Donut.propTypes = {
  
};


export default Donut;
