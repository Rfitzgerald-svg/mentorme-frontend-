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
            <h1>Your Journey Starts Today</h1>
            <p>
              MentorMe isn’t just a platform. It’s a movement. We connect students to mentors who get it — because they’ve lived it. Real stories. Real guidance. Real growth. One meaningful match can shape a life. We make sure it happens.
            </p>
            <a href="/register" className="cta-button">Join the Movement</a>
          </div>
          <div className="hero-right">
            <img src="/hero.jpg" alt="Mentorship" />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section alt">
          <div className="text">
            <h2>Take the Quiz</h2>
            <p>Students and mentors each complete a lightning-fast onboarding quiz that captures their passions, goals, and shared experiences — from sports and clubs to career interests and alma maters.</p>
          </div>
          <div className="image">
            <img src="/quiz.jpg" alt="Quiz onboarding" />
          </div>
        </section>

        <section className="section">
          <div className="image">
            <img src="/ai-match.jpg" alt="AI Matching" />
          </div>
          <div className="text">
            <h2>AI-Powered Matching</h2>
            <p>Our proprietary AI engine finds meaningful connections, not just overlaps. We match based on shared values — because mentorship should feel natural, not forced.</p>
          </div>
        </section>

        <section className="section alt">
          <div className="text">
            <h2>Crash Courses</h2>
            <p>Students get instant access to pro tips and a crash course on how to build a lasting mentorship — so every connection starts with confidence.</p>
          </div>
          <div className="image">
            <img src="/onboarding.jpg" alt="Onboarding" />
          </div>
        </section>

        <section className="section">
          <div className="image">
            <img src="/chat.jpg" alt="MentorMe Chat" />
          </div>
          <div className="text">
            <h2>Chat. Connect. Grow.</h2>
            <p>From guided chats to career insights, students can engage with mentors, track progress, and unlock a future shaped by experience — all in a secure, school-backed platform.</p>
          </div>
        </section>

        {/* ABOUT US */}
        <section className="section alt" id="about">
          <div className="text">
            <h2>Our Story</h2>
            <p>We’re two high school students, Russell Fitzgerald and Jett Honig, who saw how mentorship changed lives—but noticed how outdated most systems were. So we built something better.</p>
          </div>
          <div className="image">
            <img src="/founders.jpg" alt="Founders" />
          </div>
        </section>

        <section className="section">
          <div className="image">
            <img src="/mission.jpg" alt="MentorMe Mission" />
          </div>
          <div className="text">
            <h2>Our Mission</h2>
            <p>MentorMe bridges students with real-world guidance — powered by AI, backed by schools, and built with heart. We’re democratizing access to connection and opportunity.</p>
          </div>
        </section>

        {/* PRICING SECTION – Already Beautiful */}
        <section className="pricing" id="pricing">
          <h2>💸 Simple, Scalable Pricing</h2>
          <p>Powerful mentorship, priced for real impact. From small schools to entire districts, MentorMe grows with you.</p>

          <div className="pricing-tiers">
            <!-- Keep existing tier markup -->
          </div>

          <p className="pricing-footer">💬 Need help choosing a plan? <a href="/register">Book a Demo</a> and we’ll guide you through the perfect fit.</p>
        </section>
      </div>
    </>
  );
}
