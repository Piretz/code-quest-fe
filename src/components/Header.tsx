import React from "react";
import { FaUser, FaBell, FaCog } from "react-icons/fa";
import { useTheme } from "../components/ThemeContext"; // Import Theme Context

const Header = () => {
  const { isDarkMode } = useTheme(); // Get isDarkMode from context

  return (
    <div
      className={`flex items-center justify-between px-6 py-4 h-15 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-xl font-bold"></h1>
      <div className="flex space-x-6">
        {/* Settings Button */}
        <button className="flex items-center space-x-4 ">
          <FaCog className="h-7 w-7" /> {/* Settings Icon */}
          <span></span>
        </button>
        <button className="flex items-center space-x-4 ">
          <FaBell className="h-7 w-7" /> {/* Player Icon */}
          <span></span>
        </button>
        <button className="flex items-center space-x-8 ">
          {/* <FaBell className="h-5 w-5" /> Player Icon */}
          <span>Player 1</span>
        </button>
        <button className="flex items-center space-x-4 ">
          <FaUser className="h-7 w-7" /> {/* Player Icon */}
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
