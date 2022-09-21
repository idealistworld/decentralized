import React, { Component } from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className = "nav-container">
      <div className = "nav-links">
      <h1 className = "nav-link">Sign Up</h1>
      <h1 className = "nav-link">How it Works</h1>
      <h1 className = "nav-link">Contact</h1>
      </div>
    </div>
  );
}

export default Navbar;