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
import { Link } from "react-scroll";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";


function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spiring" };
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name mobileview">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Gopi Mudumal</span>
          <span>
            I am a Passionate Full Stack Web Developer skilled in MERN stack and
            more intrested to build and design web application
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/gopimudumal99">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/gopimudumal/">
            <img src={LinkdIn} alt="" />
          </a>

          <a href="https://www.instagram.com/geneus_gopi/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "65%" }}
          className="floating-div"
        >
          <FloatingDiv text1={"Web"} text2={"Developer"} image={Crown} />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18.4rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv
            text1={"Data Structures"}
            text2={" & Algorithms"}
            image={thumbup}
          />
        </motion.div>
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
