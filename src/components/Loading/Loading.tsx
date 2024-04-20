// * Base
import React from 'react';

// * Components
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './Loading.module.css';

// * Types local
type TLoadingProps = {
  // Опис пропсів, якщо вони будуть
};

const Loading: React.FC<TLoadingProps> = () => {
  return (
    <Wrapper>
      <div className={styles.text}>Loading...</div>
    </Wrapper>
  );
};

export default Loading;
