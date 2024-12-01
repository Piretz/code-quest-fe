"use client";
import React from "react";
import Image from "next/image"; // For optimized image loading

const Heropage = () => {
  return (
    <section
      id="heropage"
      className="bg-cover bg-center text-white text-center py-0 h-screen relative" // Add `relative` for proper layering
      style={{ backgroundImage: 'url(/assets/heropage-bg.png)' }} // Set the background image
    >
      {/* Ellipse Image at Middle Left */}
      <div className="absolute left-0 transform -translate-y-6 -translate-x-56 z-0"> {/* Set z-0 for back */}
        <Image
          src="/assets/ellipse2.png" // Path to your ellipse image
          alt="Ellipse Decoration"
          width={700} // Adjust width as needed
          height={700} // Adjust height as needed
          className="object-contain"
        />
      </div>

      {/* About Ellipse Image at Top Right */}
      <div className="absolute top-0 right-0 transform translate-x-20 -translate-y-10 z-0"> {/* Adjust position */}
        <Image
          src="/assets/aboutellipse.png" // Path to your aboutellipse image
          alt="About Ellipse Decoration"
          width={300} // Adjust width as needed
          height={300} // Adjust height as needed
          className="object-contain"
        />
      </div>

      {/* Flex Container for Left and Right Layout */}
      <div className="flex md:flex-row mt-0 space-y-10 md:space-y-0 px-5 md:px-8 items-center relative z-10"> {/* Set z-10 for content */}
        {/* Left Side: Character Image */}
        <div className="flex justify-start w-full md:w-auto mx-auto md:mx-48 mt-44">
          <Image
            src="/assets/herologo.png" // Your character image path
            alt="Character"
            width={300} // Adjust width as needed
            height={600} // Adjust height as needed
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Right Side: CIPHERION Text and Paragraph */}
        <div className="flex flex-col items-start w-full md:w-auto max-w-[600px]">
          {/* CIPHERION Text Image */}
          <div className="w-full text-center mt-56">
            <Image
              src="/assets/CIPHERION(1).png" // Path to your image with the CIPHERION text
              alt="CIPHERION"
              width={600} // Adjust width as needed
              height={150} // Adjust height as needed
              className="object-contain mx-auto mb-4" // Add space between image and underline
            />
            {/* Underline */}
            <div className="w-3/4 border-b-4 border-white mx-auto"></div> {/* Underline below the image */}
          </div>

          {/* Paragraph */}
          <p className="leading-relaxed font-poppins text-2xl max-w-full text-left mt-8 text-nowrap">
            Welcome to CIPHERION, a revolutionary learning platform designed exclusively for 
            <br /> Information Technology students at Quezon City University. 
            This gamified project <br /> transforms traditional programming lessons into an immersive, quest-driven <br /> experience.
            <br />
            <br />
            Students will embark on exciting missions, tackling progressively challenging <br /> coding puzzles, collaborating on dynamic group projects, 
            and mastering <br /> essential programming concepts through hands-on exploration. CIPHERION <br /> promotes teamwork, problem-solving, 
            and creative thinking while fostering a <br /> vibrant community of future tech leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heropage;
