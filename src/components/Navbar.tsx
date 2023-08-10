'use client'

import { userLogin } from '@/app/actions/user';
import useLoginUser from '@/app/hooks/useLoginUser';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type NavbarProps = {
  
};

const Navbar:React.FC<NavbarProps> = () => {
  const router = useRouter()
  const loginUser = useLoginUser()
  const menus = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Cart',
      path: '/cart'
    },
    {
      title: 'Logout'
    }
  ]

  const handleClickNav = (path: string) => {
    if (path) return router.push(path)
    loginUser.logout()
    localStorage.removeItem('user')
    return router.push('/')
  }
  
  return (
    <div
      className={`
        py-4
        rounded-t-[2rem]
        lg:rounded-none
        bg-black
        text-white
        font-semibold
        sticky
        bottom-0
        flex
        justify-around
        lg:mb-10
        ${(!loginUser.currentUser || !localStorage.getItem('user')) ? 'hidden' : null}
      `}
    >
      {menus.map((menu: any) => (
        <div key={menu.title} onClick={() => handleClickNav(menu.path)} className='cursor-pointer'>{menu.title}</div>
      ))}
    </div>
  )
}
export default Navbar;