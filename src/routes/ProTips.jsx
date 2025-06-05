import React, { useState } from "react";
import "./ProTips.css";
import { Link } from "react-router-dom";

const tips = [
  {
    title: "Write a Cold Outreach Message",
    description: "Learn how to contact mentors professionally without prior connection.",
    tag: "Networking",
    image: "https://images.unsplash.com/photo-1556742031-ef7c9e18f800"
  },
  {
    title: "Ace Your First Mentor Call",
    description: "5 key questions to ask in your first conversation.",
    tag: "First Call",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33"
  },
  {
    title: "Craft Your 30-Second Story",
    description: "Practice telling your story in a short, memorable way.",
    tag: "Communication",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    title: "Follow Up Like a Pro",
    description: "Templates and timing tips for effective follow-up emails.",
    tag: "Email",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
  },
  {
    title: "Prep for a Phone Call",
    description: "Set the tone, ask well, and close strong.",
    tag: "Professionalism",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
  },
  // Repeat or expand to 25 for demo
];

export default function ProTips() {
  const [query, setQuery] = useState("");

  const filteredTips = tips.filter(tip =>
    tip.title.toLowerCase().includes(query.toLowerCase()) ||
    tip.description.toLowerCase().includes(query.toLowerCase()) ||
    tip.tag.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="protips-layout">
      <aside className="protips-sidebar">
        <h2>MentorMe</h2>
        <nav>
          <Link to="/dashboard">🏠 Dashboard</Link>
          <Link to="/network">🕸️ My Network</Link>
          <Link to="/protips" className="active">💡 Pro Tips</Link>
          <Link to="/bot">🤖 My Bot</Link>
        </nav>
      </aside>

      <main className="protips-main">
        <input
          className="searchbar"
          placeholder="Let's Learn"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="tips-column">
          {filteredTips.map((tip, i) => (
            <div key={i} className="tip-card">
              <img src={tip.image} alt={tip.title} />
              <div className="tip-content">
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <span className="tip-tag">{tip.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
