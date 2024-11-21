"use client"; // Marks this component as a client component
import { useState } from "react";
import {
  FaHome,
  FaBook,
  FaBookmark,
  FaComments,
  FaTrophy,
  FaInfoCircle,
  FaSignOutAlt,
  FaUser,
  FaBell,
  FaCog,
  FaLine,
  FaTextWidth,
} from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import styles from "../components/Terminal.module.css";

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  // Placeholder for button click actions
  const handleClick = (label: string) => {
    alert(`Clicked on ${label}`);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Icons Section */}
      <div
        className={`${styles.topicon} ml-48 flex space-x-4`}
      >
        <SidebarIcon
          icon={<FaCog size={28} />}
          label="Setting"
          onClick={() => handleClick("Setting")}
        />
        <SidebarIcon
          icon={<FaBell size={28} />}
          label="Notification"
          onClick={() => handleClick("Notification")}
        />
        <SidebarIcon
          icon={<FaTextWidth size={28} />}
          label="Name"
          onClick={() => handleClick("Name")}
        />
        <SidebarIcon
          icon={<FaUser size={28} />}
          label="Profile"
          onClick={() => handleClick("Profile")}
        />
        
      </div>

      {/* Side Panel */}
      <div
        className={`${styles.sidepanel} fixed top-0 left-0 h-screen flex flex-col justify-between py-0`}
      >
        {/* Top Section */}
        <div className="styles.icon">
          <SidebarIcon
            icon={<FaHome size={35} />}
            label="Home"
            onClick={() => handleClick("Home")}
           
          />
          <SidebarIcon
            icon={<FaBook size={35}/>}
            label="Books"
            onClick={() => handleClick("Books")}
          />
          <SidebarIcon
            icon={<FaBookmark size={35} />}
            label="Bookmarks"
            onClick={() => handleClick("Bookmarks")}
          />
          <SidebarIcon
            icon={<FaComments size={35} />}
            label="Messages"
            onClick={() => handleClick("Messages")}
          />
          <SidebarIcon
            icon={<FaTrophy size={35}/>}
            label="Achievements"
            onClick={() => handleClick("Achievements")}
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          <SidebarIcon
            icon={<MdDarkMode size={35} />}
            label="Darkmode"
            onClick={toggleDarkMode}
          />
          <SidebarIcon
            icon={<FaInfoCircle size={35} />}
            label="Info"
            onClick={() => handleClick("Info")}
          />
          <SidebarIcon
            icon={<FaSignOutAlt size={35} />}
            label="Logout"
            onClick={() => handleClick("Logout")}
          />
        </div>
      </div>
    </div>
  );
}

// SidebarIcon Component
interface SidebarIconProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void; // Optional click handler
}

const SidebarIcon = ({ icon, label, onClick }: SidebarIconProps) => (
  <button
    type="button"
    className="group"
    onClick={onClick} // Handles click events
    title={label} // Accessibility improvement: Adds a title for screen readers
  >
    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
  </button>
);