// components/GameHeader.js
import React from 'react';

const GameHeader = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>🏆 Score: 1200</div>
      <div>💖 Health: 80%</div>
      <div>⚙️ Settings</div>
    </div>
  );
};

export default GameHeader;
