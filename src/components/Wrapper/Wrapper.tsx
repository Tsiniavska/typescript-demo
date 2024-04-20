// * Base
import cn from 'classnames';
import React, { ReactNode } from 'react';

// * Styles
import styles from './Wrapper.module.css';

// * Local constans
type TWrapperProps = {
  children: ReactNode;
  className?: string | string[];
};

const Wrapper: React.FC<TWrapperProps> = ({ children, className = [] }) => {
  return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
};

export default Wrapper;
