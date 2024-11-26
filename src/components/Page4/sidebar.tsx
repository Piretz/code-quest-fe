"use client";
import Image from "next/image"; // Import Next.js Image
import { useState } from "react";
import { useTheme } from "./ThemeContext"; // Import Theme Context
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
      className={`h-screen w-56 shadow-xl flex flex-col text-white ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-b from-[#082751] to-[#035CC2] text-black"
      }`}
    >
      {/* QCUnite Logo and Title */}
      <div
        className={`flex items-center justify-center mb-4 py-4 h-15 space-x-3 ${
          isDarkMode ? "bg-gray-800" : "bg-[#082751]"
        }`}
      >
        {/* Logo */}
        <Image
          src="/assets/steam.ico" // Path to your .ico logo
          alt="QCUnite Logo"
          width={32} // Width of the logo
          height={32} // Height of the logo
          className="object-contain" // Ensure it scales properly
        />
        <div className="text-2xl font-poppins font-bold text-white">QCUnite</div>
      </div>

      {/* Sidebar Buttons */}
      <ul className="flex flex-col space-y-0 w-full ">
        {/* Home Button */}
        <li>
          <button
            className={`flex items-center space-x-8 w-full p-3 rounded-sm font-poppins font-normal  ${
              activeButton === "Home" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-500"
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
            className={`flex items-center space-x-8 w-full p-3 rounded-sm font-poppins font-normal ${
              activeButton === "Lesson" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-500"
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
            className={`flex items-center space-x-8 w-full p-3 rounded-sm font-poppins font-normal ${
              activeButton === "Bookmark" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-500"
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
            className={`flex items-center space-x-8 w-full p-3 rounded-sm font-poppins font-normal ${
              activeButton === "Trophy" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-500"
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
            className={`flex items-center space-x-8 w-full p-3 rounded-sm font-poppins font-normal ${
              activeButton === "Chats" ? "bg-blue-800 text-white" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-blue-500"
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
            className={`flex items-center space-x-8 w-full p-3 rounded-sm font-poppins font-normal ${
              activeButton === "Achievements"
                ? "bg-blue-800 text-white"
                : isDarkMode
                ? "hover:bg-gray-700"
                : "hover:bg-blue-500"
            }`}
            onClick={() => handleButtonClick("Achievements")}
          >
            <FaStar className="h-6 w-6" />
            <span>Achievements</span>
          </button>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <div className="mt-auto">
        {/* Divider Line */}
        <div
          className={`border-t ${isDarkMode ? "border-gray-600" : "border-white"} w-full mb-2`}
        ></div>

        <ul className="flex flex-col space-y-0 w-full">
          <li>
            <button
              className={`flex items-center space-x-8 w-full p-3 rounded-sm font-poppins font-normal ${
                isDarkMode ? "bg-gray-700 text-white" : "hover:bg-blue-400 hover:text-white"
              }`}
              onClick={toggleDarkMode}
            >
              <MdDarkMode className="h-6 w-6" />
              <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
            </button>
          </li>

          <li>
            <button
              className={`flex items-center space-x-8 w-full p-3 rounded-sm hover:bg-blue-400 hover:text-white font-poppins font-normal`}
              onClick={() => handleButtonClick("Info")}
            >
              <FaInfoCircle className="h-6 w-6" />
              <span>Info</span>
            </button>
          </li>

          <li>
            <button
              className={`flex items-center space-x-8 w-full p-3 rounded-sm hover:bg-blue-400 hover:text-white font-poppins font-normal`}
              onClick={() => handleButtonClick("Sign Out")}
            >
              <FaSignOutAlt className="h-6 w-6" />
              <span>Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
