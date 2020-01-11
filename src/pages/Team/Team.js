import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Button} from 'react-bootstrap'
import jaskirat from './Jaskirat.jpeg';
import './Team.css'
class Team extends Component {
    render() {
        return (
            <>
            <h1>Board</h1>
            <div class="container">
                <div class="row">
                <Card className="col-md-4 teamcard" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jaskirat} alt="Jaskirat Singh" class="teamimg"/>
                    <Card.Body>
                        <Card.Title>Jaskirat SIngh</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="col-md-4 teamcard" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jaskirat} alt="Jaskirat Singh" class="teamimg"/>
                    <Card.Body>
                        <Card.Title>Devesh Verma</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="col-md-4 teamcard" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jaskirat} alt="Jaskirat Singh" class="teamimg"/>
                    <Card.Body>
                        <Card.Title>Vaibhav D Aren</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="col-md-4 teamcard" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jaskirat} alt="Jaskirat Singh" class="teamimg"/>
                    <Card.Body>
                        <Card.Title>Shivam Luthra</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
            </>
        );
    }
}


Team.propTypes = {
    
};


export default Team;
