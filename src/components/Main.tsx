import { FC } from "react";

const Main: FC = () => {
  return (
    <div className="flex flex-1 bg-purple-700 text-yellow-300 p-4 space-x-4">
      {/* Terminal Section */}
      <div className="flex-1 bg-purple-800 p-4 rounded-lg flex flex-col">
        <h2 className="text-lg font-bold mb-2">TERMINAL</h2>
        <textarea
          className="w-full h-full bg-purple-900 text-yellow-300 p-4 rounded-lg resize-none"
          placeholder="Write your code here..."
        />
      </div>

      {/* Test Cases and Error Section */}
      <div className="w-1/3 flex flex-col space-y-4">
        {/* Test Cases */}
        <div className="bg-purple-800 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Test Cases</h2>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 15 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-8 w-8 flex items-center justify-center rounded ${
                  idx % 3 === 0 ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {idx % 3 === 0 ? "❌" : "✔️"}
              </div>
            ))}
          </div>
        </div>

        {/* Error Messages */}
        <div className="bg-purple-800 p-4 rounded-lg">
          <h2 className="text-lg font-bold">Error Message</h2>
          <p className="text-red-400 mt-2">No errors yet!</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
