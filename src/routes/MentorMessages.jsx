import React, { useState } from "react";
import "./MentorMessages.css";

const mockThreads = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Mentor",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    lastMessage: "Looking forward to connecting!",
    timestamp: "2h ago",
    messages: [
      { from: "Alex", text: "Looking forward to connecting!", time: "2h ago" },
      { from: "You", text: "Me too! Just filled out my quiz.", time: "1h ago" },
    ],
  },
  {
    id: 2,
    name: "Sophie Lee",
    role: "Mentor",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Let’s schedule something next week.",
    timestamp: "1d ago",
    messages: [
      { from: "Sophie", text: "Let’s schedule something next week.", time: "1d ago" },
      { from: "You", text: "Sounds great! I’m free Tues or Thurs.", time: "1d ago" },
    ],
  },
];

export default function MentorMessages() {
  const [selectedId, setSelectedId] = useState(1);
  const [input, setInput] = useState("");
  const thread = mockThreads.find((t) => t.id === selectedId);

  return (
    <div className="messages-wrapper">
      <aside className="inbox-list">
        {mockThreads.map((t) => (
          <div
            key={t.id}
            className={`thread-preview ${t.id === selectedId ? "selected" : ""}`}
            onClick={() => setSelectedId(t.id)}
          >
            <img src={t.profilePic} alt={t.name} />
            <div className="text">
              <strong>{t.name}</strong> <span className="badge">{t.role}</span>
              <p>{t.lastMessage}</p>
            </div>
            <span className="timestamp">{t.timestamp}</span>
          </div>
        ))}
      </aside>

      <main className="message-thread">
        <div className="thread-header">
          <h3>{thread.name}</h3>
          <span className="badge">{thread.role}</span>
        </div>

        <div className="thread-body">
          {thread.messages.map((m, i) => (
            <div key={i} className={`msg ${m.from === "You" ? "sent" : "received"}`}>
              <p>{m.text}</p>
              <span>{m.time}</span>
            </div>
          ))}
        </div>

        <div className="thread-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-btn">Send</button>
          <button className="tag-btn">Follow Up</button>
          <button className="tag-btn">Scheduled</button>
          <button className="tag-btn">Resolved</button>
        </div>
      </main>
    </div>
  );
}
