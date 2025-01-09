"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js for navigation
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [loading, setLoading] = useState(false); // Add loading state

  const handleLoginClick = () => {
    setLoading(true);
    // Simulate a login process or API call
    setTimeout(() => {
      // After loading is finished, set loading to false
      setLoading(false);
      // Optionally, redirect or perform some other action
    }, 2000); // Simulating a 2-second delay
  };
  const [activeButton, setActiveButton] = useState<string>("home");
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false); // State for login form
  const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false); // State for sign-up form
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // Effect to disable/enable scrolling based on `isLoginVisible` or `isSignUpVisible`
  useEffect(() => {
    if (isLoginVisible || isSignUpVisible) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isLoginVisible, isSignUpVisible]); // Explicitly include both dependencies here

 // Effect to track the active button based on the current section in the URL
 useEffect(() => {
  const currentHash = window.location.hash;
  if (currentHash === "#intro") {
    setActiveButton("home");
  } else if (currentHash === "#heropage") {
    setActiveButton("about");
  } else if (currentHash === "#courses") {
    setActiveButton("courses");
  } else if (currentHash === "#contactUs") {
    setActiveButton("contact us");
  }
}, [window.location.hash]); // This will trigger every time the hash changes

  const toggleSignUp = () => {
    setIsSignUpVisible(!isSignUpVisible);
    setIsLoginVisible(false);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);

    if (buttonName === "login") {
      setIsLoginVisible(true); // Show login form
    } else if (buttonName === "signup") {
      setIsSignUpVisible(true); // Show sign-up form
    }
  };

  const closeLoginForm = () => {
    setIsLoginVisible(false); // Close login form
  };

  const handleScroll = () => {
    const sections = ["home", "about", "courses", "contactus"];
    const scrollPosition = window.scrollY;
  
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
  
        if (section === "contactus") {
          // Special condition for "Contact Us" section (footer)
          if (
            scrollPosition >= sectionTop - 70 &&
            scrollPosition < sectionTop + sectionHeight - 70
          ) {
            setActiveButton(section);
          }
        } else {
          // General condition for other sections
          if (
            scrollPosition >= sectionTop - 70 &&
            scrollPosition < sectionTop + sectionHeight - 70
          ) {
            setActiveButton(section);
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-screen bg-[#00172D] text-white px-4 sm:px-8 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <img
        src="/assets/Steamcircle.png"
        alt="Cipherion Logo"
        className="h-12 sm:h-14 animate-spin-slow"
      />

      {/* Centered Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-4 sm:space-x-14 text-sm sm:text-xl font-zenDots">
        {["Home", "About", "Courses", "Contact Us"].map((item, index) => (
          <a
            key={index}
            href={
              item.toLowerCase() === "home"
                ? "#home"
                : item.toLowerCase() === "about"
                ? "#about"
                : item.toLowerCase() === "courses"
                ? "#courses"
                : "#contactUs"
            }
            onClick={() => handleButtonClick(item.toLowerCase())}
            className={`rounded-full w-20 sm:w-28 text-center py-1 ${
              activeButton === item.toLowerCase()
                ? "bg-gray-300 text-black"
                : "hover:bg-gray-600 hover:text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* LOGIN AND SIGN UP Buttons */}
      <div className="flex space-x-2 sm:space-x-4">
        {/* Login Button */}
        <button
          onClick={() => handleButtonClick("login")}
          className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots ${
            activeButton === "login" ? "bg-green-600" : "hover:bg-green-600"
          }`}
        >
          Login
        </button>

        {/* Sign Up Button */}
        <button
          onClick={() => handleButtonClick("signup")}
          className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg font-zenDots"
        >
          Sign Up
        </button>
      </div>
    </header>

              {/* Login Form Modal */}
              {isLoginVisible && (
          <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
            <div
              className="relative w-[1234px] h-[800px] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between bg-[url('/assets/logsignPanel.png')]"
              onClick={(e) => e.stopPropagation()} // Prevent click event propagation
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 hover:scale-100"
                onClick={closeLoginForm}
              >
                ✖
              </button>
              {/* Login Form Content */}
              <div className="flex flex-col items-start justify-center p-40 w-full h-full text-white font-poppins">
                {/* Title with Image Positioned to the Left */}
                <div className="flex items-center fixed top-48 h-24 left-96 translate-x-52 z-50">
                  <h2 className="text-5xl font-bold font-poppins p-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300">Login</h2>
                </div>

                {/* Form Container */}
                <div className="fixed top-80 w-[450px] bg-opacity-70 p-10 rounded-lg">
                  {/* Username Input */}
                  <div className="mb-4 relative">
                    <label htmlFor="username" className="block text-md font-medium mb-2">
                      Username:
                    </label>
                    <div className="absolute left-3 translate-y-2 transform text-white">
                      {/* Icon */}
                      <i className="fas fa-user"></i> {/* Replace with your preferred icon */}
                    </div>
                    <input
                      id="username"
                      type="text"
                      placeholder="Ex: johndoe@yahoo.com"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 pl-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Password Input with Show/Hide Icon */}
                  <div className="mb-6 relative">
                    <label htmlFor="password" className="block text-md font-medium mb-2">
                      Password:
                    </label>
                    <div className="absolute left-3 translate-y-2 transform text-gray-400">
                      {/* Lock Icon */}
                      <i className="fas fa-lock text-white"></i> {/* Replace with your preferred icon */}
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 pl-10 pr-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2 transform text-gray-400 hover:text-gray-200"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <i className="fas fa-eye text-white translate-y-8"></i> // Eye icon for hiding
                      ) : (
                        <i className="fas fa-eye-slash text-white translate-y-8"></i> // Eye-slash icon for showing
                      )}
                    </button>
                  </div>

                {/* Social Login & Links */}
                <div className="flex py-1 justify-center items-center">
                  <p className="mt-4 text-sm">
                    Forgot password?{" "}
                    <a href="#" className="text-red-500 hover:underline">
                      Reset password
                    </a>
                  </p>
                </div>

                  {/* Login Button with Image */}
                  <Link href="/Selectmode">
                  <button
                    className="w-52 h-35 rounded-lg p-6 text-lg font-semibold"
                    onClick={handleLoginClick}
                    disabled={loading} // Disable the button when loading
                  >
                    {loading ? (
                      <div className="w-full h-full flex justify-center items-center translate-x-20 ">
                        {/* DaisyUI Loading Spinner */}
                        <div className="loading loading-spinner loading-lg"></div>
                      </div>
                    ) : (
                      <img
                        src="/assets/btnlog.png"
                        alt="Login Button"
                        className="w-full h-full object-cover rounded-lg translate-x-20 transition-transform transform hover:scale-110"
                      />
                    )}
                  </button>
                </Link>
                </div>

                
              </div>

              {/* Logolog Image Positioned at the Bottom */}
              <div className="absolute right-40">
                <img
                  src="/assets/loginlogo.png"
                  alt="Logo"
                  className="w-[500px] h-[700px] object-contain"
                />
              </div>
            </div>
          </div>
        )}

      {/* Sign-Up Form Modal */}
      {isSignUpVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md"
        >
          <div
            className="relative w-[1234px] h-[800px] bg-cover bg-center rounded-xl right-20 shadow-lg flex flex-col justify-between bg-[url('/assets/logsignPanel.png')]"
            onClick={(e) => e.stopPropagation()} // Prevent click event propagation
          >
            {/* Sign-Up Form Content */}
            <div className="flex flex-col items-start justify-center p-40 w-full h-full text-white font-poppins -translate-y-8 z-10">
              {/* Title with Image Positioned to the Left */}
              <div className="flex items-center mb-3 translate-x-14 -translate-y-5 z-10">
                {/* Image for Sign-Up */}
                <img
                  src="/assets/btnback.png" // Your image path
                  alt="Back to Login"
                  className="w-50 h-30 -translate-x-16 translate-y-2 transition-transform transform hover:scale-110 cursor-pointer"
                  onClick={() => {
                    setIsSignUpVisible(false); // Hide Sign-Up Form
                    setIsLoginVisible(true);  // Show Login Form
                  }}
                />
                <h2 className="text-5xl font-bold font-poppins -translate-x-4 translate-y-2 p-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300">Sign Up</h2>
              </div>

              {/* Form Container */}
              <div className="font-poppins bg-opacity-70 p-6 rounded-lg">
                {/* First Row: First Name, Last Name, Username */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-md font-medium mb-2">
                      First Name:
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Ex: John"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-md font-medium mb-2">
                      Last Name:
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Ex: Doe"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="username" className="block text-md font-medium mb-2">
                      Username:
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Ex: johndoe"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Second Row: Email, Birthday */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-md font-medium mb-2">
                      Email:
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Ex: j***@yahoo.com"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Birthday */}
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label htmlFor="birthdayMonth" className="block text-md font-medium mb-2">
                        MM:
                      </label>
                      <input
                        id="birthdayMonth"
                        type="text"
                        maxLength={2}
                        placeholder="MM"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="birthdayDay" className="block text-md font-medium mb-2">
                        DD:
                      </label>
                      <input
                        id="birthdayDay"
                        type="text"
                        maxLength={2}
                        placeholder="DD"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="birthdayYear" className="block text-md font-medium mb-2">
                        YYYY:
                      </label>
                      <input
                        id="birthdayYear"
                        type="text"
                        maxLength={4}
                        placeholder="YYYY"
                        className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Third Row: Password, Confirm Password */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Password Input */}
                  <div className="relative">
                    <label htmlFor="password" className="block text-md font-medium mb-2">
                      Password:
                    </label>
                    <input
                      id="password"
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 pr-10 text-white placeholder-gray-400"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-10 transform text-gray-400 hover:text-gray-200"
                      onClick={() => setIsPasswordVisible((prev) => !prev)}
                    >
                      {isPasswordVisible ? (
                        <i className="fas fa-eye"></i> // Eye icon
                      ) : (
                        <i className="fas fa-eye-slash"></i> // Eye-slash icon
                      )}
                    </button>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative">
                    <label htmlFor="confirmPassword" className="block text-md font-medium mb-2">
                      Confirm Password:
                    </label>
                    <input
                      id="confirmPassword"
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 pr-10 text-white placeholder-gray-400"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-10 transform text-gray-400 hover:text-gray-200"
                      onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                    >
                      {isConfirmPasswordVisible ? (
                        <i className="fas fa-eye"></i> // Eye icon
                      ) : (
                        <i className="fas fa-eye-slash"></i> // Eye-slash icon
                      )}
                    </button>
                  </div>
                </div>

                {/* Label and Checkbox with Sign-Up Button */}
                <div className="flex items-center w-full justify-between mt-6">
                  {/* Label and Checkbox */}
                  <div className="flex items-center space-x-2 translate-x-96 translate-y-1">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-10 h-6 text-blue-500 border-gray-300 rounded "
                    />
                    <label htmlFor="terms" className="text-md text-white font-medium font-poppins">
                      I agree to the terms and conditions
                    </label>
                  </div>

                  {/* Sign-Up Button */}
                  <button className="">
                    <img
                      src="/assets/btnsign.png" // Your image path for button
                      alt="Sign Up Button"
                      className="w-20 h-16 object-cover rounded-lg transition-transform transform hover:scale-110 cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Side Logo Image */}
            <div className="absolute -right-72">
              <img
                src="/assets/signuplogo.png"
                alt="Logo"
                className="w-[500px] h-[700px] object-contain"
              />
            </div>
          </div>
        </div>
      )}
      </>
    );
  };

export default Header;
