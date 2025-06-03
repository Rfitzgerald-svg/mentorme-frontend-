import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <header className="px-6 py-4 shadow flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">MentorMe</h1>
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Launch App
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Mentorship That Moves You Forward
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          MentorMe connects students and professionals through shared goals, authentic conversations, and AI-driven support.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-green-700 transition"
        >
          Get Started
        </button>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} MentorMe. Built for connection.
      </footer>
    </div>
  );
}
