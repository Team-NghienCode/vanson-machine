import Image from 'next/image';
import * as React from 'react';

export interface IProductItemProps {}

export default function ProductItem(props: IProductItemProps) {
  return (
    <div>
      <Image
        width={700}
        height={700}
        src='https://dienmaytonghopmiennam.com/wp-content/uploads/2023/08/maymay1kimdientuddl7000a7-1028.jpg'
        alt='product-image'
      />
      <div className='h5-bold text-text-1 mb-2'>Máy Dập Nút Đồng WEIJIE</div>
      <div>
        <del className='text-red-300 me-3'>4.000.000 ₫</del>
        <span className='text-red-500 base-bold'>3.800.000 ₫</span>
      </div>
    </div>
  );
}
