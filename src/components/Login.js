import React, { useState } from "react";
import Autumn from '../Image/Autumn.png';
// import googleicon from './Images/th.jpeg';
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      console.log("Login successful!");
      // Add login logic
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="bg-gray-700 w-1/2 h-full"></div>

      {/* Right Side */}
      <div className="bg-white flex items-center justify-center w-1/2">
        <div className="w-4/5 max-w-md text-center">
          {/* Header */}
          <div className="text-left mb-10">
            <img src={Autumn} alt="Logo" className="w-16 h-16 mb-2" />
            <h1 className="text-3xl font-bold text-gray-800">Login to your Account</h1>
            <p className="text-gray-600">See what is going on with your business</p>
          </div>

          {/* Google Sign-in Button */}
          <button className="bg-white border border-gray-300 text-gray-700 font-bold py-3 px-5 rounded-md flex items-center justify-center w-full hover:bg-gray-100">
            <FcGoogle  className="w-5 h-5 mr-2"  /> Continue with Google
          </button>

          {/* Divider */}
          <div className="my-6">
            <p className="text-sm text-gray-600 border-t border-b border-gray-300 py-2">Or Sign in with Email</p>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-6 text-left">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe" className="text-gray-700 text-sm">
                  Remember Me
                </label>
              </div>
              <a href="/" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>

          {/* Not Registered Section */}
          <p className="text-gray-600 text-sm mt-6">
            Not registered yet? <a href="/" className="text-blue-600 hover:underline">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
