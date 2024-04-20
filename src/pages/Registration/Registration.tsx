// * Base
import React from 'react';

// * Components
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

// * Styles
import styles from './Registration.module.css';

const Registration: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Registration</h1>
      <RegistrationForm />;
    </>
  );
};

export default Registration;
