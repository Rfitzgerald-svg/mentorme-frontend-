import React, { useState } from "react";
import "./Demo.css";

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.successWrapper}>
        <div style={styles.successContainer}>
          <h4 style={styles.successLabel}>SUCCESS!</h4>
          <h1 style={styles.successHeading}>🎉 WE GOT YOUR DEMO REQUEST</h1>
          <p style={styles.successText}>
            A member of our team will be in touch within 24 hours. <br />
            In the meantime, get ready to experience modern mentorship — built for students, trusted by schools.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-page">
      <div className="demo-left">
        <h1>Built for Students. Trusted by Schools. Ready for You.</h1>
        <p>
          MentorMe connects students to life-changing mentors through AI-powered matching,
          guided onboarding, and secure school-based tracking. Let’s bring mentorship into the modern era.
          <br /><br />
          Fill out the form or email <strong>sales@mentorme.ai</strong> to speak with our team.
        </p>
        <div className="trusted-by">
          <h4>Trusted by:</h4>
          <div className="logo-row">
            <div className="fake-logo">TAFT</div>
            <div className="fake-logo">Choate</div>
            <div className="fake-logo">Hotchkiss</div>
          </div>
        </div>
      </div>

      <div className="demo-right">
        <form className="demo-form" onSubmit={handleSubmit}>
          <h2>Request a Demo</h2>
          <label>First Name*</label>
          <input type="text" required />
          <label>Last Name*</label>
          <input type="text" required />
          <label>Email*</label>
          <input type="email" required />
          <label>Phone</label>
          <input type="tel" />
          <label>School or Org Name*</label>
          <input type="text" required />
          <label>What are you hoping to solve?</label>
          <textarea rows="3" />
          <button type="submit">Get a Demo</button>
          <p className="disclaimer">
            By clicking "Get a Demo," you agree to MentorMe's{" "}
            <a href="#">privacy policy</a> and <a href="#">terms of use</a>.
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  successWrapper: {
    minHeight: "100vh",
    backgroundColor: "#003366",
    color: "white",
    padding: "4rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  successContainer: {
    maxWidth: 720,
  },
  successLabel: {
    textTransform: "uppercase",
    fontSize: "0.9rem",
    letterSpacing: "1px",
    color: "#a0c4ff",
    marginBottom: "0.5rem",
  },
  successHeading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "1.5rem",
    lineHeight: 1.2,
  },
  successText: {
    fontSize: "1.1rem",
    color: "#f0f4f9",
    lineHeight: 1.8,
  },
};
