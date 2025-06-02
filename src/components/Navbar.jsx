import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold text-blue-700">MentorMe</Link>
        <nav className="space-x-4">
          <Link to="/register" className="text-sm text-gray-700 hover:text-blue-600">Register</Link>
          <Link to="/login" className="text-sm text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/calendar" className="text-sm text-gray-700 hover:text-blue-600">Calendar</Link>
          <Link to="/dashboard" className="text-sm text-gray-700 hover:text-blue-600">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
