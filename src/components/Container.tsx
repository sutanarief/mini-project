'use client'

import React from 'react';

type ContainerProps = {
  children: React.ReactNode
  
};

const Container:React.FC<ContainerProps> = ({ children }) => {
  
  return (
    <div
      className='
      max-w-[2520px]
      mx-auto
      '
    >
      {children}
    </div>
  )
}
export default Container;