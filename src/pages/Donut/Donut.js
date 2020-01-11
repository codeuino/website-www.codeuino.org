import React from 'react'
import PropTypes from 'prop-types';
import img from './donutImage.png'

export default function Donut() {
  return (
    <>
        <div>
            <h1>Donut</h1>
            <div className="image-container">
                <img src={img} style={{width:"100%",height:"60vh"}} alt="images"/>
              </div>
        </div>
    </>
  );
}

Donut.propTypes = {

}
