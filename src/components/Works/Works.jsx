import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
function Works() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="skills">
      {/* left-side */}
      <div className="p-left awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Specialized in all these
        </span>
        <span> Languages & Tools</span>
        <span>
          I am looking for opportunity to apply my knowledge and skills to be a
          valuable assets for
          <br />
          organization and a better version of myself.
        </span>
        <button className="button i-button" style={{ marginTop: "1rem" }}>
          Hire me
        </button>
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
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secondaryCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secondaryCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secondaryCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secondaryCircle">
            <img src={Facebook} alt="" />
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
