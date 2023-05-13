import React from "react";
import Image from './Image';

function Navbar() {
  return (
    
    <div class = "navbar">
      <Image src="banner_trans.png" alt="A banner displaying Trash Breaux" width="50%" />
      <nav>
        <ul >
          <li className="navbar-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#">About</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contact</a>
          </li>
          <li className="navbar-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#">About</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
