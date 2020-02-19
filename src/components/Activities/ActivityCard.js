import React from "react";
import "./ActivityCard.css";

const ActivityCard = props => {
  return (
    <div className="card text-center activity overflow-hidden">
      <img src={props.activity.img} alt="" className="card-img-top activity" />

      <div className="card-body text-dark flex-column d-flex">
        <h4 className="card-title activity" style={{ height: "200px" }}>
          {props.activity.title}
        </h4>
        <p className="card-text text-secondary">{props.activity.description}</p>

        <a
          href={props.activity.link}
          className="activity btn btn-outline-primary mt-auto btn-block align-self-end"
          style={{ marginTop: "auto" }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;
