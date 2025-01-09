"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const MainContent: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState({
    videoId: "",
    title: "Lesson Description",
    content: "Select a lesson to display its description here.",
  });

  const [comments, setComments] = useState<
    { text: string; id: number; name: string }[]
  >([]);

  const [newComment, setNewComment] = useState<string>("");

  const handleLessonSelection = (
    videoId: string,
    title: string,
    content: string
  ) => {
    setSelectedLesson({ videoId, title, content });
  };

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
    <div className="flex items-center justify-center h-[90vh] w-[85%] translate-y-20 mx-auto border-l border-r border-t border-b-4 border-[#019AEC] shadow-drop-blue rounded-lg relative">
      {/* Main Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-6">
        {/* First Panel: Video Section */}
        <div className="bg-transparent col-span-1 row-span-1 w-[900px] h-[500px] border-l border-r border-t border-b-4 drop-shadow-2xl flex items-center justify-center border border-gray-300 rounded-lg">
          {selectedLesson.videoId ? (
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${selectedLesson.videoId}`}
              title="Lesson Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-gray-400">Select a lesson to view the video.</p>
          )}
        </div>

        {/* Second Panel: Comment Section */}
        <div className="bg-[#103E7C] col-span-1 row-span-1 w-[670px] h-[500px] translate-x-28 border-l border-r border-t border-b-4 border-[#000000] drop-shadow-2xl rounded-lg flex flex-col">
          {/* Display Comments */}
          <div className="flex-1 overflow-y-auto p-4 relative">
            {/* Fixed Header */}
            <h1 className="fixed top-0 left-0 right-0 text-2xl font-bold font-zenDots text-white text-center bg-gradient-to-r from-[#035CC2] to-[#073269] py-2 shadow-lg z-10">
              COMMENTS
            </h1>
            
            {/* Comments List */}
            <div className="mt-10"> {/* Adds spacing to account for the fixed header */}
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-gradient-to-r from-[#035CC2] to-[#073269] bg-opacity-60 p-2 rounded-lg mb-2"
                  >
                    <div className="flex items-start space-x-2">
                      {/* Icon */}
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-gray-300 text-3xl self-center"
                      />

                      {/* Name and Comment */}
                      <div>
                        <p className="text-md font-bold font-poppins">{comment.name}</p>
                        <p className="text-xs font-normal mt-1 indent-5 font-poppins w-[550px] break-words">{comment.text}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>

          </div>

          {/* Fixed Comment Section */}
          <div className="flex items-center p-4 space-x-2">
            <FontAwesomeIcon
              icon={faUser}
              className="text-white text-lg translate-x-1"
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-[600px] h-full bg-gradient-to-r from-[#035CC2] to-[#073269] p-2 rounded-lg text-white font-poppins text-sm"
              placeholder="Add a comment..."
              rows={3}
            ></textarea>
            <button
              type="submit"
              onClick={handleCommentSubmit}
              className="bg-gradient-to-r from-[#035CC2] to-[#073269] text-white p-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
              aria-label="Send Comment"
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-white text-lg"
              />
            </button>
          </div>
        </div>

        {/* Third Panel: Content, Text, and Download File */}
        <div className="bg-transparent col-span-1 row-span-1 w-[900px] h-[300px] translate-y-24 border-l border-r border-t border-b-4 border-[#000000] drop-shadow-2xl rounded-lg p-4">
          <h1 className="text-2xl font-bold text-white">
            {selectedLesson.title}
          </h1>
          <p className="text-sm text-white mt-4">
            • {selectedLesson.content}
          </p>
          <div className="mt-6">
            <p className="text-xs text-white">File to Study:</p>
            <img
              src="/assets/btndownloadfile.png"
              alt="Download File"
              className="w-32 h-8 mt-2 transition-transform transform hover:scale-110 cursor-pointer"
            />
          </div>
        </div>

        {/* Fourth Panel: Lesson Section */}
        <div className="bg-transparent col-span-1 row-span-1 w-[670px] h-[300px] translate-y-24 translate-x-28 border-l border-r border-t border-b-4 border-[#000000] drop-shadow-2xl rounded-lg p-6">
          <h1 className="font-bold font-zenDots text-xl mb-2">LESSONS:</h1>
          <div className="space-y-2 overflow-y-auto max-h-56 text-black font-poppins">
            <button
              className="bg-[#F9F8FD] p-2 w-full text-left"
              onClick={() =>
                handleLessonSelection(
                  "salY_Sm6mv4",
                  "Lesson 1: HTML",
                  "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language."
                )
              }
            >
              <p className="text-sm font-semibold">Lesson 1: Introduction to HTML</p>
              <p className="indent-4 text-xs italic">- Mr. John Doe</p>
            </button>
            <button
              className="bg-[#F9F8FD] p-2  w-full text-left"
              onClick={() =>
                handleLessonSelection(
                  "1Rs2ND1ryYc",
                  "Lesson 2: CSS",
                  "CSS is a style sheet language used for specifying the presentation of a document written in a markup language."
                )
              }
            >
              <p className="text-sm font-semibold">Lesson 2: Introduction to CSS</p>
              <p className="indent-4 text-xs italic">- Ms. Jane Smith</p>
            </button>
            {/* Add more lessons as needed */}
            <button
              className="bg-[#F9F8FD] p-2  w-full text-left"
              onClick={() =>
                handleLessonSelection(
                  "1Rs2ND1ryYc",
                  "Lesson 2: CSS",
                  "CSS is a style sheet language used for specifying the presentation of a document written in a markup language."
                )
              }
            >
              <p className="text-sm font-semibold">Lesson 2: Introduction to CSS</p>
              <p className="indent-4 text-xs italic">- Ms. Jane Smith</p>
            </button>

            <button
              className="bg-[#F9F8FD] p-2  w-full text-left"
              onClick={() =>
                handleLessonSelection(
                  "1Rs2ND1ryYc",
                  "Lesson 2: CSS",
                  "CSS is a style sheet language used for specifying the presentation of a document written in a markup language."
                )
              }
            >
              <p className="text-sm font-semibold">Lesson 2: Introduction to CSS</p>
              <p className="indent-4 text-xs italic">- Ms. Jane Smith</p>
            </button>

            <button
              className="bg-[#F9F8FD] p-2  w-full text-left"
              onClick={() =>
                handleLessonSelection(
                  "1Rs2ND1ryYc",
                  "Lesson 2: CSS",
                  "CSS is a style sheet language used for specifying the presentation of a document written in a markup language."
                )
              }
            >
              <p className="text-sm font-semibold">Lesson 2: Introduction to CSS</p>
              <p className="indent-4 text-xs italic">- Ms. Jane Smith</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
