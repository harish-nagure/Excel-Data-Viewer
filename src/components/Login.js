import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoImage from '../Image/Autumn.png';
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

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
      // console.log("Login successful!");
      navigate('/dashboard');
      
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="bg-[#C4C4C4] w-1/2 hidden md:flex "></div>

      {/* Right Panel */}
      <div className="bg-white w-full md:w-1/2 flex items-center justify-center">
        <div className="w-4/5 max-w-md text-center">
          <div className="mb-10 text-left">
            <img src={logoImage} alt="Logo" className="w-16 h-16 mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Login to your Account</h1>
            <p className="text-gray-600 text-base">See what is going on with your business</p>
          </div>

          <button className="w-full flex items-center justify-center bg-white text-[#828282] border border-gray-300 rounded-lg py-2 mb-6 hover:bg-gray-100 transition">
            <FcGoogle className="w-6 h-6 mr-2" />
            Continue with Google
          </button>

          <p className="text-sm text-gray-400 mb-6">------------- or Sign in with Email ------------- </p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
              <input
                type="text"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                />
                <label htmlFor="rememberMe" className="ml-2 text-gray-600">Remember Me</label>
              </div>
              <a href="/" className="text-sm text-gray-600 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-black font-bold text-white py-2 rounded-2xl hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-base  text-gray-600">
            Not Registered Yet? <a href="/" className="text-black font-bold hover:underline">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;