import { useState, useEffect } from "react";
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
      <div className="navbar-right">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">
            <FaSearch />
            <span className="button-text">Search</span>
          </button>
        </div>
        <button className="login-button">
          Login
          <FaUser />
        </button>
        <button className="signup-button">
          <FaSignInAlt />
          Sign Up
        </button>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;
