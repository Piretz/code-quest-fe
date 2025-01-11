"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [activeButton, setActiveButton] = useState<string>("home");
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; 

    const currentHash = window.location.hash; 
    if (currentHash === "#intro") {
      setActiveButton("home");
    } else if (currentHash === "#heropage") {
      setActiveButton("about");
    } else if (currentHash === "#courses") {
      setActiveButton("courses");
    } else if (currentHash === "#contactUs") {
      setActiveButton("contact us");
    }
  }, [isClient, window.location.hash]); 
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-screen bg-[#00172D] text-white px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-between items-center shadow-lg">
      <img
        src="/assets/Steamcircle.png"
        alt="Cipherion Logo"
        className="h-12 sm:h-14 animate-spin-slow mb-2 sm:mb-0"
      />
      <nav className="flex-grow flex justify-center space-x-4 sm:space-x-14 text-sm sm:text-xl font-zenDots mb-2 sm:mb-0">
        {["Home", "About", "Courses", "Contact Us"].map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item.toLowerCase())}
            className={`rounded-full w-20 sm:w-28 text-center py-1 ${
              activeButton === item.toLowerCase()
                ? "bg-gray-300 text-black"
                : "hover:bg-gray-600 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="flex space-x-2 sm:space-x-4">
        <Link href="/app/(auth)/landingpage/login" passHref>
          <button
            onClick={() => handleButtonClick("login")}
            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots ${
              activeButton === "login" ? "bg-green-600" : "hover:bg-green-600"
            }`}
          >
            Login
          </button>
        </Link>

        <Link href="/app/(auth)/landingpage/signup" passHref>
          <button
            onClick={() => handleButtonClick("signup")}
            className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
