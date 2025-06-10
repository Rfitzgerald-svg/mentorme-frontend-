import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
  };

  const handleEmailSignup = () => {
    navigate("/register/email");
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <h1>Sign up<br />and come on in</h1>
        <div className="register-visual-placeholder"></div>
      </div>

      <div className="register-right">
        <div className="form-container">
          <h2>Start building the future you deserve — with a mentor who’s been there.</h2>
          <button className="google-btn" onClick={handleGoogleLogin}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google icon" />
            Sign up with Google
          </button>
          <div className="or-divider">
            <hr /><span>OR</span><hr />
          </div>
          <button className="email-btn" onClick={handleEmailSignup}>
            Sign up with email
          </button>
          <p style={{ fontSize: "0.875rem", color: "#666", marginTop: "0.75rem" }}>
            Takes 60 seconds. Built for students. Backed by schools.
          </p>
          <p className="existing-account">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
