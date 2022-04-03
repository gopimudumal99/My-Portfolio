import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Gopi Mudumal</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="proficency" spy={true} smooth={true}>
                Proficency
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} to="skills">
                Skills
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} to="projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
