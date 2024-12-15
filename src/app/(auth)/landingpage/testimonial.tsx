"use client";
import React from "react";

const Testimonials = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white py-0 px-0 relative" // Add `relative` for proper positioning
      style={{ backgroundImage: 'url("/assets/bgtestimonial.png")' }} // Path to your background image
    >
      <div className="flex space-x-8 relative h-full">
        {/* Vector Icon */}
        <div className="flex flex-col">
          <img
            src="/assets/vector.png" // Replace with your vector icon path
            alt="Vector Icon"
            className="w-60 h-60 ml-10"
          />
        </div>

        {/* Vector1 Icon */}
        <div className="flex flex-col items-center">
          <img
            src="/assets/vector1.png" // Replace with your vector1 icon path
            alt="Vector1 Icon"
            className="w-60 h-60 mt-80 ml-96"
          />
        </div>

        {/* Dollar Icon - Positioned at the bottom */}
        <div className="absolute bottom-10 left-20 transform -translate-x-1/2">
          <img
            src="/assets/dollar.png" // Replace with your dollar icon path
            alt="Dollar Icon"
            className="w-60 h-60"
          />
        </div>

        {/* Like Icon - Positioned at the bottom */}
        <div className="absolute bottom-1 right-1/2 transform translate-x-1/2">
          <img
            src="/assets/like.png" // Replace with your like icon path
            alt="Like Icon"
            className="w-60 h-60"
          />
        </div>

        {/* Review Image - Positioned at the center of the left side */}
        <div className="absolute left-96 top-1/2 transform -translate-y-1/2 translate-x-[-40%] z-10">
          {/* Text above the review image */}
          <h1 className="text-7xl font-bold font-zenDots -translate-y-3/4 text-left">
            What people say
          </h1>

          {/* Review Image */}
          <div className="relative">
            <img
              src="/assets/review.png" // Replace with your review image path
              alt="Review Image"
              className="w-400 h-200"
            />
            {/* Text inside the review image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-zenDots text-2xl font-bold text-white text-center">
                Read review on Steam <br /> 89% of 1798 reviews are positive
              </p>
            </div>
          </div>
        </div>

        {/* Ellipseread Image - Positioned at the top right */}
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 translate-x-[-50%] z-0">
          <img
            src="/assets/ellipseread.png" // Replace with your ellipseread image path
            alt="Ellipseread Image"
            className="max-w-screen-xl h-screen"
          />
        </div>

        {/* User Quote/Paragraphs - Positioned at the right side */}
        <div className="absolute right-60 top-1/2 transform -translate-y-1/2 w-1/3 text-nowrap space-y-4 ">
          {/* First Quote */}
          <div className="p-5 rounded-md mb-3">
            <p className="text-md text-white font-semibold font-Poppins text-left break-words">
              "Cipherion is a fantastic platform for coding enthusiasts! I love
              how it bridges the <br />
              gap between gaming and real-world programming by using JavaScript
              instead of <br />
              a made-up language. It's a unique way to improve coding skills
              while strategizing <br />
              and having fun."
            </p>
            <p className="mt-1 text-lg text-white font-Poppins text-left italic">
              — Alex P., Software Developer
            </p>
          </div>

          {/* Second Quote */}
          <div className="p-5 rounded-md mb-3">
            <p className="text-md text-white font-semibold font-Poppins text-left break-words">
              "The concept of Cipherion is brilliant—teaching programming in a
              competitive, engaging <br />
              way! Writing scripts to control your units feels like solving
              puzzles, and seeing your code <br />
              in action is so satisfying. It's both a learning experience and a
              game."
            </p>
            <p className="mt-1 text-lg text-white font-Poppins text-left italic">
              — Jordan K., Game Designer
            </p>
          </div>

          {/* Third Quote */}
          <div className="p-5 rounded-md mb-3">
            <p className="text-md text-white font-semibold font-Poppins text-left break-words">
              "Unlike traditional games, Cipherion challenges you to think like
              a developer. <br />
              The emphasis on actual programming syntax forces you to write
              clean, efficient code. <br />
              It's a great way to build coding habits and enjoy a unique gaming
              experience at the same time."
            </p>
            <p className="mt-1 text-lg text-white font-Poppins text-left italic">
              - Robert Brown
            </p>
          </div>

          {/* Fourth Quote */}
          <div className="p-5 rounded-md mb-3">
            <p className="text-md text-white font-semibold font-Poppins text-left break-words">
              "Cipherion helped me understand coding better than any tutorial.
              It's like learning while <br />
              playing, and the challenge is motivating me to improve my skills
              every day. I can't wait <br />
              to see where this platform goes!"
            </p>
            <p className="mt-1 text-lg text-white font-Poppins text-left italic">
              - Sarah L., Web Developer
            </p>
          </div>
        </div>

        {/* TestimonialEllipse Image - Positioned at the right bottom */}
        <div className="absolute bottom-0 right-0 translate-y-1/4 z-0">
          <img
            src="/assets/testimonialellipse.png" // Replace with your testimonialellipse image path
            alt="Testimonial Ellipse"
            className="relative w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
