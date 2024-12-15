"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component from Next.js

// Define the HeaderProps interface
interface HeaderProps {
  currentLevel: number; // Current level of the user
  currentExperience: number; // Total experience points of the user
  experienceNeeded: number; // Experience points needed to reach the next level
}

const Header: React.FC<HeaderProps> = ({
  currentLevel,
  currentExperience,
  experienceNeeded,
}) => {
  // Calculate percentage progress for the current level stage
  const progressPercentage = Math.min(
    (currentExperience / experienceNeeded) * 100,
    100
  );

  return (
    <div
      className={`flex items-center justify-between px-7 py-4 h-15 font-poppins drop-shadow-2xl ${
        isDarkMode ? "bg-gray-800 text-white" : " bg-[#082751] text-white"
      }`} // Swap background colors for light and dark mode
    >
      {/* Animated H1 Text with Infinite Animation */}
      <h1 className="font-poppins font-extrabold text-xl overflow-hidden whitespace-nowrap animate-typewriter">
        Welcome, KUPAL
      </h1>

      <div className="flex space-x-6">
        {/* Dark Mode Toggle Button with Icon Sliding Animation */}
        <button
          type="button" // Set type to button for dark mode toggle
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} // Accessibility
          className={`flex items-center justify-center space-x-1 p-3 rounded-full 
            transition-all duration-500 transform shadow-lg
            ${isDarkMode ? "bg-gray-700 border-gray-400" : "bg-white border-blue-600"} 
            border-2`}
        >
          {/* Conditionally render the sun or moon icon based on dark mode */}
          <div
            className={`transition-transform duration-500 transform ${
              isDarkMode ? "translate-x-6" : "-translate-x-6"
            }`}
          >
            {isDarkMode ? (
              <FaMoon className="h-5 w-12 text-black" /> // Moon icon in dark mode
            ) : (
              <FaSun className="h-5 w-12 text-yellow-500" /> // Sun icon in light mode
            )}
          </div>
        </div>

        {/* Right Rec Image with Icons */}
        <div className="relative -translate-y-4">
          <Image
            src="/assets/rightrec.png" // Replace with the path to the rightrec image
            alt="Right Rec"
            width={1000} // Increased width here
            height={60} // Adjust the height accordingly
            className="object-cover"
          />

          {/* Icons Grouped Together */}
          <div className="absolute right-5 top-1/3 transform -translate-y-1/2 flex items-center space-x-3">
            {/* Wifi Left Icon */}
            <Image
              src="/assets/wifileft.png" // Replace with the path to the wifileft image
              alt="Wifi Left"
              width={30}
              height={30}
              className="object-cover"
            />
            {/* Bell Icon - now clickable */}
            <Link href="/notifications" passHref>
              <button aria-label="Notifications" className="flex items-center">
                <Image
                  src="/assets/bell.png" // Replace with the path to the bell image
                  alt="Bell"
                  width={30}
                  height={30}
                  className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
                />
              </button>
            </Link>
            {/* Settings Icon - now clickable */}
            <Link href="/settings" passHref>
              <button aria-label="Settings" className="flex items-center">
                <Image
                  src="/assets/setting.png" // Replace with the path to the setting image
                  alt="Settings"
                  width={30}
                  height={30}
                  className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
                />
              </button>
            </Link>
          </div>
        </div>
      
    </header>
  );
};

export default Header;
