import React from "react";
import { Image } from "react-bootstrap";

const ProgramCard = (props) => {
  return (
    <div className="program-card">
      <Image
        src={props.program.image}
        alt={props.program.title}
        className="program-card-image"
      />
      <h4 className="program-card-title">{props.program.title}</h4>
      <p className="program-card-description">{props.program.description}</p>
      {props.program.hasOwnProperty("links") && (
        <div className="program-card-link-container">
          {props.program.links.map((link, index) => {
            return (
              <a key={index} className="program-anchor-text" href={link.href}>
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProgramCard;
