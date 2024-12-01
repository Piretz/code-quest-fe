"use client";
import React from "react";
import Header from "./header";
import Hero from "./intro";
import Heropage from "./heropage";
import Stats from "./stats";
import CoursesOffered from "./course";
import Testimonials from "./testimonial";
import Footer from "./footer";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Hero Page Section */}
      <Heropage />

      {/* Stats Section */}
      <Stats />

      {/* Courses Offered Section */}
      <CoursesOffered />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
