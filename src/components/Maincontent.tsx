import React from 'react';
import styles from './Home.module.css';

const MainContent: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      {/* Practice Mode Section */}
      <div className={styles.practiceMode}>
        Practice Mode
      </div>

      {/* Courses Section */}
      <div className={styles.courses}>
        <div className={styles.courseSection}>
          <h3>My Courses</h3>
          <ul>
            <li className={styles.courseItem}>
              <span>Java Programming</span>
              <span>Sessions: 9/15</span>
            </li>
            <li className={styles.courseItem}>
              <span>Algorithm</span>
              <span>Sessions: 10/15</span>
            </li>
            <li className={styles.courseItem}>
              <span>Introduction to Computing</span>
              <span>Sessions: 3/15</span>
            </li>
          </ul>
        </div>

        <div className={styles.courseSection}>
          <h3>Popular Courses</h3>
          <ul>
            <li className={styles.courseItem}>
              <span>HTML</span>
              <span>Beginner</span>
            </li>
            <li className={styles.courseItem}>
              <span>Java Programming</span>
              <span>Advanced</span>
            </li>
            <li className={styles.courseItem}>
              <span>Java Programming</span>
              <span>Intermediate</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
