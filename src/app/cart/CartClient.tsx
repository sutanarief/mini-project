'use client'

import Button from '@/components/Button';
import CartCard from '@/components/CartCard';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type CartClientProps = {
  
};

const CartClient:React.FC<CartClientProps> = () => {
  const [cart, setCart] = useState<any>([])
  const [voucher, setVoucher] = useState("")
  const router = useRouter()

  const getTotalPrice = (cart: any[]) => {
    let totalPrice = 0
    console.log(cart)
    cart.forEach((value) => {
      totalPrice += Number(value.totalPrice)
    })
    return parseFloat(String(totalPrice)).toFixed(2)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = event.target

    setVoucher(value)
  }

  const handleClick = () => {
    localStorage.removeItem('cart')
    router.push('/products')
  }

  

  useEffect(() => {
    if(typeof window !== 'undefined') {
      setCart(JSON.parse(localStorage.getItem('cart') || JSON.stringify([])))
    }
  }, [])

  return (
    <div className='px-10 py-20'>
      {cart.length === 0 && <div className='flex flex-col px-20 w-80 gap-5 justify-center align-middle items-center'>
          <span>No item</span>
          <Button label="See All Product" onClick={() => router.push('/products')}/>
        </div>}
      {cart.length > 0 && 
      <div className='flex flex-col gap-5'>
        {cart.map((item: any, index: number) => (
          <CartCard key={index} data={item} setCart={setCart} />
        ))}
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>Total Price</span>
          <span className='font-bold text-2xl'>$ {getTotalPrice(cart)}</span>
        </div>
        <Input 
          id='voucher'
          name='voucher'
          label='Voucher'
          placeholder='Use DSC20 code to get 20% discount'
          value={voucher}
          onChange={handleOnChange}
        />
        <Button 
          label='Checkout'
          onClick={handleClick}
        />
      </div>
      }
    </div>
  )
}
export default CartClient;