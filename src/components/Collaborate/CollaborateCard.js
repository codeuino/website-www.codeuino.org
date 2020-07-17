import React from "react";
import "./CollaborateCard.css";

const CollaborateCard = (props) => {
  return (
    <div className="collaborate-card d-flex flex-column text-center option overflow-hidden">
      <img
        src={props.image}
        alt="collaborate"
        className="collaborate-card-img-top option"/>
      <div className="collaborate-card-body text-dark flex-column d-flex">
        <h4 className="collaborate-card-title option" style={{ height: "100" }}>
          {props.title}
        </h4>
        <p className="collaborate-card-description">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CollaborateCard;
