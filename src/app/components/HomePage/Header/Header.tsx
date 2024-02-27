import Link from 'next/link';
import * as React from 'react';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div>
      <header
        id='header'
        className='header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32'>
        <div className='container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div className='mb-16 lg:mt-32 xl:mt-40 xl:mr-12'>
            <h1 className='h1-large mb-5'>
              Team management mobile application
            </h1>
            <p className='p-large mb-8'>
              Start getting things done together with your team based on
              Pavo&apos;s revolutionary team management features
            </p>
            <Link className='btn-solid-lg' href='#your-link'>
              <i className='fab fa-apple'></i>Download
            </Link>
            <Link className='btn-solid-lg secondary' href='#your-link'>
              <i className='fab fa-google-play'></i>Download
            </Link>
          </div>
          <div className='xl:text-right'>
            <img
              className='inline'
              src='/images/header-smartphone.png'
              alt='alternative'
            />
          </div>
        </div>
        {/* <!-- end of container --> */}
      </header>
    </div>
  );
}
