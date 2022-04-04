import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Bar from "@iconscout/react-unicons/icons/uil-bars";
import Cross from "@iconscout/react-unicons/icons/uil-times";
function Navbar() {
  const [hamberg, setHamberge] = useState(false);
  
  const mobileView = () => {
      setHamberge(() => !hamberg);
  };

  return (
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        <div className="n-name">Gopi Mudumal</div>

        <Toggle />
      </div>
      <div className="n-right active-right">
        <div className="n-list">
          <div className="bar" onClick={mobileView}>
            {hamberg ? <Cross size={45} /> : <Bar size={45} />}
          </div>
          <ul style={{ visibility: hamberg ? "" : "hidden" }}>
            <li>
              <Link to="navbar" spy={true} smooth={true}>
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
          <button
            style={{ display: hamberg ? "" : "none" }}
            className="button n-button"
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
