import { Product } from '@/app/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type ProductCardProps = {
  data: Product
};

const ProductCard:React.FC<ProductCardProps> = ({
  data
}) => {
  const router = useRouter()
  const [user, setUser] = useState("")
  const handleClick = (id: number) => {
    if(user) return router.push(`/products/${id}`)
    return router.push('/auth/login')
  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      setUser(localStorage.getItem('user') || "")
    }
  }, [])

  return (
    <div className='col-span-1 cursor-pointer hover:scale-105' onClick={() => handleClick(data.id)}>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-3xl
          '
        >
          <Image 
            fill
            onClick={() => {}}
            alt='Product Image'
            src={data.image}
            style={{ objectFit: 'cover' }}
            className='
              object-cover
              h-full
              w-full
              hover:scale-110
              transition
              cursor-pointer
            '
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
          <span className='font-bold max-h-6 overflow-hidden truncate text-ellipsis'>
          {data.title}
          </span>
          <span className='text-gray-400 capitalize'>{data.category}</span>
          </div>
          <span className='font-bold text-xl'>
            $ {data.price}
          </span>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;