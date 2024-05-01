// * Base
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

// * Data
import LIST from '../../types/Navigation.data';

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex items-center">
        {LIST.map(({ id, to }) => (
          <Item key={`navigation-item ${id}`} to={to} text={t(to)} />
        ))}
      </ul>
    </nav>
  );
};

// * Types local
type TItemProps = {
  to: string;
  text: string;
};

const Item: React.FC<TItemProps> = ({ to, text }) => {
  return (
    <li>
      <Link
        to={to}
        className="p-[10px] flex text-black transition duration-0.35 ease-in-out hover:text-primary"
      >
        {text}
      </Link>
    </li>
  );
};

export default Navigation;
