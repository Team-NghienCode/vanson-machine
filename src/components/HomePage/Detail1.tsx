import * as React from 'react';

export interface IDetail1Props {}

export default function Detail1(props: IDetail1Props) {
  return (
    <div>
      <div id='details' className='pt-12 pb-16 lg:pt-16'>
        <div className='container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12'>
          <div className='lg:col-span-5'>
            <div className='mb-16 lg:mb-0 xl:mt-16'>
              <h2 className='mb-6'>Results driven ground breaking technology</h2>
              <p className='mb-4'>
                Based on our team&apos;s extensive experience in developing line of business applications and
                constructive customer feedback we reached a new level of revenue.
              </p>
              <p className='mb-4'>
                We enjoy helping small and medium sized tech businesses take a shot at established Fortune 500
                companies
              </p>
            </div>
          </div>
          {/* <!-- end of col --> */}
          <div className='lg:col-span-7'>
            <div className='xl:ml-14'>
              <img className='inline' src='/images/details-1.jpg' alt='alternative' />
            </div>
          </div>
          {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of container --> */}
      </div>
    </div>
  );
}
