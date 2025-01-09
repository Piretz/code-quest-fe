"use client";
import Image from "next/image";

// export default function Home() {
//   return <Dashboard />;
// }
// _app.tsx or root file
import React from "react";
import { ThemeProvider } from "../components/ui/ThemeContext"; // Import the ThemeProvider
import Dashboard from "../components/ui/Dashboard";

export default function Home() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;



