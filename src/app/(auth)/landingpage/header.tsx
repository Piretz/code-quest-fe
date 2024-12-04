"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js for navigation

const Header = () => {
  const [activeButton, setActiveButton] = useState<string>("");
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false); // State to control login form visibility

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);

    if (buttonName === "login") {
      setIsLoginVisible(true); // Show the login form
    }
  };

  const closeLoginForm = () => {
    setIsLoginVisible(false); // Close the login form
  };

  return (
    <>
      {/* Header Navigation */}
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
          {/* Login Button */}
          <button
            onClick={() => handleButtonClick("login")}
            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots ${
              activeButton === "login" ? "bg-[#04AA6D]" : "hover:bg-[#04AA6D]"
            }`}
          >
            Login
          </button>

          {/* Sign Up Button */}
          <Link href="/signup">
            <button className="bg-[#035CC2] hover:bg-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* Login Form Modal */}
      {isLoginVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closeLoginForm} // Close when clicking outside the form
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 w-96 relative"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeLoginForm}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
              {/* Username Input */}
              <label htmlFor="username" className="block text-black font-medium mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full border rounded-lg p-2 mb-4 text-black"
              />

              {/* Password Input */}
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg p-2 mb-4 text-black"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
