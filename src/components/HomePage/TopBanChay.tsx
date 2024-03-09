import Link from 'next/link';

import data from '@/data/topbanchay';

export default function TopBanChay() {
  return (
    <div id='features' className='cards-1'>
      <div className='px-4 sm:px-14 xl:px-28'>
        <img src='/images/title-san-top-sp.webp' alt='alternative' className='w-full mb-4' />
        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
          {data.map((item) => {
            return (
              <Link
                href={'/san-pham/' + item.title.split(' ').join('-')}
                key={item.title}
                className='card cursor-pointer group'>
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
                        <del className='text-red-800'>{item.price.toLocaleString('de-DE')} ₫</del> &nbsp;
                        {item.priceSale.toLocaleString('de-DE')} ₫
                      </>
                    ) : (
                      item.price.toLocaleString('de-DE') + ' ₫'
                    )}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
