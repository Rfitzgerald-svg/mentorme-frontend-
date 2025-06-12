import React, { useState } from "react";
import "./Bot.css";

export default function Bot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to your MentorMe Assistant. Ask me about career paths, networking advice, or what to do next based on your interests!"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    const botResponse = {
      sender: "bot",
      text: generateResponse(input)
    };

    setMessages([...messages, newMessage, botResponse]);
    setInput("");
  };

  const generateResponse = (input) => {
    const lower = input.toLowerCase();
    if (lower.includes("finance")) {
      return "You’re on a strong track! You could explore roles like investment banking, private equity, or startup finance. Want a mentor intro?";
    }
    if (lower.includes("sports")) {
      return "Sports leadership translates well to careers in media, marketing, and team management. Would you like help crafting an outreach message?";
    }
    return "That's a great question. I’d recommend checking out Pro Tips or chatting with a mentor who has walked a similar path.";
  };

  return (
    <main className="bot-main">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="input-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about your future..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </main>
  );
}
