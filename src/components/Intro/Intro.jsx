import React from "react";
import Github from "../../img/github.png";
import LinkdIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";

import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Gopi Mudumal</span>
          <span>
            I am a Passionate Full Stack Web Developer skilled in MERN stack and
            more intrested to build and design web application
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/gopimudumal99" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/gopimudumal/" target="_blank">
            <img src={LinkdIn} alt="" />
          </a>

          <a href="https://www.instagram.com/geneus_gopi/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "65%" }}>
          <FloatingDiv text1={"Web"} text2={"Developer"} image={Crown} />
        </div>
        <div style={{ top: "18.4rem", left: "0rem" }}>
          <FloatingDiv
            text1={"Data Structures"}
            text2={" & Algorithms"}
            image={thumbup}
          />
        </div>
        {/* bulr divs */}
        <div className="blur" style={{ baground: "rgba(238,210,255)" }}></div>
        <div
          className="blur"
          style={{
            baground: "#C1F5FF",
            width: "21rem",
            height: "11rem",
            top: "17rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
