import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [showTour, setShowTour] = useState(true);

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h2 className="logo">MentorMe</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/network">My Network</Link></li>
            <li><Link to="/bot">My Bot</Link></li>
            <li><Link to="/protips">Pro Tips</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="feed">
        {showTour && (
          <div className="tour-banner">
            <h3>Welcome to your Dashboard! 🎉</h3>
            <p>This is where your mentorship journey begins — explore your feed, find Pro Tips, and connect with your network.</p>
            <button onClick={() => setShowTour(false)}>Got it</button>
          </div>
        )}
        <h1>Welcome back 👋</h1>
        <section className="post-card">
          <h3>🎉 Sarah M. just landed an internship at Google!</h3>
          <p>“Thanks to my mentor Alex and everyone on MentorMe!”</p>
        </section>
        <section className="post-card">
          <h3>📣 Jake W. is hosting a financial literacy workshop</h3>
          <p>Join us Tuesday at 6pm EST. RSVP in your calendar.</p>
        </section>
        <section className="post-card">
          <h3>💼 New mentorship opening in law</h3>
          <p>Interested in law school? Apply to connect with Casey J.</p>
        </section>
      </main>

      <aside className="widgets">
        <div className="widget">
          <h4>Featured Pro Tip</h4>
          <p>“Ask questions that show you’ve done your research.”</p>
        </div>
        <div className="widget">
          <h4>Upcoming Session</h4>
          <p>Tuesday @ 3PM with mentor Alex Johnson</p>
        </div>
        <div className="widget">
          <h4>Your Stats</h4>
          <p>4 Connections · 2 Messages · 60% Progress</p>
        </div>
      </aside>
    </div>
  );
}
