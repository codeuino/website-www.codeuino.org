import React from "react";
import "./CollaborateCard.css";

const CollaborateCard = props => {
  return (
    <div className="collaborate-card d-flex flex-column text-center option overflow-hidden">
      {props.icon}
      <div className="collaborate-card-body text-dark flex-column d-flex">
        <h4 className="collaborate-card-title option" style={{ height: "100" }}>
          {props.title}
        </h4>
        <div className="collaborate-card-description">{props.description}</div>
      </div>
    </div>
  );
};

export default CollaborateCard;
