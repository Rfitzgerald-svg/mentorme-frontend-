import React, { useState } from "react";
import "./MentorMessages.css";

const mockConversations = [
  {
    id: 1,
    name: "Sophie Lee",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    role: "Mentor at Goldman Sachs",
    preview: "Let’s schedule something next week.",
    time: "1h ago",
    messages: [
      { from: "Sophie", text: "Let’s schedule something next week.", time: "1h ago" },
      { from: "You", text: "Sounds great! I just filled out my quiz.", time: "Just now" },
    ],
  },
  {
    id: 2,
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    role: "Mentor at JPMorgan",
    preview: "Looking forward to connecting!",
    time: "2h ago",
    messages: [
      { from: "Alex", text: "Looking forward to connecting!", time: "2h ago" },
      { from: "You", text: "Me too! Just filled out my quiz.", time: "1h ago" },
    ],
  },
];

export default function MentorMessages() {
  const [selectedId, setSelectedId] = useState(mockConversations[0].id);
  const [input, setInput] = useState("");

  const selected = mockConversations.find((c) => c.id === selectedId);

  return (
    <div className="mentor-messages-wrapper">
      <div className="inbox-list">
        <h2>Messaging</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Search messages"
        />
        {mockConversations.map((convo) => (
          <div
            key={convo.id}
            className={`inbox-item ${selectedId === convo.id ? "active" : ""}`}
            onClick={() => setSelectedId(convo.id)}
          >
            <img src={convo.avatar} alt={convo.name} />
            <div>
              <strong>{convo.name}</strong>
              <p>{convo.preview}</p>
              <span className="timestamp">{convo.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="message-thread">
        <div className="thread-header">
          <img src={selected.avatar} alt={selected.name} />
          <div>
            <h3>{selected.name}</h3>
            <p>{selected.role}</p>
          </div>
        </div>

        <div className="thread-body">
          {selected.messages.map((msg, i) => (
            <div key={i} className="message">
              <strong>{msg.from}</strong>
              <p>{msg.text}</p>
              <span className="timestamp">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="message-input-bar">
          <input
            type="text"
            placeholder="Write a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Send</button>
        </div>

        <div className="message-tags">
          <button>Follow Up</button>
          <button>Scheduled</button>
          <button>Resolved</button>
        </div>
      </div>
    </div>
  );
}
