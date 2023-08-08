'use client';

import React from 'react';
import { IconType } from 'react-icons';

type ButtonProps = {
  label: string;
  htmlLabel?: React.ReactElement
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  color?: string;
  textColor?: string;
};

const Button:React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  color = "black",
  textColor = "white",
  small,
  icon: Icon,
  htmlLabel
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        font-semibold
        ${outline ? 'bg-transparent' : `bg-${color}`}
        ${outline ? 'border-white' : `border-${color}`}
        ${outline ? 'text-white' : `text-${textColor}`}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon 
          size={24}
          className='
            absolute
            left-4
            top-3
          '
        />
      )}
      {htmlLabel ? htmlLabel : label}
    </button>
  )
}
export default Button;