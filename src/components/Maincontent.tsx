// 'use client';
// import React from 'react';
// import styles from './Home.module.css';

// const MainContent: React.FC = () => {
//   return (
//     <main className={styles.mainContent}>
//       {/* Practice Mode Section */}
//       <div className={styles.practiceMode}>
//       <button onClick={()=> console.log('Click')}> Practice Mode </button>
      
//       </div>

//       {/* Courses Section */}
//       <div className={styles.courses}>
//         <div className={styles.courseSection}>
//           <h3>My Courses</h3>
//           <ul>
//             <li className={styles.courseItem}>
//               <span>Java Programming</span>
//               <span>Sessions: 9/15</span>
//             </li>
//             <li className={styles.courseItem}>
//               <span>Algorithm</span>
//               <span>Sessions: 10/15</span>
//             </li>
//             <li className={styles.courseItem}>
//               <span>Introduction to Computing</span>
//               <span>Sessions: 3/15</span>
//             </li>
//           </ul>
//         </div>

//         <div className={styles.courseSection}>
//           <h3>Popular Courses</h3>
//           <ul>
//             <li className={styles.courseItem}>
//               <span>HTML</span>
//               <span>Beginner</span>
//             </li>
//             <li className={styles.courseItem}>
//               <span>Java Programming</span>
//               <span>Advanced</span>
//             </li>
//             <li className={styles.courseItem}>
//               <span>Java Programming</span>
//               <span>Intermediate</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MainContent;

import { FC } from 'react';

const MainContent: FC = () => {
  return (
    <div className="flex-1 p-10 bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-2xl font-bold text-white mb-4">HTML The Basic | Beginner</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Details about the lesson...</p>
        <div className="flex justify-between mt-4">
          <div className="text-center">
            <span className="text-blue-500 font-bold">67%</span>
            <p>Lesson Viewed</p>
          </div>
          <div className="text-center">
            <span className="text-yellow-500 font-bold">42%</span>
            <p>Completed Homework</p>
          </div>
          <div className="text-center">
            <span className="text-red-500 font-bold">59%</span>
            <p>Average Score</p>
          </div>
          <div className="text-center">
            <span className="text-green-500 font-bold">86%</span>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
