import React from "react";
import EngagementMetrics from "../components/EngagementMetrics.jsx";

export default function SchoolDashboard() {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">📊 School Engagement Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatBox label="Active Mentees" value="42" />
        <StatBox label="Active Mentors" value="16" />
        <StatBox label="Total Meetings Booked" value="87" />
      </div>
      <EngagementMetrics />
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center border border-gray-200">
      <div className="text-4xl font-bold text-blue-700 mb-1">{value}</div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </div>
  );
}
