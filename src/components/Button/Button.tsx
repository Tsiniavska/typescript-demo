// * Base
import cn from 'classnames';
import React from 'react';

// * Styles
import styles from './Button.module.css';

// * Types
import { EButton, EDesign } from '../../types/button.types';

// * Types local
type TProps = {
  disabled?: boolean;
  design: EDesign;
  text: string;
  type: EButton;
  href: string;
  onClick: () => void;
};

const Button: React.FC<TProps> = ({
  text = 'Default text',
  type,
  design,
  href = '',
  disabled = false,
  onClick,
}) => {
  const stylesList = [styles.button];

  switch (design) {
    case EDesign.WHITE: {
      stylesList.push(styles.white);
      break;
    }
    case EDesign.BIG: {
      stylesList.push(styles.big);
      break;
    }
    case EDesign.BIGWHITE: {
      stylesList.push(styles.bigWhite);
      break;
    }
    case EDesign.RETRY: {
      stylesList.push(styles.retry);
      break;
    }
    default: {
      console.log('=)');
    }
  }

  if (href)
    return (
      <Link text={text} href={href} onClick={onClick} styleList={stylesList} />
    );

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(stylesList)}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};

type TLinkProps = {
  styleList: string[];
  text: string;
  href: string;
  onClick: () => void;
};

const Link: React.FC<TLinkProps> = ({ text, href, onClick, styleList }) => {
  return (
    <a target="_blank" href={href} onClick={onClick} className={cn(styleList)}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
