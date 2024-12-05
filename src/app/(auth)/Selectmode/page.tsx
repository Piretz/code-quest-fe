"use client";

import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#223F77] text-white flex flex-col">
      {/* Header Section */}
      <Header />

      {/* SIDEBAR SECTION */}
        <Sidebar/>

      <div className="flex flex-1">
        {/* Main Content Section
        <MainContent /> */}
        
      </div>
    </div>
  );
};

export default Layout;
