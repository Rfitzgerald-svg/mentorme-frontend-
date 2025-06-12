import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

export default function Layout({ children }) {
  const location = useLocation();
  const current = location.pathname;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`layout-wrapper ${collapsed ? "collapsed" : ""}`}>
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <h2 className="logo">MentorMe</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard" className={current.includes("/dashboard") ? "active" : ""}>🏠 Dashboard</Link></li>
            <li><Link to="/network" className={current.includes("/network") ? "active" : ""}>🕸️ My Network</Link></li>
            <li><Link to="/protips" className={current.includes("/protips") ? "active" : ""}>💡 Pro Tips</Link></li>
            <li><Link to="/bot" className={current.includes("/bot") ? "active" : ""}>🤖 My Bot</Link></li>
            <li><Link to="/admin" className={current.includes("/admin") ? "active" : ""}>🛠 Admin</Link></li>
            <li><Link to="/profile" className={current.includes("/profile") ? "active" : ""}>👤 My Profile</Link></li>
          </ul>
        </nav>
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "➡" : "⬅"}
        </button>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}
