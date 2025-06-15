import React, { useState, useRef, useEffect } from "react";
import "./MyNetwork.css";

const generateMockNodes = () => {
  const mentors = Array.from({ length: 10 }, (_, i) => ({
    id: `m${i}`,
    name: `Mentor ${i + 1}`,
    role: "Mentor",
    type: "direct",
    img: `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
    bio: "Experienced professional. Passionate about mentoring."
  }));

  const peers = Array.from({ length: 10 }, (_, i) => ({
    id: `p${i}`,
    name: `Peer ${i + 1}`,
    role: "Student",
    type: "recommended",
    img: `https://randomuser.me/api/portraits/women/${i + 30}.jpg`,
    bio: "Active in clubs. Exploring future careers."
  }));

  const cross = Array.from({ length: 10 }, (_, i) => ({
    id: `c${i}`,
    name: `Cross ${i + 1}`,
    role: "Alum",
    type: "cross",
    img: `https://randomuser.me/api/portraits/men/${i + 50}.jpg`,
    bio: "Entrepreneurial and open to sharing."
  }));

  return [
    {
      id: "you",
      name: "You",
      role: "Student at The Taft School",
      type: "center",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      bio: "Finance and lacrosse. Searching for alumni in business.",
    },
    ...mentors,
    ...peers,
    ...cross,
  ];
};

export default function MyNetwork() {
  const [nodes] = useState(generateMockNodes());
  const [selectedId, setSelectedId] = useState("you");
  const [connections, setConnections] = useState({});
  const svgRef = useRef(null);
  const dragRef = useRef({ dragging: false, x: 0, y: 0 });

  useEffect(() => {
    const svg = svgRef.current;
    let startX, startY, scrollX, scrollY;

    const onMouseDown = (e) => {
      dragRef.current.dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      scrollX = svg.scrollLeft;
      scrollY = svg.scrollTop;
    };

    const onMouseMove = (e) => {
      if (!dragRef.current.dragging) return;
      svg.scrollLeft = scrollX - (e.clientX - startX);
      svg.scrollTop = scrollY - (e.clientY - startY);
    };

    const onMouseUp = () => {
      dragRef.current.dragging = false;
    };

    svg.addEventListener("mousedown", onMouseDown);
    svg.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      svg.removeEventListener("mousedown", onMouseDown);
      svg.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const centerX = 600;
  const centerY = 600;

  const handleConnect = (id) => {
    const state = connections[id];
    const next =
      state === "Connect"
        ? "Request Sent"
        : state === "Request Sent"
        ? "Connected"
        : "Connect";
    setConnections({ ...connections, [id]: next });
  };

  const getStatus = (id) => connections[id] || "Connect";

  const getPosition = (index, radius, count) => {
    const angle = (index / count) * 2 * Math.PI;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const youNode = nodes.find((n) => n.type === "center");
  const mentors = nodes.filter((n) => n.type === "direct");
  const peers = nodes.filter((n) => n.type === "recommended");
  const cross = nodes.filter((n) => n.type === "cross");

  const layers = [
    { group: mentors, radius: 160 },
    { group: peers, radius: 300 },
    { group: cross, radius: 440 },
  ];

  return (
    <div className="network-wrapper">
      <div className="network-left">
        <div className="profile-minis">
          {nodes.map((node) => (
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
          {nodes
            .filter((n) => n.id === selectedId)
            .map((node) => (
              <div key={node.id} className="profile-card">
                <img src={node.img} alt={node.name} />
                <h2>{node.name}</h2>
                <p><strong>{node.role}</strong></p>
                <p>{node.bio}</p>
                {node.type !== "center" && (
                  <button
                    className={`connect-button ${getStatus(node.id).replace(" ", "").toLowerCase()}`}
                    onClick={() => handleConnect(node.id)}
                  >
                    {getStatus(node.id)}
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="network-right" ref={svgRef}>
        <svg className="spiderweb" width="1200" height="1200">
          {/* Center lines */}
          {layers.flatMap((layer) =>
            layer.group.map((node, i) => {
              const { x, y } = getPosition(i, layer.radius, layer.group.length);
              return (
                <line
                  key={`line-${node.id}`}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={
                    node.type === "direct"
                      ? "#4CAF50"
                      : node.type === "recommended"
                      ? "#FFD700"
                      : "#999"
                  }
                  strokeWidth="1.5"
                />
              );
            })
          )}

          {/* Center node */}
          <foreignObject x={centerX - 45} y={centerY - 45} width="90" height="90">
            <div className="node-card center">
              <img src={youNode.img} alt="You" />
              <p>{youNode.bio}</p>
            </div>
          </foreignObject>

          {/* Render all other nodes */}
          {layers.flatMap((layer) =>
            layer.group.map((node, i) => {
              const { x, y } = getPosition(i, layer.radius, layer.group.length);
              return (
                <foreignObject key={node.id} x={x - 45} y={y - 45} width="90" height="90">
                  <div
                    className={`node-card ${node.type}`}
                    onClick={() => setSelectedId(node.id)}
                  >
                    <img src={node.img} alt={node.name} />
                    <p>{node.bio}</p>
                  </div>
                </foreignObject>
              );
            })
          )}
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
