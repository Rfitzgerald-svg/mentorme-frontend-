import React, { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const questions = [
  "What’s one lesson or experience from your journey that you wish someone had told you earlier?",
  "Tell us about a moment in your career or life that shaped you — and why it stuck with you.",
  "What kinds of conversations energize you most when you’re talking with young people?",
  "What are you passionate about right now — in work, in life, or in the world?",
  "How do you like to show up as a mentor?",
  "If a student could take one thing away from your conversations together, what would you hope it is?",
  "Tell us a little about you, in your own words."
];

export default function QuizMentor() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
    else navigate("/quiz/review", { state: { answers, role: "mentor" } });
  };

  const handleBack = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[current] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-progress">{current + 1} / {questions.length}</div>
        <h2>{questions[current]}</h2>
        <textarea
          value={answers[current]}
          onChange={handleChange}
          placeholder="Type your answer here..."
        />
        <div className="quiz-nav">
          <button onClick={handleBack} disabled={current === 0}>Back</button>
          <button onClick={handleNext}>{current === questions.length - 1 ? "Finish" : "Next"}</button>
        </div>
      </div>
    </div>
  );
}
