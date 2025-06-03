import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 flex flex-col">
      <header className="w-full px-6 py-4 shadow-sm flex justify-between items-center bg-white">
        <h1 className="text-2xl font-bold text-blue-700">MentorMe</h1>
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-sm transition"
        >
          Launch App
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            The Future of Mentorship. <br /> Built for Schools.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            MentorMe connects students and professionals through shared goals,
            authentic reflection, and AI-powered support.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white text-lg px-6 py-3 rounded-full hover:bg-green-700 shadow-md transition"
          >
            Get Started
          </button>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-400 py-6">
        © {new Date().getFullYear()} MentorMe. Empowering purpose-driven connections.
      </footer>
    </div>
  );
}
