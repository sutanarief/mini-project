'use client'

import React, { useState } from 'react';
import Category from './Category';
import Input from './Input';
import Button from './Button';
import { useRouter } from 'next/navigation';
import useLoginUser from '@/app/hooks/useLoginUser';

type HomePageProps = {
  categories: { category: string; totalItem: string }[] | undefined
};

const HomePage:React.FC<HomePageProps> = ({
  categories
}) => {
  const [search, setSearch] = useState("")
  const [filterCategory, setFilterCategory] = useState(categories)
  const router = useRouter()
  const loginUser = useLoginUser()
  const user = loginUser.currentUser

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = event.target
    const filtered = categories?.filter((category) => category.category.includes(value))
    setSearch(value)
    if(value) {
      setFilterCategory(filtered)
    } else {
      setFilterCategory(categories)
    }
  }
  return (
    <div className='w-full h-full flex gap-10 flex-col'>
      <Input 
        id='saerch'
        name='search'
        value={search}
        label='Search'
        placeholder='Search Category'
        onChange={handleOnChange}
      />
        <div
          className='
            flex
            w-full
            border-t-[1px]
            border-black
            flex-col
            gap-5
            pt-5
          '
        >
      {filterCategory?.map((category) => (
          <Category key={category.category} title={category.category} subTitle={category.totalItem} />
      ))}
        </div>
        <Button 
          label='See All Products'
          onClick={() => router.push('/products')}
        />
    </div>
  )
}
export default HomePage;