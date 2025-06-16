import React, { useState } from "react";
import "./MentorMessages.css";

const mockConversations = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Mentor at JPMorgan",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    messages: [
      { sender: "Alex Johnson", text: "Looking forward to connecting!", time: "2h ago" },
      { sender: "You", text: "Me too! Just filled out my quiz.", time: "1h ago" },
    ],
  },
  {
    id: 2,
    name: "Sophie Lee",
    role: "Mentor at Spotify",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    messages: [
      { sender: "Sophie Lee", text: "Let’s schedule something next week.", time: "1d ago" },
    ],
  },
];

export default function MentorMessages() {
  const [selectedId, setSelectedId] = useState(1);
  const [input, setInput] = useState("");
  const [convos, setConvos] = useState(mockConversations);

  const selected = convos.find((c) => c.id === selectedId);

  const handleSend = () => {
    if (!input.trim()) return;
    const updated = convos.map((c) => {
      if (c.id === selectedId) {
        return {
          ...c,
          messages: [...c.messages, { sender: "You", text: input, time: "Just now" }],
        };
      }
      return c;
    });
    setConvos(updated);
    setInput("");
  };

  return (
    <div className="mentor-messages-wrapper">
      <div className="sidebar-inbox">
        <h2>Inbox</h2>
        {convos.map((c) => {
          const lastMsg = c.messages[c.messages.length - 1];
          return (
            <div
              key={c.id}
              className={`conversation-preview ${selectedId === c.id ? "active" : ""}`}
              onClick={() => setSelectedId(c.id)}
            >
              <img src={c.avatar} alt={c.name} />
              <div>
                <strong>{c.name}</strong>
                <p>{lastMsg?.text}</p>
                <span>{lastMsg?.time}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="chat-view">
        <div className="chat-header">
          <img src={selected.avatar} alt={selected.name} />
          <div>
            <h3>{selected.name}</h3>
            <p>{selected.role}</p>
          </div>
        </div>

        <div className="chat-thread">
          {selected.messages.map((msg, i) => (
            <div key={i} className={`msg-bubble ${msg.sender === "You" ? "sent" : "received"}`}>
              <p>{msg.text}</p>
              <span>{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
          <div className="tag-buttons">
            <button>Follow Up</button>
            <button>Scheduled</button>
            <button>Resolved</button>
          </div>
        </div>
      </div>
    </div>
  );
}
