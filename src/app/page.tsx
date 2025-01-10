// import Image from "next/image";
// import Sidebar from "../components/sidebar";

// export default function Home() {
//   return (
//     <div>    
//           <Sidebar/>

//       </div>  
    
//   )
// }

// import Dashboard from "../components/Dashboard";

// export default function Home() {
//   return <Dashboard />;
// }
// _app.tsx or root file

"use client";

import { useEffect, useState } from "react";
import LandingPage from "./(auth)/landingpage/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading for 2 seconds (adjust as needed)

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return <LandingPage />;
}




