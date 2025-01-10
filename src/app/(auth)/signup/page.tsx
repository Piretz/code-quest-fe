'use client';
import Link from "next/link";
import React, { useState } from 'react';
import { z } from 'zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from 'next/router';

const useloginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Signupage = () => {
  const [activeButton, setActiveButton] = useState<string>("home");
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false); // State for login form
  const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false); // State for sign-up form
  const [loading, setLoading] = useState(false); // Add loading state
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const result = useloginSchema.safeParse({ email, password });

    if (!result.success) {
      const newErrors = result.error.format();
      setErrors({
        email: newErrors.email?._errors[0] || '',
        password: newErrors.password?._errors[0] || '',
      });
    } else {
      setErrors({ email: '', password: '' });
      // Display success toast
      toast.success("Login Successful");
      // Proceed with additional login logic
      console.log("Registered Successfully:", { email, password });
    }
  };

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
        // setIsSignUpVisible(false);
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

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
      <div
        className="relative w-[1234px] h-[800px] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between bg-[url('/assets/logsignPanel.png')]"
        onClick={(e) => e.stopPropagation()} // Prevent click event propagation
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 hover:scale-100"
          // onClick={closeLoginForm}
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
    <Link href="#" className="text-red-500 hover:underline">
      Reset password
    </Link>
  </p>
</div>

            {/* Login Button with Image */}
            <Link href="/Selectmode">
              <a>
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
              </a>
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
  );
};

export default Signupage;