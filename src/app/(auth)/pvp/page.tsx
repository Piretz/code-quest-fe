'use client';
import React, { useState, useEffect } from 'react';
import Header from '../Selectmode/header';
import Sidebar from '../Selectmode/sidebar';
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

  // Timer logic
  useEffect(() => {
    if (!hasStarted || time <= 0) return; // Don't start the timer until typing begins or time is over

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsDisabled(true); // Disable terminals when time is over
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [hasStarted, time]); // Timer starts when hasStarted is true and stops when time is 0

  // Format time
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Handle input change event to start the timer
  const handleInputChange = () => {
    if (!hasStarted) {
      setHasStarted(true); // Start the timer when user starts typing
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header />
      </div>

      <div className="flex flex-1">
        <div>
          <Sidebar />
        </div>

        {/* Collapsible Component */}
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-40 space-y-4 pt-96 fixed left-40"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
             MESSAGES
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-2 py-4 font-mono text-sm shadow-sm ">
            <img src='/assets/user.png' alt=''></img> 
            <img src='/assets/user.png' alt=''></img>
            <img src='/assets/user.png' alt=''></img>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            <img src='/assets/user.png' alt=''></img>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            <img src='/assets/user.png' alt=''></img>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex flex-1 justify-between items-start m-2" >
          {/* Points */}
          <div className='pt-4 focus:ring-lightblue-500 outline outline-offset-2 outline-blue-500'>
            <div className='h-12'>
              <h1 className='text-white text-mono '> 70 PTS.</h1>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="relative flex flex-1 justify-between p-40 mt-10">
              {/* Border Box above the terminals */}
              <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-white text-black w-1/2  p-4 m-10 rounded-lg shadow-md">
                <h2 className="text-center font-bold text-xl">Instructions</h2>
                <p className="text-center text-sm">Input Codes before the timer starts</p>
              </div>
              <div>
                <img src="/assets/logo4.png" className="h-12 sm:h-20 animate-spin-slow" />
                <img src="/assets/logo2.png" className="h-12 sm:h-20 animate-spin-slow" />
                <img src="/assets/logo3.png" className="h-12 sm:h-20 animate-spin-slow" />
              </div>

              {/* Terminal 1 */}
              <div className="w-1/3 bg-gray-900 text-white rounded-lg p-1 m-1 h-96">
                <textarea
                  className="w-full h-[calc(100%-60px)] bg-black text-white p-2 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-lightblue-500 outline outline-offset-2 outline-blue-500"
                  onChange={handleInputChange} // Trigger when the user starts typing
                  disabled={isDisabled} // Disable terminal when time is up
                ></textarea>
              </div>
              {/* Minimal Timer */}
              <div className="flex items-center justify-center text-center w-20 h-4 pb-40 pt-40">
                <div>
                  <div className="text-lg font-mono text-white pt-20">{formatTime(time)}</div>
                </div>
              </div>
              {/* Terminal 2 */}
              <div className="w-1/3 bg-gray-900 text-white rounded-lg p-4 m-1">
                <textarea
                  className="w-full h-[calc(100%-60px)] bg-black text-white p-2 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-lightblue-500 outline outline-offset-2 outline-blue-500"
                  onChange={handleInputChange} // Trigger when the user starts typing
                  disabled={isDisabled} // Disable terminal when time is up
                ></textarea>
              </div>
              {/* Logos */}
              <div className="top-14 right-4 flex flex-col space-y-2">
                <img src="/assets/logo4.png" className="h-12 sm:h-20 animate-spin-slow" />
                <img src="/assets/logo2.png" className="h-12 sm:h-20 animate-spin-slow" />
                <img src="/assets/logo3.png" className="h-12 sm:h-20 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
