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
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col justify-center md:flex-row h-screen">
      {/* Left Panel (Hidden on Small Screens) */}
      <div className="hidden md:flex w-1/2" style={{ backgroundColor: "#8204FF", backgroundImage: "none", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>



      {/* Right Panel (Login Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md text-center">
          <div className="mb-6 text-left">
            <img src={logoImage} alt="Logo" className="w-16 h-16 mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Login to your <span style={{color:"#8204FF"}}>Account</span> </h1>
            <p className="text-gray-600 text-base">See what is going on with your business</p>
          </div>

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center bg-white text-[#828282] border border-gray-300 rounded-lg py-2 mb-6 hover:bg-gray-100 transition">
            <FcGoogle className="w-6 h-6 mr-2" />
            Continue with Google
          </button>

          <p className="text-sm text-gray-400 mb-6">—— or Sign in with Email ——</p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Login Form */}
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
              className="w-full font-bold text-white py-2 rounded-2xl hover:bg-gray-800 transition" style={{backgroundColor:"#8204FF"}}
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-base text-gray-600">
            Not Registered Yet? <a href="/" className=" font-bold hover:underline" style={{color:"#8204FF"}}>Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;