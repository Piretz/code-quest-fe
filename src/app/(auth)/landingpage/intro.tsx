                      "use client";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
    window.location.href = "/your-target-page";
  };

  return (
    <section
      id="intro"
      className="bg-cover bg-center text-white h-screen flex flex-col justify-center items-center px-4"
      style={{ backgroundImage: 'url(/assets/bglanding.png)' }}
    >
      {/* Logo */}
      <Image
        src="/assets/Cipherion.png"
        alt="CIPHERION Logo"
        width={1624}
        height={122}
        className="object-contain w-full max-w-7xl"
      />

      {/* Play Now Button */}
      <div
        onClick={handleClick}
        className={`relative cursor-pointer mt-8 ${
          isClicked ? "animate-ping" : ""
        }`}
      >
        <Image
          src="/assets/play.png"
          alt="Play Now Button"
          width={800}
          height={500}
          className="w-full max-w-xl mr-5"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white font-zenDots font-semibold text-5xl sm:text-3xl pr-2">
          Play Now
        </span>
      </div>
    </section>
  );
};

export default Hero;
    