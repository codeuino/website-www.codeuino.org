import React from "react";
import { Card } from "react-bootstrap";

const TeamCard = (props) => {
  return (
    <Card className="team-card">
      <Card.Img src={props.member.profile} />
      <Card.Body>
        <Card.Title className="team-card-name">
          {props.member.name} <hr className="team-hr" />
        </Card.Title>
        <Card.Text className="team-card-post">{props.member.post}</Card.Text>
        <Card.Text>{props.member.headline}</Card.Text>
        <Card.Text>
          <a className="anchor-text" href={props.member.github}>
            Github
          </a>
          &nbsp;&nbsp;&nbsp;
          <a className="anchor-text" href={props.member.linkedin}>
            Linkedin
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
