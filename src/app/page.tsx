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
import React from "react";
import { ThemeProvider } from "../components/ThemeContext"; // Import the ThemeProvider
import Dashboard from "../components/Dashboard";

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;



