"use client";
import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";

const Layout: React.FC = () => {
  const currentLevel = 1;
  const currentExperience = 11;
  const experienceNeeded = 100;

  return (
    <div className="flex h-screen bg-[#223F77]">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header
          currentLevel={currentLevel}
          currentExperience={currentExperience}
          experienceNeeded={experienceNeeded}
        />
        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
