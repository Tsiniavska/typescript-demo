// * Base
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

// * Components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Language from '../Language/Language';

// * Types
import { EButton, EDesign } from '../../types/button.types';

const Header: React.FC = () => {
  const signIn = useCallback(() => console.log('Sign In'), []);
  const signUp = useCallback(() => console.log('Sign Up'), []);

  return (
    <header className="flex items-center min-h-[80px]">
      <div className="wrapper">
        <div className="flex justify-between pt-[15px] pb-[15px] item-center">
          <Logo />
          <Navigation />
          <div className="flex space-x-[15px]">
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
            <Language />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
