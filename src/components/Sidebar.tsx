// 'use client';
// import React from 'react';
// import styles from './Home.module.css';

// const Sidebar: React.FC = () => {
//   return (
//     <aside className={styles.sidebar}>
//       {/* Logo */}
//       <div className={styles.logo}>
//         LOGO
//       </div>

//       {/* User Levels */}
//       <div className={styles.level}>
//         <div className="bg-gray-400 w-16 h-16 mx-auto rounded-full"></div>
//         <p className="text-center font-semibold">Intermediate Level 1</p>
//       </div>

//       {/* Additional Info */}
//       <div className={styles.extraInfo}>
//         <div className="bg-gray-300 h-24 rounded mb-4"></div>
//         <div className="bg-gray-300 h-16 rounded"></div>
//       </div>

//       {/* Team Up Button */}
//       <div className={styles.teamUpButton}>
       
//         <button onClick={()=> console.log('Click')}> Let’s team up!</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import { FC } from 'react';
import { HomeIcon, TrophyIcon, UserIcon } from '@heroicons/react/outline';

const Sidebar: FC = () => {
  return (
    <div className="bg-indigo-900 text-yellow-200 w-16 flex flex-col items-center py-5 space-y-4">
      <HomeIcon className="w-6 h-6" />
      <UserIcon className="w-6 h-6" />
      <TrophyIcon className="w-6 h-6" />
    </div>
  );
};

export default Sidebar;

