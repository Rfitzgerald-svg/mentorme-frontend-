import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate("/")}>
        <img src="/logo.svg" alt="MentorMe Logo" className="navbar-logo" />
        <span className="navbar-title">MentorMe</span>
      </div>
      <div className="navbar-right">
        <button onClick={() => scrollTo("how-it-works")}>How It Works</button>
        <button onClick={() => scrollTo("about-us")}>About Us</button>
        <button onClick={() => scrollTo("pricing")}>Pricing</button>
        <button className="book-demo-btn" onClick={() => navigate("/demo")}>
          Book a Demo
        </button>
      </div>
    </nav>
  );
}
