import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="Logo">LastView
            
        </div>
            
        <div className="nav-items">
          <ul>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
