import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  

    try {
      const response = await axios.post(
        "https://backendjava-omso.onrender.com/api/users/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login successful, response data:", response.data);

      localStorage.setItem("email", email);  
      localStorage.setItem("id", response.data.user.id);
     
      console.log("id", response.data.user.id)
      setEmail("");
      setPassword("");
      
  
      toast.success("Welcome back, User!");
      
   
      navigate("/");
    window.location.reload();
      
     
      
      
    } catch (error) {
      setLoading(false);  
      if (error.response?.status === 401) {
        toast.error("Invalid email or password!");
      } else {
        toast.error("Something went wrong! Try again.");
      }
    }
  };

  return (
    <div 
      className="h-screen w-full flex justify-end items-center bg-cover bg-center "
      style={{ 
        backgroundImage: `url(https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg)`
      }}
    >
      <motion.div
        className="p-8 shadow-lg w-96 mr-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Login"}
            </button>
          </div>
        </form>

        <motion.p
          className="mt-4 text-center text-sm text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        ><div className="mb-4">
          Don't have an account?{" "}
          <Link to="/Signin" className="text-indigo-600 hover:text-indigo-700">
            Sign In
          </Link></div>
          <div>
          Forgot password?{" "}
          <Link to="/forgotPassword" className="text-indigo-600 hover:text-indigo-700">
            ForgotPassword
          </Link>
          </div>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginPage;


