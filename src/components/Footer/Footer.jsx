import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave.png";
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} alt="" />
      <div className="f-content">
        <span>Gopimudumal99@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/geneus_gopi/" target="_blank">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/gopimudumal/" target="_blank">
            <LinkedIn color="white" size="3rem" />
          </a>
          <a href="https://github.com/gopimudumal99" target="_blank">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
