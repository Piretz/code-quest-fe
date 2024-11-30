"use client";
import React from "react";
import Image from "next/image"; // Import Image for optimized image loading

const CoursesOffered = () => {
  return (
    <section
      id="courses"
      className="bg-cover bg-center h-screen text-white mt-0 px-8 relative flex items-center justify-between"
      style={{
        backgroundImage: 'url(/assets/bgcourse.png), url(/assets/bgcourse1.png)', // Add multiple background images
        backgroundPosition: "center, left bottom", // Position each background image
        backgroundSize: "cover, contain", // Size of the backgrounds
        backgroundRepeat: "no-repeat", // Prevent repeating
      }}
    >
      {/* Left Side: Title */}
      <div className="flex flex-col ml-36 leading-relaxed font-poppins text-2xl text-left w-1/3">
        <h2 className="text-5xl font-bold font-zenDots">Courses Offered</h2>
        <p className="mt-6 font-poppins text-lg text-nowrap max-w-md">
          Cipherion offers a diverse range of courses designed to equip<br /> IT students with essential skills for the tech industry. 
          From <br /> foundational topics like HTML, CSS, and JavaScript for building <br /> responsive and interactive websites to advanced <br /> programming in Java and Python, 
          students gain hands-on <br /> experience in solving real-world problems. Additional courses <br /> in database management and game development provide <br /> opportunities to explore 
          specialized fields, ensuring a well- <br /> rounded and engaging learning journey.
        </p>
        {/* Replace the button with a text link */}
        <a 
          href="#learn-more" 
          className="mt-8 ml-80 text-blue-400 hover:underline text-lg font-semibold"
        >
          Learn More →
        </a>
      </div>

      {/* Right Side: Triangle of Images */}
      <div className="relative w-1/2 flex flex-col items-center">
        {/* Top Image: HTML5 */}
        <div className="relative translate-y-44 -translate-x-72">
          <Image
            src="/assets/html5.png"
            alt="HTML5"
            width={600}
            height={200}
            className="mx-auto"
          />
        </div>
        {/* Middle Image: Java */}
        <div className="relative translate-y-1 translate-x-28">
          <Image
            src="/assets/java.png"
            alt="Java"
            width={500}
            height={200}
            className="mx-auto"
          />
        </div>
        {/* Bottom Image: CSS */}
        <div className="relative -translate-y-28 -translate-x-40">
          <Image
            src="/assets/css.png"
            alt="CSS"
            width={500}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Top-End Position: Coursellipse Image */}
      <div className="absolute top-0 right-0">
        <Image
          src="/assets/testimonialellipse.png" // Replace with your coursellipse image path
          alt="Coursellipse"
          width={300}
          height={300}
          className=""
        />
      </div>
    </section>
  );
};

export default CoursesOffered;
