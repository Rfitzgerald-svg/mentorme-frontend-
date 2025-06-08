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
            <h1 className="hero-title">🟦 Join the Movement Today</h1>
            <p className="hero-subtext">
              MentorMe isn’t just a platform. It’s a movement. <br />
              We connect students to mentors who get it — because they’ve lived it. Real stories. Real guidance. Real growth. <br />
              One meaningful match can shape a life. We make sure it happens.
            </p>
            <a href="/register">
              <div className="cta-banner">Join the Movement Today</div>
            </a>
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
          <h2>🚀 How MentorMe Works</h2>
          <p>
            MentorMe simplifies the complex — matching students with mentors who truly align. Here's how:
          </p>
          <ul>
            <li><strong>Take the Quiz</strong><br />
              Students and mentors each complete a lightning-fast onboarding quiz that captures their passions, goals, and shared experiences — from sports and clubs to career interests and alma maters.
            </li>
            <li><strong>AI-Powered Matching</strong><br />
              Our proprietary AI engine finds meaningful connections, not just overlaps. We match based on shared values, not just keywords — because mentorship should feel natural, not forced.
            </li>
            <li><strong>Smart Onboarding & Crash Courses</strong><br />
              Students get instant access to pro tips and a crash course on how to build a lasting mentorship — so every connection starts with confidence.
            </li>
            <li><strong>Chat. Connect. Grow.</strong><br />
              From guided chats to career insights, students can engage with mentors, track progress, and unlock a future shaped by experience — all in a secure, school-backed platform.
            </li>
          </ul>
        </section>

        {/* ABOUT US */}
        <section className="about" id="about">
          <h2>💡 About Us</h2>
          <p>
            MentorMe began with a simple question: What if every student had someone to show them the way?
          </p>
          <p>
            We’re not a Silicon Valley behemoth — we’re two high school students, Russell Fitzgerald and Jett Honig, who saw firsthand how mentorship could transform lives but noticed how broken, outdated, and impersonal most systems were. So we built something better.
          </p>
          <p>
            MentorMe is the next-generation mentorship platform that bridges students with real-world guidance — powered by AI, backed by schools, and built with heart. Our mission is to democratize access to wisdom, connection, and opportunity by creating a space where students and mentors actually want to engage.
          </p>
          <p>
            Whether you're a student figuring out your path, a mentor hoping to give back, or a school looking to empower your community — MentorMe delivers an experience that’s intuitive, secure, and built for meaningful growth.
          </p>
          <p>
            We believe mentorship isn’t a feature — it’s a foundation. And we’re here to rebuild it from the ground up.
          </p>

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
