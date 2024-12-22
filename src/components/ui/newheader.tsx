"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the HeaderProps interface
interface HeaderProps {
  currentLevel: number;
  currentExperience: number;
  experienceNeeded: number;
  username: string;
  avatarUrl: string;
  backgroundUrl: string;
  midRecUrl: string;
  midRankBadgeUrl: string;
  midStarUrl: string;
  rightRecUrl: string;
  wifiLeftUrl: string;
  bellUrl: string;
  settingsUrl: string;
}

const Header: React.FC<HeaderProps> = ({
  currentLevel,
  currentExperience,
  experienceNeeded,
  username,
  avatarUrl,
  backgroundUrl,
  midRecUrl,
  midRankBadgeUrl,
  midStarUrl,
  rightRecUrl,
  wifiLeftUrl,
  bellUrl,
  settingsUrl,
}) => {
  const [isNotifOpen, setIsNotifOpen] = useState(false); // Initially set to false, so the panel is hidden
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile modal
  const progressPercentage = Math.min(
    (currentExperience / experienceNeeded) * 100,
    100
  );

  const toggleNotifPanel = () => {
    setIsNotifOpen((prev) => !prev); // Toggle notification panel
  };

  const [notifications, setNotifications] = useState([
    "Bronze Badge - Completed your first quest!", // Example notification
    // Add more notifications if needed
  ]);

  const clearNotifications = () => {
    setNotifications([]); // Clear all notifications
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[85px] z-50 flex justify-between items-start pt-4 p-4 text-white bg-transparent">
      {/* Left Section: User Info */}
      <div className="relative space-x-4 transform -translate-x-16 -translate-y-16">
        <Image
          src={backgroundUrl}
          alt="Background"
          width={550}
          height={80}
          className="object-cover"
        />
        <div className="fixed top-0 left-0 transform flex items-center space-x-4 pt-12 pl-10">
          {/* Avatar */}
          <div className="cursor-pointer transition-transform transform hover:scale-110">
            <Image
              src={avatarUrl}
              alt="User Avatar"
              width={70}
              height={100}
              className="object-cover"
              onClick={() => setIsProfileOpen(true)} // Open profile modal
            />
          </div>
          <div>
            <p className="font-bold font-poppins text-sm">{username}</p>
            <div className="flex items-center space-x-2">
              <p className="text-xs text-gray-300">Level {currentLevel}</p>
              <div className="w-16 h-3 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-[#3F2958] rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Pop-Up Panel */}
        {isProfileOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
            <div className="relative bg-transparent rounded-lg shadow-lg p-4">
              {/* Back Button */}
              <div className="absolute top-16 left-24 cursor-pointer transition-transform transform hover:scale-110 z-50">
                <Image
                  src="/assets/btnback.png" // Assuming btnback.png is in the /assets directory
                  alt="Back Button"
                  width={100}
                  height={30}
                  className="object-cover"
                  onClick={() => setIsProfileOpen(false)} // Close profile modal
                />
              </div>

              {/* Profile Title */}
              <div className="absolute top-24 left-72 z-10 -translate-y-2">
                <h1 className="text-6xl font-bold font-zenDots text-white">Profile</h1>
              </div>

              {/* Profile Panel Image */}
              <div className="relative">
                <Image
                  src="/assets/profilepanel.png"
                  alt="Profile Panel"
                  width={1500}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* Profile Frame */}
              <div className="absolute top-28 left-10 bg-transparent p-4">
                <Image
                  src="/assets/profileframe.png"
                  alt="Profile Frame"
                  width={300}
                  height={300}
                  className="object-contain"
                />

                {/* User Avatar */}
                <div className="absolute top-28 left-20 translate-x-2">
                  <Image
                    src={avatarUrl}
                    alt="User Avatar"
                    width={150}
                    height={80}
                    className="object-cover"
                  />
                </div>

                {/* User Information */}
                <div className="absolute top-20 left-72 font-bold font-zenDots text-5xl text-nowrap space-y-2">
                  <p className="text-white">{username}</p>
                  <div className="flex items-center space-x-4">
                    <p className="text-3xl text-gray-300 translate-x-16">Level {currentLevel}</p>

                    {/* Level Progress Bar */}
                    <div className="relative translate-y-10 w-80 h-8 bg-gray-300 rounded-full">
                      {/* Progress Bar */}
                      <div
                        className="absolute top-0 left-0 h-full bg-[#3F2958] rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Badges and Trophy Icon */}
                <div className="absolute top-32 left-60 flex items-center translate-y-4 w-[100px] translate-x-3 -space-x-1 space-y-4">
                  <Image
                    src="/assets/bronze.png" // Example badge, replace with actual badge paths
                    alt="Bronze Badge"
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                  <Image
                    src="/assets/trophy.png" // Example trophy icon, replace with actual path
                    alt="Trophy"
                    width={50}
                    height={30}
                    className="object-contain"
                  />
                </div>

                {/* Experience */}
                <div className="absolute bottom-28 left-96 text-base text-nowrap translate-x-60 text-gray-300 font-zenDots">
                  <p>Exp: {currentExperience}/{experienceNeeded}</p>
                </div>
              </div>

              {/* Panels Container */}
              <div className="absolute top-72 translate-y-20 left-16 flex p-4">
                {/* High Panel */}
                <div className="w-[300px] h-[300px] bg-transparent">
                  <Image
                    src="/assets/highpanel.png"
                    alt="High Panel"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>

                {/* Stats Panel */}
                <div className="w-[1100px] h-[400px] bg-transparent -translate-x-3 p-5 -translate-y-5">
                  <Image
                    src="/assets/statspanel.png"
                    alt="Stats Panel"
                    width={1100}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Achievement Panel (below the other two) */}
              <div className="absolute top-72 translate-y-72 left-10 w-[1450px] h-[300px] bg-transparent p-10">
                <Image
                  src="/assets/achievepanel.png"
                  alt="Achievement Panel"
                  width={1450}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}


      {/* Mid Rec with h1 text and icons */}
      <div className="absolute flex flex-col items-center w-full top-1 right-6">
        <Image
          src={midRecUrl}
          alt="Mid Rec"
          width={900}
          height={100}
          className="object-cover"
        />
        <div className="absolute transform -translate-x-36 top-1">
          <Image
            src={midRankBadgeUrl}
            alt="Mid Rank Badge"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
        <h1 className="absolute z-10 text-2xl font-bold translate-x-3">
          Code Wizard
        </h1>
        <div className="absolute translate-x-40 top-3">
          <Image
            src={midStarUrl}
            alt="Mid Star"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
        <div className="absolute w-full flex justify-center transform translate-y-8 translate-x-2">
          <div className="w-56 h-4 bg-gray-300 rounded-full">
            <div
              className="h-full bg-[#3F2958] rounded-full"
              style={{ width: `${50}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Right Rec Image with Icons */}
      <div className="relative -translate-y-8 translate-x-6">
        <Image
          src={rightRecUrl}
          alt="Right Rec"
          width={550}
          height={80}
          className="object-cover"
        />
        <div className="absolute right-6 top-1/3 transform -translate-y-1/2 flex items-center space-x-5">
          <button
            aria-label="Notifications"
            className="flex items-center"
            onClick={toggleNotifPanel}
          >
            <Image
              src={bellUrl}
              alt="Bell"
              width={30}
              height={30}
              className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
            />
          </button>
          <Link href="/settings" passHref>
            <button aria-label="Settings" className="flex items-center">
              <Image
                src={settingsUrl}
                alt="Settings"
                width={30}
                height={30}
                className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
              />
            </button>
          </Link>
        </div>
      </div>

      {/* Notification Panel */}
      {isNotifOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-[1300px] h-[700px] bg-[#172842] text-white rounded-lg shadow-lg p-4 border-l border-r border-b-4 border-[#0286DF] drop-shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold font-zenDots text-lg">
                NOTIFICATION
                {/* Display notification count next to the title */}
                <span className="ml-2 text-xl font-bold text-white">({notifications.length})</span>
              </h2>
              <button
                aria-label="Close"
                className="text-white hover:text-gray-200 text-xl font-bold"
                onClick={toggleNotifPanel}
              >
                ✕
              </button>
            </div>

            {/* Second Panel: notifpanel.png */}
            <div className="relative w-full h-[500px] flex justify-start items-start">
              <Image
                src="/assets/notifpanel.png"
                alt="Notification Panel Background"
                width={1200}
                height={500}
                className="object-contain"
              />

              {/* Content Inside notifpanel.png */}
              <div className="absolute w-[60%] h-full top-7 flex flex-col items-center justify-start font-poppins">
                {/* Badge and Text */}
                {notifications.map((notification, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/assets/bronze.png"
                        alt="Bronze Badge"
                        width={90}
                        height={80}
                        className="object-contain"
                      />
                      <div className="mt-2 ml-4 text-white">
                        <ul className="list-disc pl-4">
                          <li>
                            <strong>{notification}</strong>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-200 text-center mt-4 indent-10">
                          You’ve received new notifications about your progress!
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Notifications Button */}
            <div className="flex justify-end pt-20 text-center">
              <button
                aria-label="Clear Notifications"
                className="text-sm flex items-center justify-center transition-transform transform hover:scale-110 cursor-pointer"
                onClick={clearNotifications}
              >
                <Image
                  src="/assets/btnclear.png"
                  alt="Clear Notifications"
                  width={100}
                  height={20}
                  className="mr-2"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
