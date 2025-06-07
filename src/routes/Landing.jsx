import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing-scroll" style={{ paddingTop: "80px" }}>
        {/* MENTORLOOP-STYLE HERO */}
        <section className="hero hero-mentorloop">
          <div className="hero-left">
            <h1 className="hero-title">
              The new way to unlock student potential
            </h1>
            <p className="hero-subtext">
              Ditch the outdated programs. MentorMe connects students to alumni and mentors based on what really matters—shared experience, real guidance, and community that lasts.
            </p>
            <Link to="/register">
              <button className="cta-button mentor-btn">🚀 Book a Demo</button>
            </Link>
          </div>
          <div className="hero-right mentor-img-wrapper">
            <img
              src="/hero.jpg"
              alt="Mentorship in action"
              className="mentor-img"
            />
          </div>
        </section>

        {/* SCROLL CUE */}
        <div className="scroll-cue">⬇️ Scroll to see how it works</div>

        {/* Add your other sections below this, unchanged */}
      </div>
    </>
  );
}
