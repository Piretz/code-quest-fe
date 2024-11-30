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
    <div>
      <Header />
      <Hero />
      <Heropage/>
      <Stats />
      <CoursesOffered />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
