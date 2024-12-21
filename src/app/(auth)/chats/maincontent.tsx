import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSmile,
  faPaperclip,
  faMicrophone,
  faPaperPlane,
  faFemale,
  faMale,
} from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedUserGender, setSelectedUserGender] = useState<string | null>(null);
  const [conversations, setConversations] = useState<any>({
    "Santa Claus": [
      { sender: "Santa Claus", message: "Hey! How are you?" },
      { sender: "You", message: "I'm okay" },
    ],
    "Isagani Tano": [
      { sender: "Isagani Tano", message: "Can we meet tomorrow?" },
      { sender: "You", message: "Ulol" },
    ],
  });

  const handleFilterClick = (filter: string) => {
    console.log(`${filter} filter clicked`);
    // Add your filter functionality here (All, Professors, Students)
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(`Searching for: ${event.target.value}`);
  };

  const handleMessageClick = (userName: string, gender: string) => {
    setSelectedUser(userName);
    setSelectedUserGender(gender);
    console.log(`Message clicked for: ${userName} (${gender})`);
  };

  const getProfileIcon = (gender: string) => {
    if (gender === "female") {
      return <FontAwesomeIcon icon={faFemale} className="w-8 h-8 text-white" />;
    } else {
      return <FontAwesomeIcon icon={faMale} className="w-8 h-8 text-white" />;
    }
  };

  const handleEmojiClick = () => {
    console.log("Emoji button clicked");
    // Open emoji picker or trigger functionality
  };

  const handleAttachClick = () => {
    console.log("Attach file button clicked");
    // Trigger file selection functionality
  };

  const handleVoiceCommandClick = () => {
    console.log("Voice command button clicked");
    // Implement voice command functionality
  };

  const handleSendClick = () => {
    if (message.trim() && selectedUser) {
      console.log("Sending message:", message);

      // Ensure that the selected user has a conversation array
      const newConversations = { ...conversations };

      // If the selected user doesn't have a conversation array, create one
      if (!newConversations[selectedUser]) {
        newConversations[selectedUser] = [];
      }

      // Get the current time
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Add the new message with timestamp to the selected user's conversation
    newConversations[selectedUser].push({
        sender: "You",
        message: message,
        time: currentTime, // Add timestamp
      });

      // Update the state with the new conversation
      setConversations(newConversations);

      // Clear the input after sending
      setMessage("");
    } else {
      console.log("No message to send or no user selected");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center gap-8 ">
      {/* Left Panel - Messages List */}
      <div className="h-[700px] w-[500px] bg-[#091A36] border-l rounded-lg border-r border-b-4 border-[#019AEC] drop-shadow-2xl shadow-drop-blue p-4 font-poppins">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4 text-[#97d6f8]">My Messages</h1>

        {/* Panel Box for Filter Options and Search Bar */}
        <div className="bg-[#091A36] p-4 mb-4 border-b-2 border-l border-r border-[#019AEC] rounded-lg shadow-drop-blue">
          {/* Filter Options */}
          <div className="flex items-center space-x-4 mb-4 text-center">
            <span
              onClick={() => handleFilterClick("All")}
              className="text-white cursor-pointer px-1 py-1 w-10 bg-[#091A36] rounded-lg hover:bg-white hover:text-black border-b-2 border-[#019AEC] shadow-drop-blue"
            >
              All
            </span>
            <span
              onClick={() => handleFilterClick("Professors")}
              className="text-white cursor-pointer px-1 py-1 w-24 bg-[#091A36] rounded-lg hover:bg-white hover:text-black border-b-2 border-[#019AEC] shadow-drop-blue"
            >
              Professors
            </span>
            <span
              onClick={() => handleFilterClick("Students")}
              className="text-white cursor-pointer px-1 py-1 w-20 bg-[#091A36] rounded-lg hover:bg-white hover:text-black border-b-2 border-[#019AEC] shadow-drop-blue"
            >
              Students
            </span>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-full px-3 py-2 border border-[#326993] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#019AEC] bg-[#326993]"
          />
        </div>

        {/* List of User Messages */}
        <div className="space-y-4 h-[490px] w-[480px] overflow-auto">
        {Object.keys(conversations).map((userName) => {
            const lastMessage = conversations[userName].slice(-1)[0]; // Get the last message in the conversation
            const lastMessageTime = lastMessage?.time || ""; // Get the time of the last message
            const lastMessageSender = lastMessage?.sender || "";

            return (
            <div
                key={userName}
                onClick={() => handleMessageClick(userName, "male")}
                className="flex items-center space-x-4 cursor-pointer hover:bg-[#091A36] p-2 rounded-md"
            >
                {getProfileIcon("male")}
                <div className="flex w-full justify-between">
                <div>
                    <h3 className="font-semibold text-white">{userName}</h3>
                    <p className="w-[380px] text-sm text-gray-400 break-words">
                    {lastMessageSender === "You" ? "You: " : ""}{lastMessage?.message || "No messages yet"}
                    </p>
                </div>
                {lastMessageTime && (
                    <span className="text-xs text-gray-500">{lastMessageTime}</span> // Show the time of the last message
                )}
                </div>
            </div>
            );
        })}
        </div>

      </div>

      {/* Right Panel - Conversation */}
      <div className="h-[700px] w-[1000px] flex flex-col border-l rounded-lg border-r border-b-4 border-[#019AEC] drop-shadow-2xl shadow-drop-blue font-poppins overflow-y-auto scrollbar-thin scrollbar-thumb-[#326993] scrollbar-track-[#326993] scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg">
        {/* Conversation Header */}
        <div className="flex items-center justify-between p-4 bg-[#091A36] rounded-lg border-l border-r border-b-2 border-[#019AEC] drop-shadow-2xl shadow-drop-blue">
          <div className="flex items-center space-x-4">
            {selectedUserGender && selectedUser && getProfileIcon(selectedUserGender)}
            <h2 className="text-lg font-semibold text-white">{selectedUser || "Select a User"}</h2>
          </div>
          <button className="text-gray-200 text-xl">⋮</button>
        </div>

        {/* Conversation Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#091A36]">
        {selectedUser &&
            conversations[selectedUser]?.map((msg: any, index: number) => (
            <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                <div
                className={`p-3 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-[#326993] text-white" : "bg-[#326993] text-white"}`}
                >
                <div className="flex items-center space-x-2">
                    {msg.sender !== "You" && getProfileIcon(msg.sender === "You" ? "male" : "female")}
                    <span className="w-[300px] break-words">{msg.message}</span>
                </div>
                {/* Display the timestamp */}
                <div className="text-xs text-gray-300 mt-1">{msg.time}</div>
                </div>
            </div>
            ))}
        </div>

        {/* Chat Input Section */}
        <div className="flex items-center p-4 space-x-2 bg-[#326993]">
          {/* Emoji Button */}
          <button
            className="text-white hover:text-yellow-400 transition duration-200"
            title="Emoji"
            aria-label="Open emoji picker"
            onClick={handleEmojiClick}
          >
            <FontAwesomeIcon icon={faSmile} className="w-6 h-6" />
          </button>

          {/* Attach File Button */}
          <button
            className="text-white hover:text-green-400 transition duration-200"
            title="Attach file"
            aria-label="Attach file"
            onClick={handleAttachClick}
          >
            <FontAwesomeIcon icon={faPaperclip} className="w-6 h-6" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            className="flex-1 p-2 text-white bg-[#304F66] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Voice Command Button */}
          <button
            className="text-white hover:text-red-400 transition duration-200"
            title="Voice command"
            aria-label="Voice command"
            onClick={handleVoiceCommandClick}
          >
            <FontAwesomeIcon icon={faMicrophone} className="w-6 h-6" />
          </button>

          {/* Send Button */}
          <button
            className="text-blue-400 hover:text-blue-500 transition duration-200"
            title="Send message"
            aria-label="Send message"
            onClick={handleSendClick}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
