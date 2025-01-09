"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter from Next.js

const Sidebar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  // State for handling modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter(); // Instantiate useRouter
  const pathname = usePathname();

  // Open the modal when "Sign Out" is clicked
  const handleSignOutClick = () => {
    setIsModalVisible(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Handle the confirm action for sign out
  const handleConfirmSignOut = () => {
    setIsLoading(true); // Set loading state to true when button is clicked

    // Simulate a delay before redirecting
    setTimeout(() => {
      router.push('/landingpage'); // Navigate to the landing page
    }, 1000); // Simulate a delay of 1 second for loading (adjust as needed)

    // Optionally close modal (if you have one)
  };

  return (
    <div>
      <aside className="fixed left-2 top-32 flex flex-col items-center space-y-1 h-full w-20 z-50 bg-transparent">
        {/* Sidebar Buttons (Top Section) */}
        {[
          { href: "/Selectmode", src: "/assets/btnhome.png", label: "Home" },
          { href: "/videolesson", src: "/assets/btnlesson.png", label: "Lessons" },
          { href: "/achievements", src: "/assets/btnachi.png", label: "Achievements" },
          { href: "/chats", src: "/assets/btnchat.png", label: "Message" },
        ].map((btn, index) => (
          <Link href={btn.href} key={index} passHref>
            <button
              className={`flex items-center justify-center bg-transparent border-none rounded-full ${
                pathname === btn.href ? 'scale-125' : ''
              }`} // Conditionally apply scale-110 for active button
              aria-label={btn.label}
            >
              <Image
                src={btn.src}
                alt={btn.label}
                width={90}
                height={50}
                className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
              />
            </button>
          </Link>
        ))}

        {/* Footer Buttons */}
        <div className="mt-auto translate-y-32">
          {[
            { href: "/darkmode", src: "/assets/btndark.png", label: "Dark Mode" },
            { href: "/info", src: "/assets/btninfo.png", label: "Info" },
            { href: "#", src: "/assets/btnsignout.png", label: "Sign Out", onClick: handleSignOutClick }, // Open modal on click
          ].map((btn, index) => (
            <Link href={btn.href} key={index} passHref>
              <button
                className={`flex items-center justify-center bg-transparent border-none rounded-full ${
                  pathname === btn.href ? 'scale-125' : ''
                }`} // Conditionally apply scale-110 for active button
                aria-label={btn.label}
                onClick={btn.onClick} // Trigger the modal on click
              >
                <Image
                  src={btn.src}
                  alt={btn.label}
                  width={90}
                  height={50}
                  className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
                />
              </button>
            </Link>
          ))}
        </div>
      </aside>

      {/* Sign Out Confirmation Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md cursor-default">
          <div
            className="p-10 rounded-lg shadow-lg h-48 drop-shadow-2xl border-2 border-[#019AEC] "
            style={{
              backgroundImage: "url('/assets/bgmodal.png')", // Set background image
              backgroundSize: "cover", // Ensure the image covers the modal area
              backgroundPosition: "center", // Center the background image
            }}
          >
            <h2 className="flex justify-center text-2xl font-semibold font-zenDots mb-4 text-white">Are you sure you want to log out?</h2>
            <div className="flex justify-center gap-10"> {/* Increased space between buttons */}
              <button
                className="bg-transparent border-none p-4" // Increased padding for bigger button
                style={{
                  backgroundImage: "url('/assets/btncancel.png')", // Set background image for Cancel button
                  backgroundSize: "contain", // Make sure the image fits the button
                  backgroundRepeat: "no-repeat", // Avoid repeating the background
                  backgroundPosition: "center", // Center the background image
                  width: "150px", // Set width of the button
                  height: "80px", // Set height of the button
                }}
                onClick={handleCloseModal}
              >
                <h5 className="font-zenDots">Cancel</h5>
              </button>
              <button
                  className="bg-transparent border-none px-4 py-4 flex items-center justify-center" // Increased padding for bigger button and centered content
                  style={{
                    backgroundImage: "url('/assets/btnlogout.png')", // Set background image for Confirm button
                    backgroundSize: "contain", // Make sure the image fits the button
                    backgroundRepeat: "no-repeat", // Avoid repeating the background
                    backgroundPosition: "center", // Center the background image
                    width: "150px", // Set width of the button
                    height: "80px", // Set height of the button
                  }}
                  onClick={handleConfirmSignOut} // Handle click to start loading and redirection
                >
                  {isLoading ? (
                    <div className="loading loading-spinner loading-lg"></div> // DaisyUI loading spinner
                  ) : (
                    <h5 className="font-zenDots">Logout</h5>
                  )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
