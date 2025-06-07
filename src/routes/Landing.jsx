import React from "react";
import "./Landing.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing-scroll" style={{ paddingTop: "80px" }}>
        {/* HERO SECTION */}
        <section className="hero mentorloop-hero">
          <div className="hero-left">
            <h1 className="hero-title">
              The new way to unlock student potential
            </h1>
            <p className="hero-subtext">
              MentorMe connects students to alumni and mentors based on real experience—not guesswork. One conversation can change a life.
            </p>
            <Link to="/register">
              <button className="cta-button">🚀 Book a Demo</button>
            </Link>
          </div>
          <div className="hero-right">
            <img
              src="/hero.jpg"
              alt="Mentorship in action"
              className="hero-image"
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works" id="how">
          <h2>How It Works</h2>
          <ul>
            <li>📥 Students take a short interest quiz</li>
            <li>🤝 AI matches them to mentors from your alumni network</li>
            <li>💬 Guided questions + tips help start real conversations</li>
            <li>📈 Schools track engagement, outcomes, and growth</li>
          </ul>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <h2>Meet the Founders</h2>
          <p><strong>Russell Fitzgerald</strong> and <strong>Jett Honig</strong> built MentorMe to empower students with access to meaningful relationships that fuel real-world growth and opportunity.</p>
        </section>

        {/* PRICING */}
        <section className="pricing" id="pricing">
          <h2>Pricing</h2>
          <div className="pricing-tiers">
            <div className="tier">
              <h3>Starter</h3>
              <p>$99/month – 100 users</p>
            </div>
            <div className="tier">
              <h3>School Plan</h3>
              <p>$299/month – unlimited students</p>
            </div>
            <div className="tier">
              <h3>District Custom</h3>
              <p>Contact us for custom integrations & analytics</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
