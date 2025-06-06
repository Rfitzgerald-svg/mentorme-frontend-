import React from "react";
import "./StoryBlock.css";

export default function StoryBlock({ image, title, text }) {
  return (
    <div className="story-block">
      <img src={image} alt={title} />
      <div className="story-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
