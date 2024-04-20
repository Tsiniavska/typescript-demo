// * Base
import React from 'react';

// * Styles
import styles from './Field.module.css';

// * Types local
type TFieldProps = {
  title: string;
  type: string;
  name: string;
  placeholder?: string;
  error?: string | boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string | number;
};

const Field: React.FC<TFieldProps> = ({
  title,
  type = 'text',
  name,
  placeholder,
  error,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <>
      <label className={styles.lable}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <div className={styles.error}>{error}</div>
      </label>
    </>
  );
};

export default Field;
