// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const email=localStorage.getItem("email");
  const navigate=useNavigate();
  const Logout=()=>{
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    toast.success("Logout is sucessfull !");
    navigate("/Login");
   
    window.location.reload();


  }
  return (
    <nav className="bg-gray-800  flex text-white py-4 w-full">
     
      <div className="mx-auto ml-64 flex  space-x-4">
        <Link to="/" className="hover:text-blue-400 cursor-pointer">Home</Link>
        <Link to="/About" className="hover:text-blue-400 cursor-pointer">About</Link>
        <Link to="/Services" className="hover:text-blue-400 cursor-pointer">Services</Link>
        <Link to="/Contact" className="hover:text-blue-400 cursor-pointer">Contact</Link>
        <Link to="/create" className="hover:text-blue-400 cursor-pointer">Add car</Link>
      </div>
      <div className=" ml-64 flex text-white mr-10">
        
          <div  className="hover:text-blue-400 cursor-pointer" onClick={Logout}>Log out</div>
      
        
       
      </div>
    </nav>
  );
}

export default Navbar;







