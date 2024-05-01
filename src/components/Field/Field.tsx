// * Base
import React from 'react';

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
      <label className="block">
        {title && <div className="leading-none mb-[5px]">{title}</div>}
        <input
          className="h-[40px] pl-[10px] pr-[10px] w-full"
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <div className="text-red text-xs leading-none h-[25px] pt-[5px]">
          {error}
        </div>
      </label>
    </>
  );
};

export default Field;
