import React, { useEffect, useRef, useState } from "react";
import "./MentorMessages.css";

const mockConversations = [
  {
    id: 1,
    name: "Mary Katherine Montgomery",
    title: "Head Math Teacher at Benchmark School",
    messages: [
      {
        sender: "Mary",
        time: "4:46 PM",
        text: "Hi Russell,\nNice to meet you.\nAll the best,\nYour biggest fan!",
      },
    ],
  },
  {
    id: 2,
    name: "Alex Johnson",
    title: "Mentor at JPMorgan",
    messages: [
      {
        sender: "Alex",
        time: "2h ago",
        text: "Looking forward to connecting!",
      },
      {
        sender: "You",
        time: "1h ago",
        text: "Me too! Just filled out my quiz.",
      },
    ],
  },
];

export default function MentorMessages() {
  const [selectedId, setSelectedId] = useState(1);
  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState(mockConversations);
  const threadRef = useRef(null);

  const current = conversations.find((c) => c.id === selectedId);

  const handleSend = () => {
    if (!input.trim()) return;
    const updated = conversations.map((c) =>
      c.id === selectedId
        ? {
            ...c,
            messages: [...c.messages, { sender: "You", time: "Just now", text: input }],
          }
        : c
    );
    setConversations(updated);
    setInput("");
  };

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [conversations]);

  return (
    <div className="messages-wrapper">
      <div className="sidebar-pane">
        <h2>Messaging</h2>
        <input className="search-input" placeholder="Search messages" />
        <div className="tabs">
          {["Focused", "Jobs", "Unread", "My Connections", "InMail", "Starred"].map((t) => (
            <button key={t}>{t}</button>
          ))}
        </div>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`message-preview ${selectedId === conv.id ? "active" : ""}`}
            onClick={() => setSelectedId(conv.id)}
          >
            <img src={`https://randomuser.me/api/portraits/women/${conv.id + 20}.jpg`} />
            <div className="preview-text">
              <strong>{conv.name}</strong>
              <small>{conv.messages[conv.messages.length - 1].text.slice(0, 40)}...</small>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-pane">
        <div className="chat-header">
          <div>
            <h3>{current.name}</h3>
            <p>{current.title}</p>
          </div>
          <span className="options">•••</span>
        </div>

        <div className="chat-thread" ref={threadRef}>
          <div className="chat-date">JUNE 16, 2025</div>
          {current.messages.map((msg, idx) => (
            <div key={idx} className={`message-bubble ${msg.sender === "You" ? "right" : "left"}`}>
              <strong>{msg.sender}</strong>
              <p>{msg.text}</p>
              <span className="timestamp">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="input-bar">
          <input
            type="text"
            placeholder="Write a message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="icons">📎 😊 📷</span>
          <button disabled={!input.trim()} onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
