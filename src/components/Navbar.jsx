import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">Mm</span>
        <span className="nav-title">MentorMe</span>
      </div>
      <nav className="nav-right">
        <button onClick={() => scrollToSection("how")}>How It Works</button>
        <button onClick={() => scrollToSection("about")}>About Us</button>
        <button onClick={() => scrollToSection("pricing")}>Pricing</button>
        <a href="/register" className="cta-demo">👉 Book a Demo</a>
      </nav>
    </header>
  );
}
