import React from "react";
import "./Skillicons.css";

import {
  FaCss3Alt,
  FaNode,
  FaHtml5,
  FaNpm,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiHeroku, DiFirebase } from "react-icons/di";
import {
  SiRedux,
    SiNetlify,
  SiVisualstudiocode,
  SiMaterialui,
  SiPostman,
  SiRedis,
} from "react-icons/si";

function Skillicons() {
  return (
    <div className="skillicons">
      <ul>
        <li>
          <FaHtml5 size={60} />
        </li>
        <li>
          <FaCss3Alt size={60} />
        </li>
        <li>
          <SiPostman size={60} />
        </li>
        <li>
          <SiMaterialui size={60} />
        </li>
        <li>
          <SiRedis size={60} />
        </li>
        <li>
          <FaGitAlt size={60} />
        </li>
        <li>
          <DiFirebase size={60} />
        </li>
        <li>
          <SiRedux size={60} />
        </li>
        <li>
          <SiNetlify size={60} />
        </li>
        <li>
          <FaNpm size={60} />
        </li>
        <li>
          <DiHeroku size={60} />
        </li>
        <li>
          <SiVisualstudiocode size={60} />
        </li>
      </ul>
    </div>
  );
}

export default Skillicons;
