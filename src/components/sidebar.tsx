"use client";
import { useState } from "react";
import { useTheme } from "../components/ThemeContext"; // Import Theme Context
import {
  FaHome,
  FaBook,
  FaBookmark,
  FaComments,
  FaTrophy,
  FaStar,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get context values
  const [activeButton, setActiveButton] = useState<string>("Home");

  const primaryActions = ["Home", "Lesson", "Bookmark", "Trophy", "Chats", "Achievements"];

  const handleButtonClick = (action: string) => {
    if (primaryActions.includes(action)) {
      setActiveButton(action);
    }
    console.log(`Clicked on ${action}`);
  };

  return (
    <div
      className={`h-screen w-60 shadow-xl flex flex-col ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-b from-blue-100 to-blue-300 text-black"
      }`}
    >
      {/* QCUnite Label */}
      <div className={`flex items-center justify-center mb-4 py-4 h-15 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
        <div className="text-2xl font-bold">QCUnite</div>
      </div>

      {/* Sidebar Buttons */}
      <ul className="flex flex-col space-y-0 w-full">
        {/* Example: Home Button */}
        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm ${
              activeButton === "Home" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-300"
            }`}
            onClick={() => handleButtonClick("Home")}
          >
            <FaHome className="h-6 w-6" />
            <span>Home</span>
          </button>
        </li>

         {/* Lesson Button */}
         <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm ${
              activeButton === "Lesson" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-300"
            }`}
            onClick={() => handleButtonClick("Lesson")}
          >
            <FaBook className="h-6 w-6" />
            <span>Lesson</span>
          </button>
        </li>

        {/* Bookmark Button */}
        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm ${
              activeButton === "Bookmark" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-300"
            }`}
            onClick={() => handleButtonClick("Bookmark")}
          >
            <FaBookmark className="h-6 w-6" />
            <span>Bookmark</span>
          </button>
        </li>

        {/* Trophy Button */}
        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm ${
              activeButton === "Trophy" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-300"
            }`}
            onClick={() => handleButtonClick("Trophy")}
          >
            <FaTrophy className="h-6 w-6" />
            <span>Trophy</span>
          </button>
        </li>

        {/* Chats Button */}
        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm ${
              activeButton === "Chats" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-300"
            }`}
            onClick={() => handleButtonClick("Chats")}
          >
            <FaComments className="h-6 w-6" />
            <span>Chats</span>
          </button>
        </li>

        {/* Achievements Button */}
        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm ${
              activeButton === "Achievements" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-300"
            }`}
            onClick={() => handleButtonClick("Achievements")}
          >
            <FaStar className="h-6 w-6" />
            <span>Achievements</span>
          </button>
        </li>

        {/* Add other buttons here */}
      </ul>

      {/* Dark Mode Toggle */}
      <ul className="flex flex-col space-y-0 w-full mt-auto">

        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm ${
              isDarkMode ? "bg-gray-700 text-white" : "hover:bg-blue-200"
            }`}
            onClick={toggleDarkMode}
          >
            <MdDarkMode className="h-6 w-6" />
            <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </li>

        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm hover:bg-blue-400 hover:text-white`}
            onClick={() => handleButtonClick("Info")}
          >
            <FaInfoCircle className="h-6 w-6" />
            <span>Info</span>
          </button>
        </li>

        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm hover:bg-blue-400 hover:text-white`}
            onClick={() => handleButtonClick("Sign Out")}
          >
            <FaSignOutAlt className="h-6 w-6" />
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
