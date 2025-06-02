import React from "react";
import { computeMatchScore } from "../utils/MatchService";

const sampleMentee = [
  "Tech industry",
  "Remote work",
  "Coding club",
  "Listener",
  "STEM outreach",
  "Software",
  "Build a startup",
  "Slack",
  "Career clarity",
  "Hands-on mentor"
];

const sampleMentors = [
  {
    name: "Dana Patel",
    title: "Product Manager, Google",
    background: [
      "Tech industry",
      "Remote work",
      "Robotics club",
      "Listener",
      "Career talks",
      "Product",
      "Help startups",
      "Slack",
      "Career guidance",
      "Hands-on mentor"
    ]
  },
  {
    name: "Jordan Lee",
    title: "Software Engineer, Netflix",
    background: [
      "Software",
      "Hybrid work",
      "Coding club",
      "Hands-on",
      "Volunteering",
      "Engineering",
      "Build companies",
      "Email",
      "Startup advice",
      "Direct mentorship"
    ]
  }
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Mentor Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleMentors.map((mentor, idx) => {
          const score = computeMatchScore(sampleMentee, mentor.background);
          return (
            <div key={idx} className="bg-white p-4 shadow rounded-xl">
              <div className="font-semibold text-lg">{mentor.name}</div>
              <div className="text-sm text-gray-600 mb-2">{mentor.title}</div>
              <div className="text-sm mb-2">Match Score: <strong>{score}%</strong></div>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Message Mentor
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
