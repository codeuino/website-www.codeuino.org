import React from "react";
import { Card } from "react-bootstrap";

const TeamCard = props => {
  return (
    <Card style={{ marginBottom: "2vh", border: "0px", textAlign: "left" }}>
      <Card.Img
        style={{ borderRadius: "1rem", width: "50%" }}
        src={props.member.profile}
        className="mx-auto"
      />
      <Card.Body>
        <Card.Title className="team-card-name mt-4 mr-1">
          {props.member.name}
        </Card.Title>
        <Card.Text>
          <span className="team-card-post">{props.member.post}</span>
        </Card.Text>
        <Card.Text className="mt-2">{props.member.headline}</Card.Text>
        <Card.Text style={{ marginTop: 20 }}>
          <a className="custom-links mr-2 ml-2" href={props.member.github}>
            Github
          </a>
          <a className="custom-links mr-2 ml-2" href={props.member.linkedin}>
            Linkedin
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
