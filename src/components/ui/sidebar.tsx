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
  FaBars, // Import FaBars for the menu icon
  FaCog // Import FaCog for settings icon
} from "react-icons/fa";

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get context values
  const [activeButton, setActiveButton] = useState<string>("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // State to control sidebar visibility

  const primaryActions = [
    { name: "Home", icon: <FaHome className="h-6 w-6" /> },
    { name: "Lesson", icon: <FaBook className="h-6 w-6" /> },
    { name: "Bookmark", icon: <FaBookmark className="h-6 w-6" /> },
    { name: "Trophy", icon: <FaTrophy className="h-6 w-6" /> },
    { name: "Chats", icon: <FaComments className="h-6 w-6" /> },
    { name: "Achievements", icon: <FaStar className="h-6 w-6" /> },
  ];

  const handleButtonClick = (action: string) => {
    setActiveButton(action);
    console.log(`Clicked on ${action}`);
  };

  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-56" : "w-18"
        } overflow-hidden transition-all duration-300 ease-in-out h-screen shadow-xl flex flex-col drop-shadow-2xl ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-b from-[#082751] to-[#035CC2] text-white"
        }`}
      >
        {/* Menu Button */}
        <button
          type="button"
          aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          className={`p-2 m-4 ${isDarkMode ? "bg-gray-800 text-white" : "text-white"} transition-all duration-150`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* QCUnite Logo and Title */}
        <div
          className={`flex items-center ${
            isSidebarOpen ? "justify-center" : "justify-center"
          } mb-4 py-4 h-15 space-x-3`}
        >
          <Image
            src="/assets/steam.ico" // Path to your .ico logo
            alt="QCUnite Logo"
            width={32} // Width of the logo
            height={32} // Height of the logo
            className={`object-contain ${
              isSidebarOpen ? "animate-spin-slow" : ""
            }`} // Apply rotation animation when sidebar is open
          />
          {isSidebarOpen && (
            <div className="text-2xl font-poppins font-bold text-white">QCUnite</div>
          )}
        </div>

        {/* Sidebar Buttons */}
        <ul className="flex flex-col space-y-0 w-full">
          {primaryActions.map((action) => (
            <li key={action.name}>
              <button
                className={`flex items-center ${
                  isSidebarOpen ? "space-x-8" : "justify-center"
                } w-full p-3 rounded-sm font-poppins font-normal transition-all duration-150 ${
                  activeButton === action.name
                    ? "bg-blue-800 text-white"
                    : isDarkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-blue-500"
                }`}
                onClick={() => handleButtonClick(action.name)}
              >
                {action.icon}
                {isSidebarOpen && <span>{action.name}</span>}
              </button>
            </li>
          ))}
        </ul>

        {/* Footer with Settings Button */}
        <div className="mt-auto">
          <ul className="flex flex-col space-y-0 w-full">
            <li>
              <button
                className={`flex items-center ${isSidebarOpen ? "space-x-8" : "justify-center"} w-full p-3 rounded-sm font-poppins font-normal transition-all duration-150 ${
                  isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "hover:bg-blue-400 text-white"
                }`}
                onClick={() => handleButtonClick("Settings")}
              >
                <FaCog className="h-6 w-6" />
                {isSidebarOpen && <span>Settings</span>}
              </button>
            </li>

            {/* Info button */}
            <li>
              <button
                className={`flex items-center ${isSidebarOpen ? "space-x-8" : "justify-center"} w-full p-3 rounded-sm font-poppins font-normal transition-all duration-150 ${
                  isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "hover:bg-blue-400 text-white"
                }`}
                onClick={() => handleButtonClick("Info")}
              >
                <FaInfoCircle className="h-6 w-6" />
                {isSidebarOpen && <span>Info</span>}
              </button>
            </li>

            <li>
              <button
                className={`flex items-center ${isSidebarOpen ? "space-x-8" : "justify-center"} w-full p-3 rounded-sm font-poppins font-normal transition-all duration-150 ${
                  isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "hover:bg-blue-400 text-white"}`}
                onClick={() => handleButtonClick("Sign Out")}
              >
                <FaSignOutAlt className="h-6 w-6" />
                {isSidebarOpen && <span>Sign Out</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
