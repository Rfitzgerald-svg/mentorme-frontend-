import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/")}>
        <div className="logo">Mm</div>
        <span className="nav-title">MentorMe</span>
      </div>
      <div className="nav-right">
        <button onClick={() => scrollTo("how-it-works")}>How It Works</button>
        <button onClick={() => scrollTo("about-us")}>About Us</button>
        <button onClick={() => scrollTo("pricing")}>Pricing</button>
        <button className="cta-demo" onClick={() => navigate("/demo")}>
          👉 Book a Demo
        </button>
      </div>
    </nav>
  );
}
