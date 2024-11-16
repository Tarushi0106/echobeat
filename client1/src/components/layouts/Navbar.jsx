import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Ensure the CSS file path is correct
import logo from './logo.png'; // Ensure the logo image exists at this path

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navvv">
      <div className="container-fluid mainnav">
        <NavLink className="navbar-brand mb-1 logo" to="/">
          <img src={logo} className="logo-img" alt="EchoBeat Logo" />
        </NavLink>
        <form className="d-flex searchboxx" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit" style={{width: 120, height:40}}>Search</button>
        </form>
        <div className="navnav">
          <span className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="play-now-button nav-item uploadbutton" to="/upload">
              Upload Now
            </NavLink>
          </span>
        </div>

        {/* Add the Upload Now button */}
        <div>
          <span className="navbar-nav me-auto mb-2 mb-lg-0">
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
