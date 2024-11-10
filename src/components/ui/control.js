// components/Controls.js
import React from 'react';

const Controls = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <button className="bg-blue-500 text-white p-4 rounded-full">⬅️</button>
      <button className="bg-blue-500 text-white p-4 rounded-full">⬆️</button>
      <button className="bg-blue-500 text-white p-4 rounded-full">⬇️</button>
      <button className="bg-blue-500 text-white p-4 rounded-full">➡️</button>
    </div>
  );
};

export default Controls;
