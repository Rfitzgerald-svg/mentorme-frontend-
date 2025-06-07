import React from "react";
import "./Landing.css";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing-scroll" style={{ paddingTop: "80px" }}>
        {/* HERO */}
        <section className="hero mentorloop-hero">
          <div className="hero-left">
            <h1 className="hero-title">The new way to unlock student potential</h1>
            <p className="hero-subtext">
              MentorMe connects students to alumni and mentors based on real experience—not guesswork.
              One conversation can change a life.
            </p>
            <div className="cta-banner">Join the Movement Today</div>
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

        {/* MEET THE FOUNDERS */}
        <section className="about" id="about">
          <h2>Meet the Founders</h2>
          <div className="founder-cards">
            <div className="founder-card">
              <img src="/russell.jpg" alt="Russell Fitzgerald" className="founder-img" />
              <h3>Russell Fitzgerald</h3>
              <p>Philadelphia, Pennsylvania</p>
              <p>Princeton University</p>
            </div>
            <div className="founder-card">
              <img src="/jett.jpg" alt="Jett Honig" className="founder-img" />
              <h3>Jett Honig</h3>
              <p>Boca Raton, Florida</p>
              <p>Southern Methodist University</p>
            </div>
          </div>
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
