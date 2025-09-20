import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { IoMenu, IoClose } from "react-icons/io5";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./navBar.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <button
        className="hamburger-icon"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiXMark size={42} /> : <HiBars3 size={42} />}
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
