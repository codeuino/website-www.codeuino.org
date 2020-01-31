import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer bg-dark">
        <div className="container">
          <h3 style={{alignContent:"left"}}>Want to know more about CodeUino?</h3>
          <button type="button" id="discover1" className="btn btn-default my-2" style={{alignContent:"right"}}>Discover more</button>
        {/* <button type="button" id="discover2" class="btn btn-default col-md-3">Discover more</button> */}
      </div>
        <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Resources</h3>
            <div><a href="/">Home</a></div>
            <div><a href="/about">About</a></div>
            <div><a href="/blog">Blog</a></div>
            <div><a href="/join">Join Us</a></div>
          </div>
          <div className="col-md-6">
              <p>Codeuino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration.</p>
          </div>
          <div className="col-md-3">
            <p><i class="fa fa-envelope"></i> codeuino@gmail.com</p>
            <p><i class="fa fa-map-marker"></i> Coduino</p>
          </div>
        </div>
      </div>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="http://codeuino.org/">Codeuino</a>
    </footer>
    )
}
export default Footer