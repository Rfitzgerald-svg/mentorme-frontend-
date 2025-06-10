import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="absolute top-6 left-6">
        <img src="/logo.svg" alt="MentorMe Logo" className="h-6 w-auto" />
      </div>

      <div className="w-full max-w-md flex flex-col items-center space-y-6">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-black">Sign in to MentorMe</h1>

        {/* Google Login */}
        <div className="w-full">
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
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center text-gray-400 text-sm w-full">
          <div className="border-t border-gray-300 w-full" />
          <span className="mx-3">or</span>
          <div className="border-t border-gray-300 w-full" />
        </div>

        {/* Form */}
        <form className="w-full space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1">EMAIL</label>
            <input
              id="email"
              type="email"
              placeholder="you@school.edu"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-medium text-gray-600 mb-1">PASSWORD</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2.5 rounded-md hover:bg-gray-900 transition"
          >
            Log in
          </button>
        </form>

        {/* Footer Links */}
        <div className="pt-4 text-sm text-center space-y-2 w-full">
          <a href="#" className="block text-blue-600 hover:underline">Use single sign-on</a>
          <a href="#" className="block text-blue-600 hover:underline">Reset password</a>
          <p className="text-gray-500">
            No account? <a href="/register" className="text-blue-600 hover:underline">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}
