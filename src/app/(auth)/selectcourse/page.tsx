"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "../../../components/ui/newheader"; // Correct path to the updated Header component
import Sidebar from "../../../components/ui/newsidebar"; // Correct path to Sidebar
import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link"; // Import Link component

import Image from "next/image";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

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

  const [selectedCourse, setSelectedCourse] = useState<"htmlcourse" | "csscourse" | "jscourse">("htmlcourse");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const swiperRef = useRef<any>(null);

  const [isSoloPanelVisible, setSoloPanelVisible] = useState(false); // State for solopanel visibility for solomode
  const [isLobbyPanelVisible, setIsLobbyPanelVisible] = useState(false); // State for lobbypanel for  multiplayer
  const [isJoinLobbyVisible, setIsJoinLobbyVisible] = useState(false); // State for joinlobbypanel for  multiplayer
  const [isPanelCreateVisible, setIsPanelCreatelVisible] = useState(false); // State for lobbypanel for  multiplayer
  const [isLobbyFullVisible, setIsLobbyFullVisible] = useState(false); // State for joinlobbypanel for  multiplayer
  const [isPanelDiffVisible, setPanelDiffVisible] = useState(false); // State for paneldiff visibility both solomode and multiplayer mode
  

  const courseImages: Record<"htmlcourse" | "csscourse" | "jscourse", string> = {
    jscourse: "/assets/jscourse.png",
    csscourse: "/assets/csscourse.png",
    htmlcourse: "/assets/htmlcourse.png",
  };

  const courseTitles: Record<"htmlcourse" | "csscourse" | "jscourse", string> = {
    htmlcourse: "HTML Course",
    csscourse: "CSS Course",
    jscourse: "JavaScript Course",
  };

  const courseLinks: Record<"htmlcourse" | "csscourse" | "jscourse", string> = {
    htmlcourse: "/html-course",
    csscourse: "/css-course",
    jscourse: "/javascript-course",
  };

  useEffect(() => {
    if (mode === 'solomode') {
      setSoloPanelVisible(true);
    } else if (mode === 'multimode') {
      setIsLobbyPanelVisible(true);
    }
  }, [mode]);
  
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    const modeKeys = Object.keys(courseImages) as (keyof typeof courseImages)[];
    setSelectedCourse(modeKeys[swiper.activeIndex]);
  };

  const handleNext = () => {
    if (isButtonEnabled && swiperRef.current) {
      setIsButtonEnabled(false); // Disable button
      swiperRef.current.slideNext();
      const modeKeys = Object.keys(courseImages) as (keyof typeof courseImages)[];
      const nextIndex = (activeIndex + 1) % modeKeys.length;
      setSelectedCourse(modeKeys[nextIndex]);
      setActiveIndex(nextIndex);
      setTimeout(() => setIsButtonEnabled(true), 500); // Re-enable button after 500ms
    }
  };

  const handleBack = () => {
    if (isButtonEnabled && swiperRef.current) {
      setIsButtonEnabled(false); // Disable button
      swiperRef.current.slidePrev();
      const modeKeys = Object.keys(courseImages) as (keyof typeof courseImages)[];
      const prevIndex = (activeIndex - 1 + modeKeys.length) % modeKeys.length;
      setSelectedCourse(modeKeys[prevIndex]);
      setActiveIndex(prevIndex);
      setTimeout(() => setIsButtonEnabled(true), 500); // Re-enable button after 500ms
    }
  };

  const handleCreateClick = () => {
    // Logic for solo mode selection
    setIsPanelCreatelVisible(true);
    setIsLobbyPanelVisible(false);
  };
  
  const handleJoinClick = () => {
    // Logic for multiplayer selection
    console.log("Multiplayer Mode Selected");
  };
  
  const closeLobbyPanel = () => {
    setIsLobbyPanelVisible(false);
    setPanelDiffVisible(true);
  };

  const handleStartCourseClick = () => {
    setSoloPanelVisible(true); // Show 
    setIsLobbyPanelVisible(false);
    setIsJoinLobbyVisible(false);
    setIsLobbyFullVisible(false);
  };

  const handleTakeLesson = (e: React.MouseEvent<HTMLImageElement>) => {
    if (isLoading) {
      // Prevent default action when loading
      e.preventDefault();
      return;
    }
    setIsLoading(true);
  };

  const SolohandleClosePopup = () => {
    setSoloPanelVisible(false); // Hide popup
    setPanelDiffVisible(false); // Hide paneldiff image when closing the popup
    
  };

  const handleStartGameClick = () => {
    setPanelDiffVisible(true); // Show paneldiff image when lesson button is clicked
  };
  
  const SoloPaneldiffBackButton = () => {
    setSoloPanelVisible(true); 
    setPanelDiffVisible(false);
  }

  const MultiplayerPanelVisible = () => {
    setPanelDiffVisible(true);
  }

  const MultiplayerDiffBackButton = () => {

  }
  
  const MultiplayerhandleClosePopup = () => {
    
    
  };

  switch (selectedCourse) {
    case "htmlcourse":
      console.log("HTML Course Selected");
      // Add any specific logic for HTML course
      break;
    case "csscourse":
      console.log("CSS Course Selected");
      // Add any specific logic for CSS course
      break;
    case "jscourse":
      console.log("JavaScript Course Selected");
      // Add any specific logic for JavaScript course
      break;
    default:
      console.log("No course selected");
      break;
  }

  return (
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
          
          {/* Main Content */}
      <div className="flex w-full h-auto translate-y-48">
        {/* Background container with conditional blur */}
        <div
          className={`relative w-full h-auto flex flex-col items-center -translate-y-20 -translate-x-20 ${
          isSoloPanelVisible || isLobbyPanelVisible || isPanelCreateVisible || isJoinLobbyVisible || isLobbyFullVisible ? "blur-2xl" : ""
          } -translate-x-8`}
        >
          {/* lblcourse.png image above the Swiper slider */}
          <div className="flex translate-x-9">
            <Image
              src="/assets/lblcourse.png"
              alt="Label Course"
              width={500}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Swiper Slider for Course Images */}
          <div className="fixed top-20 left-40 w-auto h-auto flex flex-col items-center ">
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
              {Object.keys(courseImages).map((mode, index) => (
                <SwiperSlide
                  key={mode}
                  className="swiper-no-swiping flex justify-center items-center -translate-x-3"
                  style={{
                    width: "200px",
                    height: "280px",
                  }}
                >
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${
                      activeIndex === index
                      ? "scale-110 opacity-100 transform translate-x-48 z-10"
                      : activeIndex === (index - 1 + Object.keys(courseImages).length) % Object.keys(courseImages).length
                      ? "scale-90 opacity-50 transform skew-y-12 translate-x-48 blur-sm"
                      : activeIndex === (index + 1) % Object.keys(courseImages).length
                      ? "scale-90 opacity-50 transform -skew-y-12 translate-x-48 blur-sm"
                      : "scale-75 opacity-30 transform skew-y-12 blur-sm"
                    }`}
                    onClick={() => setSelectedCourse(mode as keyof typeof courseImages)}
                  >
                    {/* Remove link and swiper for specific courses */}
                    {["htmlcourse", "csscourse", "jscourse"].includes(mode) ? (
                      <Image
                        src={courseImages[mode as keyof typeof courseImages]}
                        alt={mode}
                        width={200}
                        height={300}
                        className="object-cover rounded-xl shadow-md mb-3"
                      />
                    ) : (
                      <a
                        href={courseLinks[mode as keyof typeof courseLinks]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={courseImages[mode as keyof typeof courseImages]}
                          alt={mode}
                          width={200}
                          height={300}
                          className="object-cover rounded-xl shadow-md mb-3"
                        />
                      </a>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-between w-3/6 mt-12 -translate-x-5 translate-y-10">
              <button
                className={`${
                  isButtonEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500 cursor-pointer"
                } text-white p-3 rounded-full transition -translate-y-56`}
                onClick={handleBack}
                aria-label="Back"
                disabled={!isButtonEnabled} // Disable button
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                className={`${
                  isButtonEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500 cursor-pointer"
                } text-white p-3 rounded-full transition -translate-y-56`}
                onClick={handleNext}
                aria-label="Next"
                disabled={!isButtonEnabled} // Disable button
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

            {/* Start Button */}
            <button
              className="font-zenDots px-5 py-2 -translate-y-20 -translate-x-4 bg-gradient-to-r from-[#035CC2] to-[#073269] rounded-full text-white text-lg hover:bg-[#76D5FE] transition-transform transform hover:scale-110 cursor-pointer"
              onClick={handleStartCourseClick}
            >
              Start Course
            </button>

            {/* Column of Images at the bottom of Select Mode */}
              <div className="relative flex justify-center items-center font-poppins h-0 translate-y-44 -translate-x-2">
                {/* Panel Box 1: Leaderboards */}
                <div 
                  className="absolute z-50 flex justify-center items-center rounded-sm -translate-y-40 bg-gradient-to-r from-[#035CC2] to-[#073269] border-t border-l border-r border-[#019AEC]" 
                  style={{ width: 400, height: 60 }}
                >
                  <span className="text-white text-2xl font-bold font-zenDots">LEADERBOARDS</span>
                </div>

                {/* Panel Box 2 */}
                <div 
                  className="relative z-40 bg-gradient-to-r from-[#035CC2] to-[#073269] border-l border-r border-b-4 border-[#019AEC] shadow-drop-blue  rounded-lg" 
                  style={{ width: 1700, height: 260 }}
                >
                  <div className="absolute inset-0 flex justify-between items-start px-8 py-2 text-white w-full h-full">
                      {/* Column 1: My Courses */}
                      <div className="flex flex-col space-y-2 w-2/4 translate-y-4">
                        <div className="space-y-2">
                          {/* Course Items */}
                          <div className="flex justify-between items-center bg-gradient-to-r from-[#035CC2] to-[#073267] border border-[#019AEC] rounded-md p-2">
                            <span className="text-xl w-2/4">HTML</span>
                            <AvatarGroup
                              contributors={[
                                { src: "/assets/jane.png", alt: "Jane" },
                                { src: "/assets/john.png", alt: "John" },
                                { src: "/assets/annette.png", alt: "Annette" },
                              ]}
                              maxVisible={2} // Display 3 avatars with the rest as a count
                            />
                          </div>

                          <div className="flex justify-between items-center bg-gradient-to-r from-[#035CC2] to-[#073267] border border-[#019AEC] rounded-md p-2">
                            <span className="text-xl w-2/4">HTML</span>
                            <AvatarGroup
                              contributors={[
                                { src: "/assets/jane.png", alt: "Jane" },
                                { src: "/assets/john.png", alt: "John" },
                                { src: "/assets/annette.png", alt: "Annette" },
                              ]}
                              maxVisible={2} // Display 3 avatars with the rest as a count
                            />
                          </div>

      
                        </div>
                      </div>
      
                      {/* Column 2: Popular Courses */}
                      <div className="flex flex-col space-y-2 w-2/4 translate-y-4">
                        <div className="space-y-2">
                          {/* Course Items */}
                          <div className="flex justify-between items-center bg-gradient-to-r from-[#035CC2] to-[#073267] border border-[#019AEC] rounded-md p-2">
                            <span className="text-xl w-2/4">HTML</span>
                            <AvatarGroup
                              contributors={[
                                { src: "/assets/jane.png", alt: "Jane" },
                                { src: "/assets/john.png", alt: "John" },
                                { src: "/assets/annette.png", alt: "Annette" },
                              ]}
                              maxVisible={2} // Display 3 avatars with the rest as a count
                            />
                          </div>

                          <div className="flex justify-between items-center bg-gradient-to-r from-[#035CC2] to-[#073267] border border-[#019AEC] rounded-md p-2">
                            <span className="text-xl w-2/4">CSS</span>
                            <AvatarGroup
                              contributors={[
                                { src: "/assets/jane.png", alt: "Jane" },
                                { src: "/assets/john.png", alt: "John" },
                                { src: "/assets/annette.png", alt: "Annette" },
                              ]}
                              maxVisible={2} // Display 3 avatars with the rest as a count
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>

                  {/* ALL POPUP PANELS FUNCTIONS */}
          {/* Solomode Course Panel Popup start game or take lesson */}
        {isSoloPanelVisible && (
          <div className="fixed top-56 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 ">
            <div className="rounded-lg p-10 relative drop-shadow-2xl">
              {/* Show the Close Button when the course panel is visible */}
              {!isPanelDiffVisible && (
                <button
                  onClick={SolohandleClosePopup} // Close popup when clicked
                  className="absolute top-10 right-10 cursor-pointer"
                  aria-label="Close Popup"
                  type="button"
                >
                  <Image
                    src="/assets/btnbackcourse.png" // Path to your image
                    alt="Close Button"
                    width={80}
                    height={50}
                    className="transition-transform transform hover:scale-110"
                  />
                </button>
              )}

              {/* Conditional rendering: Hide COURSE PANEL if PANELDIFF1 is visible */}
              {!isPanelDiffVisible && (
                <>
                {/* Course Panel BG Image */}
                <Image
                  src="/assets/bgpanel.png"
                  alt="Start Course Panel"
                  width={600}
                  height={400}
                  className="rounded-lg border-2 border-[#019AEC] shadow-2xl"
                />
          
                {/* Take Lesson Button */}
                <Link href="/lesson" passHref>
                  <div className="relative flex">
                    {isLoading && (
                      <div className="fixed top-48 left-56 flex items-center justify-center">
                        <span className="loading loading-spinner loading-md text-white"></span>
                      </div>
                    )}
                    <Image
                      src="/assets/btntklesson.png"
                      alt="HTML Course"
                      width={200}
                      height={80}
                      className={`absolute translate-x-24 -translate-y-48 cursor-pointer transition-transform transform hover:scale-110 ${
                        isLoading ? "opacity-50" : "opacity-100"
                      }`}
                      onClick={handleTakeLesson}
                      
                    />
                  </div>
                </Link>
              </>
              )}
            </div>

                {/* Start GAME Course Button */}
                {!isPanelDiffVisible && (
                  <Image
                    src="/assets/btnstart.png"
                    alt="Start Course Panel"
                    width={200}
                    height={80}
                    className="absolute translate-x-24 cursor-pointer transition-transform transform hover:scale-110"
                    onClick={handleStartGameClick} // Show paneldiff image when clicked
                  />
                )}
          </div>
        )}



        {/* FOR MULTIPLAYER MODE SECTION */}
        {/* SELECT LOBBY PANEL SECTION FOR MULTIPLAYER */}
          {isLobbyPanelVisible && (
            <div className="fixed top-56 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
              <div className="rounded-lg p-10 relative drop-shadow-2xl">
                
                {/* Lobby Panel Background Image */}
                <Image
                  src="/assets/paneldiff1.png"
                  alt="Lobby Panel"
                  width={600}
                  height={400}
                  className="rounded-lg border-2 border-[#019AEC] shadow-2xl"
                />

                {/* Content Inside Lobby Panel */}
                <div className="absolute top-28 left-36 z-50 justify-center items-center">
                  {/* Select Lobby Label */}
                  <h1 className="text-center text-white text-3xl font-bold font-zenDots mb-2 p-2">Select Lobby Mode</h1>

                  {/* Lobby Mode Options */}
                  <div className="flex">
                    {/* Create Button */}
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/btncreate.png"
                        alt="Solo Mode"
                        width={200}
                        height={200}
                        className="rounded-lg cursor-pointer transition-transform transform hover:scale-110"
                        onClick={handleCreateClick} // Function to handle Solo Mode selection
                      />
                    </div>

                    {/* Multiplayer Mode */}
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/btnjoin.png"
                        alt="Multiplayer Mode"
                        width={200}
                        height={200}
                        className="rounded-lg cursor-pointer transition-transform transform hover:scale-110"
                        onClick={handleJoinClick} // Function to handle Multiplayer Mode selection
                      />
                    </div>
                  </div>
                </div>

                {/* Close Button for Lobby Panel */}
                <button
                  onClick={closeLobbyPanel} // Function to close the Lobby Panel
                  className="fixed top-10 right-10 cursor-pointer"
                  aria-label="Back to Main Menu"
                  type="button"
                >
                  <Image
                    src="/assets/btnbackcourse.png" // Path to the back button
                    alt="Back Button"
                    width={80}
                    height={50}
                    className="transition-transform transform hover:scale-110"
                  />
                </button>
              </div>
            </div>
          )}

          {/* For Create button function panel section */}
            {isPanelCreateVisible && (
              <div className="fixed top-72 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 shadow-2xl">

                <div className="relative w-full max-w-5xl p-2 drop-shadow-2xl">
                  {/* Panel Diff Image */}
                  <Image
                    src="/assets/bgpanel.png"
                    alt="Panel Diff"
                    width={1600}
                    height={400}
                    className="rounded border border-[#019AEC]"
                  />
                  
                  {/* Close Button for Panel Diff - Brings back the Course Panel */}
                  <button
                    onClick={SoloPaneldiffBackButton}  // Close the paneldiff image and return to course panel
                    className="absolute top-4 right-4 z-50"
                    aria-label="Back to Course Panel"
                    type="button"
                  >
                    <Image
                      src="/assets/btnbackcourse.png"  // Path to the back course button
                      alt="Back Button"
                      width={80}
                      height={50}
                      className="cursor-pointer transition-transform transform hover:scale-110"
                    />
                  </button>
                  
                  {/* Content inside Create Panel */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    {/* Select Lobby Label */}
                    <h1 className="text-center text-white text-3xl font-bold font-zenDots mb-2 p-2">Welcome to User's Lobby</h1>
                    <h3 className="text-center text-white text-xl font-normal font-zenDots mb-4">Lobby ID:</h3>

                    {/* USER'S LIST OF LOBBY TABLE */}
                    <div className="bg-transparent rounded-lg w-[500px] text-center shadow-md mb-2 border p-2">
                      <div className="space-y-2 text-white">
                        <div className="flex flex-row items-center justify-center text-nowrap border">
                          <Image src="/assets/avatar.png" alt="User 1" width={50} height={50} className="rounded-full " />
                          <Image src="/assets/bronze.png" alt="Gold Badge" width={30} height={30} className="" />
                          <span>John Doe</span>
                        </div>
                        <div className="flex flex-row items-center justify-center text-nowrap border">
                          <Image src="/assets/avatar.png" alt="User 1" width={50} height={50} className="rounded-full " />
                          <Image src="/assets/bronze.png" alt="Silver Badge" width={30} height={30} className="" />
                          <span>Jane Smith</span>
                        </div>
                        <div className="flex flex-row items-center justify-center text-nowrap border">
                          <Image src="/assets/avatar.png" alt="User 3" width={50} height={50} className="rounded-full " />
                          <Image src="/assets/bronze.png" alt="Bronze Badge" width={30} height={30} className="" />
                          <span>Alex Johnson</span>
                        </div>
                        <div className="flex flex-row items-center justify-center text-nowrap border">
                          <Image src="/assets/avatar.png" alt="User 4" width={50} height={50} className="rounded-full " />
                          <Image src="/assets/bronze.png" alt="Platinum Badge" width={30} height={30} className="" />
                          <span>Chris Lee</span>
                        </div>
                        <div className="flex flex-row items-center justify-center text-nowrap border">
                          <Image src="/assets/avatar.png" alt="User 5" width={50} height={50} className="rounded-full " />
                          <Image src="/assets/bronze.png" alt="Diamond Badge" width={30} height={30} className="" />
                          <span>Pat Morgan</span>
                        </div>
                      </div>
                    </div>

                    {/* Lobby Mode Options */}
                    <div className="flex justify-around w-full">
                      {/* Reload */}
                      <div className="flex justify-center items-center">
                        <Image
                          src="/assets/btnreload.png"
                          alt="Solo Mode"
                          width={200}
                          height={200}
                          className="rounded-lg cursor-pointer transition-transform transform hover:scale-110"
                          onClick={handleCreateClick} // Function to handle Solo Mode selection
                        />
                      </div>

                      {/* Join User */}
                      <div className="flex justify-center items-center">
                        <Image
                          src="/assets/btnstart1.png"
                          alt="Join"
                          width={200}
                          height={200}
                          className="rounded-lg cursor-pointer transition-transform transform hover:scale-110"
                          onClick={handleJoinClick} // Function to handle Multiplayer Mode selection
                        />
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            )}

            {/* FOR JOIN BUTTON FUNCTION PANEL SECTION */}
            {isJoinLobbyVisible && (
              <div className="fixed top-56 inset-0 flex justify-center items-center bg-black z-50 bg-opacity-50">
                <div className="relative w-[800px] max-w-5xl drop-shadow-2xl">

                  {/* BG PANEL */}
                  <Image
                    src="/assets/bgpanel.png"
                    alt="Panel Diff"
                    width={1600}
                    height={400}
                    className="border-2 border-[#019AEC]"
                  />

                  {/* Content inside Create Panel */}
                  <div className="absolute bottom-10 inset-0 flex flex-col justify-center items-center">
                    {/* Choose Lobby Label */}
                    <h1 className="text-center text-white text-3xl font-bold font-zenDots mb-2 p-2">Choose Lobby</h1>

                    {/* LOBBY TABLE */}
                    <div className="bg-transparent w-[600px] text-center shadow-md mb-2 border p-2">
                      <div className="space-y-2 text-white">
                        {/* Table Header */}
                        <div className="flex justify-between text-xl font-semibold font-zenDots mb-4">
                          <div className="w-1/2">Lobby ID</div>
                          <div className="w-1/2">Lobby Master</div>
                        </div>

                        {/* Table Rows - Each row represents a lobby */}
                        <div className="flex justify-between items-center border py-2">
                          <div className="w-1/2">12345</div>
                          <div className="w-1/2">John Doe</div>
                        </div>
                        <div className="flex justify-between items-center border py-2">
                          <div className="w-1/2">67890</div>
                          <div className="w-1/2">Jane Smith</div>
                        </div>
                        <div className="flex justify-between items-center border py-2">
                          <div className="w-1/2">54321</div>
                          <div className="w-1/2">Alex Johnson</div>
                        </div>
                        <div className="flex justify-between items-center border py-2">
                          <div className="w-1/2">98765</div>
                          <div className="w-1/2">Chris Lee</div>
                        </div>
                        <div className="flex justify-between items-center border py-2">
                          <div className="w-1/2">13579</div>
                          <div className="w-1/2">Pat Morgan</div>
                        </div>
                      </div>
                    </div>

                    {/* Close Button for Panel Diff - Brings back the Course Panel */}
                  <button
                    onClick={SoloPaneldiffBackButton}  // Close the paneldiff image and return to course panel
                    className="fixed bottom-1 right-4 z-50"
                    aria-label="Back to Course Panel"
                    type="button"
                  >
                    <Image
                      src="/assets/btnjoin.png"  // Path to the back course button
                      alt="Back Button"
                      width={150}
                      height={50}
                      className="cursor-pointer transition-transform transform hover:scale-110"
                    />
                  </button>
                  </div>
                </div>
              </div>
            )}

            {/* LOBBY FULL PANEL SECTION */}
            {isLobbyFullVisible && (
              <div className="fixed top-56 inset-0 flex justify-center items-center bg-black z-50 bg-opacity-50">
                  <div className="relative w-[600px] max-w-5xl drop-shadow-2xl">
                    {/* BG PANEL */}
                      <Image
                          src="/assets/bgpanel.png"
                          alt="Panel Diff"
                          width={1600}
                          height={400}
                          className="border-2 border-[#019AEC]"
                        />

                      {/* CONTENT INSIDE LOBBY FULL PANEL */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className="text-center text-white text-3xl font-bold font-zenDots mb-2 p-2">This lobby is full, Match is ongoing...</h1>
                      </div>
                      {/* Close Button for Panel Diff - Brings back the Course Panel */}
                      <button
                        onClick={SoloPaneldiffBackButton}  // Close the paneldiff image and return to course panel
                        className="absolute top-4 right-4 z-50"
                        aria-label="Back to Course Panel"
                        type="button"
                      >
                        <Image
                          src="/assets/btnbackcourse.png"  // Path to the back course button
                          alt="Back Button"
                          width={70}
                          height={50}
                          className="cursor-pointer transition-transform transform hover:scale-110"
                        />
                      </button>
                  </div>
              </div>
            )}

            {/* SELECT DIFFICULTY PANEL SECTION BOTH SOLO MODE AND MULTIPLAYER */}
              {isPanelDiffVisible && (
              <div className="fixed top-56 inset-0 flex justify-center items-center bg-black z-50 bg-opacity-50  ">
                  <div className="rounded-lg p-10 relative w-full max-w-5xl drop-shadow-2xl ">
                  
                  {/* Panel Diff Image */}
                  <Image
                      src="/assets/paneldiff1.png"
                      alt="Panel Diff"
                      width={1600}
                      height={400}
                      className="rounded-lg border-2 border-[#019AEC] shadow-2xl"
                  />
                  
                  {/* Content inside Panel Diff Image */}
                  <div className="absolute inset-0 flex justify-center items-center gap-8">
                      <div className="flex justify-center items-center">
                      <Image
                          src="/assets/imgbegin.png"
                          alt="Begin"
                          width={200}
                          height={200}
                          className="rounded-lg cursor-pointer transition-transform transform hover:scale-110"
                      />
                      </div>
                      <div className="flex justify-center items-center">
                      <Image
                          src="/assets/imginter.png"
                          alt="Intermediate"
                          width={200}
                          height={200}
                          className="rounded-lg cursor-pointer transition-transform transform hover:scale-110"
                      />
                      </div>
                      <div className="flex justify-center items-center">
                      <Image
                          src="/assets/imgad.png"
                          alt="Advanced"
                          width={200}
                          height={200}
                          className="rounded-lg cursor-pointer transition-transform transform hover:scale-110"
                      />
                      </div>
                      <div className="absolute top-20 z-50 justify-center items-center">
                      <Image
                          src="/assets/lblselectdiff.png"
                          alt="Label Diff"
                          width={500}
                          height={200}
                          className="rounded-lg"
                      />
                      </div>
                  </div>

                  {/* Close Button for Panel Diff - Brings back the Course Panel */}
                  <button
                      onClick={SoloPaneldiffBackButton}  // Close the paneldiff image and return to course panel
                      className="absolute top-10 left-10 cursor-pointer"
                      aria-label="Back to Course Panel"
                      type="button"
                  >
                      <Image
                      src="/assets/btnbackcourse.png"  // Path to the back course button
                      alt="Back Button"
                      width={80}
                      height={50}
                      className="transition-transform transform hover:scale-110"
                      />
                  </button>
                  </div>
              </div>
              )}
      </div>
      </div>
    </div>
  );
};

export default Page;
