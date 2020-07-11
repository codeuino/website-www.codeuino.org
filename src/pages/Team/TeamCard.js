import React from "react";
import { Card } from "react-bootstrap";

const TeamCard = (props) => {
  //console.log(props);
  return (
    <Card style={{ marginBottom: "2vh", border: "0px", textAlign: "left" }}>
      <Card.Img style={{borderRadius: "1rem"}} src={props.member.profile} className="mx-auto" />
      <Card.Body>
        <Card.Title className="team-card-name mt-4 mr-1">{props.member.name}</Card.Title>
        <Card.Text>
          <span className="team-card-post">{props.member.post}</span>
        </Card.Text>
        <Card.Text className="mt-2">{props.member.headline}</Card.Text>
        <Card.Text style={{marginTop: 20}}>
          <a
            class="btn btn-primary ml-0 mr-3"
            href={props.member.github}
            role="button"
            style={{ borderRadius: "50%", backgroundColor: " #22247A" }}>
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            class="btn btn-primary mr-3"
            href={props.member.linkedin}
            role="button"
            style={{ borderRadius: "50%", backgroundColor: " #22247A" }}>
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default TeamCard;
