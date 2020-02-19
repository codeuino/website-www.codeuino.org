import React from "react";
import { Card } from "react-bootstrap";
const ActivityCard = props => {
  return (
    <div>
      <Card
        style={{
          width: "65em",
          marginBottom: "2vh",
          border: "1px solid #d4d0cf"
        }}
        className="shadow-lg"
      >
        <Card.Img
          variant="top"
          src={props.activity.img}
          style={{ height: "175px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>
            <div style={{ width: "300px", margin: "0 auto" }}>
              <h3
                style={{
                  textTransform: "capitalize",
                  overflowWrap: "break-word"
                }}
              >
                {props.activity.title}
              </h3>
            </div>
          </Card.Title>
          <Card.Text style={{ textTransform: "capitalize" }}>
            {props.activity.text}
          </Card.Text>
          <a
            href={props.activity.link}
            class="btn btn-sm btn-primary"
            style={{ backgroundColor: "#22247A" }}
          >
            Read More
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ActivityCard;
