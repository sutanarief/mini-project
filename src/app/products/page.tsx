import Container from '@/components/Container';
import React from 'react';
import ProductClient from './ProductClient';
import { getProducts } from '../actions/products';

type pageProps = {
  
};

const page:React.FC<pageProps> = async () => {
  const products = await getProducts()
  return (
    <Container>
      <ProductClient products={products} />
    </Container>
  )
}
export default page;