import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">Mm</span>
        <h1 className="nav-title">MentorMe</h1>
      </div>

      <nav className="nav-links">
        <a href="#how">How It Works</a>
        <a href="#customers">Customers</a>
        <a href="#pricing">Pricing</a>
        <a href="#resources">Resources</a>
        <a href="#build">Build Your Program</a>
        <Link to="/login">Log In</Link>
        <Link to="/register" className="demo-btn">👉 Book a Demo</Link>
      </nav>
    </header>
  );
}
