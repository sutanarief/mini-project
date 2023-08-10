import { getProductById } from '@/app/actions/products';
import Container from '@/components/Container';
import React from 'react';
import ProductDetailClient from './ProductDetailClient';


type IParams = {
  productId: string
}

type pageProps = {
  params: IParams
};

const page:React.FC<pageProps> = async ({
  params
}) => {
  const product = await getProductById(params)
  
  return (
    <Container>
      <ProductDetailClient data={product} />
    </Container>
  )
}
export default page;