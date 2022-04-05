import React from "react";
import "./Card.css";
function Card({ emoji, heading, details,link }) {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <a href={link} rel="noreferrer" target="_blank">
        <button className="c-button">Konw more</button>
      </a>
    </div>
  );
}

export default Card;
