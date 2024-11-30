"use client";
import React, { useState } from "react";
import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/Header";
import LessonCard from "@/components/ui/LessonCard";
import { useTheme } from "@/components/ui/ThemeContext";
import { FaTrophy, FaChartBar } from "react-icons/fa"; // Icons for design
import { ThemeProvider } from "@/components/ui/ThemeContext";
const Page = () => (
  <ThemeProvider>
    <Dashboard />
  </ThemeProvider>
);

export default Page;
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
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-[#082751] to-[#063977] text-black"
      }`}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-1 space-y-4 flex-1 flex flex-col">
          {/* Filter Buttons */}
          <div
            className={`flex space-x-3 pl-3 ml-7 rounded-full shadow-lg max-w-6xl font-poppins font-normal ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gradient-to-br from-[#035CC2] to-[#0286DF]"
            }`}
          >
            {["All", "Completed", "Continue"].map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-full ${
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 font-poppins pl-8 flex-1 overflow-hidden">
            {/* Lesson Card List */}
            <div className="md:col-span-3 overflow-y-scroll h-[800px] pr-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-black space-y-2">
              <LessonCard
                title="Lesson 1. Introduction to HTML"
                duration="(15:00)"
                author="Mr. John Doe"
                description="Learn the basics of HTML structure and tags."
                isDarkMode={isDarkMode}
              />
              <LessonCard
                title="Lesson 2. CSS Basics"
                duration="(20:00)"
                author="Ms. Jane Smith"
                description="Understand how to style web pages using CSS."
                isDarkMode={isDarkMode}
              />
              <LessonCard
                title="Lesson 3. Advanced CSS Techniques"
                duration="(25:00)"
                author="Mr. John Doe"
                description="Explore advanced CSS techniques for layouts and animations."
                isDarkMode={isDarkMode}
              />
              <LessonCard
                title="Lesson 4. JavaScript Essentials"
                duration="(30:00)"
                author="Mr. Alex Brown"
                description="Learn the fundamentals of JavaScript programming."
                isDarkMode={isDarkMode}
              />
              <LessonCard
                title="Lesson 5. React Basics"
                duration="(35:00)"
                author="Ms. Lisa Green"
                description="Get started with React and understand its core concepts."
                isDarkMode={isDarkMode}
              />
            </div>

            {/* Leaderboard & Stats */}
            <div className="flex flex-col space-y-2 ml-8">
              {/* Leaderboard */}
              <div
                className={`p-4 h-64 w-72 rounded-md shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-[#035CC2] text-white"
                }`}
              >
                <h3 className="text-xl text-white font-bold flex items-center space-x-10">
                  <FaTrophy className="text-yellow-300" /> <span>LEADERBOARDS</span>
                </h3>
                <div className="mt-4 space-y-2">
                  {[
                    { rank: 1, name: "Player1", score: 1500 },
                    { rank: 2, name: "Player2", score: 1300 },
                    { rank: 3, name: "Player3", score: 1200 },
                    { rank: 4, name: "You", score: 1100 },
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
                          : "bg-white text-black"
                      }`}
                    >
                      <span className="font-bold">{`#${player.rank}`}</span>
                      <span>{player.name}</span>
                      <span>{player.score} pts</span>
                    </div>
                  ))}
                </div>
              </div>
                 <div>
                  <Header/>
                 </div>
              <div
                className={`p-4 h-64 w-72 rounded-md shadow-lg ${
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
                className={`p-4 h-64 w-72 rounded-md shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-[#035CC2] text-white"
                }`}
              >
                <h3 className="text-xl text-white font-bold flex items-center space-x-20">
                  <FaChartBar className="text-green-300" /> <span>STATS</span>
                </h3>
                <div className="mt-4 space-y-3">
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
                  <div>
                    <span>XP</span>
                    <div className="w-full bg-gray-300 rounded-full h-4 mt-1">
                      <div
                        className="bg-blue-500 h-4 rounded-full"
                        style={{ width: "70%" }}
                      ></div>

                       {/* Level Box */}

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