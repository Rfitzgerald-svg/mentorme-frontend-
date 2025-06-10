import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo top-left */}
      <div className="absolute top-6 left-6">
        <img src="/logo.svg" alt="MentorMe Logo" className="h-8 w-auto" />
      </div>

      {/* Centered Form */}
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-semibold text-center text-black">Sign in to MentorMe</h1>

        <GoogleLogin
          onSuccess={(res) => {
            console.log("Google login success:", res);
            alert("Google login successful. Redirecting...");
          }}
          onError={() => {
            alert("Google login failed");
          }}
          width="100%"
        />

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <hr className="flex-grow border-gray-300" />
          <span>or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-600">EMAIL</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-600">PASSWORD</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
          >
            Log in
          </button>
        </form>

        <div className="pt-4 space-y-2 text-center text-sm text-blue-600">
          <a href="#" className="block hover:underline">Use single sign-on</a>
          <a href="#" className="block hover:underline">Reset password</a>
          <p className="text-gray-500">
            No account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}
