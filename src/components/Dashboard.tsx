"use client";
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import LessonCard from "../components/LessonCard";
import { useTheme } from "../components/ThemeContext"; // Import Theme Context
import { FaTrophy, FaGamepad, FaChartBar } from "react-icons/fa"; // Icons for design

const Dashboard = () => {
  const { isDarkMode } = useTheme(); // Get dark mode state from ThemeContext
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleButtonClick = (filter: string) => {
    setActiveFilter(filter);
    console.log(`Button clicked: ${filter}`);
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4 space-y-4">
          {/* Filter Buttons */}
          <div
            className={`flex space-x-3 p-1 rounded-full shadow-lg max-w-6xl ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gradient-to-b from-blue-800 to-blue-300"
            }`}
          >
            {["All", "Completed", "Continue"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === filter
                    ? "bg-blue-300 text-black"
                    : isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white text-black hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => handleButtonClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Lesson Card */}
            <div className="md:col-span-3 space-y-2">
              <LessonCard
                title="Lesson 1. Introduction to HTML"
                duration="(15:00)"
                author="Mr. John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                isDarkMode={isDarkMode} // Pass isDarkMode to LessonCard
              />
              <LessonCard
                title="Lesson 2. CSS Basics"
                duration="(20:00)"
                author="Mr. John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                isDarkMode={isDarkMode} // Pass isDarkMode to LessonCard
              />
            </div>

            
            {/* Leaderboard & Stats */}
            <div className="flex flex-col space-y-2">
              {/* Leaderboard */}
              <div
                className={`p-4 h-64 w-80 rounded-md shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-[#035CC2] text-white"
                }`}
              >
                <h3 className="text-xl text-white font-bold flex items-center space-x-16">
                  <FaTrophy className="text-yellow-300" /> <span>LEADERBOARDS</span>
                </h3>
                <div className="mt-4 space-y-2">
                  {/* Example leaderboard rows */}
                  {[
                    { rank: 1, name: "Player1", score: 1500 },
                    { rank: 2, name: "Player2", score: 1300 },
                    { rank: 3, name: "Player3", score: 1200 },
                    { rank: 4, name: "You", score: 1100 }, // Highlight user's rank
                  ].map((player, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-2 rounded-md ${
                        player.rank === 1
                          ? "bg-yellow-100 text-yellow-800"
                          : player.rank === 2
                          ? "bg-gray-300 text-gray-800"
                          : player.rank === 3
                          ? "bg-orange-200 text-orange-800"
                          : isDarkMode
                          ? "bg-gray-700"
                          : "bg-white"
                      }`}
                    >
                      <span className="font-bold">{`#${player.rank}`}</span>
                      <span>{player.name}</span>
                      <span>{player.score} pts</span>
                    </div>
                  ))}
                </div>
              </div>

                  {/* Level Box */}
            <div
                className={`p-2 h-64 w-80 rounded-lg shadow-md ${
                  isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-[#035CC2] text-white"
                }`}
              >
                <h3 className="text-2xl text-center align-text-top font-bold">LOREM IPSUM</h3>
                <p className="text-sm mt-2">Track your progress and performance.</p>
              </div>


              {/* Stats */}
              <div
                className={`p-4 h-64 w-80 rounded-md shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-[#035CC2] text-white"
                }`}
              >
                <h3 className="text-xl text-white font-bold flex items-center space-x-24">
                  <FaChartBar className="text-green-300" /> <span>STATS</span>
                </h3>
                <div className="mt-4 space-y-3">
                  {/* Stats items */}
                  <div className="flex justify-between items-center">
                    <span>Games Played</span>
                    <span className="font-bold">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Wins</span>
                    <span className="font-bold">20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Win Rate</span>
                    <span className="font-bold">44%</span>
                  </div>
                  {/* XP Bar */}
                  <div>
                    <span>XP</span>
                    <div className="w-full bg-gray-300 rounded-full h-4 mt-1">
                      <div
                        className="bg-blue-500 h-4 rounded-full"
                        style={{ width: "70%" }} // Dynamic width
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
