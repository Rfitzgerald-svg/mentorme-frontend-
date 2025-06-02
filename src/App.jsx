// Calendar and Mentorship Platform MVP
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";

const API_BASE = "https://mentorme-production.up.railway.app";

const Card = ({ children, ...props }) => (
  <div className="bg-white rounded-2xl shadow-xl p-4" {...props}>{children}</div>
);
const CardContent = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
const Button = ({ children, onClick, className = "", variant = "default" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl text-white font-semibold ${variant === "outline" ? "bg-white text-black border border-gray-300" : "bg-blue-600"} ${className}`.trim()}
  >
    {children}
  </button>
);
const studentQuizQuestions = [
  "What are your career interests?",
  "What type of work environment do you enjoy?",
  "What are your favorite subjects or activities at school?",
  "What is your communication style?",
  "What are your long-term goals?"
];

const mentorQuizQuestions = [
  "What is your current occupation?",
  "What career path did you follow since graduation?",
  "What activities were you involved in at school?",
  "What kind of mentees would you like to help?",
  "What are you hoping to gain from mentoring?"
];

const studentCrashCoursePhases = [
  { title: "Phase 1: Career Exploration", content: "Discover more about your potential career paths, industry roles, and how they align with your interests." },
  { title: "Phase 2: Building Authentic Connections", content: "Learn how to communicate with mentors, set expectations, and build strong relationships." },
  { title: "Phase 3: Meet Your Mentors", content: "Based on your interests, here are 3-4 mentors you might connect with. Learn about them and choose your mentor." }
];

const mentorCrashCoursePhases = [
  { title: "Phase 1: Defining Your Role", content: "Reflect on your journey, your motivations, and the value you want to provide as a mentor." },
  { title: "Phase 2: Effective Mentorship", content: "Learn how to build trust, offer guidance, and provide support to mentees with different backgrounds." },
  { title: "Phase 3: Connect With Mentees", content: "We'll show you students who could benefit most from your experience. Learn about them and choose who you'd like to connect with." }
];

const mockMentors = [
  { name: "Alex Kim", title: "Product Manager at Google", interests: "Tech, Startups", schoolInvolvement: "Debate Team, Coding Club" },
  { name: "Maria Lopez", title: "Nonprofit Director", interests: "Education, Advocacy", schoolInvolvement: "Student Council, Choir" },
  { name: "David Zhang", title: "Software Engineer at Meta", interests: "AI, Gaming", schoolInvolvement: "Robotics Club, Math Team" }
];
