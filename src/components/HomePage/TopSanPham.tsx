'use client';

import { useRouter } from 'next/navigation';

import data from '../../../public/data/data';

interface ITopSanPham {
  label: string;
}

const TopSanPham = ({ label }: ITopSanPham) => {
  const router = useRouter();

  return (
    <div id='topsanpham' className='cards-3'>
      <div className='px-4 sm:px-14 xl:px-28'>
        <div className='flex max-w-full m-0 px-4 pb-8'>
          <div className='ml-auto mr-0 flex-1 relative w-full'>
            <div className='mb-2 block border-red-600 border-t border-solid bg-white p-1 relative mt-5'>
              <div className='flex items-center justify-center absolute left-1/2 w-max top-0 -translate-x-1/2 -translate-y-1/2'>
                <label className='linehome border border-solid border-red-600 text-base text-white bg-red-700 uppercase px-9 py-2'>
                  {label.toUpperCase()}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col lg:flex-row gap-2'>
          <img
            src='/images/dang-muc-may-may-cong-nghiep.png'
            alt='alternative'
            className='mb-4 h-full lg:max-w-[33%] lg:mr-4 '
          />
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3'>
            {data.map((item) => {
              return (
                <div
                  key={item.title}
                  className='card cursor-pointer group'
                  onClick={() => router.push('/product/' + item.title)}>
                  {item.sale && (
                    <div className='badge-container absolute left-0 top-0 z-[21]'>
                      <div className='callout badge badge-square'>
                        <div className='badge-inner secondary on-sale'>
                          <span className='onsale'>Giảm giá</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className='card-image'>
                    <img src={item.image} alt='alternative' />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title group-hover:underline'>{item.title}</h5>
                    <p className='mb-4 text-red-600 font-bold'>
                      {item.sale ? (
                        <>
                          <del className='text-red-800'>{item.price.toLocaleString('de-DE')} ₫</del> &nbsp;{' '}
                          {item.priceSale.toLocaleString('de-DE')} ₫
                        </>
                      ) : (
                        item.price.toLocaleString('de-DE') + ' ₫'
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className='-mt-8 mb-2 bg-red-600 text-white border border-solid p-1
          border-transparent cursor-pointer inline-block 
          font-bold min-h-5 relative text-center uppercase align-middle'
          style={{ borderRadius: '10px' }}>
          <span className='inline-block'>Xem thêm</span>
          <i
            className='fa fa-arrow-circle-right relative inline-block transform-none p-0 ml-1 -top-[1.5px] mr-1 align-middle'
            aria-hidden='true'
          />
        </div>
      </div>
    </div>
  );
};

export default TopSanPham;
