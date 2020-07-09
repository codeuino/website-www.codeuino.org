import React from "react";
import { Card, Image } from "semantic-ui-react";

const TeamCard = (props) => {
  //console.log(props);
  return (
    <Card style={{ marginBottom: "2vh", border: "0px", textAlign: "left" }}>
      <Image src={props.member.profile} rounded className="mx-auto" />
      <Card.Content>
        <Card.Header className="team-card-name mt-4 mr-1">{props.member.name}</Card.Header>
        <Card.Meta>
          <span className="team-card-post">{props.member.post}</span>
        </Card.Meta>
        <Card.Description className="mt-2">{props.member.headline}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div
          class=""
          style={{
            marginTop: 20,
          }}
        >
          <a
            class="btn btn-primary ml-0 mr-3"
            href={props.member.github}
            role="button"
            style={{ borderRadius: "50%", backgroundColor: " #22247A" }}
          >
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            class="btn btn-primary mr-3"
            href={props.member.linkedin}
            role="button"
            style={{ borderRadius: "50%", backgroundColor: " #22247A" }}
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </Card.Content>
    </Card>
  );
};
export default TeamCard;
