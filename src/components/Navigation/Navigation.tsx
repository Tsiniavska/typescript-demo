// * Base
import { Link } from 'react-router-dom';
import React from 'react';

// * Styles
import styles from './Navigation.module.css';

// * Data
import LIST from '../../types/Navigation.data';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ id, text }) => (
          <Item key={`navigation-item ${id}`} text={text} />
        ))}
      </ul>
    </nav>
  );
};

// * Types local
type TItemProps = {
  text: string;
};

const Item: React.FC<TItemProps> = ({ text }) => {
  return (
    <li>
      <Link to={text} className={styles.link}>
        {text}
      </Link>
    </li>
  );
};

export default Navigation;
