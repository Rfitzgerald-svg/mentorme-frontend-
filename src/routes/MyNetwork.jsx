import React, { useState, useRef, useEffect } from "react";
import "./MyNetwork.css";

const mockNodes = [
  {
    id: "1",
    name: "You",
    role: "Student at The Taft School",
    type: "center",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Finance and lacrosse. Searching for alumni in business.",
  },
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `m${i + 1}`,
    name: `Mentor ${i + 1}`,
    role: "Mentor",
    type: "direct",
    img: `https://randomuser.me/api/portraits/men/${i + 20}.jpg`,
    bio: "Experienced professional. Passionate about mentoring.",
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `p${i + 1}`,
    name: `Peer ${i + 1}`,
    role: "Peer at School",
    type: "recommended",
    img: `https://randomuser.me/api/portraits/women/${i + 30}.jpg`,
    bio: "Active in clubs. Exploring future careers.",
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `x${i + 1}`,
    name: `Cross ${i + 1}`,
    role: "Cross-School",
    type: "cross",
    img: `https://randomuser.me/api/portraits/men/${i + 40}.jpg`,
    bio: "Entrepreneurial and open to sharing.",
  })),
];

export default function MyNetwork() {
  const [selectedId, setSelectedId] = useState("1");
  const [connections, setConnections] = useState({});
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

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

  const center = { x: 600, y: 400 };

  const getPosition = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI;
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    };
  };

  const directNodes = mockNodes.filter((n) => n.type === "direct");
  const recommendedNodes = mockNodes.filter((n) => n.type === "recommended");
  const crossNodes = mockNodes.filter((n) => n.type === "cross");

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

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

      <div className="network-right" onMouseDown={handleMouseDown}>
        <svg className="spiderweb">
          {[...directNodes, ...recommendedNodes, ...crossNodes].map((node, i, arr) => {
            let radius = 140;
            if (recommendedNodes.includes(node)) radius = 220;
            if (crossNodes.includes(node)) radius = 300;
            const pos = getPosition(i, arr.length, radius);
            return (
              <line
                key={`line-${node.id}`}
                x1={center.x + offset.x}
                y1={center.y + offset.y}
                x2={pos.x + offset.x}
                y2={pos.y + offset.y}
                stroke="#bbb"
              />
            );
          })}

          {[...mockNodes].map((node, i, arr) => {
            let radius = 0;
            if (node.type === "direct") radius = 140;
            if (node.type === "recommended") radius = 220;
            if (node.type === "cross") radius = 300;

            const pos = node.type === "center"
              ? center
              : getPosition(i, arr.length, radius);

            return (
              <foreignObject
                key={node.id}
                x={pos.x + offset.x - 45}
                y={pos.y + offset.y - 45}
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
