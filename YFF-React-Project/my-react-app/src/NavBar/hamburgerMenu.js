import React, { useState } from "react";
import { FaBars, FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import "./navBar.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button
        className="hamburger-icon"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="menu-items">
          <button className="login-button">
            Login
            <FaUser />
          </button>
          <button className="signup-button">
            <FaSignInAlt />
            Sign Up
          </button>
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <a href="#">Placeholder</a>
              </li>
              <li>
                <a href="#">Placeholder</a>
              </li>
              <li>
                <a href="#">Placeholder</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default HamburgerMenu;
