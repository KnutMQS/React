import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import "./hamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <button
        className="hamburger-icon"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiXMark size={40} /> : <HiBars3 size={40} />}
      </button>
        <div className="menu-items">
          <button className="login-button">
            Login
          </button>
          <button className="signup-button">
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
    </div>
  );
}
export default HamburgerMenu;
