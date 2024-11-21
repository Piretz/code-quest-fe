import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col h-full w-20 bg-purple-900 text-yellow-300 border-2 border-yellow-300 p-4 space-y-4 items-center rounded-lg">
      {["🏠", "📂", "📚", "🎯", "💬", "ℹ️"].map((icon, idx) => (
        <button
          key={idx}
          className="hover:bg-yellow-300 hover:text-purple-800 p-3 rounded-lg text-xl border-2 border-yellow-300"
        >
          {icon}
        </button>
      ))}
      <button className="mt-auto hover:bg-yellow-300 hover:text-purple-800 p-3 rounded-lg text-xl border-2 border-yellow-300">
        ⚙️
      </button>
    </div>
  );
};

export default Sidebar;
