import Image from 'next/image';
import React, { useState } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';

type CartCardProps = {
  data: any
  setCart: React.Dispatch<React.SetStateAction<any[]>>
};

const CartCard:React.FC<CartCardProps> = ({
  data,
  setCart
}) => {

  const [amount, setAmount] = useState("")

  
  const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = event.target

    setAmount(value)
  }


  const handleClickToCart = (action: string) => {
    const currentAmount = action === 'plus' ? !amount ? data.quantity ?  Number(data.quantity) + 1 : amount : Number(amount) + 1 : !amount ? data.quantity ?  Number(data.quantity) - 1 : amount : Number(amount) - 1
    console.log(currentAmount)
    console.log(amount, 'amount')
    const currentCart = JSON.parse(localStorage.getItem('cart') || JSON.stringify([]))
    const itemIndex = currentCart.findIndex((val: any) => val.id === data.id)
    const item = {
      id: data.id,
      price: data.price,
      totalPrice: parseFloat(String(data.price * Number(currentAmount))).toFixed(2),
      quantity: currentAmount,
      title: data.title,
      subTitle: data.category,
      image: data.image
    }
    if(itemIndex < 0) {
      currentCart.push(item)
    } else {
      console.log('jalan 1')
      currentCart[itemIndex].quantity = currentAmount
      currentCart[itemIndex].totalPrice = parseFloat(String(data.price * Number(currentAmount))).toFixed(2)
    }
    console.log('jalan 2')
    setCart(currentCart)
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }

  const onClickAmount = async (action: string) => {
    if(action === 'plus') {
      handleClickToCart(action)
      return setAmount(String(Number(!amount ? data.quantity ?  data.quantity : amount : amount) + 1))
    }
    if(action === 'minus' && Number(!amount ? data.quantity ?  data.quantity : amount : amount) > 1) {
      handleClickToCart(action)
      return setAmount(String(Number(!amount ? data.quantity : amount) - 1))
    }
  }


  return (
    <div className='flex gap-2 p-3 rounded-xl shadow-md border-[1px] border-gray-200'>
    <div
        className='
          aspect-square
          w-20
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
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
        <span className='font-bold text-md'>{data.title}</span>
        <span className='text-xs text-gray-400'>{data.subTitle}</span>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <span className='text-xs font-bold'>Total Price</span>
          <span className='font-bold'>$ {parseFloat(String(data.price * Number(!amount ? data.quantity ?  data.quantity : amount : amount))).toFixed(2)}</span>
          </div>

          <div className='flex items-center gap-1 bg-gray-100 p-2 rounded-xl'>
            <div className='px-3 cursor-pointer' onClick={() => onClickAmount('minus')}>
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
              value={!amount ? data.quantity : amount}    
            />
            <div className='px-3 cursor-pointer' onClick={() => onClickAmount('plus')}>
              <TiPlus size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartCard;