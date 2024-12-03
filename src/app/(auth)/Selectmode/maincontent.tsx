"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const MainContent: React.FC = () => {
  // State to track the selected mode
  const [selectedMode, setSelectedMode] = useState<"solomode" | "multimode" | "pracmode1" | "lessonmode1">("solomode");
  const [activeIndex, setActiveIndex] = useState<number>(0); // State to track the active slide index

  // Images for the modes
  const modeImages: Record<"solomode" | "multimode" | "pracmode1" | "lessonmode1", string> = {
    solomode: "/assets/solomode.png", // Solo Mode image
    multimode: "/assets/multimode.png",
    pracmode1: "/assets/pracmode1.png",
    lessonmode1: "/assets/lessonmode1.png",
  };

  const switchToNextMode = () => {
    const modeKeys = Object.keys(modeImages) as (keyof typeof modeImages)[];
    const currentIndex = modeKeys.indexOf(selectedMode);
    const nextIndex = (currentIndex + 1) % modeKeys.length;
    setSelectedMode(modeKeys[nextIndex]);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); // Update the active index whenever the slide changes
  };

  // Sample data for the leaderboard
  const leaderboard = [
    { name: "Jane Doe", rank: 1 },
    { name: "John Smith", rank: 2 },
    { name: "Amelia Black", rank: 3 },
    { name: "Chris Potter", rank: 4 },
    { name: "Emma White", rank: 5 },
    { name: "Oliver Green", rank: 6 },
    { name: "Sophia Brown", rank: 7 },
    { name: "Liam Blue", rank: 8 },
    { name: "Charlotte Pink", rank: 9 },
    { name: "Ethan Red", rank: 10 },
  ];

  return (
    <main className="flex-grow bg-[#223F77] text-white relative">
      {/* Leaderboards Section */}
      <aside className="absolute left-12 bg-[#223F77] p-2 rounded-lg w-80 h-auto shadow-xl shadow-[#019AEC] drop-shadow border-4 border-sky-300">
        {/* Leaderboards Title and "See all" Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold underline underline-offset-4">Leaderboards</h2>
          <a href="#" className="text-white font-semibold text-md hover:underline hover:text-blue-500">See all</a>
        </div>

        {/* Top 3 - Column Layout */}
        <div className="flex justify-center items-center -translate-y-4">
          {leaderboard
            .filter((player) => player.rank <= 3)
            .map((player) => (
              <div key={player.rank} className="flex flex-col p-1 bg-[#223F77]">
                <span
                  className={`text-sm font-bold text-white ${
                    player.rank === 1 ? "scale-125" : player.rank === 2 ? "scale-100" : "scale-75"
                  }`}
                >
                  {player.rank}
                </span>
                <Image
                  src="/assets/avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className={`rounded-full ${
                    player.rank === 1 ? "scale-125" : player.rank === 2 ? "scale-100" : "scale-75"
                  }`}
                />
                <span className="text-md">{player.name}</span>
              </div>
            ))}
        </div>

        {/* Ranks 4-10 */}
        <div>
          {leaderboard
            .filter((player) => player.rank > 3)
            .map((player) => (
              <div key={player.rank} className="flex bg-gradient-to-r from-[#019AEC] to-[#223F77] space-y-5">
                <span className="text-sm font-bold text-slate-100">{player.rank}</span>
                <Image
                  src="/assets/avatar.png"
                  alt="Avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <span className="font-normal text-md">{player.name}</span>
                </div>
              </div>
            ))}
        </div>
      </aside>

       {/* Solo Mode Section */}
       <section className="flex flex-col items-center mb-5 -translate-y-16 -translate-x-9">
        {/* Intro Text Image */}
        <div className="mb-5">
          <Image
            src="/assets/introtxt.png"
            alt="Intro Text"
            width={800}
            height={100}
            className="mx-auto"
          />
        </div>

         {/* Swiper Slider */}
         <div className="w-full h-[500px] flex flex-col items-center -translate-y-20">
         <Swiper
            loop={true}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 10,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
            onSlideChange={handleSlideChange} // Track slide change
          >
            {Object.keys(modeImages).map((mode, index) => (
              <SwiperSlide
                key={mode}
                className={`flex justify-center items-center ${
                  activeIndex === index ? "" : ""
                }`} // Apply scale-105 if the slide is active, else apply opacity-50
                style={{
                  width: "250px", // Set width of each card
                  height: "350px", // Set height of each card
                }}
              >
               <div
                  className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${
                    selectedMode === mode ? "scale-110" : "opacity-20 transform -skew-y-12 translate-x-6" 
                    
                  }`}
                  onClick={() => setSelectedMode(mode as keyof typeof modeImages)}
                >
                  <Image
                    src={modeImages[mode as keyof typeof modeImages]}
                    alt={mode}
                    width={400}
                    height={400}
                    className="object-cover rounded-xl shadow-md mb-3"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

            <h1 className="text-4xl font-zenDots text-slate-300">Select Mode</h1>
          {/* Button to Switch Cards */}
          {/* <button
            onClick={switchToNextMode}
            className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-lg shadow-md transition"
          >
            Next Mode
          </button> */}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
