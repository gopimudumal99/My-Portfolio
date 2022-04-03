import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

function Works() {
  return (
    <div className="works">
      {/* left-side */}
      <div className="p-left awesome">
        <span>Specialized in all these</span>
        <span> Languages & Tools</span>
        <span>
          I am looking for opportunity to apply my
          knowledge and skills to be a valuable assets for
          <br />
          organization and a better version of myself.
        </span>
        <button className="button p-button">Hire me</button>
        <div
          className="blur p-blur-1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      {/* right-side */}
      <div className="w-right">
        <div className="w-mainCircle">
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
        </div>
        {/* backgound-circle  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
