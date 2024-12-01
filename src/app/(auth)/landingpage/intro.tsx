"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image for optimized loading

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Reset animation after it's played
    setTimeout(() => setIsClicked(false), 500); // Adjust the duration based on your animation length

    // You can add navigation logic here
    window.location.href = "/your-target-page"; // Replace with your target URL
  };

  return (
    <section
      id="intro"
      className="bg-cover bg-center text-white text-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url(/assets/bglanding.png)' }} // Set your background image
    >
      {/* CIPHERION Logo */}
      <Image
        src="/assets/Cipherion.png" // Replace with the correct path to your image
        alt="CIPHERION Logo"
        width={1624} // Adjust the width of the logo
        height={122} // Adjust the height of the logo
        className="object-contain" // Ensure the image is properly sized
      />
      
      {/* Play Now Image with Animation and Text Overlay */}
      <div
        onClick={handleClick}
        className={`relative cursor-pointer mt-8 ${
          isClicked ? "animate-ping" : ""
        }`} // Add animation class when clicked
      >
        {/* The Play Now Image */}
        <Image
          src="/assets/play.png" // Replace with the path to your "Play Now" button image
          alt="Play Now Button"
          width={800}  // Adjust width based on your image size
          height={500}  // Adjust height based on your image size
          className=""
        />
        
        {/* The Play Now Text Overlay */}
        <span className="absolute inset-0 flex items-center justify-center text-white font-zenDots font-semibold text-5xl pl-5">
          Play Now
        </span>
      </div>
    </section>
  );
};

export default Hero;
