"use client";
import Link from "next/link"; // Import Link component
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const MainContent: React.FC = () => {
  const [selectedMode, setSelectedCourse] = useState<"htmlcourse" | "csscourse" | "jscourse">("htmlcourse");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility
  const [isPanelDiffVisible, setPanelDiffVisible] = useState(false); // State for paneldiff visibility
  const [isButtonEnabled, setIsButtonEnabled] = useState(true); // State for button debounce
  const swiperRef = useRef<any>(null);

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

  const handleStartClick = () => {
    setPopupVisible(true); // Show popup
  };

  const handleClosePopup = () => {
    setPopupVisible(false); // Hide popup
    setPanelDiffVisible(false); // Hide paneldiff image when closing the popup
  };

  const handleStartGameClick = () => {
    setPanelDiffVisible(true); // Show paneldiff image when lesson button is clicked
  };
  
  const PaneldiffBackButton = () => {
    setPopupVisible(true); 
    setPanelDiffVisible(false);
  }

  return (
    <div className="w-full h-auto">
      {/* Background container with conditional blur */}
      <div
        className={`relative w-full h-auto flex flex-col items-center ${
          isPopupVisible ? "blur-sm" : ""
        } -translate-x-8`}
      >
        {/* lblcourse.png image above the Swiper slider */}
        <div className="-translate-y-10 translate-x-2">
          <Image
            src="/assets/lblcourse.png"
            alt="Label Course"
            width={300}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Swiper Slider for Course Images */}
        <Swiper
          loop={true}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 10,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {Object.keys(courseImages).map((mode, index) => (
            <SwiperSlide
              key={mode}
              className="flex justify-center items-center"
              style={{
                width: "200px",
                height: "300px",
              }}
            >
              <div
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${
                  activeIndex === index
                    ? "scale-110 opacity-100 transform translate-x-52 z-10"
                    : "scale-90 opacity-50 transform translate-x-52 blur-sm"
                }`}
                onClick={() => setSelectedCourse(mode as keyof typeof courseImages)}
              >
                <a href={courseLinks[mode as keyof typeof courseLinks]} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={courseImages[mode as keyof typeof courseImages]}
                    alt={mode}
                    width={350}
                    height={300}
                    className="object-cover rounded-xl shadow-md mb-3"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-2/5 mt-12 translate-x-2">
        <button
            className={`${
              isButtonEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
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
              isButtonEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
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
          className="font-zenDots px-5 py-2 -translate-y-24 translate-x-2 bg-[#0190E6] text-white rounded-full text-lg hover:bg-[#76D5FE] transition-transform transform hover:scale-110 cursor-pointer hover:text-black"
          onClick={handleStartClick}
        >
          Start Course
        </button>

        {/* Column of Images at the bottom of Select Mode */}
        <div className="relative flex justify-center items-center font-poppins h-0 min-h-0 translate-y-28">
              <Image 
                src="/assets/lbcoursepanel2.png" 
                alt="Main Image" 
                width={1800} 
                height={100} 
                className="rounded-lg" 
              />

              {/* Content Overlay */}
              <div className="absolute bottom-32 -translate-y-2 flex justify-center items-center z-50">
                <Image 
                  src="/assets/lblleaderboard.png" 
                  alt="Leaderboard Content" 
                  width={250} 
                  height={100} 
                  className="" 
                />
              </div>
                <div className="absolute inset-0 flex justify-between items-start px-8 py-6 h-0 text-white">
                  {/* Column 1: My Courses */}
                      <div className="flex flex-col space-y-4 w-2/4 -translate-y-20">
                        
                    <div className="space-y-8 -translate-y-10 translate-x-6">
                      <div className="flex justify-between items-center border-2 border-[#019AEC] w-full">
                        <span className="text-xl w-2/4">Java Programming</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
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
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
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
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
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
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
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
                      <div className="flex flex-col space-y-4 w-2/4 -translate-y-20">
                        
                    <div className="space-y-8 -translate-y-10 -translate-x-4">
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/3 translate-x-12">HTML</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/jane.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/john.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-12">Introduction to Computing</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                          <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-12">CSS</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
                        <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/avatar.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        <Image src="/assets/annette.png" alt="Contributor" width={30} height={30} className="inline-block rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-2 border-[#019AEC]">
                        <span className="text-xl w-2/4 translate-x-12">HTML</span>
                        <div className="flex -space-x-2 overflow-hidden -translate-x-20">
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
      </div>

        {/* Course Panel Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-md ">
          <div className="rounded-lg p-10 relative">
            {/* Show the Close Button when the course panel is visible */}
            {!isPanelDiffVisible && (
              <button
                onClick={handleClosePopup} // Close popup when clicked
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
                {/* Course Panel Image */}
                <Image
                  src="/assets/stcoursepanel1.png"
                  alt="Start Course Panel"
                  width={600}
                  height={400}
                  className="rounded-lg border-2 border-[#019AEC] shadow-2xl"
                />

                {/* Take Lesson Button */}
                <Link href="/lesson" passHref>
                <Image
                  src="/assets/btntklesson.png"
                  alt="HTML Course"
                  width={200}
                  height={80}
                  className="absolute translate-x-24 -translate-y-48 cursor-pointer transition-transform transform hover:scale-110"
                />
              </Link>
              </>
            )}
          </div>

              {/* Start Course Button */}
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

          {/* SELECT DIFFICULTY PANEL SECTION */}
            {isPanelDiffVisible && (
            <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-xl border-2 border-[#019AEC]">
                <div className="rounded-lg p-10 relative w-full max-w-5xl">
                
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
                    onClick={PaneldiffBackButton}  // Close the paneldiff image and return to course panel
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
  );
};

export default MainContent;
