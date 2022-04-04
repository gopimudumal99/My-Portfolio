import React from "react";
import "./Card.css";
function Card({ emoji, heading, details }) {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">Konw more</button>
    </div>
  );
}

export default Card;
