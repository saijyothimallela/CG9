import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Amharic-English Translation</div>

        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/objective">OBJECTIVE</Link></li>
          <li><Link to="/procedure">PROCEDURE</Link></li>
          <li><Link to="/validate">VALIDATE</Link></li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
