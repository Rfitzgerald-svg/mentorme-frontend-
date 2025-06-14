import React, { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const questions = [
  "What’s something you’ve always been curious about?",
  "Tell us about a moment you felt proud of yourself. What happened?",
  "Outside of school, how do you like to spend your time?",
  "If you could meet someone who’s done something you dream of doing, what would you want to ask them?",
  "What’s something you’re working toward right now — or something you hope to figure out soon?",
  "How do you hope a mentor could help you?",
  "Describe yourself in a sentence or two."
];

export default function QuizMentee() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
    else navigate("/quiz/review", { state: { answers, role: "mentee" } });
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
