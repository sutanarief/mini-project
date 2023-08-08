'use client'

import React from 'react';
import Button from './Button';
import Container from './Container';
import { useRouter } from 'next/navigation';

type AuthButtonProps = {
  
};

const AuthButton:React.FC<AuthButtonProps> = () => {
  const router = useRouter()
  return (
    <div
      className='
        mx-auto
        justify-between
        items-center
        flex
        flex-col
        w-full
        mb-10
      '
    >
      <span
        className='
          text-5xl
          text-white
        '
      >Welcome to FAKESTORE !</span>
      <div
        className='
          flex
          gap-5
          flex-col
          w-full
          sm:w-9/12
          md:w-6/12
        '
      >
        <Button 
          label='Login'
          color='white'
          textColor='black'
          onClick={() => router.push('/auth/login')}
        />
        <Button
          label='Sign Up'
          outline
          onClick={() => router.push('/auth/signup')} 
        />
      </div>
    </div>
  )
}
export default AuthButton;