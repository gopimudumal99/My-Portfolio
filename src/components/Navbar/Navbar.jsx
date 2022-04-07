import React, { useState,useRef } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Bar from "@iconscout/react-unicons/icons/uil-bars";
import Cross from "@iconscout/react-unicons/icons/uil-times";
function Navbar() {
  const [hamberg, setHamberge] = useState(false);
  const show = useRef()
  const showbtn =useRef()
  const mobileView = () => {
    showbtn.current.className !== "button n-button show1"
      ? (showbtn.current.className = "button n-button show1")
      : (showbtn.current.className = "button n-button");
    show.current.className !== "show"
      ? (show.current.className = "show")
      : (show.current.className = "");
    
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
          {/* style={{ visibility: hamberg ? "" : "hidden" }} */}
          <ul ref={show}>
            <li>
              <Link to="intro" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="proficency" spy={true} smooth={true}>
                Proficiency
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
          {/* style={{ display: hamberg ? "" : "none" }} */}
        <Link to="contact" spy={true} smooth={true}>
          <button ref={showbtn}
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
