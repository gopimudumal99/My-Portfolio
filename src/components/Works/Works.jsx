import React from "react";
import "./Works.css";
import Nodejs from "../../img/nodejs.png";
import ReactIcon from "../../img/reactIcon.png";
import JavaScript from "../../img/js.png";
import mongoDb from "../../img/mongoDb.png";
import Express from "../../img/express.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="skills">
      {/* left-side */}
      <div className="p-left awesome mobileview">
        <span style={{ color: darkMode ? "white" : "" }}>Specialized</span>
        <span> Languages & Tools</span>
        <span>
          I am looking for opportunity to apply my knowledge and skills to be a
          valuable assets for
          <br />
          organization and a better version of myself.
        </span>

        <Link to="contact" spy={true} smooth={true}>
          <button className="button i-button" style={{ marginTop: "1rem" }}>
            Hire me
          </button>
        </Link>
        <div
          className="blur p-blur-1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      {/* right-side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: "45" }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secondaryCircle">
            <img  src={Nodejs} alt="" />
          </div>
          <div className="w-secondaryCircle">
            <img  src={ReactIcon} alt="" /> 
          </div>
          <div className="w-secondaryCircle">
            <img  src={JavaScript} alt="" />
          </div>
          <div className="w-secondaryCircle">
            <img  src={mongoDb} alt="" />
          </div>
          <div className="w-secondaryCircle">
            <img src={Express} alt="" />
          </div>
        </motion.div>
        {/* backgound-circle  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
