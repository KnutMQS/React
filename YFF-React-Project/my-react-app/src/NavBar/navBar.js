import { FaSearch, FaUser, FaSignInAlt } from "react-icons/fa";
import "./navBar.css";
import HamburgerMenu from "./hamburgerMenu";
import logo from "../img/RAH.png";

const NavBar = () => {
  return (
    <nav fixed="top" className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
        <div className="navbar-center">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">
            <FaSearch />
            <span className="button-text">Search</span>
          </button>
        </div>
        </div>
        <div className="navbar-right">
        <button className="login-button">
          <span className="login-text">Login</span>
          <FaUser />
        </button>
        <button className="signup-button">
          <FaSignInAlt />
        <span className="signup-text">Sign up</span>
        </button>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;