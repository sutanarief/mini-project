'use client'
import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type SignupClientProps = {
  
};

const SignupClient:React.FC<SignupClientProps> = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const router = useRouter()

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      id,
      name,
      value
    } = event.target
    setSignupForm({...signupForm, [event.target.id]: event.target.value})
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
          Sign Up !
        </span>
        <span>Create new account</span>
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
            value={signupForm.email}
            required
            onChange={handleOnChange}
          />
          <Input 
            id='password'
            label='Password'
            type='password'
            name='password'
            placeholder='Password must be at least 8 characters'
            value={signupForm.password}
            required
            onChange={handleOnChange}
          />
          <Input 
            id='confirmPassword'
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            placeholder='Password must be at least 8 characters'
            value={signupForm.confirmPassword}
            required
            onChange={handleOnChange}
          />
        </div>
        <Button 
          label='Sign Up'
          onClick={() => {}}
        />
        <div
          className='
            text-md
          '
        >
          <span>Already have an account ? </span>
          <span className='text-blue-500 cursor-pointer' onClick={() => router.push('/auth/login')}>Login</span>
        </div>
      </div>
  )
}
export default SignupClient;