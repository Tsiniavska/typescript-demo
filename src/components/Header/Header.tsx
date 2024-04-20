// * Base
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

// * Components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';

// * Types
import { EButton, EDesign } from '../../types/button.types';

// * Styles
import styles from './Header.module.css';

const Header: React.FC = () => {
  const signIn = useCallback(() => console.log('Sign In'), []);
  const signUp = useCallback(() => console.log('Sign Up'), []);

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.wrapper}>
          <Logo />
          <Navigation />
          <div className={styles.buttons}>
            <Button
              text="Sign In"
              onClick={signIn}
              design={EDesign.DEFAULT}
              type={EButton.BUTTON}
              href=""
            />
            <Link to="/registration">
              <Button
                text="Sign Up"
                design={EDesign.WHITE}
                onClick={signUp}
                href=""
                type={EButton.BUTTON}
              />
            </Link>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
