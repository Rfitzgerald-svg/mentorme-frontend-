import React, { useState, useEffect } from "react";
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

  const [videoURL, setVideoURL] = useState(localStorage.getItem("videoBioURL") || null);

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

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setVideoURL(url);
    localStorage.setItem("videoBioURL", url);
  };

  const userInterests = ["Finance", "Mentorship", "Media"];

  const allUsers = [
    {
      name: "Casey Johnson",
      description: "2nd year at Princeton, interested in VC",
      interests: ["Finance", "Startups"]
    },
    {
      name: "Ava Thomas",
      description: "Taft alum · Media + Finance hybrid",
      interests: ["Media", "Education"]
    },
    {
      name: "Jayden Wu",
      description: "Mentorship leader, ready to connect",
      interests: ["Mentorship", "Leadership"]
    }
  ];

  const matchedUsers = allUsers
    .map(user => {
      const shared = user.interests.filter(i => userInterests.includes(i));
      return { ...user, shared };
    })
    .filter(user => user.shared.length > 0)
    .slice(0, 3);

  return (
    <div className="profile-wrapper">
      <div className="copy-link-box" onClick={() => {
        const slug = name.toLowerCase().replaceAll(" ", "-");
        const url = `${window.location.origin}/profile/${slug}`;
        navigator.clipboard.writeText(url);
        window.open(url, "_blank");
      }}>
        📋 Share Profile
      </div>

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
          {videoURL ? (
            <>
              <h4>🎥 My Video Bio</h4>
              <video src={videoURL} controls className="video-preview" />
              <label className="change-video-label">
                Change Video
                <input type="file" accept="video/mp4,video/quicktime" onChange={handleVideoUpload} hidden />
              </label>
            </>
          ) : (
            <>
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
                  <label className="upload-btn">
                    Upload Video
                    <input type="file" accept="video/mp4,video/quicktime" onChange={handleVideoUpload} hidden />
                  </label>
                </div>
              )}
            </>
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
          <p>{userInterests.join(" · ")}</p>
        </div>
      </div>

      <div className="profile-right">
        <h3>Next Connects 🔗</h3>
        {matchedUsers.map((user, index) => (
          <div key={index} className="connect-card">
            <p><strong>{user.name}</strong><br />{user.description}</p>
            <p className="match-reason">Shared Interest: {user.shared[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
