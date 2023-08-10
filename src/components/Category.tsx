import { useRouter } from 'next/navigation';
import React from 'react';

type CategoryProps = {
  title: string;
  subTitle: string;
};

const Category:React.FC<CategoryProps> = ({
  title,
  subTitle
}) => {
  const router = useRouter()
  return (
    <div
      className='
        col-span-1
        flex
        border-gray-300
        border-[1px]
        flex-col
        p-10
        w-full
        rounded-md
        capitalize
        shadow-md
        hover:scale-105
        cursor-pointer
      '
      onClick={() => router.push('/products')}
    >
      <span className='font-bold'>{title}</span>
      <span>{subTitle}</span>
    </div>
  )
}
export default Category;