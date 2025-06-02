// Calendar and Mentorship Platform MVP
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";

const API_BASE = "https://mentorme-production.up.railway.app";

const Card = ({ children, ...props }) => (
  <div className="bg-white rounded-2xl shadow-xl p-4" {...props}>{children}</div>
);
const CardContent = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
const Button = ({ children, onClick, className = "", variant = "default" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl text-white font-semibold ${variant === "outline" ? "bg-white text-black border border-gray-300" : "bg-blue-600"} ${className}`.trim()}
  >
    {children}
  </button>
);
const Input = ({ ...props }) => (
  <input className="border rounded px-3 py-2 w-full" {...props} />
);

// ... rest of your code remains unchanged below

" + document.split("const API_BASE =")[1]
    }
  ]
}
