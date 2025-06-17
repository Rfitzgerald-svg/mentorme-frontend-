import React, { useState } from "react";
import "./MentorMessages.css";

const slots = [
  "Monday 10:00 AM",
  "Monday 2:00 PM",
  "Tuesday 11:00 AM",
  "Wednesday 1:00 PM",
  "Friday 3:00 PM"
];

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
  {
    id: 3,
    name: "Sophie Lee",
    title: "Mentor at Goldman Sachs",
    messages: [
      {
        sender: "Sophie",
        time: "2h ago",
        text: "Let’s schedule something next week.",
      },
    ],
  },
  {
    id: 4,
    name: "Daniel Kim",
    title: "Student at Taft",
    messages: [
      {
        sender: "Daniel",
        time: "1d ago",
        text: "Any tips for the career fair?",
      },
    ],
  },
  {
    id: 5,
    name: "Emma Thompson",
    title: "Alum at Harvard",
    messages: [
      {
        sender: "Emma",
        time: "3h ago",
        text: "Congrats on the internship!",
      },
    ],
  },
  {
    id: 6,
    name: "Jason Wu",
    title: "Founder at EduStart",
    messages: [
      {
        sender: "Jason",
        time: "Yesterday",
        text: "Want to collaborate on a student panel?",
      },
    ],
  },
  {
    id: 7,
    name: "Liam Patel",
    title: "Mentor at BCG",
    messages: [
      {
        sender: "Liam",
        time: "4h ago",
        text: "Your profile stood out. Let’s chat!",
      },
    ],
  },
  {
    id: 8,
    name: "Ava Thomas",
    title: "Peer at Choate",
    messages: [
      {
        sender: "Ava",
        time: "6h ago",
        text: "Want to start a club together?",
      },
    ],
  },
  {
    id: 9,
    name: "Jayden Wu",
    title: "Product Manager at Google",
    messages: [
      {
        sender: "Jayden",
        time: "1w ago",
        text: "Hope the school year is going well!",
      },
    ],
  },
  {
    id: 10,
    name: "Nina Rivera",
    title: "Designer at IDEO",
    messages: [
      {
        sender: "Nina",
        time: "2w ago",
        text: "Just published a new article on mentorship!",
      },
    ],
  },
];

export default function MentorMessages() {
  const [selectedId, setSelectedId] = useState(1);
  const [input, setInput] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [conversations, setConversations] = useState(mockConversations);

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

  const handleBook = (slot) => {
    setBookedSlot(slot);
    setShowCalendar(false);
    const updated = conversations.map((c) =>
      c.id === selectedId
        ? {
            ...c,
            messages: [...c.messages, { sender: "You", time: "Just now", text: `Scheduled: ${slot}` }],
          }
        : c
    );
    setConversations(updated);
  };

  return (
    <div className="messages-wrapper">
      {/* LEFT SIDEBAR */}
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

      {/* RIGHT CONVERSATION VIEW */}
      <div className="chat-pane">
        <div className="chat-header">
          <div>
            <h3>{current.name}</h3>
            <p>{current.title}</p>
          </div>
          <span className="options">•••</span>
        </div>

        <div className="chat-thread">
          <div className="chat-date">JUNE 16, 2025</div>
          {current.messages.map((msg, idx) => (
            <div key={idx} className="message-bubble">
              <strong>{msg.sender}</strong>
              <p>{msg.text}</p>
              <span className="timestamp">{msg.time}</span>
            </div>
          ))}
        </div>

        {showCalendar && (
          <div className="calendar-modal">
            <h4>Pick a time to meet</h4>
            <div className="calendar-grid">
              {slots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => handleBook(slot)}
                  disabled={bookedSlot === slot}
                  className={bookedSlot === slot ? "booked" : "available"}
                >
                  {bookedSlot === slot ? "Booked: " : ""}{slot}
                </button>
              ))}
            </div>
          </div>
        )}

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
          <button className="schedule-btn" onClick={() => setShowCalendar(!showCalendar)}>
            📅 Schedule
          </button>
        </div>
      </div>
    </div>
  );
} 
