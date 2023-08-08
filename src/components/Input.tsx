'use client'

import React from 'react';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
};

const Input:React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  placeholder = 'Fill the field',
  onChange,
  name,
  value,
  required,
}) => {

  return (
    <div className='w-full'>
      <label className='text-lg font-bold'>{label}</label>
      <input 
        id={id}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className={`
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
        `}
      />
    </div>
  )
}
export default Input;