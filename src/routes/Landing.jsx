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
            <h1 className="hero-title">Your Journey Starts Today</h1>
            <p className="hero-subtext">
              MentorMe isn’t just a platform. It’s a movement. We connect students to mentors who get it — because they’ve lived it. Real stories. Real guidance. Real growth. One meaningful match can shape a life. We make sure it happens.
            </p>
            <a href="/register">
              <button className="cta-button">Join the Movement</button>
            </a>
          </div>
          <div className="hero-right">
            <img src="/hero.jpg" alt="Mentorship in action" className="hero-image" />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-block alt-block" id="how">
          <div className="text">
            <h2>Take the Quiz</h2>
            <p>Students and mentors each complete a lightning-fast onboarding quiz that captures their passions, goals, and shared experiences — from sports and clubs to career interests and alma maters.</p>
          </div>
          <div className="image">
            <img src="/quiz.png" alt="Take the Quiz" />
          </div>
        </section>

        <section className="section-block" id="match">
          <div className="image">
            <img src="/ai-match.png" alt="AI Matching" />
          </div>
          <div className="text">
            <h2>AI-Powered Matching</h2>
            <p>Our proprietary AI engine finds meaningful connections, not just overlaps. We match based on shared values — because mentorship should feel natural, not forced.</p>
          </div>
        </section>

        <section className="section-block alt-block" id="onboard">
          <div className="text">
            <h2>Smart Onboarding & Crash Courses</h2>
            <p>Students get instant access to pro tips and a crash course on how to build a lasting mentorship — so every connection starts with confidence.</p>
          </div>
          <div className="image">
            <img src="/onboarding.png" alt="Crash Courses" />
          </div>
        </section>

        <section className="section-block" id="chat">
          <div className="image">
            <img src="/chat.png" alt="Chat and Connect" />
          </div>
          <div className="text">
            <h2>Chat. Connect. Grow.</h2>
            <p>From guided chats to career insights, students can engage with mentors, track progress, and unlock a future shaped by experience — all in a secure, school-backed platform.</p>
          </div>
        </section>

        {/* ABOUT US */}
        <section className="section-block alt-block" id="about">
          <div className="text">
            <h2>Our Story</h2>
            <p>We’re not a Silicon Valley behemoth — we’re two high school students, Russell Fitzgerald and Jett Honig, who saw firsthand how mentorship could transform lives but noticed how broken, outdated, and impersonal most systems were. So we built something better.</p>
          </div>
          <div className="image">
            <img src="/founders.png" alt="Russell and Jett" />
          </div>
        </section>

        <section className="section-block" id="mission">
          <div className="image">
            <img src="/mission.png" alt="MentorMe Mission" />
          </div>
          <div className="text">
            <h2>Our Mission</h2>
            <p>MentorMe is the next-generation mentorship platform that bridges students with real-world guidance — powered by AI, backed by schools, and built with heart. Our mission is to democratize access to wisdom, connection, and opportunity.</p>
          </div>
        </section>

        {/* PRICING (UNCHANGED) */}
        <section className="pricing" id="pricing">
          <h2>💸 Simple, Scalable Pricing</h2>
          <p>Powerful mentorship, priced for real impact. From small schools to entire districts, MentorMe grows with you.</p>

          <div className="pricing-tiers">
            <div className="tier">
              <h3>🟦 Starter</h3>
              <p>$4,500/year<br />Up to 500 students</p>
              <ul>
                <li>Full access to all core features</li>
                <li>AI-powered student–mentor matching</li>
                <li>Guided onboarding & crash courses</li>
                <li>Email support</li>
                <li>👉 Ideal for independent and private institutions</li>
              </ul>
            </div>

            <div className="tier">
              <h3>🔷 Growth</h3>
              <p>$9,000/year<br />501–2,000 students</p>
              <ul>
                <li>Everything in Starter, plus:</li>
                <li>In-depth analytics dashboard</li>
                <li>Quarterly success strategy reviews</li>
                <li>Priority support</li>
                <li>👉 Great for charter schools and mid-sized districts</li>
              </ul>
            </div>

            <div className="tier">
              <h3>🔶 Scale</h3>
              <p>$16,000/year<br />2,001–5,000 students</p>
              <ul>
                <li>Everything in Growth, plus:</li>
                <li>Custom SIS & CRM integrations</li>
                <li>Role-based admin tools</li>
                <li>Branded dashboards</li>
                <li>👉 Perfect for large districts & school networks</li>
              </ul>
            </div>

            <div className="tier">
              <h3>🟨 Enterprise</h3>
              <p>Custom Pricing<br />5,000+ students</p>
              <ul>
                <li>Everything in Scale, plus:</li>
                <li>Dedicated success manager</li>
                <li>Advanced reporting & insights</li>
                <li>Full API access</li>
                <li>White-label options</li>
                <li>👉 Let’s build a mentorship ecosystem that scales with you.</li>
              </ul>
            </div>
          </div>

          <p className="pricing-footer">💬 Need help choosing a plan? <a href="/register">Book a Demo</a> and we’ll guide you through the perfect fit.</p>
        </section>
      </div>
    </>
  );
}
