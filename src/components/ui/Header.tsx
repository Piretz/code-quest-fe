import React from "react";
import { FaUser, FaBell, FaCog } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md"; // Import Dark Mode Icon
import { useTheme } from "./ThemeContext"; // Import Theme Context

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get isDarkMode and toggleDarkMode from context

  return (
    <div
      className={`flex items-center justify-between px-6 py-4 h-15 font-poppins ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-[#082751] text-black"
      }`}
    >
      <h1 className="text-xl"></h1>
      <div className="flex space-x-6 text-white">

        {/* Dark Mode Toggle Button with Animation */}
        <button
          className={`flex items-center space-x-4 transition-transform duration-300 transform ${
            isDarkMode ? "rotate-180" : "rotate-0"
          }`}
          onClick={toggleDarkMode}
        >
          <MdDarkMode
            className={`h-7 w-7 transition-all duration-500 ${
              isDarkMode ? "text-gray-400" : "text-white"
            }`} 
          /> {/* Dark Mode Icon */}
          <span>{isDarkMode ? "" : ""}</span>
        </button>

        {/* Notification button */}
        <button className="flex items-center space-x-4 ">
          <FaBell className="h-7 w-7" /> {/* Notification Icon */}
          <span></span>
        </button>

        {/* Label name player */}
        <button className="flex items-center space-x-8 ">
          <span>Player 1</span>
        </button>

        {/* User button */}
        <button className="flex items-center space-x-4 ">
          <FaUser className="h-7 w-7" /> {/* Player Icon */}
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
