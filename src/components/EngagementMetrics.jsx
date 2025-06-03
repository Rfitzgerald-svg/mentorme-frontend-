import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

const activityData = [
  { day: "Mon", meetings: 12 },
  { day: "Tue", meetings: 9 },
  { day: "Wed", meetings: 15 },
  { day: "Thu", meetings: 8 },
  { day: "Fri", meetings: 6 }
];

const roleData = [
  { name: "Mentors", value: 16 },
  { name: "Mentees", value: 42 }
];

const COLORS = ["#2563eb", "#38bdf8"];

export default function EngagementMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="text-lg font-bold mb-4 text-gray-700">📅 Weekly Meeting Activity</h2>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={activityData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="meetings" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="text-lg font-bold mb-4 text-gray-700">🧑‍🤝‍🧑 Role Distribution</h2>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={roleData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {roleData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
