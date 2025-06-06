import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-scroll">
      {/* HERO SECTION */}
      <section className="hero mentorloop-style">
        <div className="hero-left">
          <h1>Mentorship that transforms futures.</h1>
          <p>
            Empowering students with access to guidance, real relationships, and a clear path forward.
          </p>
          <Link to="/register">
            <button className="cta-button">Join the Movement</button>
          </Link>
        </div>
        <div className="hero-right">
          <img
            src="/hero.jpg"
            alt="Mentorship at work"
            className="hero-image"
          />
          <p className="hero-caption">
            At MentorMe, we believe that when you connect the right people, anything is possible.
          </p>
        </div>
      </section>

      {/* SCROLL CUE */}
      <div className="scroll-cue">⬇️ Scroll to see how it works</div>

      {/* RESEARCH STATS */}
      <section className="stats">
        <h2>Why Mentorship Works</h2>
        <div className="stat-cards">
          <div className="stat-card">
            <h3>89%</h3>
            <p>of students with mentors feel more prepared for life after school.</p>
          </div>
          <div className="stat-card">
            <h3>3X</h3>
            <p>more likely to succeed when supported by a peer or alumni mentor.</p>
          </div>
          <div className="stat-card">
            <h3>75%</h3>
            <p>of mentees report increased confidence and clarity in their path.</p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="features">
        <h2>How MentorMe Helps</h2>
        <div className="feature-grid">
          <div className="feature">
            <h4>🔗 AI-Powered Matching</h4>
            <p>Connect students with mentors based on real shared interests.</p>
          </div>
          <div className="feature">
            <h4>💬 Guided ChatBot</h4>
            <p>Help students ask better questions and explore careers.</p>
          </div>
          <div className="feature">
            <h4>📘 Pro Tips</h4>
            <p>Real-world advice from people who've done it before.</p>
          </div>
          <div className="feature">
            <h4>🏫 School Dashboards</h4>
            <p>Track engagement and growth in one beautiful panel.</p>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="testimonial">
        <blockquote>
          "MentorMe gave me the roadmap I never had. I feel confident walking into any room now."
        </blockquote>
        <cite>— Jordan A., Student at The Taft School</cite>
      </section>
    </div>
  );
}
