/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

// import .css from public folder
import '../../public/css/styles.css';
import '../../public/css/fontawesome-all.css';
import '../../public/css/magnific-popup.css';
import '../../public/css/swiper.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VanSon - Machine',
  description: 'VanSon - Machine'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Script src='/js/jquery.min.js' defer />
      <Script src='/js/jquery.easing.min.js' defer />
      <Script src='/js/jquery.magnific-popup.js' defer />
      <Script src='/js/swiper.min.js' defer />
      <Script src='/js/scripts.js' defer />

      <body className={inter.className} data-spy='scroll' data-target='.fixed-top'>
        {/* <!-- Navigation --> */}
        <nav className='navbar fixed-top'>
          <div className='container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap'>
            {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
            {/* <!-- <Link className="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index">Pavo</Link> --> */}

            {/* <!-- Image Logo --> */}
            <Link
              className='inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline'
              href='/'>
              <img src='images/logo.svg' alt='alternative' className='h-8' />
            </Link>

            <button
              className='background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400'
              type='button'
              data-toggle='offcanvas'>
              <span className='navbar-toggler-icon inline-block w-8 h-8 align-middle'></span>
            </button>

            <div
              className='navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center'
              id='navbarsExampleDefault'>
              <ul className='pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row'>
                <li>
                  <Link className='nav-link page-scroll active' href='#home'>
                    Home <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li>
                  <Link className='nav-link page-scroll' href='#features'>
                    Features
                  </Link>
                </li>
                <li>
                  <Link className='nav-link page-scroll' href='#details'>
                    Details
                  </Link>
                </li>
                <li>
                  <Link className='nav-link page-scroll' href='#pricing'>
                    Pricing
                  </Link>
                </li>
                <li className='dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='dropdown01'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    Drop
                  </Link>
                  <div className='dropdown-menu' aria-labelledby='dropdown01'>
                    <Link className='dropdown-item' href='/article'>
                      Article Details
                    </Link>
                    <div className='dropdown-divider'></div>
                    <Link className='dropdown-item' href='/terms'>
                      Terms Conditions
                    </Link>
                    <div className='dropdown-divider'></div>
                    <Link className='dropdown-item' href='/privacy'>
                      Privacy Policy
                    </Link>
                  </div>
                </li>
                <li>
                  <Link className='nav-link page-scroll' href='#download'>
                    Download
                  </Link>
                </li>
              </ul>
              <span className='block lg:ml-3.5'>
                <Link className='no-underline' href='#your-link'>
                  <i className='fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5'></i>
                </Link>
                <Link className='no-underline' href='#your-link'>
                  <i className='fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200'></i>
                </Link>
              </span>
            </div>
            {/* <!-- end of navbar-collapse --> */}
          </div>
          {/* <!-- end of container --> */}
        </nav>
        {/* <!-- end of navbar --> */}
        {/* <!-- end of navigation --> */}

        {children}
        {/* <!-- Footer --> */}
        <div className='footer'>
          <div className='container px-4 sm:px-8'>
            <h4 className='mb-8 lg:max-w-3xl lg:mx-auto'>
              Pavo is a mobile application for marketing automation and you can reach the team at{' '}
              <Link className='text-indigo-600 hover:text-gray-500' href='mailto:email@domain.com'>
                email@domain.com
              </Link>
            </h4>
            <div className='social-container'>
              <span className='fa-stack'>
                <Link href='#your-link'>
                  <i className='fas fa-circle fa-stack-2x'></i>
                  <i className='fab fa-facebook-f fa-stack-1x'></i>
                </Link>
              </span>
              <span className='fa-stack'>
                <Link href='#your-link'>
                  <i className='fas fa-circle fa-stack-2x'></i>
                  <i className='fab fa-twitter fa-stack-1x'></i>
                </Link>
              </span>
              <span className='fa-stack'>
                <Link href='#your-link'>
                  <i className='fas fa-circle fa-stack-2x'></i>
                  <i className='fab fa-pinterest-p fa-stack-1x'></i>
                </Link>
              </span>
              <span className='fa-stack'>
                <Link href='#your-link'>
                  <i className='fas fa-circle fa-stack-2x'></i>
                  <i className='fab fa-instagram fa-stack-1x'></i>
                </Link>
              </span>
              <span className='fa-stack'>
                <Link href='#your-link'>
                  <i className='fas fa-circle fa-stack-2x'></i>
                  <i className='fab fa-youtube fa-stack-1x'></i>
                </Link>
              </span>
            </div>
            {/* <!-- end of social-container --> */}
          </div>
          {/* <!-- end of container --> */}
        </div>
        {/* <!-- end of footer --> */}
        {/* <!-- end of footer --> */}

        {/* <!-- Copyright --> */}
        <div className='copyright'>
          <div className='container px-4 sm:px-8 lg:grid lg:grid-cols-3'>
            <ul className='mb-4 list-unstyled p-small'>
              <li className='mb-2'>
                <Link href='/article'>Article Details</Link>
              </li>
              <li className='mb-2'>
                <Link href='/terms'>Terms & Conditions</Link>
              </li>
              <li className='mb-2'>
                <Link href='/privacy'>Privacy Policy</Link>
              </li>
            </ul>
            <p className='pb-2 p-small statement'>
              Copyright ©{' '}
              <Link href='#your-link' className='no-underline'>
                Your name
              </Link>
            </p>

            <p className='pb-2 p-small statement'>
              Distributed by :
              <Link href='https://themewagon.com/' className='no-underline'>
                Themewagon
              </Link>
            </p>
          </div>

          {/* <!-- end of container --> */}
        </div>
        {/* <!-- end of copyright --> */}
        {/* <!-- end of copyright --> */}
      </body>
    </html>
  );
}
