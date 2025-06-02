import React, { useState } from "react";

export default function AssistantBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your MentorMe Assistant. How can I help?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: "Great question! Let me get back to you on that." }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span>MentorMe Assistant</span>
            <button onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="max-h-60 overflow-y-auto p-4 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-1 rounded ${msg.sender === "user" ? "bg-blue-100" : "bg-gray-100"}`}>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 text-sm"
            />
            <button onClick={handleSend} className="bg-blue-500 text-white px-4 text-sm">Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white rounded-full px-4 py-2 shadow-lg"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
}
