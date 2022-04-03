import React from 'react'
import './Proficiency.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from './../Card/Card';
import Resume from "./resume.pdf";

function Proficiency() {
  return (
    <div className="proficency">
      <div className="p-left awesome">
        <span>My Areas of</span>
        <span>Proficiency</span>
        <span>
          I completed more then 1200 hours of full stack coding, solving more
          than 300+ problems
          <br />
          of Data structure and algorithms and more then 100 hours soft skill
          and build 10+ projects <br /> in my Masai journey
        </span>
        <a href={Resume} download style={{ textDecoration: "none" }}>
          <button className="button p-button">Download CV</button>
        </a>
        <div
          className="blur p-blur-1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"DS & Algo"}
            details={"Intermediate level of Ds ans Algo"}
          />
        </div>
        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Frontend"}
            details={"HTML, CSS, React, Redux, Javascript, MaterialUI"}
          />
        </div>
        <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"Backend"}
            details={"Express.js,firebase, MongoDB,Node.js"}
          />
        </div>
        <div
          className="blur p-blur-2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Proficiency