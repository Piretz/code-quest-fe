"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js for navigation
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [loading, setLoading] = useState(false); // Add loading state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    birthdayMDY: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    birthdayMDY: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let errors = { ...formErrors };
    let isValid = true;

    // First Name Validation
    if (!formData.firstName) {
      errors.firstName = "First name is required";
      isValid = false;
    } else {
      errors.firstName = "";
    }

    // Last Name Validation
    if (!formData.lastName) {
      errors.lastName = "Last name is required";
      isValid = false;
    } else {
      errors.lastName = "";
    }

    // Username Validation
    if (!formData.username) {
      errors.username = "Username is required";
      isValid = false;
    } else {
      errors.username = "";
    }

    // Email Validation
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    } else {
      errors.email = "";
    }

    // Birthday Validation
    if (!formData.birthdayMDY) {
      errors.birthdayMDY = "Birthday is required";
      isValid = false;
    } else {
      errors.birthdayMDY = "";
    }

    // Password Validation
    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    } else {
      errors.password = "";
    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    } else {
      errors.confirmPassword = "";
    }

    // Terms Agreement Validation
    if (!formData.terms) {
      errors.terms = "You must agree to the terms and conditions";
      isValid = false;
    } else {
      errors.terms = "";
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate the form before submission
    if (!validateForm()) return;
  
    setLoading(true);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user-student/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.username,
          email: formData.email,
          birthday: formData.birthdayMDY,
          password: formData.password,
          confirm_password: formData.confirmPassword,
        }),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        setIsSignUpVisible(false);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      const typedError = error as Error; // Assert error as Error
      alert(`Error: ${typedError.message}`);
    } finally {
      setLoading(false);
    }
  };

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
  }, [isLoginVisible, isSignUpVisible]);

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
  }, [window.location.hash]);

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
      <header className="fixed top-0 left-0 right-0 z-50 w-screen bg-[#00172D] text-white px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-between items-center shadow-lg">
  {/* Logo */}
  <img
    src="/assets/Steamcircle.png"
    alt="Cipherion Logo"
    className="h-12 sm:h-14 animate-spin-slow mb-2 sm:mb-0"
  />

  {/* Centered Navigation Links */}
  <nav className="flex-grow flex justify-center space-x-4 sm:space-x-14 text-sm sm:text-xl font-zenDots mb-2 sm:mb-0">
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
                <div className="flex items-center fixed top-48 h-28 left-96  z-50">
                  <h2 className="text-5xl font-bold font-poppins p-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 fixed absolute top-6 left-44 ">Login</h2>
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
            <div className="flex flex-col items-start justify-center p-40 w-full h-full text-white font-poppins z-50">
              {/* Title with Image Positioned to the Left */}
              <div className="flex items-start z-10">
              {/* Image for Sign-Up */}
              <img
                src="/assets/btnback.png" // Your image path
                alt="Back to Login"
                className="flex items-center transition-transform transform hover:scale-110 cursor-pointer fixed top-48 p-4 "
                onClick={() => {
                  setIsSignUpVisible(false); // Hide Sign-Up Form
                  setIsLoginVisible(true);  // Show Login Form
                }}
              />
              <h2 className="flex items-center text-5xl font-bold font-poppins p-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 fixed absolute top-28 left-72">
                Sign Up
              </h2>
            </div>
              {/* Form Container */}
              <div className="font-poppins bg-opacity-70 p-6 pt-24 rounded-lg">
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
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {formErrors.firstName && <span className="text-red-500 text-sm">{formErrors.firstName}</span>}
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
                      value={formData.lastName}
                      onChange={handleInputChange}  
                    />
                    {formErrors.lastName && <span className="text-red-500 text-sm">{formErrors.lastName}</span>}
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
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    {formErrors.username && <span className="text-red-500 text-sm">{formErrors.username}</span>}
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
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
                  </div>

                  {/* Birthday */}
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label htmlFor="MM/DD/YYYY" className="block text-md font-medium mb-2">
                        Birthday:
                      </label>
                      <input
                        id="birthdayMDY"
                        type="date"
                        maxLength={8}
                        placeholder="MM/DD/YYYY"
                        className="w-[425px] bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                        value={formData.birthdayMDY}
                        onChange={handleInputChange}
                      />
                      {formErrors.birthdayMDY && <span className="text-red-500 text-sm">{formErrors.birthdayMDY}</span>}
                    </div>
                  </div>
                </div>

                {/* Third Row: Password, Confirm Password */}

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="password" className="block text-md font-medium mb-2">
                      Password:
                    </label>
                    <input
                      id="password"
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="********"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {formErrors.password && <span className="text-red-500 text-sm">{formErrors.password}</span>}
                  </div>

                  <div className="relative">
                    <label htmlFor="confirmPassword" className="block text-md font-medium mb-2">
                      Confirm Password:
                    </label>
                    <input
                      id="confirmPassword"
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      placeholder="********"
                      className="w-full bg-[#1E2833] bg-opacity-50 border border-gray-500 rounded-md p-2 text-white placeholder-gray-400"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-200"
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
                      checked={formData.terms}
                      onChange={handleInputChange}
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
                      onClick={handleSignUpSubmit}
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
