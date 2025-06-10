import React from "react";
import "./Demo.css";

export default function Demo() {
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
        <form className="demo-form">
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
