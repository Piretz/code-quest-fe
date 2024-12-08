"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainContent: React.FC = () => {
  // State to manage the selected video ID and lesson information
  const [selectedLesson, setSelectedLesson] = useState({
    videoId: "",
    title: "Lesson Description",
    content: "Select a lesson to display its description here.",
  });

  // State to manage comments
  const [comments, setComments] = useState<
    { text: string; id: number; name: string }[]
  >([]);

  // State to manage the new comment input
  const [newComment, setNewComment] = useState<string>("");

  // Function to handle video and lesson selection
  const handleLessonSelection = (
    videoId: string,
    title: string,
    content: string
  ) => {
    setSelectedLesson({ videoId, title, content });
  };

  // Function to handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        { text: newComment, id: comments.length, name: "User" },
      ]);
      setNewComment(""); // Clear the input field after submission
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-[100vh] w-[85%] translate-x-28 -translate-y-10"
      style={{
        backgroundImage: "url('/assets/lessonpanel.png')", // Path for background image
      }}
    >
      {/* Content */}
      <h1 className="absolute top-96 translate-y-32 translate-x-20 text-white text-3xl font-zenDots font-bold">
        {selectedLesson.title}
      </h1>
      <p className="relative top-96 translate-y-44 translate-x-20 w-[50%] text-white text-lg text-justify font-poppins font-normal break-words">
        {selectedLesson.content}
      </p>

      {/* Video Panel */}
      {selectedLesson.videoId && (
  <div className="fixed top-[5%] left-[7%] z-10">
    <iframe
      className="h-[45vh] aspect-video lg:aspect-video border-4 border-[#019AEC]"
      src={`https://www.youtube.com/embed/${selectedLesson.videoId}`}
      title="Lesson Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)}

     {/* Container for the Lesson section */}
<div className="absolute left-2/3 -translate-x-16 translate-y-5 bottom-12 flex flex-col space-y-2 w-2/6 text-md font-poppins">
  {/* Lesson label */}
  <h1 className="font-poppins font-bold text-2xl mb-2 translate-y-2">Lessons:</h1>

  {/* Scrollable button container */}
  <div className="max-h-64 overflow-y-auto space-y-2">
    <button
      className="bg-[#F9F8FD] text-black text-left font-poppins p-2 rounded-md transition-transform transform hover:text-slate-700 cursor-pointer w-full"
      onClick={() =>
        handleLessonSelection(
          "salY_Sm6mv4",
          "Lesson 1: HTML",
          "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language."
        )
      }
    >
      <p className="text-lg text-black font-semibold font-Poppins text-left break-words ">
        Lesson 1: HTML (15.00)
      </p>
      <p className="mt-1 text-lg text-black font-Poppins text-left italic">
        - Robert Brown
      </p>
    </button>
    <button
      className="bg-[#F9F8FD] text-black text-left font-poppins p-2 rounded-md transition-transform transform hover:text-slate-700 cursor-pointer w-full"
      onClick={() =>
        handleLessonSelection(
          "Z4pCqK-V_Wo",
          "Lesson 2: Cascading Style Sheet CSS",
          "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."
        )
      }
    >
      <p className="text-lg text-black font-semibold font-Poppins text-left break-words">
        Lesson 2: Cascading Style Sheet CSS (15.00)
      </p>
      <p className="mt-1 text-lg text-black font-Poppins text-left italic">
        - Robert Brown
      </p>
    </button>
    <button
      className="bg-[#F9F8FD] text-black text-left font-poppins p-2 rounded-md transition-transform transform hover:text-slate-700 cursor-pointer w-full"
      onClick={() =>
        handleLessonSelection(
          "DHjqpvDnNGE",
          "Lesson 3: JavaScript",
          "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)"
        )
      }
    >
      <p className="text-lg text-black font-semibold font-Poppins text-left break-words">
        Lesson 3: JavaScript (15.00)
      </p>
      <p className="mt-1 text-lg text-black font-Poppins text-left italic">
        - Robert Brown
      </p>
    </button>
    <button
      className="bg-[#F9F8FD] text-black text-left font-poppins p-2 rounded-md transition-transform transform hover:text-slate-700 cursor-pointer w-full"
      onClick={() =>
        handleLessonSelection(
          "DHjqpvDnNGE",
          "Lesson 3: JavaScript",
          "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)"
        )
      }
    >
      <p className="text-lg text-black font-semibold font-Poppins text-left break-words">
        Lesson 3: JavaScript (15.00)
      </p>
      <p className="mt-1 text-lg text-black font-Poppins text-left italic">
        - Robert Brown
      </p>
    </button>
  </div>
</div>




      {/* Fixed Comment Section */}
      <div className="absolute top-3/4 left-2/4 translate-x-52 -translate-y-48">
        <form
          onSubmit={handleCommentSubmit}
          className="flex items-center space-x-2"
        >
          {/* Profile Icon */}
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />

          {/* Comment Input */}
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-96 h-10 p-2 border border-gray-300 rounded-lg text-black font-poppins"
            placeholder="Add your comment..."
            rows={3}
          ></textarea>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>

      {/* Display Comments */}
      <div className="absolute left-2/4 translate-x-48 top-96 -translate-y-80 text-white font-poppins w-1/3 max-w-xl">
      <h1 className="text-lg font-poppins font-bold -translate-y-3">Comments:</h1>
        {/* Scrollable Container */}
        <div className="max-h-80 overflow-y-auto space-y-2 p-2 border border-gray-700 rounded-lg">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col bg-black bg-opacity-60 p-2 rounded-lg"
            >
              {/* User Info */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
                <p className="text-sm font-semibold">{comment.name}</p>
              </div>
              {/* Comment Text */}
              <p className="break-words mt-1 ml-8">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
