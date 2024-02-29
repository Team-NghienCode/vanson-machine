import * as React from 'react';

export default function TopBanChay() {
  return (
    <div id='features' className='cards-1'>
      <div className='px-4 sm:px-14 xl:px-28'>
        <img src='/images/title-san-top-sp.webp' alt='alternative' className='w-full mb-4' />
        {/* <!-- Card --> */}
        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
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
          {/* <!-- end of card --> */}

          {/* <!-- Card --> */}
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
          {/* <!-- end of card --> */}

          {/* <!-- Card --> */}
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
              <h5 className='card-title'>Máy Cắt Vải Cầm Tay Lejiang YJ-70A</h5>
              <p className='mb-4 text-red-600 font-bold'>
                <del className='text-red-800'>1.350.000 ₫</del> &nbsp; 1.200.000 ₫
              </p>
            </div>
          </div>
          {/* <!-- end of card --> */}

          {/* <!-- Card --> */}
          <div className='card'>
            <div className='badge-container absolute left-0 top-0 z-[21]'>
              <div className='callout badge badge-square'>
                <div className='badge-inner secondary on-sale'>
                  <span className='onsale'>Giảm giá</span>
                </div>
              </div>
            </div>
            <div className='card-image'>
              <img src='/images/top4.jpg' alt='alternative' />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Máy May Bao Cầm Tay Kachi KC9-200</h5>
              <p className='mb-4 text-red-600 font-bold'>
                <del className='text-red-800'>2.250.000 ₫</del> &nbsp; 1.950.000 ₫
              </p>
            </div>
          </div>
          {/* <!-- end of card --> */}

          {/* <!-- Card --> */}
          <div className='card'>
            <div className='badge-container absolute left-0 top-0 z-[21]'>
              <div className='callout badge badge-square'>
                <div className='badge-inner secondary on-sale'>
                  <span className='onsale'>Giảm giá</span>
                </div>
              </div>
            </div>
            <div className='card-image'>
              <img src='/images/top5.jpg' alt='alternative' />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Máy Vắt Sổ 2 Kim 5 Chỉ Siruba 757f</h5>
              <p className='mb-4 text-red-600 font-bold'>
                <del className='text-red-800'>7.500.000 ₫</del> &nbsp; 7.000.000 ₫
              </p>
            </div>
          </div>
          {/* <!-- end of card --> */}

          {/* <!-- Card --> */}
          <div className='card'>
            <div className='card-image'>
              <img src='/images/top6.jpg' alt='alternative' />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Bàn Ủi Hơi Silverstar ES-94A</h5>
              <p className='mb-4 text-red-600 font-bold'>1.200.000 ₫</p>
            </div>
          </div>
          {/* <!-- end of card --> */}
        </div>
      </div>
      {/* <!-- end of container --> */}
    </div>
  );
}
