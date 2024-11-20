import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-purple-900 text-yellow-300">
      <h1 className="text-lg font-bold">BEGINNER LEVEL 6</h1>
      <div className="flex items-center space-x-4">
        <span className="font-semibold">TIME: <strong>2:00 MINS</strong></span>
        <button className="bg-green-600 px-4 py-2 text-white rounded hover:bg-green-700">RUN</button>
        <select
          className="bg-purple-700 text-yellow-300 p-2 rounded"
          aria-label="Select Language"
        >
          <option>Java</option>
          <option>Python</option>
        </select>
        <button className="bg-red-600 px-4 py-2 text-white rounded hover:bg-red-700">RESET LEVEL</button>
        <button className="bg-yellow-300 text-purple-900 px-4 py-2 rounded">SWITCH</button>
      </div>
    </div>
  );
};

export default Header;
