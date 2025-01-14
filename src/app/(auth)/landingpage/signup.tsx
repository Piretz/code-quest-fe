'use client';
import Link from "next/link";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signupage = () => {
  const [loading, setLoading] = useState(false); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    birthdayMDY: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/user-student/register", {
        firstname: formData.firstName,    
        lastname: formData.lastName,          
        email: formData.email,
        birthdate: formData.birthdayMDY,      
        username: formData.username,
        user_password: formData.password,     
        user_password_confirmation: formData.confirmPassword,  
      });
  
      if (response.status === 201) {
        toast.success("Registration successful!");
      } else {
        toast.error(`Error: ${response.data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      const errorMessage = (error as any).response?.data?.message || 'An error occurred';
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
      <div
        className="relative w-[1234px] h-[800px] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between bg-[url('/assets/logsignPanel.png')]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 hover:scale-100"
        >
          ✖
        </button>
        <div className="flex flex-col items-start justify-center p-40 w-full h-full text-white font-poppins">
          <div className="flex items-center fixed top-48 h-28 left-96 z-50">
            <h2 className="text-5xl font-bold font-poppins p-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 fixed absolute top-6 left-44 ">Sign Up</h2>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="mb-4 relative">
              <label htmlFor="firstName" className="block text-md font-medium mb-2">
                First Name:
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="lastName" className="block text-md font-medium mb-2">
                Last Name:
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="username" className="block text-md font-medium mb-2">
                Username:
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="email" className="block text-md font-medium mb-2">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="birthdayMDY" className="block text-md font-medium mb-2">
                Birthday:
              </label>
              <input
                id="birthdayMDY"
                type="date"
                value={formData.birthdayMDY}
                onChange={handleInputChange}
                className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-md font-medium mb-2">
                Password:
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="confirmPassword" className="block text-md font-medium mb-2">
                Confirm Password:
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSignUpSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute right-40">
          <img
            src="/assets/signup_logo.png"
            alt="Logo"
            className="w-[500px] h-[700px] object-contain"
          />
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Signupage;
