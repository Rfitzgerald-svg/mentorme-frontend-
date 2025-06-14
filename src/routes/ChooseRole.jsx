import React from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

export default function ChooseRole() {
  const navigate = useNavigate();

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>Welcome to MentorMe!</h2>
        <p>To personalize your experience, let us know your role:</p>
        <div className="role-buttons">
          <button onClick={() => navigate("/quiz/mentee")}>I'm a Student</button>
          <button onClick={() => navigate("/quiz/mentor")}>I'm a Mentor</button>
        </div>
      </div>
    </div>
  );
}
