import Container from '@/components/Container';
import React from 'react';
import CartClient from './CartClient';

type CartProps = {
  
};

const Cart:React.FC<CartProps> = () => {
  
  return (
    <Container>
      <CartClient />
    </Container>
  )
}
export default Cart;