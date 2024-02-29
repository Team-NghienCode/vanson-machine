import Image from 'next/image';
import * as React from 'react';
import TabInfo from './TabInfo';
import SimilarProduct from './SimilarProduct';

export interface IProductInfoProps {}

export default function ProductInfo(props: IProductInfoProps) {
  return (
    <div>
      <div className='product-info flex'>
        <div className='image' style={{ width: '40%' }}>
          <Image
            width={1000}
            height={1000}
            src='https://dienmaytonghopmiennam.com/wp-content/uploads/2023/08/maymay1kimdientuddl7000a7-1028.jpg'
            alt='product-image'
          />
        </div>
        <div className='info' style={{ width: '60%' }}>
          <div>
            <span className='base-regular'>
              TRANG CHỦ / MÁY MAY CÔNG NGHIỆP / MÁY MAY 1 KIM
            </span>
          </div>
          <div>
            <span className='h3-bold'>
              Máy May 1 Kim Điện Tử Juki DDL 7000A-7
            </span>
          </div>
          <div className='mt-2'>
            <del className='h4-regular me-3 text-red-500'>
              12.000.000 <sup>₫</sup>
            </del>
            <span className='h3-bold'>
              11.500.000 <sup>₫</sup>
            </span>
          </div>
          <div className='mt-3'>
            <span>
              <button className='bg-slate-200 px-4 py-2 rounded-lg base-bold text-text-1 mr-3'>
                - 1 +
              </button>
            </span>
            <button className='bg-red-500 px-4 py-2 rounded-2xl base-bold text-white'>
              Đặt Hàng
            </button>
          </div>
          <p className='mt-7 pe-8'>
            Máy May 1 Kim Điện Tử Juki DDL 7000A-7 là dòng máy may công nghiệp
            hiện đại được tích hợp nhiều công nghệ tiên tiến, mang đến khả năng
            vận hành mạnh mẽ, chính xác và hiệu quả cao.
          </p>
          <div className='my-4'>
            <span className='base-bold'>Thông số kỹ thuật:</span>
          </div>
          <ul className='list-disc'>
            <li>Model name: DDL-7000A-7</li>
            <li>Tốc độ tối đa: 5000 muỗi/s</li>
            <li>Chiều dài tối đa mũi kim : 5 mm</li>
            <li>Nguồn : 210VA</li>
            <li>Trọng lượng tổng: 34 kg</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className='mt-4'>
        <TabInfo />
      </div>
      <div>
        <SimilarProduct />
      </div>
    </div>
  );
}
