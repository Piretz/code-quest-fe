"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js for navigation

const Header = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-screen bg-opacity-80 text-white px-4 sm:px-8 py-4 flex justify-between items-center shadow-2xl">
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
                ? "#intro" // Home links to the intro section
                : item.toLowerCase() === "about"
                ? "#heropage" // About links to the heropage section
                : item.toLowerCase() === "courses"
                ? "#courses" // Courses links to the courses section
                : "#footer" // Contact Us links to the footer section
            }
            onClick={() => handleButtonClick(item.toLowerCase())}
            className={`rounded-full w-20 sm:w-28 text-center py-1 ${
              activeButton === item.toLowerCase()
                ? "bg-[#D9D9D9] text-black"
                : "hover:bg-gray-600 hover:text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Right Side Buttons */}
      <div className="flex space-x-2 sm:space-x-4">
        {/* Login Button Link */}
        <Link href="/login">
          <button
            onClick={() => handleButtonClick("login")}
            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots ${
              activeButton === "login" ? "bg-[#04AA6D]" : "hover:bg-[#04AA6D]"
            }`}
          >
            Login
          </button>
        </Link>

        {/* Sign Up Button Link */}
        <Link href="/signup">
          <button
            onClick={() => handleButtonClick("signup")}
            className={`bg-[#035CC2] hover:bg-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots`}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
