// * Base
import { Link } from 'react-router-dom';
import React from 'react';

// * Styles
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
