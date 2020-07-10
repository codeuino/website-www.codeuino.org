import React from "react";
import "./ActivityCard.css";

const ActivityCard = (props) => {
  return (
    <div className="activity-card d-flex flex-column text-center activity overflow-hidden">
      <img
        src={props.activity.image}
        alt=""
        className="activity-card-img-top activity"/>

      <div className="activity-card-body text-dark flex-column d-flex">
        <h4 className="activity-card-title activity" style={{ height: "100" }}>
          {props.activity.title}
        </h4>
        <p className="activity-card-description">
          {props.activity.description}
        </p>
      </div>
      <div className="activity-card-links mt-auto">
        {props.activity.links.map((link) => {
          return (
            <a className="activity-card-link custom-links" href={link.href}>
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCard;
