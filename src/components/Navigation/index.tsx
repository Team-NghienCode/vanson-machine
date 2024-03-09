'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { cn } from '@/lib/utils';
import { danhMuc } from '@/data/danhmucsanpham';

const Navigation = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    const backToTop = topRef.current;

    const handleScrollTop = () => {
      if (backToTop) {
        const hideBackToTop = setTimeout(() => {
          backToTop.style.display = 'none';
        }, 500);

        if (document.documentElement.scrollTop > 700) {
          // fade in 500ms
          backToTop.style.display = 'block';
          backToTop.style.transition = 'opacity 500ms';
          backToTop.style.opacity = '1';
          clearTimeout(hideBackToTop);
        } else {
          // fade out 500ms
          backToTop.style.transition = 'opacity 500ms';
          backToTop.style.opacity = '0';
          hideBackToTop;
        }
      }
    };

    const handleScrollNav = () => {
      if (nav) {
        if (document.documentElement.scrollTop > 60) {
          nav.classList.add('top-nav-collapse');
        } else {
          nav.classList.remove('top-nav-collapse');
        }
      }
    };

    window.addEventListener('scroll', handleScrollTop);
    window.addEventListener('scroll', handleScrollNav);

    return () => {
      window.removeEventListener('scroll', handleScrollTop);
      window.removeEventListener('scroll', handleScrollNav);
    };
  }, []);

  return (
    <>
      {/* <!-- Back To Top Button --> */}
      <div
        ref={topRef}
        className='back-to-top'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
        Back to Top
      </div>
      {/* <!-- Navigation --> */}
      <nav ref={navRef} className='navbar fixed-top'>
        <div className='container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap'>
          {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}

          <Link className='text-gray-800 font-semibold text-3xl leading-4 no-underline' href='/'>
            VanSon
          </Link>

          <button
            className='bg-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400'
            type='button'
            onClick={() => setIsOpen(!isOpen)}>
            <span className='navbar-toggler-icon inline-block w-8 h-8 align-middle'></span>
          </button>

          <div
            className={cn(
              'navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center',
              isOpen && 'open'
            )}>
            <ul className='pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row'>
              <li>
                <Link
                  className={`nav-link ${pathname === '/' && 'active'}`}
                  href='/'
                  onClick={() => setIsOpen(!isOpen)}>
                  Trang chủ <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${pathname === '/gioi-thieu' && 'active'}`}
                  href='/gioi-thieu'
                  onClick={() => setIsOpen(!isOpen)}>
                  Giới thiệu
                </Link>
              </li>
              <li className='dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  onClick={(e) => e.preventDefault()}
                  id='dropdown01'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Danh mục sản phẩm
                </Link>
                <div className='dropdown-menu' aria-labelledby='dropdown01'>
                  {danhMuc.map((item, index) => (
                    <>
                      <Link
                        key={item.id}
                        className='dropdown-item'
                        onClick={() => setIsOpen(!isOpen)}
                        href={`/san-pham/${item.slug}`}>
                        {item.title}
                      </Link>
                      {index < danhMuc.length - 1 && <div className='dropdown-divider' key={index}></div>}
                    </>
                  ))}
                </div>
              </li>
              <li className='dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  onClick={(e) => e.preventDefault()}
                  id='dropdown02'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Dịch vụ
                </Link>
                <div className='dropdown-menu' aria-labelledby='dropdown02'>
                  <Link className='dropdown-item' onClick={() => setIsOpen(!isOpen)} href='/article'>
                    Sửa chữa
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' onClick={() => setIsOpen(!isOpen)} href='/terms'>
                    Bảo hành
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' onClick={() => setIsOpen(!isOpen)} href='/privacy'>
                    Bảo trì
                  </Link>
                </div>
              </li>
            </ul>
            <div className='flex gap-2 lg:ml-3.5'>
              <Tooltip title='Theo dõi trên Facebook' arrow>
                <Link className='no-underline' href='https://www.facebook.com/'>
                  <FontAwesomeIcon icon={faFacebook} size='2xs' className='text-indigo-600 text-xl' />
                </Link>
              </Tooltip>
              <Tooltip title='Theo dõi trên Youtube' arrow>
                <Link className='no-underline' href='https://www.youtube.com/'>
                  <FontAwesomeIcon icon={faYoutube} size='2xs' className='text-red-500 text-xl' />
                </Link>
              </Tooltip>
              <Tooltip title='Liên hệ Hotline' arrow>
                <Link className='no-underline' href='tel:123456789' replace>
                  <FontAwesomeIcon icon={faPhone} size='2xs' className='text-pink-500 text-xl' />
                </Link>
              </Tooltip>
            </div>
          </div>
          {/* <!-- end of navbar-collapse --> */}
        </div>
        {/* <!-- end of container --> */}
      </nav>
      {/* <!-- end of navbar --> */}
      {/* <!-- end of navigation --> */}
    </>
  );
};

export default Navigation;
