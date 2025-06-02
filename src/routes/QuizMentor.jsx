import React, { useState } from "react";

const questions = [
  "What is your current profession or industry?",
  "What fields are you most excited to mentor students in?",
  "What school clubs or activities were you involved in?",
  "What do you hope to gain by mentoring a student?",
  "What communication style do you prefer with your mentee?"
];

export default function QuizMentor() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log("Mentor Quiz Answers:", answers);
    alert("Quiz submitted! We’ll use this to match you with mentees.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Mentor Onboarding Quiz</h1>
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
