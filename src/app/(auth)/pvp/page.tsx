'use client';
import React, { useState } from "react";

const Page = () => {
  const [player1Code, setPlayer1Code] = useState("");
  const [player2Code, setPlayer2Code] = useState("");
  const [playerPoints, setPlayerPoints] = useState(0);
  const [teamPoints, setTeamPoints] = useState(0);
  const [timer, setTimer] = useState(60);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  // Timer countdown effect
  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages((prev) => [...prev, chatInput]);
      setChatInput("");
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white p-6 relative">
      {/* Instruction Box */}
      <div className="border border-gray-700 bg-gray-800 rounded-lg p-2 text-center mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold">Instructions</h2>
          <div className="border-2 border-sky-500 bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
            <p className="text-lg font-bold">{teamPoints}</p>
          </div>
        </div>
        <p className="mt-1 text-xs">Enter codes in your terminal before the timer runs out!</p>
      </div>

      {/* Team Score */}
      <div className="absolute top-6 left-6">
        <div className="border-2 border-sky-500 bg-gray-800 rounded-lg p-4">
          <h3 className="text-center text-sm font-bold mb-2">Team Score</h3>
          <div className="border-2 border-sky-500 bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <p className="text-xl font-bold">{teamPoints}</p>
          </div>
        </div>
      </div>

      {/* Main Game Section */}
      <div className="grid grid-cols-3 gap-4 items-start">
        {/* Player 1 Terminal and Chat */}
        <div>
          {/* Player 1 Terminal */}
          <div className="border-2 border-sky-500 bg-gray-800 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-center mb-4">Player 1 Terminal</h3>
            <textarea
              className="w-full bg-gray-700 p-2 rounded text-white"
              rows="6"
              placeholder="Enter code..."
              value={player1Code}
              onChange={(e) => setPlayer1Code(e.target.value)}
            />
          </div>

          {/* Chatbox */}
          <div className="border-2 border-sky-500 bg-gray-900 rounded-lg p-3 max-h-40 overflow-y-auto">
            <h3 className="text-sm font-bold mb-2">Team Chat</h3>
            <div className="text-sm space-y-2">
              {chatMessages.length > 0 ? (
                chatMessages.map((message, index) => (
                  <p key={index} className="text-gray-300">
                    {message}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No messages yet.</p>
              )}
            </div>
          </div>
          <form onSubmit={handleChatSubmit} className="mt-3 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 p-2 rounded text-white"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white"
            >
              Send
            </button>
          </form>
        </div>

        {/* Timer */}
        <div className="text-center">
          <div className="border-2 border-lime-400 rounded-md bg-gray-800 p-2 w-16 h-16 mx-auto shadow-lg shadow-lime-500/50 flex items-center justify-center">
            <h1 className="text-xl font-bold">{timer}s</h1>
          </div>
        </div>

        {/* Player 2 Terminal */}
        <div className="border-2 border-sky-500 bg-gray-800 rounded-lg p-4">
          <h3 className="font-bold text-center mb-4">Player 2 Terminal</h3>
          <textarea
            className="w-full bg-gray-700 p-2 rounded text-white"
            rows="6"
            placeholder="Enter code..."
            value={player2Code}
            onChange={(e) => setPlayer2Code(e.target.value)}
          />
        </div>
      </div>

      {/* Player Points */}
      <div className="absolute top-6 right-6">
        <div className="border-2 border-sky-500 bg-gray-800 rounded-lg p-2">
          <p className="font-bold text-center">Points: {playerPoints}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
