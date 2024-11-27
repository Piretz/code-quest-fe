import React from "react";
import { FaUser, FaBell, FaMoon, FaSun } from "react-icons/fa"; // Importing moon and sun icons
import { useTheme } from "./ThemeContext"; // Import Theme Context

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get isDarkMode and toggleDarkMode from context

  return (
    <div
      className={`flex items-center justify-between px-6 py-4 h-15 font-poppins ${
        isDarkMode ? "bg-gray-800 text-white" : " bg-[#082751] text-white"
      }`} // Swap background colors for light and dark mode
    >
      <h1 className="font-poppins font-extrabold text-xl">Welcome, KUPAL</h1>
      <div className="flex space-x-6">

        {/* Dark Mode Toggle Button with Icon Sliding Animation */}
        <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center space-x-1 p-3 rounded-full 
            transition-all duration-500 transform shadow-lg
            ${isDarkMode ? "bg-gray-700 border-gray-400" : "bg-white border-blue-600"} 
            border-2`}
        >
          {/* Conditionally render the sun or moon icon based on dark mode */}
          <div
            className={`transition-transform duration-500 transform ${
              isDarkMode ? "translate-x-6" : "-translate-x-6" // Move the sun to the right in dark mode and moon to the left in light mode
            }`}
          >
            {isDarkMode ? (
              <FaMoon className="h-5 w-12 text-black" /> // Moon icon in dark mode
            ) : (
              <FaSun className="h-5 w-12 text-yellow-500" /> // Sun icon in light mode
            )}
          </div>
        </button>

        {/* Notification button */}
        <button className="flex items-center space-x-4">
          <FaBell className="h-7 w-7 shadow-lg" /> {/* Notification Icon */}
        </button>

        {/* Label name player */}
        <button className="flex items-center space-x-8">
          <span>Player 1</span>
        </button>

        {/* User button */}
        <button className="flex items-center space-x-4">
          <FaUser className="h-7 w-7 shadow-lg" /> {/* Player Icon */}
        </button>
      </div>
    </div>
  );
};

export default Header;
