'use client';
import React, { useState, useEffect } from "react";
import Header from "../lesson/header";
import Sidebar from "../lesson/sidebar";

const Page = () => {
  const [parking, setParking] = useState<Array<{ car: string | null, carColor: string | null, isBlocked: boolean }>>(
    Array(3).fill({ car: null, carColor: null, isBlocked: false }) // 3 parking slots with car, carColor, and blockage status
  );
  const [draggedCar, setDraggedCar] = useState<string | null>(null);
  const [availableCars, setAvailableCars] = useState<{ car: string, carColor: string }[]>([
    { car: "car1", carColor: "red" },
    { car: "car2", carColor: "blue" },
    { car: "car3", carColor: "green" },
  ]);
  const [draggingEnabled, setDraggingEnabled] = useState(false);
  const [obstacles, setObstacles] = useState([false, false, false]); // Random obstacles in the slots
  const [terminalDisabled, setTerminalDisabled] = useState(false); // To track if terminal should be disabled
  const [selectedLanguage, setSelectedLanguage] = useState<string>("JavaScript");

  // Randomize the availability of slots and obstacles
  const randomizeParking = () => {
    const newObstacles = Array(3).fill(false).map(() => Math.random() > 0.7); // Random obstacles
    setObstacles(newObstacles);
  };

  useEffect(() => {
    randomizeParking();
  }, []);

  const handleDragStart = (car: string) => {
    if (!draggingEnabled || terminalDisabled) return; // Prevent dragging if not enabled or terminal is disabled
    setDraggedCar(car);
  };

  const handleDrop = (index: number) => {
    if (!draggedCar || parking[index].car !== null || parking[index].isBlocked) return; // Prevent drop if slot is occupied or blocked

    // Find the dragged car color
    const draggedCarObj = availableCars.find((car) => car.car === draggedCar);
    if (!draggedCarObj) return;

    // Check if the car color matches the slot color (slotColor is currently not used, so let's assume matching by color)
    const slotColor = parking[index].carColor;
    if (slotColor && draggedCarObj.carColor !== slotColor) return; // If the colors don't match, prevent the drop

    // Park the car in the selected slot
    const newParking = [...parking];
    newParking[index] = {
      car: draggedCar,
      carColor: draggedCarObj.carColor, // Store the car's color in the slot
      isBlocked: true, // Mark the slot as blocked once parked
    };

    setParking(newParking);

    // Remove the car from available cars
    setAvailableCars((prev) => prev.filter((car) => car.car !== draggedCar));
    setDraggedCar(null); // Clear the dragged car
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Allow dropping
  };

  const handleRunClick = () => {
    setDraggingEnabled(true); // Enable dragging
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const handleReset = () => {
    // Reset the level or parking state here if needed
    setParking(Array(3).fill({ car: null, carColor: null, isBlocked: false }));
    setAvailableCars([
      { car: "car1", carColor: "red" },
      { car: "car2", carColor: "blue" },
      { car: "car3", carColor: "green" },
    ]);
    setDraggingEnabled(false);
    setTerminalDisabled(false);
  };

  const handleSwitch = () => {
    // Switch logic (for example, switch terminal state or other functionality)
    setTerminalDisabled(!terminalDisabled);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header currentLevel={0} currentExperience={0} experienceNeeded={0} />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-32 h-screen text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow ml-32 p-4 space-y-4 bg-blue-900">
        {/* Top Section with Controls and Instructions */}
        <div className="flex items-center justify-between mb-4">
          {/* Instructions */}
          <div className="bg-gray-800 text-white p-4 rounded w-3/4">
            <h2 className="text-lg font-bold">Instructions</h2>
            <p>Click "Run" to start the challenge. You can park cars in the available slots, but beware of obstacles!</p>
          </div>

          {/* Controls (Programming Language Select, Reset, Switch) */}
          <div className="flex space-x-4">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="px-2 py-1 bg-blue-600 text-white rounded"
            >
              <option value="JavaScript">Java</option>
              <option value="Python">JavaScript</option>
              <option value="C++">Css</option>
              <option value="Java">Html</option>
            
            </select>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-500"
            >
              Reset Level
            </button>
            <button
              onClick={handleSwitch}
              className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-red-500"
            >
              Switch
            </button>
          </div>
        </div>

        {/* Run Button */}
        <div className="text-center mb-4">
          <button
            onClick={handleRunClick}
            className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-500 disabled:opacity-50"
            disabled={draggingEnabled} // Disable button after clicking
          >
            {draggingEnabled ? "Dragging Enabled" : "Run"}
          </button>
        </div>

        {/* Parking Area */}
        <div className="relative bg-gray-700 rounded-md p-4">
          <h2 className="text-lg font-bold text-white text-center mb-4">Parking Lot</h2>
          <div className="grid grid-cols-3 gap-4 justify-center">
            {parking.map((slot, index) => (
              <div
                key={index}
                className={`w-24 h-36 border-2 rounded-md flex items-center justify-center ${slot.car ? `border-${slot.carColor}-500 bg-${slot.carColor}-600` : "border-gray-500 bg-gray-800"} ${obstacles[index] ? "bg-gray-600" : ""}`}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
              >
                {slot.car && (
                  <img
                    src={`/assets/${slot.car}.png`}
                    alt={`Car ${slot.car}`}
                    className="w-full h-full object-contain"
                  />
                )}
                {!slot.car && !obstacles[index] && <span className="text-gray-500 text-sm">Empty Slot</span>}
                {obstacles[index] && <span className="text-red-500 text-sm absolute top-2 left-2">Blocked</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Draggable Cars */}
        <div className="flex flex-wrap items-center justify-center space-x-4 bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-bold text-white mb-2 w-full text-center">Error Codes</h2>
          {availableCars.length > 0 ? (
            availableCars.map((car, index) => (
              <img
                key={index}
                src={`/assets/${car.car}.png`}
                alt={`Car ${car.car}`}
                draggable={draggingEnabled && !terminalDisabled}
                onDragStart={() => handleDragStart(car.car)}
                className={`w-24 h-36 cursor-pointer border-2 border-transparent ${draggingEnabled ? "hover:border-blue-500" : "opacity-50"} rounded`}
              />
            ))
          ) : (
            <p className="text-white text-center">Execute Successfully!!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
