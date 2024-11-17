
import { HomeIcon } from '@radix-ui/react-icons'
import React from 'react';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;




// export default function Home() {
//   return(
//     <main><h1>WELCOME TO CIPHERION</h1>
//     {/* for navigation(turn into a next page) (clickable label)
//     <a href = "/users"> Users</a>
//     <SampleCard /> */}
//     </main>
//   )
// }