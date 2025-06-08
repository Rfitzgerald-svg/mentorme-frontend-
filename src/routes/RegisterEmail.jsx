import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import "./RegisterEmail.css";

export default function RegisterEmail() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate("/quiz/mentee"); // or logic to redirect based on role later
    }
  };

  return (
    <div className="email-register">
      <div className="email-register-left">
        <h1>Welcome to MentorMe</h1>
        <p>Your journey starts here. Real guidance. Real growth.</p>
      </div>
      <div className="email-register-right">
        <form className="email-form" onSubmit={handleSubmit}>
          <h2>Create your MentorMe account</h2>
          {error && <p className="error-msg">{error}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Create Account</button>
          <p className="login-redirect">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
