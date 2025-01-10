'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { z } from 'zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { useRouter } from 'next/navigation'; // Updated import

const useloginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // Added state for showPassword
  const [loading, setLoading] = useState(false); // Added state for loading

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
      console.log("Login Successful:", { email, password });
    }
  };

  const closeLoginForm = () => {
    router.push('/landingpage'); // Navigate to the signup page
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
                <Link href="#" className="text-red-500 hover:underline">
                  Reset password
                </Link>
              </p>
            </div>

            {/* Login Button with Image */}
            <Link href="/Selectmode">
              <button
                className="w-52 h-35 rounded-lg p-6 text-lg font-semibold"
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
  );
};

export default Page;