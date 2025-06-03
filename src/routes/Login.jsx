import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="md:w-1/2 bg-blue-700 text-white flex items-center justify-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome Back to MentorMe</h1>
          <p className="text-lg opacity-90">Reconnect with your mentor or mentee, and continue growing together.</p>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Sign in with Google</h2>
          <p className="text-sm text-gray-500">Use your school Gmail account to continue.</p>
          <GoogleLogin
            onSuccess={(res) => {
              console.log("Google login success:", res);
              alert("Google login successful. Redirecting...");
              // TODO: Add Supabase or backend auth logic
            }}
            onError={() => {
              alert("Google login failed");
            }}
          />
        </div>
      </div>
    </div>
  );
}
