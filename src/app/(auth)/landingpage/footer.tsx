"use client";
import React from "react";

const Footer = () => {
  return (
    
    <footer
    id = "footer" 
    className="bg-[#00172D] text-white py-6 text-center">
      {/* Container for Footer Content */}
      <div className="container mx-auto px-2">
        {/* Row of H1 elements */}
        <div className="flex justify-between">
          {/* Column for each heading and paragraph */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold font-zenDots">InnoVision</h1>
            <p className="text-sm">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dui habitant faucibus neque sapien vestibulum vestibulum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold font-zenDots">Support</h1>
            <p className="text-sm">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dui habitant faucibus neque sapien vestibulum vestibulum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold font-zenDots">Uses</h1>
            <p className="text-sm">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dui habitant faucibus neque sapien vestibulum vestibulum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold font-zenDots">Get in Touch</h1>
            <p className="text-sm underline underline-offset-1">capstone.gamified@gmail.com</p>

            {/* Social Media Icons Column */}
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/Facebook.png" // Replace with your Facebook icon path
                  alt="Facebook"
                  className="w-24 h-14"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/Instagram.png" // Replace with your Instagram icon path
                  alt="Instagram"
                  className="w-24 h-14"
                />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/Google Plus.png" // Replace with your Google icon path
                  alt="Google"
                  className="w-24 h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Line Separator */}
      <img
        src="/assets/footerline.png" // Replace with your image line path
        alt="Line Separator"
        className="mt-4 mx-auto"
      />

      {/* Row of H2 Text Below the Line */}
      <div className="flex justify-around items-center mt-4 gap-x-10">
        {/* Copyright Section */}
        <div className="flex items-center ">
          <img
            src="/assets/c2024.png" // Replace with your copyright icon image path
            alt="Copyright Icon"
            className="w-5 h-5"
          />
          <h2 className="text-xl font-zenDots font-semibold">
            2024 all right reserved
          </h2>
        </div>

        {/* Terms and Conditions */}
        <h2 className="text-xl font-zenDots font-semibold translate-x-60">Terms & Condition</h2>

        {/* Privacy Policy */}
        <h2 className="text-xl font-zenDots font-semibold">Privacy Policy</h2>
      </div>
    </footer>
  );
};

export default Footer;
