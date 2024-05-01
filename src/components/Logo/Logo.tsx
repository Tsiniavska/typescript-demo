// * Base
import { Link } from 'react-router-dom';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="max-w-[200px] h-min flex w-full">
      <img src="/logo.png" alt="logo" className="w-full" />
    </Link>
  );
};

export default Logo;
