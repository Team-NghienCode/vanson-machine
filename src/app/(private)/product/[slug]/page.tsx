import MoreInfo from '@/components/ProductItemPage/MoreInfo';
import ProductInfo from '@/components/ProductItemPage/ProductInfo';
import * as React from 'react';

export interface IProductItemProps {}

export default function ProductItem(props: IProductItemProps) {
  return (
    <div className='product-item flex w-full'>
      <div className='left' style={{ width: '78%' }}>
        <ProductInfo />
      </div>
      <div className='right' style={{ width: '22%' }}>
        <MoreInfo />
      </div>
    </div>
  );
}
