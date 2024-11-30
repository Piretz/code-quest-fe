"use client";
import React, { useState } from "react";

const Header = () => {
  // State to track active button
  const [activeButton, setActiveButton] = useState<string>("");

  // Function to handle button click and set active state
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white px-8 py-4 flex justify-between items-center bg-opacity-80 shadow-xl">
      {/* Logo */}
      <img
        src="/assets/Steamcircle.png"
        alt="Cipherion Logo"
        className="h-14 animate-spin-slow" // Adjust the height based on your logo size
      />

      {/* Centered Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-14 ml-56 text-2xl font-zenDots">
        <a
          href="#home"
          onClick={() => handleButtonClick("home")}
          className={`rounded-full w-28 text-center drop-shadow-lg ${
            activeButton === "home" ? "bg-[#D9D9D9] text-black" : "hover:bg-gray-600 hover:text-white"
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handleButtonClick("about")}
          className={`rounded-full w-28 text-center ${
            activeButton === "about" ? "bg-[#D9D9D9] text-black" : "hover:bg-gray-600 hover:text-white"
          }`}
        >
          About
        </a>
        <a
          href="#courses"
          onClick={() => handleButtonClick("courses")}
          className={`rounded-full w-28 text-center ${
            activeButton === "courses" ? "bg-[#D9D9D9] text-black" : "hover:bg-gray-600 hover:text-white"
          }`}
        >
          Courses
        </a>
        <a
          href="#contact"
          onClick={() => handleButtonClick("contact")}
          className={`rounded-full w-36 text-center ${
            activeButton === "contact" ? "bg-[#D9D9D9] text-black" : "hover:bg-gray-600 hover:text-white"
          }`}
        >
          Contact Us
        </a>
      </nav>

      {/* Right Side Buttons */}
      <div className="flex space-x-4">
        {/* login button */}
        <button
          onClick={() => handleButtonClick("login")}
          className={`hover:bg-[#04AA6D] px-4 py-2 rounded-lg text-white text-2xl font-zenDots ${
            activeButton === "login" ? "bg-[#04AA6D]" : ""
          }`}
        >
          Login
        </button>

        {/* sign up button */}
        <button
          onClick={() => handleButtonClick("signup")}
          className={`bg-[#035CC2] hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-2xl font-zenDotsd ${
            activeButton === "signup" ? "bg-[#035CC2]" : ""
          }`}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
