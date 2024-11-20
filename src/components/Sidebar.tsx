import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col h-screen w-16 bg-purple-800 text-yellow-300 py-4 space-y-4 items-center">
      {["🏠", "📂", "📚", "🎯", "💬", "ℹ️"].map((icon, idx) => (
        <button
          key={idx}
          className="hover:bg-yellow-300 hover:text-purple-800 p-2 rounded-full text-xl"
        >
          {icon}
        </button>
      ))}
      <button className="mt-auto hover:bg-yellow-300 hover:text-purple-800 p-2 rounded-full text-xl">
        ⚙️
      </button>
    </div>
  );
};

export default Sidebar;
