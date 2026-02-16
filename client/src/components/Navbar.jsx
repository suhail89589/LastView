import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
       
        <div className="logo">
          Last<span>View</span>
        </div>

        
        <ul className="nav-links">
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
          <li>
            <a href="/login" className="login-btn">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;