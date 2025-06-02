import React, { useState } from "react";

const questions = [
  "What are your top 3 career interests?",
  "What type of work environment do you enjoy?",
  "What are your favorite extracurricular activities?",
  "What clubs or organizations have you been a part of?",
  "What type of mentor do you prefer (hands-on, listener, etc.)?",
  "How involved have you been in your school's community?",
  "What professional fields interest you most?",
  "What are your long-term goals post-graduation?",
  "How do you prefer to communicate (email, chat, video)?",
  "What do you hope to gain from a mentoring relationship?"
];

export default function QuizMentee() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log("Mentee Quiz Answers:", answers);
    alert("Quiz submitted! We’ll use this to match you with mentors.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Mentee Onboarding Quiz</h1>
      {questions.map((q, idx) => (
        <div key={idx} className="mb-4">
          <label className="block mb-1 font-semibold">{q}</label>
          <input
            type="text"
            value={answers[idx]}
            onChange={(e) => handleChange(idx, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Quiz
      </button>
    </div>
  );
}
