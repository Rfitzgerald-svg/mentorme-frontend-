import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import bgImage from "../assets/background.jpg";

export default function Landing() {
  return (
    <div
      className="landing-container"
      style={{
        backgroundImage: `linear-gradient(to right, #0F2027, #203A43, #2C5364), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay"
      }}
    >
      <header className="landing-header">
        <div className="logo">
          <span className="logo-bold">M</span>
          <span className="logo-light">m</span>
        </div>
        <nav className="nav-buttons">
          <Link to="/login">
            <button className="cta-button">Get Started</button>
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>MentorMe – Leading the next generation</h1>
          <p>A mentorship platform built to connect students, alumni, and opportunity in one intuitive hub.</p>
          <Link to="/login">
            <button className="cta-button">Sign in with Google</button>
          </Link>
        </div>
      </section>

      <section className="info-section">
        <h2>How It Works</h2>
        <p>Take a quiz, match with mentors, learn through guidance, and grow through experience.</p>
        <h2>Who It's For</h2>
        <p>Students. Alumni. Schools. Communities. You.</p>
      </section>
    </div>
  );
}
