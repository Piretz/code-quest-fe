import React from "react";
import { FaPlay, FaCircle } from "react-icons/fa"; 

interface LessonCardProps {
  title: string;
  duration: string;
  author: string;
  description: string;
  isDarkMode: boolean; // Add isDarkMode to props
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  duration,
  author,
  description,
  isDarkMode,
}) => {
  return (
    <div
      className={`p-5 rounded-lg shadow-xl max-w-6xl font-poppins pr-5 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-[#76D5FE] text-black" // Apply custom color for light mode
      }`}
    >
      <h2 className="text-lg font-poppins font-extrabold  flex items-center space-x-2">
        <FaCircle className="text-xl" /> {/* Large bullet */}
        <span>{title} {duration}</span>
      </h2>

      <p className="text-sm font-poppins font-semibold pl-8 space-x-10 pt-2">{` ${author}`}</p>

      <p className="mt-6 pl-11 pb-5 font-poppins text-sm border-b border-black space-y-6">{description}</p>
      <button
        className={`mt-4 py-2 px-4 rounded-md flex items-center space-x-2 font-poppins ${
          isDarkMode
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-[#00B0FC] hover:bg-white text-black hover:text-black"
        }`}
      >
        <FaPlay className="h-5 w-5 " />
        <span>Watch the lesson</span>
      </button>
    </div>
  );
};

export default LessonCard;
