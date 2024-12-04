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
    pracmode1: "/assets/practicemode.png",
    lessonmode1: "/assets/lessonmode.png",
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
    { name: "Jane Doe", rank: 2 },
    { name: "John Smith", rank: 1 },
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
      <aside className="absolute left-12 p-2 rounded-lg w-80 h-auto -translate-y-20 shadow-xl shadow-[#019AEC] drop-shadow border-4 border-sky-300">
        {/* Leaderboards Title and "See all" Button */}
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-bold underline underline-offset-4">Leaderboards</h2>
          {/* see all link */}
          <a href="#" className="text-white font-semibold text-sm hover:underline hover:underline-offset-2 hover:text-blue-500 hover:cursor-pointer">
            See all
          </a>
        </div>

        {/* Top 3 - Column Layout */}
        <div className="flex justify-center items-center space-x-8 -translate-y-4">
          {leaderboard
            .filter((player) => player.rank <= 3)
            .sort((a, b) => a.rank - b.rank) // Ensure proper order: 1, 2, 3
            .map((player) => {
              // Determine avatar based on rank
              const avatar =
                player.rank === 2
                  ? "/assets/jane.png" // Jane's profile picture
                  : player.rank === 1
                  ? "/assets/john.png" // John's profile picture
                  : player.rank === 3
                  ? "/assets/annette.png" // Annette's profile picture
                  : "/assets/avatar.png"; // Default avatar (fallback)

              return (
                <div
                  key={player.rank}
                  className={`flex flex-col items-center justify-center ${
                    player.rank === 1
                      ? "order-2 scale-110" // Center rank 1
                      : player.rank === 2
                      ? "order-1 -translate-x-8 scale-100" //start rank 2
                      : "order-3 scale-100" //end rank 3
                  }`}
                >
                  <span className="text-md font-semibold text-white">{player.rank}</span>
                  <Image
                    src={avatar} // Use the determined avatar
                    alt={player.name}
                    width={60} // Adjusted size for better visibility
                    height={60}
                    className="rounded-full"
                  />
                  <span className="text-sm mt-2">{player.name}</span>
                </div>
              );
            })}
        </div>

        {/* Ranks 4-10 - Adding different profiles for each player */}
              <div className="">
                {leaderboard
                  .filter((player) => player.rank > 3)
                  .map((player) => {
                    // Determine avatar based on rank or some other condition
                    let avatar = "/assets/avatar.png"; // Default avatar

                    if (player.rank === 4) {
                      avatar = "/assets/jane.png"; // Chris's profile picture
                    } else if (player.rank === 5) {
                      avatar = "/assets/john.png"; // Emma's profile picture
                    } else if (player.rank === 6) {
                      avatar = "/assets/annette.png"; // Oliver's profile picture
                    } else if (player.rank === 7) {
                      avatar = "/assets/avatar.png"; // Sophia's profile picture
                    } else if (player.rank === 8) {
                      avatar = "/assets/jane.png"; // Liam's profile picture
                    } else if (player.rank === 9) {
                      avatar = "/assets/john.png"; // Charlotte's profile picture
                    } else if (player.rank === 10) {
                      avatar = "/assets/avatar.png"; // Ethan's profile picture
                    }

                    return (
                      <div key={player.rank} className="flex items-center bg-transparent p-2 border-b border-t border-gray-300">
                        <span className="text-sm font-bold text-slate-100">{player.rank}</span>
                        <Image
                          src={avatar} // Use the determined avatar
                          alt="Avatar"
                          width={30}
                          height={30}
                          className="rounded-full ml-1"
                        />
                        <div className="ml-3">
                          <span className="font-normal text-sm">{player.name}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
      </aside>

      {/* Select Mode Section */}
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
                    selectedMode === mode
                      ? "scale-110"
                      : "opacity-20 transform -skew-y-12 translate-x-6"
                  }`}
                  onClick={() => setSelectedMode(mode as keyof typeof modeImages)}
                >
                  <Image
                    src={modeImages[mode as keyof typeof modeImages]}
                    alt={mode}
                    width={300}
                    height={300}
                    className="object-cover rounded-xl shadow-md mb-3"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="text-4xl font-zenDots text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300">Select Mode</h1>
        </div>

              {/* Column of Images at the bottom of Select Mode */}
              <div className="relative flex justify-center items-center font-poppins h-0 min-h-0 -translate-y-5">
                <Image src="/assets/column.png" alt="Column Image" width={1800} height={100} className="rounded-lg" />
                {/* Content Overlay */}
                <div className="absolute inset-0 flex justify-between items-start px-8 py-6 h-0 text-white">
                  {/* Column 1: My Courses */}
                      <div className="flex flex-col space-y-2 w-2/4 -translate-y-28">
                        <div className="flex justify-between items-center">
                          <h3 className="font-zenDots font-semibold text-2xl -translate-y-16 translate-x-8">
                            My Courses
                          </h3>
                          {/* See all link */}
                          <a href="#" className="text-lg font-poppins text-white ml-auto hover:underline hover:text-blue-400 -translate-y-16 -translate-x-8">
                            See all
                          </a>
                        </div>
                    <div className="space-y-2 -translate-y-10 translate-x-6">
                      <div className="flex justify-between items-center border-2 border-[#019AEC] w-full">
                        <span className="text-xl w-2/4">Java Programming</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full " />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full " />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full " />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full " />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                         
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-3/4">Algorithm</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-3/4">Java</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-3/4">Introduction to Computing</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-3/4">Introduction to Computing</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-3/4">Introduction to Computing</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>               

                  {/* Column 2: Popular Courses */}
                      <div className="flex flex-col space-y-2 w-2/4 -translate-y-28">
                        <div className="flex justify-between items-center">
                          <h3 className="font-zenDots font-semibold text-2xl -translate-y-16 translate-x-5">
                            Popular Courses
                          </h3>
                          {/* See all link for Popular Courses */}
                          <a href="#" className="text-lg font-poppins text-white ml-auto hover:underline hover:text-blue-400 -translate-y-16 -translate-x-12">
                            See all
                          </a>
                        </div>
                    <div className="space-y-2 -translate-y-10 -translate-x-2">
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/3 translate-x-8">HTML</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-8">Introduction to Computing</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-8">CSS</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                        <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-8">HTML</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-8">HTML</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-8">HTML</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-10">
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>  
                    </div>
                  </div>

               
                </div>
              </div>

      </section>
    </main>
  );
};

export default MainContent;
