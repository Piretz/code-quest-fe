"use client";
import React from "react";
import Header from "../../../components/ui/newheader"; // Correct path to the updated Header component
import Sidebar from "../../../components/ui/newsidebar"; // Correct path to Sidebar
import MainContent from "./maincontent"; // Correct path to MainContent

const Page: React.FC = () => {
  const currentLevel = 1;
  const currentExperience = 11;
  const experienceNeeded = 100;

  const username = "Christopher Potter";
  const avatarUrl = "/assets/avatar.png";
  const backgroundUrl = "/assets/mainrec.png";
  const midRecUrl = "/assets/midrec.png";
  const midRankBadgeUrl = "/assets/midrankbadge.png";
  const midStarUrl = "/assets/midstar.png";
  const rightRecUrl = "/assets/rightrec.png";
  const wifiLeftUrl = "/assets/wifileft.png";
  const bellUrl = "/assets/bell.png";
  const settingsUrl = "/assets/setting.png";

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
          username={username}
          avatarUrl={avatarUrl}
          backgroundUrl={backgroundUrl}
          midRecUrl={midRecUrl}
          midRankBadgeUrl={midRankBadgeUrl}
          midStarUrl={midStarUrl}
          rightRecUrl={rightRecUrl}
          wifiLeftUrl={wifiLeftUrl}
          bellUrl={bellUrl}
          settingsUrl={settingsUrl}
        />
        
        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
};

export default Page;
