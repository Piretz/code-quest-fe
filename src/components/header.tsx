import React from 'react';
import styles from './Home.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Welcome to CodeQuest</h1>
      <p>Where Knowledge Meets Innovation</p>
    </header>
  );
};

export default Header;
