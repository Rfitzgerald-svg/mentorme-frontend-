import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpWithEmail } from "../services/AuthService";

export default function RegisterEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!agree) {
      setErrorMsg("Please agree to the Terms of Service.");
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
    <div style={{
      display: "flex",
      height: "100vh",
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{
        flex: 1,
        backgroundColor: "#003366",
        color: "white",
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", lineHeight: 1.2 }}>Sign up<br />and come on in</h1>
        <div style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#005288",
          borderRadius: "10px",
          marginTop: "2rem"
        }}></div>
      </div>

      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
      }}>
        <form onSubmit={handleSubmit} style={{
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column"
        }}>
          <p style={{ fontSize: "1rem", color: "#333", marginBottom: "1rem" }}>
            Get access to mentorship that actually matters.
          </p>
          {errorMsg && <p style={{ color: "red", marginBottom: "1rem" }}>{errorMsg}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <label style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              style={{ marginRight: "0.5rem" }}
            />
            I agree to MentorMe’s <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
          </label>
          <button type="submit" style={buttonStyle}>Create my free account</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  fontSize: "1rem",
  padding: "0.9rem",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "0.9rem",
  fontWeight: "bold",
  backgroundColor: "#003366",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background 0.3s"
};
