import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSuccess = (res) => {
    console.log("Google login success:", res);
    alert("Google login successful. Redirecting...");
    navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.logo}>
        <img src="/logo.svg" alt="MentorMe Logo" style={{ height: 24 }} />
      </div>

      <div style={styles.card}>
        <h1 style={styles.heading}>Sign in to MentorMe</h1>

        <div style={{ width: "100%" }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => alert("Google login failed")}
            width="100%"
          />
        </div>

        <div style={styles.dividerRow}>
          <div style={styles.divider} />
          <span style={styles.dividerText}>or</span>
          <div style={styles.divider} />
        </div>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div style={styles.fieldGroup}>
            <label htmlFor="email" style={styles.label}>EMAIL</label>
            <input id="email" type="email" placeholder="you@school.edu" style={styles.input} />
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="password" style={styles.label}>PASSWORD</label>
            <input id="password" type="password" placeholder="••••••••" style={styles.input} />
          </div>

          <button type="submit" style={styles.button}>Log in</button>
        </form>

        <div style={styles.linksContainer}>
          <a href="#" style={styles.link}>Use single sign-on</a>
          <a href="#" style={styles.link}>Reset password</a>
          <p style={styles.registerText}>
            No account? <a href="/register" style={styles.link}>Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "1.5rem",
    left: "1.5rem",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: 600,
    textAlign: "center",
    color: "#111827",
  },
  dividerRow: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "1rem",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#d1d5db",
  },
  dividerText: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  fieldGroup: {
    marginBottom: "1rem",
    width: "100%",
  },
  label: {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "#4b5563",
    marginBottom: "0.25rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem 0.75rem",
    fontSize: "0.875rem",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none",
    transition: "border 0.2s",
  },
  button: {
    width: "100%",
    padding: "0.65rem",
    backgroundColor: "#003366",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: 600,
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background 0.2s",
  },
  linksContainer: {
    width: "100%",
    textAlign: "center",
    fontSize: "0.875rem",
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
  registerText: {
    color: "#6b7280",
  },
};
