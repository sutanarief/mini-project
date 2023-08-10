'use client'

import { setStar, starArray } from '@/app/helper';
import { Product } from '@/app/types';
import Button from '@/components/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";

type ProductDetailClientProps = {
  data: Product
};

const ProductDetailClient:React.FC<ProductDetailClientProps> = ({
  data
}) => {

  const [amount, setAmount] = useState("")

  
  const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = event.target

    setAmount(value)
  }

  const getItemInCart = () => {
    const currentCart = JSON.parse(localStorage?.getItem('cart') || JSON.stringify([]))
    const itemIndex = currentCart.findIndex((val: any) => val.id === data.id)

    if(itemIndex < 0) return 
    return { id: currentCart[itemIndex].id,totalPrice: currentCart[itemIndex].totalPrice, quantity: currentCart[itemIndex].quantity}
  }

  const onClickAmount = (action: string) => {
    if(action === 'plus') return setAmount(String(Number(!amount ? getItemInCart()?.quantity ?  getItemInCart()?.quantity : amount : amount) + 1))
    if(action === 'minus' && Number(amount) > 1) return setAmount(String(Number(!amount ? getItemInCart()?.quantity : amount) - 1))
  }

  const handleClickToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || JSON.stringify([]))
    const itemIndex = currentCart.findIndex((val: any) => val.id === data.id)
    const item = {
      id: data.id,
      price: data.price,
      totalPrice: parseFloat(String(data.price * Number(amount))).toFixed(2),
      quantity: amount,
      title: data.title,
      subTitle: data.category,
      image: data.image
    }
    if(itemIndex < 0) {
      currentCart.push(item)
    } else {
      currentCart[itemIndex].quantity = amount
      currentCart[itemIndex].totalPrice = parseFloat(String(data.price * Number(amount))).toFixed(2)
    }
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }

  return (
    <div className='w-full py-10 h-full flex flex-col justify-center bg-white'>
      <div
          className='
            aspect-square
            w-6/12
            self-center
            relative
            overflow-hidden
            p-10
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
          '
        />
      </div>
      <div className='p-8 flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <span className='text-xl font-bold'>{data.title}</span>
          <span className='text-sm text-gray-500 font-bold capitalize'>{data.category}</span>
          <div className='flex align-middle items-center'>
            {starArray(data.rating.rate).map((val, index) => (
              <Image key={index} src={setStar(val)} alt='rating-image' width={20} height={20}/>
            ))}
            <span className='ml-2'>{`(${data.rating.count} Reviews)`}</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-xl font-bold'>Price</span>
          <span className='text-xl font-bold'>$ {data.price}</span>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-xl font-bold'>Description</span>
          <span className='text-sm'>{data.description}</span>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1'>
            <span className='text-xs text-gray-500'>Total Price</span>
            <span className='text-xl font-bold'>$ {!amount ? getItemInCart()?.totalPrice : parseFloat(String(data.price * Number(amount))).toFixed(2)}</span>
          </div>
          <div className='flex items-center gap-1 bg-gray-100 p-2 rounded-xl'>
            <div className='px-3 cursor-pointer' onClick={() => onClickAmount("minus")}>
              <TiMinus size={18} />
            </div>
            <input
              className='
                font-bold
                text-xl
                bg-transparent
                w-12
                p-0
                m-0
                text-center
                active:border-none
              '
              onChange={onChangeAmount}
              type='number'
              value={!amount ? getItemInCart()?.quantity : amount}    
            />
            <div className='px-3 cursor-pointer' onClick={() => onClickAmount("plus")}>
              <TiPlus size={18} />
            </div>
          </div>
        </div>
          <div>
            <Button 
              label={`${getItemInCart()?.id ? 'Update Cart' : 'Add to Cart'}`}
              onClick={handleClickToCart}
            />
          </div>
      </div>
    </div>
  )
}
export default ProductDetailClient;