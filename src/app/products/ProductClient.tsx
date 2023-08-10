'use client'
import ProductCard from '@/components/ProductCard';
import React from 'react';
import { Product } from '../types';

type ProductClientProps = {
  products: Product[]
};

const ProductClient:React.FC<ProductClientProps> = ({
  products
}) => {
  return (

    <div
    className="
      p-16
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8
    "
  >
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          data={product}
        />
      ))}
    </div>
  )
}
export default ProductClient;