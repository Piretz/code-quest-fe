import React from 'react';
import styles from './Home.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        LOGO
      </div>

      {/* User Levels */}
      <div className={styles.level}>
        <div className="bg-gray-400 w-16 h-16 mx-auto rounded-full"></div>
        <p className="text-center font-semibold">Intermediate Level 1</p>
      </div>

      {/* Additional Info */}
      <div className={styles.extraInfo}>
        <div className="bg-gray-300 h-24 rounded mb-4"></div>
        <div className="bg-gray-300 h-16 rounded"></div>
      </div>

      {/* Team Up Button */}
      <div className={styles.teamUpButton}>
        Let’s team up!
      </div>
    </aside>
  );
};

export default Sidebar;
