"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [activeButton, setActiveButton] = useState<string>("");
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false); // State for login form
  const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false); // State for sign-up form

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);

    if (buttonName === "login") {
      setIsLoginVisible(true); // Show login form
    } else if (buttonName === "signup") {
      setIsSignUpVisible(true); // Show sign-up form
    }
  };

  const closeLoginForm = () => {
    setIsLoginVisible(false); // Close login form
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 w-screen bg-opacity-80 bg-transparent text-white px-4 sm:px-8 py-4 flex justify-between items-center shadow-lg">
        {/* Logo */}
        <img
          src="/assets/Steamcircle.png"
          alt="Cipherion Logo"
          className="h-12 sm:h-14 animate-spin-slow"
        />

        {/* Centered Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-4 sm:space-x-14 text-sm sm:text-xl font-zenDots">
          {["Home", "About", "Courses", "Contact Us"].map((item, index) => (
            <a
              key={index}
              href={
                item.toLowerCase() === "home"
                  ? "#intro"
                  : item.toLowerCase() === "about"
                  ? "#heropage"
                  : item.toLowerCase() === "courses"
                  ? "#courses"
                  : "#footer"
              }
              onClick={() => handleButtonClick(item.toLowerCase())}
              className={`rounded-full w-20 sm:w-28 text-center py-1 ${
                activeButton === item.toLowerCase()
                  ? "bg-gray-300 text-black"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex space-x-2 sm:space-x-4">
          {/* Login Button */}
          <button
            onClick={() => handleButtonClick("login")}
            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots ${
              activeButton === "login" ? "bg-green-600" : "hover:bg-green-600"
            }`}
          >
            Login
          </button>

          {/* Sign Up Button */}
          <button
            onClick={() => handleButtonClick("signup")}
            className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Login Form Modal */}
      {isLoginVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md"
        >
          <div
            className="relative w-[1234px] h-[800px] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between bg-[url('/assets/logpanel.png')]"
            onClick={(e) => e.stopPropagation()} // Prevent click event propagation
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 hover:scale-100"
              onClick={closeLoginForm}
            >
              ✖
            </button>

            {/* Login Form Content */}
            <div className="flex flex-col items-start justify-center p-40 w-full h-full text-white font-poppins">
              {/* Title with Image Positioned to the Left */}
              <div className="flex items-center mb-3 translate-x-14 -translate-y-5 z-20">
                <h2 className="text-5xl font-bold font-poppins p-2 translate-x-14 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300">Login</h2>
              </div>

              {/* Form Container */}
              <div className="w-[450px] bg-opacity-70 p-6 rounded-lg">
                {/* Username Input */}
                <div className="mb-4 relative">
                  <label htmlFor="username" className="block text-md font-medium mb-2">
                    Username
                  </label>
                  <div className="absolute left-3 translate-y-2 transform text-gray-400">
                    {/* Icon */}
                    <i className="fas fa-user"></i> {/* Replace with your preferred icon */}
                  </div>
                  <input
                    id="username"
                    type="text"
                    placeholder="Ex: johndoe@yahoo.com"
                    className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 pl-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-6 relative">
                  <label htmlFor="password" className="block text-md font-medium mb-2">
                    Password
                  </label>
                  <div className="absolute left-3 translate-y-2 transform text-gray-400">
                    {/* Icon */}
                    <i className="fas fa-lock"></i> {/* Replace with your preferred icon */}
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 pl-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Login Button with Image */}
                <button className="w-52 h-35 rounded-lg py-2 text-lg font-semibold">
                  <img
                    src="/assets/btnlog.png" // Your image path
                    alt="Login Button"
                    className="w-full h-full object-cover rounded-lg translate-x-24 transition-transform transform hover:scale-110"
                  />
                </button>
              </div>

              {/* Social Login & Links */}
              <div className="text-center translate-x-28 -translate-y-5">
                <p className="text-sm">or login with</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {/* Facebook Button with Heroicon */}
                  <button
                    type="button"
                    className="bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-full px-4 py-2"
                    aria-label="Login with Facebook" // Add a descriptive label
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                  </button>

                  {/* Google Button with Heroicon */}
                  <button
                    type="button"
                    className="bg-[#DB4437] hover:bg-[#a83529] text-white rounded-full px-4 py-2"
                    aria-label="Login with Google" // Add a descriptive label
                  >
                    <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 justify-center" />
                  </button>
                </div>
                <p className="mt-4 text-sm">
                  Forgot password?{" "}
                  <a href="#" className="text-red-500 hover:underline">
                    Reset password
                  </a>
                </p>
              </div>
            </div>

            {/* Logolog Image Positioned at the Bottom */}
            <div className="absolute right-40">
              <img
                src="/assets/logolog.png"
                alt="Logo"
                className="w-[500px] h-[700px] object-contain"
              />
            </div>
            {/* Backpanel Image Positioned at the Top Left */}
            <div className="absolute -translate-y-1 w-[720px] h-[250px] bg-[url('/assets/backpanel.png')] bg-cover bg-no-repeat z-0">
                {/* This will ensure it covers the top area aligned to the width of logpanel.png */}
            </div>
          </div>
        </div>
      )}

            {/* Sign-Up Form Modal */}
        {isSignUpVisible && (
          <div
            className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md"
          >
            <div
              className="relative w-[1234px] h-[800px] bg-cover bg-center rounded-xl right-20 shadow-lg flex flex-col justify-between bg-[url('/assets/logpanel.png')]"
              onClick={(e) => e.stopPropagation()} // Prevent click event propagation
            >

              {/* Sign-Up Form Content */}
              <div className="flex flex-col items-start justify-center p-40 w-full h-full text-white font-poppins -translate-y-8 z-10">
                {/* Title with Image Positioned to the Left */}
                <div className="flex items-center mb-3 translate-x-14 -translate-y-5 z-10">
                  {/* Image for Sign-Up */}
                  <img
                    src="/assets/btnback.png" // Your image path
                    alt="Back to Login"
                    className="w-50 h-30 -translate-x-16 transition-transform transform hover:scale-110 cursor-pointer"
                    onClick={() => {
                      setIsSignUpVisible(false); // Hide Sign-Up Form
                      setIsLoginVisible(true);  // Show Login Form
                    }}
                  />
                  <h2 className="text-5xl font-bold font-poppins -translate-x-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300">Sign Up</h2>
                </div>

                {/* Form Container */}
                <div className="font-poppins bg-opacity-70 p-6 rounded-lg">
                  {/* First Row: First Name, Last Name, Username */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-md font-medium mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Ex: John"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-md font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Ex: Doe"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="username" className="block text-md font-medium mb-2">
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        placeholder="Ex: johndoe"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Second Row: Email, Birthday */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-md font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Ex: j***@yahoo.com"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>

                    {/* Birthday */}
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label htmlFor="birthdayMonth" className="block text-md font-medium mb-2">
                          MM
                        </label>
                        <input
                          id="birthdayMonth"
                          type="text"
                          maxLength={2}
                          placeholder="MM"
                          className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="birthdayDay" className="block text-md font-medium mb-2">
                          DD
                        </label>
                        <input
                          id="birthdayDay"
                          type="text"
                          maxLength={2}
                          placeholder="DD"
                          className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="birthdayYear" className="block text-md font-medium mb-2">
                          YYYY
                        </label>
                        <input
                          id="birthdayYear"
                          type="text"
                          maxLength={4}
                          placeholder="YYYY"
                          className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Third Row: Password, Confirm Password */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="password" className="block text-md font-medium mb-2">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-md font-medium mb-2">
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Sign Up Button */}
                  <button className="w-full h-12 rounded-lg translate-x-full translate-y-14 transition-transform transform hover:scale-105 cursor-pointer">
                    <img
                      src="/assets/btnsign.png" // Your image path for button
                      alt="Sign Up Button"
                      className="w-20 h-16 object-cover rounded-lg -translate-x-20"
                    />
                  </button>
                  
                </div>
              </div>
                      <div className="absolute -right-72">
                              <img
                                src="/assets/logosign.png"
                                alt="Logo"
                                className="w-[500px] h-[700px] object-contain"
                              />
                      </div>
                            {/* Backpanel Image Positioned at the Top Left */}
                            <div className="absolute -translate-y-1 w-[720px] h-[250px] bg-[url('/assets/backpanel.png')] bg-cover bg-no-repeat">
                                {/* This will ensure it covers the top area aligned to the width of logpanel.png */}
                            </div>
            </div>
          </div>
        )}



      </>
    );
  };

export default Header;
