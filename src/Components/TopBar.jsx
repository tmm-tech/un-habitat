import React, { useState } from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="top-bar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/region&countries" className="nav-link">Regions & Country</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <div className="account-dropdown">
          <div className="account-link" onClick={toggleDropdown}>
            Account <i className={`fas ${showDropdown ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/login"><i className="fas fa-user-circle"></i> Login</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
