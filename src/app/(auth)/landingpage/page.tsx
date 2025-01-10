"use client";
import React from "react";
import Header from "@/components/ui/Header";
import Hero from "./home";
import Heropage from "./about";
import Stats from "./stats";
import CoursesOffered from "./course";
import Testimonials from "./testimonial";
import Footer from "./contactus";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Home */}
      <Header currentLevel={0} currentExperience={0} experienceNeeded={0} />

      {/* Home */}
      <Hero />

      {/* About */}
      <Heropage />

      {/* Stats Section */}
      <Stats />

      {/* Course Section */}
      <CoursesOffered />

      {/* Testimonials Section */}
      <Testimonials />

      {/* ContactUs */}
      <Footer />
    </div>
  );
};

export default App;
