import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => { 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  if(password === Cpassword){
    try {
      const response = await axios.put(
        "http://localhost:8080/api/users/update-password",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response.data);

     

      toast.success("Password successfully updated!");
      navigate("/login");
      
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("Conflict error!");
      } else {
        toast.error("Something went wrong! Try again.");
      }
    }
  }else{
    toast.error("Both Password are not Match ! ");
  }
    // Reset form fields
    setEmail("");
    setPassword("");
    setCPassword("");

  };

  return (
    <div 
      className="h-screen w-full flex justify-end items-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg)`
      }}
    >
      <motion.div
        className="p-8 rounded-xl shadow-lg w-96 mr-40 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Forgot Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Re-Password</label>
            <input
              type="password"
              id="password"
              value={Cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Re-Enter your password"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Done
            </button>
          </div>
        </form>

        <motion.p
          className="mt-4 text-center text-sm text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Do you have an account?{" "}
          <Link to="/Login" className="text-blue-600 hover:text-blue-700">
            Log In
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;  // ✅ Fixed export issue
