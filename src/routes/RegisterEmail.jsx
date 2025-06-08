import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpWithEmail } from "../services/AuthService";
import "./RegisterEmail.css";

export default function RegisterEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) {
      setErrorMsg("You must agree to the Terms of Service.");
      return;
    }

    const { error } = await signUpWithEmail(email, password);
    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="register-email-container">
      <div className="register-email-left">
        <h1>Sign up<br />and come on in</h1>
        <div className="image-placeholder"></div>
      </div>

      <div className="register-email-right">
        <form className="register-email-form" onSubmit={handleSubmit}>
          <p className="form-subtext">Get access to mentorship that actually matters.</p>
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <span>
              I agree to MentorMe’s <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
            </span>
          </label>
          <button type="submit">Create my free account</button>
        </form>
      </div>
    </div>
  );
}
