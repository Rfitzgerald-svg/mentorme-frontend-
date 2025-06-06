import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

export default function Layout({ children }) {
  const location = useLocation();
  const current = location.pathname;

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>MentorMe</h2>
        <nav>
          <Link to="/dashboard" className={current.includes("/dashboard") ? "active" : ""}>🏠 Dashboard</Link>
          <Link to="/network" className={current.includes("/network") ? "active" : ""}>🕸️ My Network</Link>
          <Link to="/protips" className={current.includes("/protips") ? "active" : ""}>💡 Pro Tips</Link>
          <Link to="/bot" className={current.includes("/bot") ? "active" : ""}>🤖 My Bot</Link>
          <Link to="/admin" className={current.includes("/admin") ? "active" : ""}>🛠 Admin</Link>
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
}
