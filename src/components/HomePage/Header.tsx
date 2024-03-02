import * as React from 'react';

export default function Header() {
  return (
    <header id='header' className='header pt-14 text-center md:pt-36 xl:pt-44'>
      {/* <div className='container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'> */}
      {/* <div className='mb-16 lg:mt-32 xl:mt-40 xl:mr-12'>
            <h1 className='h1-large mb-5'>Team management mobile application</h1>
            <p className='p-large mb-8'>
              Start getting things done together with your team based on Pavo&apos;s revolutionary team
              management features
            </p>
            <Link className='btn-solid-lg' href='#your-link'>
              <i className='fab fa-apple'></i>Download
            </Link>
            <Link className='btn-solid-lg secondary' href='#your-link'>
              <i className='fab fa-google-play'></i>Download
            </Link>
          </div> */}
      {/* <div className='xl:text-right'> */}
      <img className='w-full' src='/images/banner-chinh.jpg' alt='alternative' />
      {/* </div> */}
      {/* </div> */}
      {/* <!-- end of container --> */}
    </header>
  );
}
