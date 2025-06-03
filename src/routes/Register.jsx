import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !role) {
      alert("Please complete all fields.");
      return;
    }
    alert(`Welcome ${name}, registered as a ${role}`);
    navigate(role === "mentee" ? "/quiz/mentee" : "/quiz/mentor");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="md:w-1/2 bg-blue-700 text-white flex items-center justify-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to MentorMe</h1>
          <p className="text-lg opacity-90">Connect. Grow. Mentor. Just like LinkedIn — but built for real relationships.</p>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm"
          />
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setRole("mentee")}
              className={`flex-1 px-4 py-2 rounded ${
                role === "mentee" ? "bg-blue-600 text-white" : "border border-gray-300"
              }`}
            >
              I'm a Mentee
            </button>
            <button
              type="button"
              onClick={() => setRole("mentor")}
              className={`flex-1 px-4 py-2 rounded ${
                role === "mentor" ? "bg-blue-600 text-white" : "border border-gray-300"
              }`}
            >
              I'm a Mentor
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
