import * as React from 'react';
import { AiFillFolderAdd } from 'react-icons/ai';
import ProductItem from '../ProductItem';

export interface ISimilarProductProps {}

export default function SimilarProduct(props: ISimilarProductProps) {
  return (
    <div className='similar-product'>
      <div className='flex-start border-b-2 border-border-1'>
        <span>
          <AiFillFolderAdd className='size-7' />
        </span>
        <span className='h4-bold text-text-1 ms-2'>SẢN PHẨM TƯƠNG TỰ</span>
      </div>
      <div className='flex flex-wrap *:w-1/4'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
