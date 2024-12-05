"use client";
import React from "react";
import Image from "next/image"; // Para sa optimized na pag-load ng imahe

const Heropage = () => {
  return (
    <section
      id="heropage"
      className="bg-cover bg-center text-white text-center py-0 h-screen relative"
      style={{ backgroundImage: 'url(/assets/heropage-bg.png)' }}
    >
      {/* Ellipse Image sa Middle Left */}
      <div className="absolute left-0 transform -translate-y-6 -translate-x-56 z-0">
        <Image
          src="/assets/ellipse2.png"
          alt="Ellipse Decoration"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>

      {/* About Ellipse Image sa Top Right */}
      <div className="absolute top-0 right-0 transform -translate-y-10 z-0">
        <Image
          src="/assets/aboutellipse.png"
          alt="About Ellipse Decoration"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Flex Container para sa Left at Right Layout */}
      <div className="flex flex-col md:flex-row mt-0 space-y-10 md:space-y-0 px-5 md:px-8 items-center relative z-10">
        {/* Left Side: Character Image */}
        <div className="flex justify-start w-full md:w-auto mx-auto md:mx-48 mt-44">
          <Image
            src="/assets/herologo.png"
            alt="Character"
            width={300}
            height={600}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Right Side: CIPHERION Text at Paragraph */}
        <div className="flex flex-col items-start w-full md:w-auto max-w-[600px]">
          {/* CIPHERION Text Image */}
          <div className="w-full text-center mt-56">
            <Image
              src="/assets/CIPHERION(1).png"
              alt="CIPHERION"
              width={600}
              height={150}
              className="object-contain mx-auto mb-4"
            />
            {/* Underline */}
            <div className="w-3/4 border-b-4 border-white mx-auto"></div>
          </div>

          {/* Paragraph */}
          <p className="leading-relaxed font-poppins text-2xl max-w-full text-left mt-8 text-nowrap">
            Welcome to CIPHERION, a revolutionary learning platform designed exclusively for
            <br /> Information Technology students at Quezon City University.
            <br />
            <br />
            Students will embark on exciting missions, tackling progressively challenging
            <br /> coding puzzles, collaborating on dynamic group projects,
            and mastering
            <br /> essential programming concepts through hands-on exploration. CIPHERION
            <br /> promotes teamwork, problem-solving,
            and creative thinking while fostering a
            <br /> vibrant community of future tech leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heropage;
