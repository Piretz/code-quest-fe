'use client';

import React, { useState, useEffect } from 'react';
import Header from '../lesson/header';
import Sidebar from '../lesson/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';

const Page = () => {
  const [time, setTime] = useState(240); // Set initial time to 4 minutes (240 seconds)
  const [isOpen, setIsOpen] = useState(false); // Add state for Collapsible
  const [hasStarted, setHasStarted] = useState(false); // Track if user has started typing
  const [isDisabled, setIsDisabled] = useState(false); // Track if terminals should be disabled
  const [playerScore, setPlayerScore] = useState(0); // Track player's score
  const [codeInput, setCodeInput] = useState(''); // Track code input

  // Timer logic
  useEffect(() => {
    if (!hasStarted || time <= 0) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsDisabled(true);
          calculateScore(); // Calculate score when timer ends
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setCodeInput(e.target.value); // Update code input
  };

  const calculateScore = () => {
    let correctnessPoints = 0;
    let timeComplexityPoints = 0;

    // Simulate correctness evaluation (example logic)
    if (codeInput.includes('correct')) {
      correctnessPoints = 50; // Example score for correct code
    }

    // Simulate time complexity evaluation
    if (time > 180) {
      timeComplexityPoints = 20; // Bonus for fast completion
    } else if (time > 120) {
      timeComplexityPoints = 10; // Smaller bonus for intermediate speed
    }

    // Update the player's score
    setPlayerScore(correctnessPoints + timeComplexityPoints);
  };

  return (
    <div>
      <Header currentLevel={0} currentExperience={0} experienceNeeded={0} />
      <div className="fixed top-0 left-0 w-32 h-screen text-white">
        <Sidebar />
      </div>

      <div className="flex flex-col h-screen">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-40 space-y-4 pt-96 fixed left-40"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">MESSAGES</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-2 py-4 font-mono text-sm shadow-sm ">
            <img src="/assets/user.png" alt=""></img>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              <img src="/assets/user.png" alt=""></img>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              <img src="/assets/user.png" alt=""></img>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <div className="pt-2">
          <div className="flex justify-center items-center w-1/4 h-20 border border-blue-900 bg-gray-800 rounded-md mx-auto mt-4">
            <h1 className="text-white font-mono text-lg">{playerScore} PTS.</h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center m-2">
          <div className="flex flex-col items-center">
            {/* Instructions */}
            <div className=" top-[-40px] bg-white text-black w-1/2 p-4 rounded-lg shadow-md text-center">
              <h2 className="font-bold text-xl">Instructions</h2>
              <p className="text-sm">Input Codes before the timer starts</p>
            </div>
            <div>
              {/* Terminal and Timer Container */}
              <div className="flex space-x-4 items-center justify-center">
                {/* Left Logos */}
                <div className="flex flex-col space-y-4 items-center">
                  <img src="/assets/logo4.png" alt="Logo 4" className="h-12 sm:h-20 animate-spin-slow" />
                  <img src="/assets/logo2.png" alt="Logo 2" className="h-12 sm:h-20 animate-spin-slow" />
                  <img src="/assets/logo3.png" alt="Logo 3" className="h-12 sm:h-20 animate-spin-slow" />
                </div>

                {/* Terminal 1 */}
                <div className="w-5/12 bg-gray-900 text-white rounded-lg p-4 h-[28rem] m-4">
                  <textarea
                    className="w-full h-full bg-black text-white p-2 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-lightblue-500 outline outline-offset-2 outline-blue-500"
                    onChange={handleInputChange}
                    disabled={isDisabled}
                  ></textarea>
                </div>

                {/* Timer */}
                <div className="flex flex-col items-center">
                  <div className="text-lg font-mono text-white">{formatTime(time)}</div>
                </div>

                {/* Terminal 2 */}
                <div className="w-5/12 bg-gray-900 text-white rounded-lg p-4 h-[28rem] m-4">
                  <textarea
                    className="w-full h-full bg-black text-white p-2 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-lightblue-500 outline outline-offset-2 outline-blue-500"
                    onChange={handleInputChange}
                    disabled={isDisabled}
                  ></textarea>
                </div>

                {/* Right Logos */}
                <div className="flex flex-col space-y-4 items-center">
                  <img src="/assets/logo4.png" alt="Logo 4" className="h-12 sm:h-20 animate-spin-slow" />
                  <img src="/assets/logo2.png" alt="Logo 2" className="h-12 sm:h-20 animate-spin-slow" />
                  <img src="/assets/logo3.png" alt="Logo 3" className="h-12 sm:h-20 animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
