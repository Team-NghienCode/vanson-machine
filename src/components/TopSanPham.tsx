import React from 'react';

const TopSanPham = () => {
  return (
    <div id='topsanpham' className='cards-3'>
      <div className='px-4 sm:px-14 xl:px-28'>
        <div className='flex max-w-full m-0 px-4 pb-8'>
          <div className='ml-auto mr-0 flex-1 relative w-full'>
            <div className='mb-2 block border-red-600 border-t border-solid bg-white p-1 relative mt-5'>
              <div className='flex items-center justify-center absolute left-1/2 w-max top-0 -translate-x-1/2 -translate-y-1/2'>
                <label className='linehome border border-solid border-red-600 text-base text-white bg-red-700 uppercase px-9 py-2'>
                  MÁY MAY CÔNG NGHIỆP
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
            <div className='card'>
              <div className='badge-container absolute left-0 top-0 z-[21]'>
                <div className='callout badge badge-square'>
                  <div className='badge-inner secondary on-sale'>
                    <span className='onsale'>Giảm giá</span>
                  </div>
                </div>
              </div>
              <div className='card-image'>
                <img src='/images/top1.jpg' alt='alternative' />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Máy May 1 Kim Điện Tử Juki DDL 7000A-7</h5>
                <p className='mb-4 text-red-600 font-bold'>
                  <del className='text-red-800'>12.000.000 ₫</del> &nbsp; 11.500.000 ₫
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='badge-container absolute left-0 top-0 z-[21]'>
                <div className='callout badge badge-square'>
                  <div className='badge-inner secondary on-sale'>
                    <span className='onsale'>Giảm giá</span>
                  </div>
                </div>
              </div>
              <div className='card-image'>
                <img src='/images/top2.png' alt='alternative' />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Máy Cắt Vải Đứng Eastman 629X USA</h5>
                <p className='mb-4 text-red-600 font-bold'>
                  <del className='text-red-800'>16.500.000 ₫</del> &nbsp; 16.300.000 ₫
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='badge-container absolute left-0 top-0 z-[21]'>
                <div className='callout badge badge-square'>
                  <div className='badge-inner secondary on-sale'>
                    <span className='onsale'>Giảm giá</span>
                  </div>
                </div>
              </div>
              <div className='card-image'>
                <img src='/images/top3.png' alt='alternative' />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Máy Cắt Vải Đứng Eastman 629X USA</h5>
                <p className='mb-4 text-red-600 font-bold'>
                  <del className='text-red-800'>16.500.000 ₫</del> &nbsp; 16.300.000 ₫
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='badge-container absolute left-0 top-0 z-[21]'>
                <div className='callout badge badge-square'>
                  <div className='badge-inner secondary on-sale'>
                    <span className='onsale'>Giảm giá</span>
                  </div>
                </div>
              </div>
              <div className='card-image'>
                <img src='/images/top1.jpg' alt='alternative' />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Máy May 1 Kim Điện Tử Juki DDL 7000A-7</h5>
                <p className='mb-4 text-red-600 font-bold'>
                  <del className='text-red-800'>12.000.000 ₫</del> &nbsp; 11.500.000 ₫
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSanPham;
