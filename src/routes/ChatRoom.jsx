import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ChatRoom() {
  const { matchId } = useParams();
  const [messages, setMessages] = useState([
    { sender: "mentor", text: "Hi there! Looking forward to helping you!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "mentee", text: input },
      { sender: "assistant", text: generateAIResponse(input) }
    ];
    setMessages(newMessages);
    setInput("");
  };

  const generateAIResponse = (text) => {
    if (text.toLowerCase().includes("interview"))
      return "Great question. I can help you practice with mock interview prompts.";
    if (text.toLowerCase().includes("career"))
      return "Let’s talk about paths in tech, business, or creative fields.";
    return "Thanks for sharing! Would you like help formulating a follow-up question?";
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Chat Room: {matchId}</h1>
      <div className="bg-white border rounded-lg p-4 max-h-80 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === "mentee" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-3 py-1 rounded ${
                msg.sender === "mentor"
                  ? "bg-blue-100"
                  : msg.sender === "assistant"
                  ? "bg-yellow-100"
                  : "bg-green-100"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 border px-3 py-2 rounded-l"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
