import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // replace if you're not using shadcn/ui
import "./Landing.css"; // Custom styling

export default function Landing() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="logo">
          <span className="logo-bold">M</span>
          <span className="logo-light">m</span>
        </div>
        <nav className="nav-buttons">
          <Link to="/login">
            <Button className="cta-button">Get Started</Button>
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>MentorMe – Leading the next generation</h1>
          <p>A mentorship platform built to connect students, alumni, and opportunity in one intuitive hub.</p>
          <Link to="/login">
            <Button className="cta-button">Sign in with Google</Button>
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
