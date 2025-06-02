import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ FIXED: using the correct component name

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
