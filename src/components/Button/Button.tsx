// * Base
import cn from 'classnames';
import React, { ReactNode } from 'react';

// * Types
import { EButton, EDesign } from '../../types/button.types';

// * Types local
type TProps = {
  disabled?: boolean;
  design: EDesign;
  text: string;
  type: EButton;
  href: string;
  children?: ReactNode;
  onClick: () => void;
};

const Button: React.FC<TProps> = ({
  text = 'Default text',
  type,
  design,
  href = '',
  disabled = false,
  children,
  onClick,
}) => {
  const stylesList = ['button'];

  switch (design) {
    case EDesign.WHITE: {
      stylesList.push('white-button');
      break;
    }
    case EDesign.BIG: {
      stylesList.push('big-button');
      break;
    }
    case EDesign.BIGWHITE: {
      stylesList.push('big-white-button');
      break;
    }
    case EDesign.BIGORANGE: {
      stylesList.push('big-orange');
      break;
    }
    case EDesign.RETRY: {
      stylesList.push('retry-button');
      break;
    }
    case EDesign.LANGUAGE: {
      stylesList.push('language-button');
      break;
    }
    default: {
      console.log('=)');
    }
  }

  if (href)
    return (
      <Link text={text} href={href} onClick={onClick} styleList={stylesList}>
        {children}
      </Link>
    );

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(stylesList)}
      disabled={disabled}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};

type TLinkProps = {
  styleList: string[];
  text: string;
  href: string;
  children: ReactNode;
  onClick: () => void;
};

const Link: React.FC<TLinkProps> = ({
  text,
  href,
  onClick,
  styleList,
  children,
}) => {
  return (
    <a target="_blank" href={href} onClick={onClick} className={cn(styleList)}>
      <span>{text}</span>
      {children}
    </a>
  );
};

export default Button;
