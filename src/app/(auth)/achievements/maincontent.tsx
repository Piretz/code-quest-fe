"use client";
import React, { useState, useEffect } from "react";

const AchievementsPage: React.FC = () => {
  // State to store the user's progress for each badge
  const [userProgress, setUserProgress] = useState({
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    diamond: false,
  });

  // State to store the loading progress for each badge
  const [loadingProgress, setLoadingProgress] = useState({
    bronze: 0,
    silver: 0,
    gold: 0,
    platinum: 0,
    diamond: 0,
  });

  // State to check if loading is complete
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Mock function to simulate loading user progress or checking criteria
  useEffect(() => {
    const fetchProgress = async () => {
      const badgeTypes = ["bronze", "silver", "gold", "platinum", "diamond"];

      // Start loading progress simultaneously for all badges
      const progressPromises = badgeTypes.map((type) =>
        new Promise<void>((resolve) => {
          let progress = 0;
          const interval = setInterval(() => {
            if (progress < 100) {
              progress += 2; // Increase progress by 2% every interval
              setLoadingProgress((prev) => ({
                ...prev,
                [type]: progress,
              }));
            } else {
              clearInterval(interval);
              resolve(); // Once loading completes for a badge, resolve
            }
          }, 100); // 100ms interval to simulate loading
        })
      );

      // Wait for all badges to finish loading before unlocking them
      await Promise.all(progressPromises);

      // Only unlock the bronze badge
      setUserProgress({
        bronze: true, // Only unlock bronze badge
        silver: false,
        gold: false,
        platinum: false,
        diamond: false,
      });

      // Set loading to complete after progress
      setLoadingComplete(true);
    };

    fetchProgress();
  }, []);

  const renderBadge = (type: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "empty") => {
    if (type === "empty") {
      return (
        <div className="relative py-8 px-4 text-center border border-[#019AEC] drop-shadow-2xl rounded-lg opacity-100 bg-[url('/assets/bgbadge.png')] bg-cover h-[140px] w-[150px]">
          {/* Empty box with just background image and lock icon */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/assets/lock.png" // Ensure you have the lock icon in your assets
              alt="Lock Icon"
              className="h-12 w-12 opacity-75 "
            />
          </div>
        </div>
      );
    }

    return (
      <div className="relative text-white py-8 px-4 text-center border-l border-r border-b-4 border-[#019AEC] drop-shadow-2xl rounded-lg opacity-100 bg-[url('/assets/bgbadge.png')] bg-cover h-[140px] w-[150px]">
        {userProgress[type] ? (
          // If the user has met the criteria, show the corresponding badge
          <img
            src={`/assets/${type}.png`}
            alt={`${type} Badge`}
            className={`h-full w-full object-contain transition-all duration-500 ease-out ${userProgress[type] ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}
          />
        ) : (
          // If the user hasn't met the criteria, apply blur effect
          <img
            src={`/assets/${type}.png`}
            alt={`${type} Badge`}
            className="h-full w-full object-contain filter blur-sm opacity-100"
          />
        )}

        {!userProgress[type] && (
          // Display lock icon if the user hasn't met the criteria
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/assets/lock.png" // Ensure you have the lock icon in your assets
              alt="Lock Icon"
              className="h-12 w-12 opacity-75 "
            />
          </div>
        )}

        {/* Display Progress Bar below the badge */}
        {!loadingComplete && !userProgress[type] && (
          <div className="absolute bottom-0 left-0 w-full p-2">
            <div className="h-1 ">
              <div
                className="h-full bg-[#019AEC]"
                style={{
                  width: `${loadingProgress[type]}%`,
                  transition: "width 0.09s",
                }}
              ></div>
            </div>
          </div>
        )}

        {/* Apply blur effect to the text if the badge is locked */}
        <div
          className={`absolute top-28 font-poppins inset-0 flex justify-center items-center text-white font-bold text-lg ${!userProgress[type] ? "filter blur-sm" : "transition-all duration-500 ease-out opacity-100"}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalize first letter */}
        </div>
      </div>
    );
  };

  // Array to simulate 40 badge boxes, only 5 will have badges, the rest will be empty
  const badgeTypes: Array<"bronze" | "silver" | "gold" | "platinum" | "diamond" | "empty"> = [
    "bronze", "silver", "gold", "platinum", "diamond",
    "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty"
  ];

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-[#223F77] pt-20">
      <h1 className="text-4xl font-bold font-zenDots text-transparent bg-clip-text bg-gradient-to-r from-[#7CD8FF] via-[#e2f6ff] to-[#7CD8FF] mb-6 -translate-x-5">
        My Achievements
      </h1>

      <div className="w-[1550px] h-[800px] bg-[#223F77] border-l border-r border-b-4 border-t border-[#019AEC] drop-shadow-2xl rounded-lg shadow-drop-blue p-4 ">
        {/* Content inside the panel */}
        <div className="grid grid-cols-8 gap-4 ml-4">
          {badgeTypes.map((type, index) => (
            <div key={index} className="badge">
              {renderBadge(type)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
