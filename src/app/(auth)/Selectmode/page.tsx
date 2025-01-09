"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/ui/newheader"; 
import Sidebar from "../../../components/ui/newsidebar"; 
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface AvatarGroupProps {
  contributors: { src: string; alt: string }[];
  maxVisible: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ contributors, maxVisible }) => {
  const visibleContributors = contributors.slice(0, maxVisible);
  const extraCount = contributors.length - maxVisible;
  
  return (
    <div className="flex items-center">
      {visibleContributors.map((contributor, index) => (
        <Image
          key={index}
          src={contributor.src}
          alt={contributor.alt}
          width={30}
          height={30}
          className="inline-block rounded-full border-2 border-white -ml-2 first:ml-0"
        />
      ))}
      {extraCount > 0 && (
        <span className="text-sm bg-blue-500 text-white rounded-full px-2 ml-2">
          +{extraCount}
        </span>
      )}
    </div>
  );
};

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    console.log(`Navigating to: /selectcourse, Mode: ${selectedMode}`);
  };

  const currentLevel = 1;
  const currentExperience = 11;
  const experienceNeeded = 100;

  const username = "Christopher Potter";
  const avatarUrl = "/assets/avatar.png";
  const backgroundUrl = "/assets/mainrec.png";
  const midRecUrl = "/assets/midrec.png";
  const midRankBadgeUrl = "/assets/midrankbadge.png";
  const midStarUrl = "/assets/midstar.png";
  const rightRecUrl = "/assets/rightrec.png";
  const wifiLeftUrl = "/assets/wifileft.png";
  const bellUrl = "/assets/bell.png";
  const settingsUrl = "/assets/setting.png";

  const [selectedMode, setSelectedMode] = useState<"solomode" | "multimode" | "pracmode1">("solomode");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const swiperRef = useRef<any>(null);
  const [isNewUser, setIsNewUser] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const modeImages: Record<"solomode" | "multimode" | "pracmode1", string> = {
    multimode: "/assets/multimode.png",
    pracmode1: "/assets/practicemode.png",
    solomode: "/assets/solomode.png",
  };

  const modeTitles: Record<"solomode" | "multimode" | "pracmode1", string> = {
    solomode: "Solo Mode",
    multimode: "Multiplayer Mode",
    pracmode1: "Practice Mode",
    
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    const modeKeys = Object.keys(modeImages) as (keyof typeof modeImages)[];
    setSelectedMode(modeKeys[swiper.activeIndex]);
  };

  const handleNext = () => {
    if (swiperRef.current && isButtonEnabled) {
      setIsButtonEnabled(false); // Disable button
      swiperRef.current.slideNext();
      const modeKeys = Object.keys(modeImages) as (keyof typeof modeImages)[];
      const nextIndex = (activeIndex + 1) % modeKeys.length;
      setSelectedMode(modeKeys[nextIndex]);
      setActiveIndex(nextIndex);
      setTimeout(() => setIsButtonEnabled(true), 500); // Re-enable button after 500ms
    }
  };

  const handleBack = () => {
    if (swiperRef.current && isButtonEnabled) {
      setIsButtonEnabled(false); // Disable button
      swiperRef.current.slidePrev();
      const modeKeys = Object.keys(modeImages) as (keyof typeof modeImages)[];
      const prevIndex = (activeIndex - 1 + modeKeys.length) % modeKeys.length;
      setSelectedMode(modeKeys[prevIndex]);
      setActiveIndex(prevIndex);
      setTimeout(() => setIsButtonEnabled(true), 500); // Re-enable button after 500ms
    }
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

  useEffect(() => {
    // You can replace this with an actual check, like a cookie check or user data check
    const isNew = localStorage.getItem("isNewUser");

    if (!isNew) {
      setIsNewUser(false);
      localStorage.setItem("isNewUser", "false"); // Mark the user as no longer new
    }
  }, []);
  

  return (
    // SCREEN
    <div className="flex h-screen bg-[#223F77]">

      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header
          currentLevel={currentLevel}
          currentExperience={currentExperience}
          experienceNeeded={experienceNeeded}
          username={username}
          avatarUrl={avatarUrl}
          backgroundUrl={backgroundUrl}
          midRecUrl={midRecUrl}
          midRankBadgeUrl={midRankBadgeUrl}
          midStarUrl={midStarUrl}
          rightRecUrl={rightRecUrl}
          wifiLeftUrl={wifiLeftUrl}
          bellUrl={bellUrl}
          settingsUrl={settingsUrl}
        />
        
        {/* MAIN CONTENT */}
            <main className="flex-grow bg-[#223F77] text-white relative">
              {/* Leaderboards Section */}
              <aside className="fixed left-36 bottom-96 -translate-y-6 p-2 rounded-lg w-80 h-auto bg-gradient-to-b from-[#035CC2] to-[#073269] border-l border-r border-t border-b-4 border-[#019AEC] shadow-drop-blue">
                {/* Leaderboards Title and "See all" Button */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-md font-bold underline underline-offset-4">Leaderboards</h2>
                  {/* see all link */}
                  <a
                    href="#"
                    className="text-white  text-sm hover:underline hover:text-blue-300 cursor-pointer ml-4"
                  >
                    See all
                  </a>
                </div>

                {/* Top 3 - Column Layout */}
                <div className="flex justify-center items-center space-x-8 -translate-y-2">
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
                          <span className="text-xs font-semibold text-white">{player.rank}</span>
                          <Image
                            src={avatar} // Use the determined avatar
                            alt={player.name}
                            width={35} // Adjusted size for better visibility
                            height={35}
                            className="rounded-full"
                          />
                          <span className="text-xs mt-2">{player.name}</span>
                        </div>
                      );
                    })}
                </div>

                {/* Ranks 4-10 - Adding different profiles for each player */}
                <div>
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
                        <div
                          key={player.rank}
                          className="flex items-center bg-transparent p-2 border-b border-t border-gray-300"
                        >
                          <span className="text-xs font-bold text-slate-100">{player.rank}</span>
                          <Image
                            src={avatar} // Use the determined avatar
                            alt="Avatar"
                            width={20}
                            height={30}
                            className="rounded-full ml-1"
                          />
                          <div className="ml-3">
                            <span className="font-normal text-xs">{player.name}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </aside>


              {/* Select Mode Section */}
              <section className="fixed bottom-44 left-32 flex-col items-center mb-5">
                {/* Intro Text Image */}
                <div className="fixed top-32 left-1/2 -translate-x-1/2 -translate-y-8 mb-5">
                  <Image
                    src="/assets/introtxt.png"
                    alt="Intro Text"
                    width={700}
                    height={100}
                    className="mx-auto"
                  />
                </div>

                {/* Swiper Slider */}
                <div className="fixed top-48 left-10 w-full h-[500px] flex flex-col items-center">
                    <Swiper
                      loop={true}
                      effect="coverflow"
                      grabCursor={false}
                      centeredSlides={true}
                      slidesPerView="auto"
                      coverflowEffect={{
                        rotate: 50,
                        stretch: 10,
                        depth: 100,
                        modifier: 2.5,
                      }}
                      pagination={{ clickable: true }}
                      noSwiping={true}
                      noSwipingClass="swiper-no-swiping"
                      className="mySwiper swiper-no-swiping"
                      onSlideChange={handleSlideChange}
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                      {Object.keys(modeImages).map((mode, index) => (
                        <SwiperSlide
                          key={mode}
                          className="swiper-no-swiping flex justify-center items-center"
                          style={{
                            width: "200px",
                            height: "280px",
                          }}
                        >
                          {/* Removed Link from Image */}
                          <div
                            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-300 ${
                              activeIndex === index
                                ? "scale-110 opacity-100 transform translate-x-40 z-50"
                                : activeIndex === (index - 1 + Object.keys(modeImages).length) % Object.keys(modeImages).length
                                ? "scale-90 opacity-50 transform skew-y-12 translate-x-36 blur-sm"
                                : activeIndex === (index + 1) % Object.keys(modeImages).length
                                ? "scale-90 opacity-50 transform -skew-y-12 translate-x-44 blur-sm"
                                : "scale-75 opacity-30 transform skew-y-12 blur-sm"
                            }`}
                            onClick={() => {
                              // Only allow clicking to set active index
                              if (activeIndex === index) {
                                setActiveIndex(index);
                              }
                            }}
                            style={{
                              pointerEvents: activeIndex === index ? "auto" : "none",
                            }}
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

                    {/* Navigation Buttons */}
                    <div className="flex justify-between w-1/3 mt-5 -translate-x-8">
                      <button
                        className={`${
                          isButtonEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500 cursor-pointer"
                        } text-white p-3 rounded-full transition`}
                        onClick={handleBack}
                        aria-label="Back"
                        disabled={!isButtonEnabled}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </button>

                      <button
                        className={`${
                          isButtonEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500 cursor-pointer "
                        } text-white p-3 rounded-full transition`}
                        onClick={handleNext}
                        aria-label="Next"
                        disabled={!isButtonEnabled}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </button>
                    </div>

                    {/* Mode Title as Button with Link */}
                    <div className="flex items-center justify-center mt-5 -translate-y-20 -translate-x-9">
                      <Link href="/selectcourse" passHref>
                        <button
                          className="text-xl font-poppins hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-[#035CC2] to-[#073269] rounded-full p-3 text-white flex items-center"
                          onClick={handleClick}
                          aria-label={`Selected Mode: ${selectedMode}`}
                        >
                          {isLoading ? (
                            <span className="loading loading-spinner loading-sm text-white"></span>
                          ) : (
                            modeTitles[selectedMode] /* Displays the mode title */
                          )}
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Sprites animation */}
                  {isNewUser && (
                    <div className="fixed top-48 right-20 z-50">
                      <img
                        src="/assets/vrrr.gif"
                        alt="VR animation"
                        className="w-[400px] h-[300px] animate-pop-up"
                      />
                    </div>
                  )}
                  <div className="w-full h-full">
                    {/* Add other content here */}
                  </div>

                      {/* Panel Box */}
                      <div className="relative flex justify-center items-center font-poppins translate-y-36 w-[1700px] h-[300px] bg-gradient-to-r from-[#035CC2] to-[#073269] rounded-lg border-l border-r border-b-4 border-[#019AEC] shadow-drop-blue mx-auto">
                <div className="absolute inset-0 flex justify-between items-start px-8 py-2 text-white w-full h-full">
                  {/* Column 1: My Courses */}
                  <div className="flex flex-col space-y-2 w-2/4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-zenDots font-semibold text-3xl translate-x-2">
                        My Courses
                      </h3>
                      <a
                        href="#"
                        className="text-lg font-poppins text-white ml-auto hover:underline hover:text-blue-400 -translate-x-4"
                      >
                        See all
                      </a>
                    </div>
                    <div className="space-y-2">
                      {/* Course Items */}
                      <div className="flex justify-between items-center bg-gradient-to-r from-[#035CC2] to-[#073267] border border-[#019AEC] rounded-md p-2">
                        <span className="text-xl w-2/4">Java Programming</span>
                        <AvatarGroup
                          contributors={[
                            { src: "/assets/john.png", alt: "John" },
                            { src: "/assets/jane.png", alt: "Jane" },
                            { src: "/assets/annette.png", alt: "Annette" },
                          ]}
                          maxVisible={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Popular Courses */}
                  <div className="flex flex-col space-y-2 w-2/4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-zenDots font-semibold text-3xl translate-x-2">
                        Popular Courses
                      </h3>
                      <a
                        href="#"
                        className="text-lg font-poppins text-white ml-auto hover:underline hover:text-blue-400 -translate-x-4"
                      >
                        See all
                      </a>
                    </div>
                    <div className="space-y-2">
                      {/* Course Items */}
                      <div className="flex justify-between items-center bg-gradient-to-r from-[#035CC2] to-[#073267] border border-[#019AEC] rounded-md p-2">
                        <span className="text-xl w-2/4">HTML</span>
                        <AvatarGroup
                          contributors={[
                            { src: "/assets/jane.png", alt: "Jane" },
                            { src: "/assets/john.png", alt: "John" },
                            { src: "/assets/emily.png", alt: "Emily" },
                          ]}
                          maxVisible={2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>   
      </div>
    </div>
  );
};

export default Page;
