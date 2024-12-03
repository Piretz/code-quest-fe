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
    <header className="flex justify-between items-center p-4 text-white">
       {/* Left Section: User Info */}
      <div className="flex items-start space-x-4 -translate-x-20 -translate-y-5">
        
          <Image
            src="/assets/mainrec.png" // Replace with the path to the mainrec image
            alt="Main Rec"
            width={1000} // Increased width from 600 to 800
            height={80}
            className="object-cover"
          />
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4">
            {/* Avatar and User Info */}
            <Image
              src="/assets/avatar.png" // Replace with the path to the avatar image
              alt="User Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-bold font-poppins text-lg">Christopher Potter</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-300">Level {currentLevel}</p>
                {/* Level Bar */}
                <div className="w-16 h-3 bg-gray-300 rounded-full">
                  <div
                    className="h-full bg-[#3F2958] rounded-full"
                    style={{ width: `${progressPercentage}%` }} // Dynamic progress bar width
                  ></div>
                </div>
              </div>
              <p className="text-xs text-gray-400">
                {/* {currentExperience}/{experienceNeeded} XP */}
              </p>
            </div>
          </div>
        </div>

        {/* Container for Mid Rec with h1 text and icons */}
        <div className="relative flex flex-col items-center w-full -translate-y-2/4 right-9">
          {/* Mid Rec Image */}
          <Image
            src="/assets/midrec.png" // Replace with the path to the midrec image
            alt="Mid Rec"
            width={1400}
            height={100}
            className="object-cover"
          />

          {/* Mid Rank Badge to the left of h1 */}
          <div className="absolute transform -translate-x-36 top-3">
            <Image
              src="/assets/midrankbadge.png" // Replace with the path to the midrankbadge image
              alt="Mid Rank Badge"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          {/* h1 text centered */}
          <h1 className="absolute z-10 text-3xl font-bold translate-x-3">Code Wizard</h1>

          {/* Mid Star to the right of h1 */}
          <div className="absolute right-64 top-5">
            <Image
              src="/assets/midstar.png" // Replace with the path to the midstar image
              alt="Mid Star"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          {/* Progress Bar for Mid Rec (Dynamic) */}
          <div className="absolute w-full flex justify-center transform translate-y-10 translate-x-2">
            <div className="w-64 h-4 bg-gray-300 rounded-full">
              <div
                className="h-full bg-[#3F2958] rounded-full"
                style={{ width: `${50}%` }} // Dynamic progress bar width {progressPercentage}
              ></div>
            </div>
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
                  className="object-cover"
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
                  className="object-cover"
                />
              </button>
            </Link>
          </div>
        </div>
      
    </header>
  );
};

export default Header;
