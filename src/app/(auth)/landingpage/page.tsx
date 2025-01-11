"use client";
import React from "react";
import Header from "./header";
import Hero from "./home";
import Heropage from "./about";
import Stats from "./stats";
import CoursesOffered from "./course";
import Testimonials from "./testimonial";
import Footer from "./contactus";
import Signup from "./signup"; 
// import Login from "./login";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Home */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Heropage />

      {/* Stats Section */}
      <Stats />

      {/* Sign Up Section */}
      <Signup />
      
      {/* Login Section */}
      {/* <Login /> */}

      {/* Courses Offered Section */}
      <CoursesOffered />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Us Section */}
      <Footer />
    </div>
  );
};

export default App;
