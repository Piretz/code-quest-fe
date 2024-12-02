"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component from Next.js

const Header: React.FC = () => {
  return (
    <header className="text-white flex justify-between items-center p-2">
      {/* Images for mainrec, midrec, rightrec with user info on top of mainrec */}
      <div className="flex items-start w-full">
        {/* Container for Main Rec with user info */}
        <div className="relative">
          <Image
            src="/assets/mainrec.png" // Replace with the path to the mainrec image
            alt="Main Rec"
            width={600}
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
              <p className="font-bold font-poppins text-md">Christopher Potter</p>
              <p className="text-sm">Level 1</p>
            </div>
          </div>
        </div>

        {/* Container for Mid Rec with h1 text and icons */}
        <div className="relative flex flex-col items-center w-full">
          {/* Mid Rec Image */}
          <Image
            src="/assets/midrec.png" // Replace with the path to the midrec image
            alt="Mid Rec"
            width={1100}
            height={200}
            className="object-cover"
          />

          {/* Mid Rank Badge to the left of h1 */}
          <div className="absolute transform -translate-x-40 top-4">
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
          <div className="absolute right-96 -translate-x-5 top-6">
            <Image
              src="/assets/midstar.png" // Replace with the path to the midstar image
              alt="Mid Star"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          {/* Mid Bar below the h1 */}
          <div className="absolute w-full flex justify-center transform translate-y-10 translate-x-2">
            <Image
              src="/assets/midbar.png" // Replace with the path to the midbar image
              alt="Mid Bar"
              width={250}
              height={30}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Rec Image with Icons */}
        <div className="relative">
          <Image
            src="/assets/rightrec.png" // Replace with the path to the rightrec image
            alt="Right Rec"
            width={600} // Increased width here
            height={80} // Adjust the height accordingly
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
      </div>
    </header>
  );
};

export default Header;
