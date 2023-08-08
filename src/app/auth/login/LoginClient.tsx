'use client'
import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type LoginClientProps = {
  
};

const LoginClient:React.FC<LoginClientProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })

  const router = useRouter()

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      id,
      name,
      value
    } = event.target
    setLoginForm({...loginForm, [event.target.id]: event.target.value})
  }
  
  return (
      <div
        className='
          flex
          flex-col
          gap-10
          self-center
          mx-auto
          items-center
          p-10
          w-full
          sm:w-9/12
          md:w-6/12
        '
      >
        <div
          className='
            flex
            flex-col
            self-start
          '
        >
        <span
          className='
            text-3xl
            font-semibold
            self-start
          '
        >
          Welcome !
        </span>
        <span>Please Login or Sign Up to continue using our app</span>
        </div>
        <div
          className='
            w-full
            grid
            gap-5
          '
        >
          <Input 
            id='email'
            label='Email'
            name='email'
            placeholder='john.doe@gmail.com'
            value={loginForm.email}
            required
            onChange={handleOnChange}
          />
          <Input 
            id='password'
            label='Password'
            type='password'
            name='password'
            placeholder='Password'
            value={loginForm.password}
            required
            onChange={handleOnChange}
          />
        </div>
        <Button 
          label='Login'
          onClick={() => {}}
        />
        <div
          className='
            text-sm
          '
        >
          <span>First time in here ? </span>
          <span className='text-blue-500 cursor-pointer' onClick={() => router.push('/auth/signup')}>Create an account</span>
        </div>
      </div>
  )
}
export default LoginClient;