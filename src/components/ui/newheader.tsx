"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the HeaderProps interface with additional props for reuse
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
  const progressPercentage = Math.min(
    (currentExperience / experienceNeeded) * 100,
    100
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 text-white bg-transparent">
      {/* Left Section: User Info */}
      <div className="flex items-start space-x-4 -translate-x-14 -translate-y-14">
        <Image
          src={backgroundUrl}
          alt="Background"
          width={550}
          height={80}
          className="object-cover"
        />
        <div className="absolute top-1/3 left-1/4 transform -translate-x-24 flex items-center space-x-4">
          <Image
            src={avatarUrl}
            alt="User Avatar"
            width={60}
            height={70}
            className="rounded-full"
          />
          <div>
            <p className="font-bold font-poppins text-sm -translate-x-5">
              {username}
            </p>
            <div className="flex items-center space-x-2">
              <p className="text-xs text-gray-300 -translate-x-5">
                Level {currentLevel}
              </p>
              <div className="w-16 h-3 bg-gray-300 rounded-full -translate-x-5">
                <div
                  className="h-full bg-[#3F2958] rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            {/* <p className="text-xs text-gray-400">
              {currentExperience}/{experienceNeeded} XP
            </p> */}
          </div>
        </div>
      </div>

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
      <div className="relative -translate-y-8 translate-x-4">
        <Image
          src={rightRecUrl}
          alt="Right Rec"
          width={550}
          height={80}
          className="object-cover"
        />
        <div className="absolute right-6 top-1/3 transform -translate-y-1/2 flex items-center space-x-5">
          <Link href="/notifications" passHref>
            <button aria-label="Notifications" className="flex items-center">
              <Image
                src={bellUrl}
                alt="Bell"
                width={30}
                height={30}
                className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
              />
            </button>
          </Link>
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
    </header>
  );
};

export default Header;
