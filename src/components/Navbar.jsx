import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">Mm</span>
        <span className="nav-title">MentorMe</span>
      </div>

      <nav className="nav-right">
        <a href="#how">How It Works</a>
        <a href="#about">About Us</a>
        <a href="#pricing">Pricing</a>
        <Link to="/register" className="cta-demo">👉 Book a Demo</Link>
      </nav>
    </header>
  );
}
