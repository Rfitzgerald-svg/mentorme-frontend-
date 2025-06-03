import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReflectionForm() {
  const [high, setHigh] = useState("");
  const [hurdle, setHurdle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reflection submitted:", { high, hurdle });
    alert("Thanks for reflecting! We'll use this to support your growth.");
    navigate("/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-8 shadow-xl rounded-2xl border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">High & Hurdle Reflection</h1>
      <p className="text-sm text-gray-500 mb-8">
        Share something that inspired you in your last session and something you're working through.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">🌟 What was your high?</label>
          <textarea
            rows="4"
            value={high}
            onChange={(e) => setHigh(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Something that made you feel excited, proud, or inspired"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">🧱 What was your hurdle?</label>
          <textarea
            rows="4"
            value={hurdle}
            onChange={(e) => setHurdle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Something that challenged you or a goal for next time"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit Reflection
        </button>
      </form>
    </div>
  );
}
