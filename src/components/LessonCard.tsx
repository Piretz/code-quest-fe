import React from "react";
import { FaPlay } from "react-icons/fa"; // Import the play icon

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
      className={`p-5 rounded-md shadow-xl ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-b from-blue-100 to-blue-300 text-black"
      }`}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{`By ${author}`}</p>
      <p className="text-sm">{duration}</p>
      <p className="mt-4 text-sm">{description}</p>
      <button
        className={`mt-4 py-2 px-4 rounded-md flex items-center space-x-2 ${
          isDarkMode
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-blue-800 hover:bg-blue-400 text-white"
        }`}
      >
        <FaPlay className="h-5 w-5" />
        <span>Watch the lesson</span>
      </button>
    </div>
  );
};

export default LessonCard;
