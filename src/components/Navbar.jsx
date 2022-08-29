import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="fixed-top">
      <div className="navbar-brand text-uppercase">
        <strong>
          <a href="#">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Real Virtuality
          </a>
        </strong>
      </div>
    </nav>
  );
}

export default Navbar;
