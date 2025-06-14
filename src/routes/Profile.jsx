import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [showVideoPrompt, setShowVideoPrompt] = useState(false);

  const [name, setName] = useState("Russell Fitzgerald");
  const [headline, setHeadline] = useState("The Taft School Class of 2025, Princeton University Class of 2029");
  const [location, setLocation] = useState("Philadelphia, Pennsylvania");

  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempHeadline, setTempHeadline] = useState(headline);
  const [tempLocation, setTempLocation] = useState(location);

  const saveChanges = () => {
    setName(tempName);
    setHeadline(tempHeadline);
    setLocation(tempLocation);
    setIsEditing(false);
  };

  const cancelChanges = () => {
    setTempName(name);
    setTempHeadline(headline);
    setTempLocation(location);
    setIsEditing(false);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-left">
        <div className="profile-banner" />
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            {isEditing ? (
              <>
                <input value={tempName} onChange={(e) => setTempName(e.target.value)} />
                <input value={tempHeadline} onChange={(e) => setTempHeadline(e.target.value)} />
                <input value={tempLocation} onChange={(e) => setTempLocation(e.target.value)} />
                <div className="edit-btns">
                  <button onClick={saveChanges}>Save</button>
                  <button onClick={cancelChanges} className="cancel">Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h1>{name}</h1>
                <p>{headline}</p>
                <p>{location} · <span className="link">Contact info</span></p>
                <button onClick={() => setIsEditing(true)} className="edit-link">✏️ Edit</button>
              </>
            )}
          </div>
        </div>

        <div className="video-bio-section">
          <button
            className="add-video-btn"
            onClick={() => setShowVideoPrompt(!showVideoPrompt)}
          >
            + Add 30s Video Bio
          </button>
          {showVideoPrompt && (
            <div className="video-prompt">
              <h4>🎥 Record your story!</h4>
              <p>Tell us who you are, what you're interested in, and what you're hoping to get out of this platform. Make it fun, honest, and 30 seconds max!</p>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h2>Education</h2>
          <ul>
            <li><strong>The Taft School</strong> (2022–2025)</li>
            <li><strong>William Penn Charter School</strong> (2021–2022)</li>
          </ul>
        </div>

        <div className="profile-section">
          <h2>Skills & Interests</h2>
          <p>Finance · Entrepreneurship · Mentorship · Media</p>
        </div>
      </div>

      <div className="profile-right">
        <h3>Next Connects 🔗</h3>
        <div className="connect-card">
          <p><strong>Casey Johnson</strong><br />2nd year at Princeton, interested in VC</p>
        </div>
        <div className="connect-card">
          <p><strong>Ava Thomas</strong><br />Taft alum · Media + Finance hybrid</p>
        </div>
        <div className="connect-card">
          <p><strong>Jayden Wu</strong><br />Mentorship leader, ready to connect</p>
        </div>
      </div>
    </div>
  );
}
