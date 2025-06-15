import React, { useState } from "react";
import "./MyNetwork.css";

const mockNodes = [
  {
    id: "0",
    name: "You",
    role: "Student at The Taft School",
    type: "center",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Finance and lacrosse. Searching for alumni in business.",
  },
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `${i + 1}`,
    name: `Mentor ${i + 1}`,
    role: `Mentor at Company ${i + 1}`,
    type: "direct",
    img: `https://randomuser.me/api/portraits/men/${20 + i}.jpg`,
    bio: "Experienced professional. Passionate about mentorship.",
    mutuals: `${i + 1} mutual connections`,
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `${i + 11}`,
    name: `Peer ${i + 1}`,
    role: `Student at School ${i + 1}`,
    type: "recommended",
    img: `https://randomuser.me/api/portraits/women/${30 + i}.jpg`,
    bio: "Active in clubs. Exploring future careers.",
    mutuals: `Shared classes and clubs`,
  })),
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `${i + 21}`,
    name: `Cross ${i + 1}`,
    role: `Alum at Cross School ${i + 1}`,
    type: "cross",
    img: `https://randomuser.me/api/portraits/men/${40 + i}.jpg`,
    bio: "Entrepreneurial and open to sharing experiences.",
    mutuals: `3 shared interests`,
  })),
];

export default function MyNetwork() {
  const [selectedId, setSelectedId] = useState("0");
  const [connections, setConnections] = useState({});

  const getStatus = (id) => connections[id] || "Connect";

  const handleConnect = (id) => {
    const current = connections[id];
    const next =
      current === "Connect"
        ? "Request Sent"
        : current === "Request Sent"
        ? "Connected"
        : "Connect";
    setConnections({ ...connections, [id]: next });
  };

  const layers = {
    center: [mockNodes[0]],
    direct: mockNodes.slice(1, 11),
    recommended: mockNodes.slice(11, 21),
    cross: mockNodes.slice(21),
  };

  const renderLayer = (nodes, radius, centerX, centerY) => {
    return nodes.map((node, i) => {
      const angle = (i / nodes.length) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      return (
        <foreignObject
          key={node.id}
          x={x - 45}
          y={y - 45}
          width="90"
          height="90"
          className="node-fo"
        >
          <div
            className={`node-card ${node.type}`}
            onClick={() => setSelectedId(node.id)}
          >
            <img src={node.img} alt={node.name} />
            <p>{node.bio}</p>
          </div>
        </foreignObject>
      );
    });
  };

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
                <button
                  className={`connect-button ${getStatus(selectedId).replace(" ", "").toLowerCase()}`}
                  onClick={() => handleConnect(selectedId)}
                >
                  {getStatus(selectedId)}
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="network-right">
        <svg className="spiderweb">
          {renderLayer(layers.direct, 150, 400, 250)}
          {renderLayer(layers.recommended, 220, 400, 250)}
          {renderLayer(layers.cross, 300, 400, 250)}

          <foreignObject x={400 - 45} y={250 - 45} width="90" height="90">
            <div className="node-card center">
              <img src={mockNodes[0].img} alt="You" />
              <p>{mockNodes[0].bio}</p>
            </div>
          </foreignObject>
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
