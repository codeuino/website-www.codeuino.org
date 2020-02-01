import React from 'react'
import { Card } from 'react-bootstrap';
const ActivityCard = (props) => {
    return (
        <Card style={{ width: '18rem',marginBottom:"2vh",border:"0px" }} className="shadow-lg">
			<Card.Img variant="top" src={props.activity.img} />
			<Card.Body>
                <Card.Title><h3>{props.activity.title}</h3></Card.Title>
				<Card.Text>
					{props.activity.text}
				</Card.Text>
				<a href={props.activity.link} class="shadow lift mr-1" style={{color:"#22247A"}}><u>Read More</u></a>
			</Card.Body>
		</Card>

    )
}

export default ActivityCard