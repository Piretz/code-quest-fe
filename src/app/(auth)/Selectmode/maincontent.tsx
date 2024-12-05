"use client";

import React from "react";
import Image from "next/image";

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 bg-[#223F77] p-6 text-white">
      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Cipherion</h1>
        <p className="mt-2 text-lg">Where Knowledge Meets Innovation</p>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center mt-8">
        <div className="w-1/2 bg-blue-800 p-4 rounded-lg">
          <Image
            src="/assets/solo-mode.png" // Replace with carousel image
            alt="Solo Mode"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h3 className="mt-4 text-center">Solo Mode</h3>
        </div>
      </div>

      {/* Leaderboard and Courses */}
      <div className="mt-12 grid grid-cols-3 gap-6">
        {/* Leaderboard */}
        <div className="col-span-1 bg-blue-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Leaderboards</h2>
          <ul>
            {["John Doe", "Jane Doe", "Amelia Black"].map((user, index) => (
              <li key={index} className="flex items-center space-x-4 mb-2">
                <Image
                  src="/assets/user-avatar.png" // Replace with leaderboard avatars
                  alt={user}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p>{user}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* My Courses */}
        <div className="col-span-2 bg-blue-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">My Courses</h2>
          <ul>
            {["Java Programming", "Algorithm", "Intro to Computing"].map((course, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <p>{course}</p>
                <span>Session completed 3/5</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
