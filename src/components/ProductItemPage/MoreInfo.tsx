import Image from 'next/image';
import * as React from 'react';
import { AiFillFolderAdd } from 'react-icons/ai';
import ProductPortfolio from './ProductPortfolio';

export interface IMoreInfoProps {}

export default function MoreInfo(props: IMoreInfoProps) {
  return (
    <div>
      <Image
        width={300}
        height={300}
        src='https://dienmaytonghopmiennam.com/wp-content/uploads/2023/08/banner-119-02-300x280.jpg'
        alt='product-image'
      />
      <div className='mt-5 *:mb-4'>
        <div>
          <span className='text-text-1 base-bold'>CHÚNG TÔI CÓ</span>
        </div>
        <div className='flex-start'>
          <AiFillFolderAdd className='size-14' />
          <div className='flex flex-col ms-4'>
            <span className='text-text-1 h5-bold'>Giá Cả Hợp Lý</span>
            <span className='text-text-1 small-regular mt-2'>
              Giá chiết khấu tốt, chúng tôi là đại lý lớn khu vực phía Nam
            </span>
          </div>
        </div>
        <div className='flex-start'>
          <AiFillFolderAdd className='size-14' />
          <div className='flex flex-col ms-4'>
            <span className='text-text-1 h5-bold'>Công Nghệ Hiện Đại</span>
            <span className='text-text-1 small-regular mt-2'>
              Máy được nhập trực tiếp từ hãng, có chứng từ đầy đủ
            </span>
          </div>
        </div>
        <div className='flex-start'>
          <AiFillFolderAdd className='size-14' />
          <div className='flex flex-col ms-4'>
            <span className='text-text-1 h5-bold'>Giao Hàng Nhanh Chóng</span>
            <span className='text-text-1 small-regular mt-2'>
              Chúng tôi có đội ngũ giao hàng riêng, đảm bảo thời gian nhận
            </span>
          </div>
        </div>
        <div className='flex-start'>
          <AiFillFolderAdd className='size-14' />
          <div className='flex flex-col ms-4'>
            <span className='text-text-1 h5-bold'>Bảo Hành Dài Hạn</span>
            <span className='text-text-1 small-regular mt-2'>
              Cam kết máy phát sinh lỗi hỗ trợ bảo hành nhanh, tận nơi
            </span>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <ProductPortfolio />
      </div>
    </div>
  );
}
