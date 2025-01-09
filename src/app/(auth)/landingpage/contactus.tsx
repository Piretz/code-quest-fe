"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contactUs" className="bg-[#00172D] text-white py-8">
      {/* Footer Content */}
      <div className="container mx-auto px-6">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-center">
          {[
            {
              title: "InnoVision",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien duis habitant faucibus.",
            },
            {
              title: "Support",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien duis habitant faucibus.",
            },
            {
              title: "Uses",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien duis habitant faucibus.",
            },
            {
              title: "Get in Touch",
              text: (
                <a
                  href="mailto:capstone.gamified@gmail.com"
                  className="underline underline-offset-2 hover:text-blue-400"
                >
                  capstone.gamified@gmail.com
                </a>
              ),
              social: true,
            },
          ].map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold font-zenDots">{section.title}</h2>
              <p className="text-sm">{section.text}</p>
              {section.social && (
                <div className="flex justify-center md:justify-center space-x-4 mt-4">
                  {/* Facebook Icon */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-150 transition duration-300 cursor-pointer"
                  >
                    <img
                      src="/assets/Facebook.png"
                      alt="Facebook"
                      className="w-14 h-7"
                    />
                  </a>
                  {/* Instagram Icon */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-150 transition duration-300 cursor-pointer"
                  >
                    <img
                      src="/assets/Instagram.png"
                      alt="Instagram"
                      className="w-14 h-7"
                    />
                  </a>
                  {/* Google Plus Icon */}
                  <a
                    href="https://plus.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-150 transition duration-300 cursor-pointer"
                  >
                    <img
                      src="/assets/GooglePlus.png"
                      alt="Google Plus"
                      className="w-14 h-7"
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Lower Section */}
        <div className="flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <img src="/assets/c2024.png" alt="Copyright" className="w-5 h-5" />
            <p>2024 All Rights Reserved</p>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
