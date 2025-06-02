import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6">Login to MentorMe</h1>
      <p className="mb-4">Use your Gmail to sign in.</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Google login success:", credentialResponse);
          alert("Logged in successfully. Check browser console.");
          // TODO: Connect to Supabase
        }}
        onError={() => {
          alert("Google login failed");
        }}
      />
    </div>
  );
}
