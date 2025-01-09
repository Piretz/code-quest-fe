"use client";
import React, { useState, useEffect } from "react";
import LandingPage from "./(auth)/landingpage/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading for 2 seconds (adjust as needed)

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          {/* DaisyUI loading spinner */}
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
