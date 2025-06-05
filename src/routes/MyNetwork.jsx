import React, { useState } from "react";
import "./MyNetwork.css";

const mockNodes = [
  {
    id: "1",
    name: "You",
    role: "Student at Taft",
    type: "center",
    img: "https://via.placeholder.com/80",
    bio: "Focused on finance and lacrosse. Looking to connect with alumni in business.",
  },
  {
    id: "2",
    name: "Alex Johnson",
    role: "Mentor - JPMorgan",
    type: "direct",
    img: "https://via.placeholder.com/80",
    bio: "VP at JPMorgan. Former lacrosse captain. Love mentoring students into finance.",
  },
  {
    id: "3",
    name: "Sophie Lee",
    role: "Student - Taft",
    type: "recommended",
    img: "https://via.placeholder.com/80",
    bio: "Also interested in investment banking. Club leader at Taft Women in Business.",
  },
  {
    id: "4",
    name: "Daniel Kim",
    role: "Alum - Choate",
    type: "cross",
    img: "https://via.placeholder.com/80",
    bio: "Stanford MBA, currently in private equity. Deeply aligned with Taft network.",
  }
];

export default function MyNetwork() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="network-wrapper">
      <div className="network-left">
        {selectedNode ? (
          <div className="profile-card">
            <img src={selectedNode.img} alt={selectedNode.name} />
            <h2>{selectedNode.name}</h2>
            <p><strong>{selectedNode.role}</strong></p>
            <p>{selectedNode.bio}</p>
            <button onClick={() => setSelectedNode(null)}>Close</button>
          </div>
        ) : (
          <div className="placeholder-text">Click a node to view their profile</div>
        )}
      </div>

      <div className="network-right">
        <svg className="spiderweb">
          {mockNodes.map((node, i) => (
            <circle
              key={node.id}
              className={`node ${node.type}`}
              cx={300 + 150 * Math.cos((i / mockNodes.length) * 2 * Math.PI)}
              cy={200 + 150 * Math.sin((i / mockNodes.length) * 2 * Math.PI)}
              r="30"
              onClick={() => setSelectedNode(node)}
            />
          ))}
        </svg>
        <div className="labels">
          {mockNodes.map((node, i) => (
            <div
              key={node.id}
              className="node-label"
              style={{
                left: `${300 + 150 * Math.cos((i / mockNodes.length) * 2 * Math.PI) - 30}px`,
                top: `${200 + 150 * Math.sin((i / mockNodes.length) * 2 * Math.PI) + 40}px`
              }}
            >
              {node.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
