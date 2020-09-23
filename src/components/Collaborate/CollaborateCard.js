import React from "react";

const CollaborateCard = (props) => {
  return (
    <div className="collaborate-card">
      {props.icon}
      <h4 className="collaborate-card-heading">{props.title}</h4>
      <p className="collaborate-card-description">{props.description}</p>
    </div>
  );
};

export default CollaborateCard;
