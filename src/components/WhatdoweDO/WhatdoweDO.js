import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'react-bootstrap';
import './WhatdoweDO.css';
import lamp from './lamp.png'

export default function WhatdoweDO() {
  return (
    <>
        <div className="WhatdoweDo" style={{marginBottom:"5vh"}}>
            <div><img src={lamp} className="col-2 lamp" style={{float:"right",verticalAlign:"top",height:"fit-content"}} alt="lamp"/></div>
            
            <div class="container">
                <h1 style={{textAlign:"left"}}>What do we DO?</h1>
                <div className="row">
                    <Card bg="light" class="hover" style={{ width: '100%',marginBottom: "2vh"}} className="col-md-5 col-12">
                        <Card.Body style={{textAlign:"left"}}>
                            <Card.Title>1</Card.Title>
                            <hr/>
                            <Card.Text>
                                Codeuino takes into house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="light" style={{ width: '100%',marginBottom: "2vh"}} className="col-md-5 col-12">
                        <Card.Body style={{textAlign:"left"}}>
                            <Card.Title>2</Card.Title>
                            <hr/>
                            <Card.Text>
                                Teams within organization design and develop some basic set of softwares and networking plugins to help users/organisations to build up their own platform to interact for feeds, projects, Scholarships, etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="row">
                    <Card bg="light" style={{ width: '100%',marginBottom: "2vh"}} className="col-md-5 col-12">
                        <Card.Body style={{textAlign:"left"}}>
                            <Card.Title>3</Card.Title>
                            <hr/>
                            <Card.Text>
                                We build social networking Kit/FOSS for various organisations to build up social environment for their organisation to showcase their productivity and services for their community along with the collaboration platform to interact with one another
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="light" style={{ width: '100%' ,marginBottom: "2vh"}} className="col-md-5 col-12">
                        <Card.Body style={{textAlign:"left"}}>
                            <Card.Title>4</Card.Title>
                                <hr/>
                                <Card.Text>
                                    Nam et nulla rutrum, dignissim eros quis, dictum heros. In ullamcorper molestie neque, ac faucibus felis efficitur sed. Nam et tristique nisi. Cras iaculis venenatis libero. Suspendisse fermentum, ipsum ac facilisis elementu.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>
  );
}

WhatdoweDO.propTypes = {

}
