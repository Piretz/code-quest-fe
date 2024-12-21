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
import LandingPage from "./(auth)/landingpage/page";

export default function Home() {
  return (
    <LandingPage />
  );
}




