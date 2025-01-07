"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainContent: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState({
    title: "",
    videoUrl: "",
    instructor: "",
    description: "",
  });

  const lessons = [
    {
      id: 1,
      title: "LESSON 1: INTRODUCTION TO HTML",
      videoUrl: "https://www.youtube.com/embed/salY_Sm6mv4?si=FOyOnNv0-E7ec30C", 
      description: "HTML (HyperText Markup Language) is the standard language used to create and design the structure of web pages on the Internet. It acts as the backbone of web development, providing the basic framework for how content is displayed in web browsers.",
      instructor: "Mr. John Doe",
    },
    {
      id: 2,
      title: "LESSON 2: INTRODUCTION TO CSS",
      videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      description: "Learn how to style your web pages with CSS. CSS (Cascading Style Sheets) is a style sheet language used to control the presentation and layout of web pages. While HTML defines the structure of a web page, CSS enhances its appearance by adding colors, fonts, layouts, and other visual effects.",
      instructor: "Ms. Jane Smith",
    },
    {
      id: 3,
      title: "LESSON 3: INTRODUCTION TO JAVASCRIPT",
      videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      description: "Learn how to make your web pages interactive with JavaScript. JavaScript is a powerful, lightweight, and versatile programming language used to add interactivity and functionality to web pages. Alongside HTML and CSS, JavaScript is one of the core technologies of the web, enabling dynamic content such as animations, form validation, and interactive features.",
      instructor: "Mr. Michael Brown",
    },
    {
      id: 4,
      title: "LESSON 4: ADVANCED HTML AND FORMS",
      videoUrl: "https://www.youtube.com/embed/QFvqStqPCRU",
      description: "Learn about advanced HTML topics, including forms and multimedia. As you progress with HTML, you’ll encounter advanced features that provide greater control over web page functionality and user interaction. Forms, in particular, are a critical component for collecting and processing user input.",
      instructor: "Ms. Emily Davis",
    },
    {
        id: 5,
        title: "LESSON 5: ADVANCED HTML AND FORMS",
        videoUrl: "https://www.youtube.com/embed/QFvqStqPCRU",
        description: "Learn about advanced HTML topics, including forms and multimedia. As you progress with HTML, you’ll encounter advanced features that provide greater control over web page functionality and user interaction. Forms, in particular, are a critical component for collecting and processing user input.",
        instructor: "Ms. Emily Davis",
      },
  ];

  return (
    <div className="fixed top-1/2 left-2/4 transform -translate-x-2/4 -translate-y-1/3 w-full h-full flex justify-center items-center shadow-2xl font-poppins">
      <div className="flex flex-row justify-center items-center w-full h-full">
        {/* Lesson Panel 1 */}
        <div className="w-[1000px] h-[800px] flex justify-center items-center p-1 translate-x-20 -translate-y-28 rounded-lg bg-[#0286DF] relative">
              {/* Panel Header above Lesson Panel 1 */}
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[920px] flex justify-between items-center p-0 bg-[#123775] rounded-t-lg">
            {/* Header Buttons */}
            <div className="flex space-x-4">
              <button
                className="px-1 py-1 w-28 bg-[#0F62E6] text-white rounded-lg hover:bg-white hover:text-black"
                type="button"
                aria-label="Show all lessons"
              >
                All
              </button>
              <button
                className="px-1 py-1 w-28 bg-[#0F62E6] text-white rounded-lg hover:bg-white hover:text-black"
                type="button"
                aria-label="Show completed lessons"
              >
                Complete
              </button>
              <button
                className="px-1 py-1 w-28 bg-[#0F62E6] text-white rounded-lg hover:bg-white hover:text-black"
                type="button"
                aria-label="Continue lessons"
              >
                Continue
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-[#0F62E6] rounded-lg px-1 py-1 space-x-2 w-[300px]">
              <input
                type="text"
                placeholder="Search lesson"
                className="w-full px-1 py-1 rounded-lg focus:outline-none text-black bg-[#A8DCF3]"
                aria-label="Search lessons"
              />
              <button className="text-white" type="button" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-full bg-gradient-to-b from-[#123775] via-[#164592] to-[#07152C] rounded-lg overflow-y-scroll">
            <div className="grid grid-cols-1 p-4 -translate-x-10">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="relative mb-4">
                  {/* Lesson Image */}
                  <img
                    src="/assets/lessoncontentpanel.png"
                    alt={lesson.title}
                    className="w-full h-auto max-h-52 object-cover rounded-lg"
                  />
                  {/* Lesson Info */}
                  <div className="absolute bottom-24 left-36 text-white space-y-1">
                    <h2 className="font-semibold text-lg">{lesson.title}</h2>
                    <div className="flex items-center space-x-2">
                      <FontAwesomeIcon icon={faUser} className="w-8 h-5 text-white" />
                      <span className="text-sm">{lesson.instructor}</span>
                    </div>
                    {/* <p className="text-xs break-words">{lesson.description}</p> */}
                  </div>
                  {/* Watch Lesson Button */}
                  <button
                    className="absolute bottom-8 left-1/4 transform -translate-x-16 bg-transparent p-0 transition-transform hover:scale-110 cursor-pointer"
                    onClick={() =>
                      setSelectedLesson({
                        title: lesson.title,
                        videoUrl: lesson.videoUrl,
                        instructor: lesson.instructor,
                        description: lesson.description,
                      })
                    }
                  >
                    <img
                      src="/assets/btnwatchlesson.png"
                      alt="Watch Lesson"
                      className="w-32 h-16"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lesson Panel 2 */}
<div className="w-[600px] h-[800px] flex justify-center items-center p-1 -translate-y-28 rounded-lg ml-6 bg-[#0286DF]">
  <div className="w-full h-full bg-gradient-to-b from-[#123775] via-[#164592] to-[#07152C] rounded-lg flex flex-col items-start justify-start p-4 ">
    {selectedLesson.videoUrl ? (
      <>
        {/* Video */}
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={selectedLesson.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Lesson Title */}
        <h2 className="text-white text-xl font-semibold mt-4 text-left">
          {selectedLesson.title}
        </h2>

        {/* Instructor Info */}
        <div className="flex items-center mt-2 text-left">
          <FontAwesomeIcon icon={faUser} className="text-white mr-2" />
          <span className="text-white text-sm">{selectedLesson.instructor}</span>
        </div>

        {/* Lesson Description */}
        <p className="text-white text-sm mt-2 space-y-10 text-left">
          {selectedLesson.description}
        </p>

        {/* Underline based on description length */}
        <div
          className="h-1 bg-white mt-2"
          style={{
            width: `${selectedLesson.description.length}%`, // Adjust underline length based on description length
            maxWidth: "100%", // Ensure it doesn't exceed the full width
          }}
        ></div>

        {/* Images and Experience Bar at the bottom */}
        <div className="flex justify-between w-full mt-4 items-center">
          {/* Bronze Image */}
          <div className="flex items-center space-x-4">
            <img
              src="/assets/bronze.png"
              alt="Bronze"
              className="w-16 h-16 object-cover"
            />
            {/* Experience Level Bar */}
            <div className="flex flex-col w-80">
              
              <div className="w-full h-4 bg-[#FC0000] mt-2 rounded-md">
                <div className="h-full rounded-md bg-[#00FC08]" style={{ width: '35%' }}></div> {/* Example: 35% progress */}
                <span className="text-white text-sm">+35 EXP</span>
              </div>
            </div>
          </div>

         {/* Watch Lesson Button */}
            <a
            href="/lesson"  // Replace this with the URL or path you want to navigate to
            className="bg-transparent p-0 transition-transform hover:scale-110 cursor-pointer translate-y-52"
            >
            <img
                src="/assets/btnwatchlesson.png"
                alt="Watch Lesson"
                className="w-32 h-16"
            />
            </a>

            </div>
            </>
            ) : (
            <p className="text-white text-center">Select a lesson to view details.</p>
            )}
        </div>
        </div>


      </div>
    </div>
  );
};

export default MainContent;
