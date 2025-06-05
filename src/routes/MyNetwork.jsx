import React, { useState } from "react";
import "./MyNetwork.css";

const mockNodes = [
  {
    id: "1",
    name: "You",
    role: "Student at The Taft School",
    type: "center",
    img: "https://via.placeholder.com/80",
    bio: "Focused on finance and lacrosse. Looking to connect with alumni in business.",
  },
  {
    id: "2",
    name: "Alex Johnson",
    role: "Mentor at JPMorgan",
    type: "direct",
    img: "https://via.placeholder.com/80",
    bio: "VP at JPMorgan. Former lacrosse captain. Love mentoring students into finance.",
    mutuals: "Joaquin and 3 others"
  },
  {
    id: "3",
    name: "Sophie Lee",
    role: "Student at Taft",
    type: "recommended",
    img: "https://via.placeholder.com/80",
    bio: "Also interested in investment banking. Club leader at Taft Women in Business.",
    mutuals: "2 shared activities"
  },
  {
    id: "4",
    name: "Daniel Kim",
    role: "Alum at Choate",
    type: "cross",
    img: "https://via.placeholder.com/80",
    bio: "Stanford MBA, currently in private equity. Deeply aligned with Taft network.",
    mutuals: "Matched on 4 interests"
  }
];

export default function MyNetwork() {
  const [selectedId, setSelectedId] = useState("1");

  return (
    <div className="network-wrapper">
      <div className="network-left">
        <div className="profile-minis">
          {mockNodes.map((node) => (
            <div
              key={node.id}
              className={`mini-profile ${node.type} ${selectedId === node.id ? "selected" : ""}`}
              onClick={() => setSelectedId(node.id)}
            >
              <img src={node.img} alt={node.name} />
            </div>
          ))}
        </div>
        <div className="profile-expanded">
          {mockNodes
            .filter((node) => node.id === selectedId)
            .map((node) => (
              <div key={node.id} className="profile-card">
                <img src={node.img} alt={node.name} />
                <h2>{node.name}</h2>
                <p><strong>{node.role}</strong></p>
                <p>{node.bio}</p>
                <p className="mutuals">{node.mutuals}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="network-right">
        <svg className="spiderweb">
          {mockNodes.slice(1).map((node, i) => {
            const angle = (i / (mockNodes.length - 1)) * 2 * Math.PI;
            const x = 300 + 150 * Math.cos(angle);
            const y = 200 + 150 * Math.sin(angle);

            return (
              <line
                key={`line-${node.id}`}
                x1={300}
                y1={200}
                x2={x}
                y2={y}
                stroke="#ccc"
              />
            );
          })}
          {mockNodes.map((node, i) => {
            const angle = (i / mockNodes.length) * 2 * Math.PI;
            const x = 300 + 150 * Math.cos(angle);
            const y = 200 + 150 * Math.sin(angle);

            return (
              <image
                key={node.id}
                href={node.img}
                x={x - 30}
                y={y - 30}
                height="60"
                width="60"
                className={`node-img ${node.type}`}
                onClick={() => setSelectedId(node.id)}
              />
            );
          })}
        </svg>

        <div className="legend">
          <h4>Legend</h4>
          <ul>
            <li><span className="dot center" /> You</li>
            <li><span className="dot direct" /> Mentor</li>
            <li><span className="dot recommended" /> Peer</li>
            <li><span className="dot cross" /> Cross-School</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
