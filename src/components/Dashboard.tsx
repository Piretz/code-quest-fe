"use client";
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import LessonCard from "../components/LessonCard";
import { useTheme } from "../components/ThemeContext"; // Import Theme Context

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
            className={`flex space-x-4 p-2 rounded-full shadow-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gradient-to-b from-blue-100 to-blue-300"
            }`}
          >
            {["All", "Completed", "Continue"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === filter
                    ? "bg-blue-800 text-white"
                    : isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white text-black hover:bg-blue-400"
                }`}
                onClick={() => handleButtonClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Lesson Cards */}
          <LessonCard
            title="Lesson 1. Introduction to HTML"
            duration="15:00"
            author="Mr. John Doe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            isDarkMode={isDarkMode} // Pass isDarkMode to LessonCard
          />
          <LessonCard
            title="Lesson 2. CSS Basics"
            duration="20:00"
            author="Mr. John Doe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            isDarkMode={isDarkMode} // Pass isDarkMode to LessonCard
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
