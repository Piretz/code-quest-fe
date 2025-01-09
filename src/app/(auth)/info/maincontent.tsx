"use client";
import React from "react";

const Help = () => {
  return (
    <div className="flex justify-end items-center min-h-screen pt-20 pr-5">
      <div className="w-[1780px] h-[850px] bg-[#091A36] rounded-md shadow-lg p-8 border-l border-r border-b-4 border-[#019AEC] drop-shadow-2xl font-poppins">
        {/* Fixed Positioning for h1 */}
        <h1 className="text-3xl font-bold font-zenDots text-white mb-4 fixed top-0 left-0 w-full bg-[#091A36] px-8 py-4 z-10">
          Welcome to <a className="text-sky-400">DevDoJo</a> Help Center
        </h1>
        
        {/* Fixed Positioning for p */}
        <p className="text-white mb-6 fixed top-[4.5rem] left-0 w-full bg-[#091A36] px-8 py-5 z-10 indent-10">
          - Having trouble navigating CodeQuest? Don’t worry! This page will guide you through the most common questions and issues.
        </p>

        {/* Getting started */}
        <div className="space-y-4 font-poppins leading-normal mt-[7rem] h-[700px] w-full overflow-y-auto  ">
          <details className="group border-l-4 border-blue-500 bg-[#326993] p-4 rounded-lg">
            <summary className="flex items-center text-xl justify-between cursor-pointer text-white font-semibold">
              <span>1. Getting started</span>
              <span className="group-open:rotate-90 transform transition-transform">&#9654;</span>
            </summary>
            <div className="mt-2 ml-4 text-white">
              <ul className="list-disc pl-4">
                <li>
                  <strong>How do I log in?</strong> <br /> - Use your university email and the password provided during registration. Forgot your password? Click <b>"Forgot Password"</b> on the login page to reset it.
                </li>
                <li>
                  <strong>How do I create my profile?</strong> <br /> - Once logged in, <b>go to Profile</b> → <b>Edit Profile.</b> Fill out your details and upload an avatar.
                </li>
              </ul>
            </div>
          </details>

          {/* Completing Quests */}
          <details className="group border-l-4 border-blue-500 bg-[#326993] p-4 rounded-lg">
            <summary className="flex items-center text-xl justify-between cursor-pointer text-white font-semibold">
              <span>2. Completing Quests</span>
              <span className="group-open:rotate-90 transform transition-transform">&#9654;</span>
            </summary>
            <div className="mt-2 ml-4 text-white">
              <ul className="list-disc pl-4">
                <li>
                  <strong>How do I log in?</strong> <br /> - Use your university email and the password provided during registration. Forgot your password? Click <b>"Forgot Password"</b> on the login page to reset it.
                </li>
                <li>
                  <strong>How do I create my profile?</strong> <br /> - Once logged in, <b>go to Profile</b> → <b>Edit Profile.</b> Fill out your details and upload an avatar.
                </li>
              </ul>
            </div>
          </details>
          {/* Team Challenges */}
          <details className="group border-l-4 border-blue-500 bg-[#326993] p-4 rounded-lg">
            <summary className="flex items-center text-xl justify-between cursor-pointer text-white font-semibold">
              <span>3. Team Challenges</span>
              <span className="group-open:rotate-90 transform transition-transform">&#9654;</span>
            </summary>
            <div className="mt-2 ml-4 text-white">
              <ul className="list-disc pl-4">
                <li>
                  <strong>How do I log in?</strong> <br /> - Use your university email and the password provided during registration. Forgot your password? Click <b>"Forgot Password"</b> on the login page to reset it.
                </li>
                <li>
                  <strong>How do I create my profile?</strong> <br /> - Once logged in, <b>go to Profile</b> → <b>Edit Profile.</b> Fill out your details and upload an avatar.
                </li>
              </ul>
            </div>
          </details>
          {/* Reaward and Badges */}
          <details className="group border-l-4 border-blue-500 bg-[#326993] p-4 rounded-lg">
            <summary className="flex items-center text-xl justify-between cursor-pointer text-white font-semibold">
              <span>4. Reward and Badges</span>
              <span className="group-open:rotate-90 transform transition-transform">&#9654;</span>
            </summary>
            <div className="mt-2 ml-4 text-white">
              <ul className="list-disc pl-4">
                <li>
                  <strong>How do I log in?</strong> <br /> - Use your university email and the password provided during registration. Forgot your password? Click <b>"Forgot Password"</b> on the login page to reset it.
                </li>
                <li>
                  <strong>How do I create my profile?</strong> <br /> - Once logged in, <b>go to Profile</b> → <b>Edit Profile.</b> Fill out your details and upload an avatar.
                </li>
              </ul>
            </div>
          </details>
          {/* Tracking Progress */}
          <details className="group border-l-4 border-blue-500 bg-[#326993] p-4 rounded-lg">
            <summary className="flex items-center text-xl justify-between cursor-pointer text-white font-semibold">
              <span>5. Tracking Progress</span>
              <span className="group-open:rotate-90 transform transition-transform">&#9654;</span>
            </summary>
            <div className="mt-2 ml-4 text-white">
              <ul className="list-disc pl-4">
                <li>
                  <strong>How do I log in?</strong> <br /> - Use your university email and the password provided during registration. Forgot your password? Click <b>"Forgot Password"</b> on the login page to reset it.
                </li>
                <li>
                  <strong>How do I create my profile?</strong> <br /> - Once logged in, <b>go to Profile</b> → <b>Edit Profile.</b> Fill out your details and upload an avatar.
                </li>
              </ul>
            </div>
          </details>
          {/* Troubleshooting */}
          <details className="group border-l-4 border-blue-500 bg-[#326993] p-4 rounded-lg">
            <summary className="flex items-center text-xl justify-between cursor-pointer text-white font-semibold">
              <span>6. Troubleshooting</span>
              <span className="group-open:rotate-90 transform transition-transform">&#9654;</span>
            </summary>
            <div className="mt-2 ml-4 text-white">
              <ul className="list-disc pl-4">
                <li>
                  <strong>How do I log in?</strong> <br /> - Use your university email and the password provided during registration. Forgot your password? Click <b>"Forgot Password"</b> on the login page to reset it.
                </li>
                <li>
                  <strong>How do I create my profile?</strong> <br /> - Once logged in, <b>go to Profile</b> → <b>Edit Profile.</b> Fill out your details and upload an avatar.
                </li>
              </ul>
            </div>
          </details>
          {/* Need more help */}
          <details className="group border-l-4 border-blue-500 bg-[#326993] p-4 rounded-lg">
            <summary className="flex items-center text-xl justify-between cursor-pointer text-white font-semibold">
              <span>7. Need More Help?</span>
              <span className="group-open:rotate-90 transform transition-transform">&#9654;</span>
            </summary>
            <div className="mt-2 ml-4 text-white">
              <ul className="list-disc pl-4">
                <li>
                  <strong>How do I log in?</strong> <br /> - Use your university email and the password provided during registration. Forgot your password? Click <b>"Forgot Password"</b> on the login page to reset it.
                </li>
                <li>
                  <strong>How do I create my profile?</strong> <br /> - Once logged in, <b>go to Profile</b> → <b>Edit Profile.</b> Fill out your details and upload an avatar.
                </li>
              </ul>
            </div>
          </details>
          
        </div>
      </div>
    </div>
  );
};

export default Help;
