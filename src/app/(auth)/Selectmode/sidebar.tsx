"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const App: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Main Content */}
      <div className="flex flex-col items-center space-y-6">
        {/* Home Button */}
        <Link href="/home" passHref>
          <button className="flex justify-center items-center" aria-label="Home">
            <Image
              src="/assets/btnhome.png" // Replace with the path to the btnhome image
              alt="Home"
              width={100}
              height={110}
              className="object-cover"
            />
          </button>
        </Link>

        {/* Lesson Button */}
        <Link href="/lesson" passHref>
          <button className="flex justify-center items-center" aria-label="Lesson">
            <Image
              src="/assets/btnlesson.png" // Replace with the path to the btnlesson image
              alt="Lesson"
              width={100}
              height={110}
              className="object-cover"
            />
          </button>
        </Link>

        {/* Achievements Button */}
        <Link href="/achievements" passHref>
          <button className="flex justify-center items-center" aria-label="Achievements">
            <Image
              src="/assets/btnachi.png" // Replace with the path to the btnachi image
              alt="Achievements"
              width={100}
              height={110}
              className="object-cover"
            />
          </button>
        </Link>

        {/* Dark Mode Button */}
        <Link href="/darkmode" passHref>
          <button className="flex justify-center items-center" aria-label="Dark Mode">
            <Image
              src="/assets/btndark.png" // Replace with the path to the btndark image
              alt="Dark Mode"
              width={100}
              height={110}
              className="object-cover"
            />
          </button>
        </Link>

        {/* Info Button */}
        <Link href="/info" passHref>
          <button className="flex justify-center items-center" aria-label="Info">
            <Image
              src="/assets/btninfo.png" // Replace with the path to the btninfo image
              alt="Info"
              width={100}
              height={110}
              className="object-cover"
            />
          </button>
        </Link>

        {/* Sign Out Button */}
        <Link href="/signout" passHref>
          <button className="flex justify-center items-center" aria-label="Sign Out">
            <Image
              src="/assets/btnsignout.png" // Replace with the path to the btnsignout image
              alt="Sign Out"
              width={100}
              height={110}
              className="object-cover"
            />
          </button>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6">
        {/* Other content goes here */}
      </div>
    </div>
  );
};

export default App;
