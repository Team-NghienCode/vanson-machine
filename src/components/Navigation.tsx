'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const menuProducts = [
    { id: 1, name: 'Máy May Công Nghiệp', link: '/san-pham/may-may-cong-nghiep' },
    { id: 2, name: 'Máy May Bao', link: '/san-pham/may-may-bao' },
    { id: 3, name: 'Máy Cắt Vải', link: '/san-pham/may-cat-vai' },
    { id: 4, name: 'Máy Thêu Vi Tính', link: '/san-pham/may-theu-vi-tinh' }

  ];

  return (
    <>
      {/* <!-- Navigation --> */}
      <nav className='navbar fixed-top'>
        <div className='container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap'>
          {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}

          <Link className='text-gray-800 font-semibold text-3xl leading-4 no-underline' href='/'>
            VanSon
          </Link>

          {/* <!-- Image Logo --> */}
          {/* <Link
            className='inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline'
            href='/'>
            <img src='images/logo.svg' alt='alternative' className='h-8' />
          </Link> */}

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
                <Link className={`nav-link ${pathname === '/' && 'active'}`} href='/'>
                  Trang chủ <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li>
                <Link className={`nav-link ${pathname === '/gioi-thieu' && 'active'}`} href='/gioi-thieu'>
                  Giới thiệu
                </Link>
              </li>
              {/* <li>
                <Link className='nav-link page-scroll' href='#details'>
                  Details
                </Link>
              </li>
              <li>
                <Link className='nav-link page-scroll' href='#pricing'>
                  Pricing
                </Link>
              </li> */}
              <li className='dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdown01'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Danh mục sản phẩm
                </Link>
                <div className='dropdown-menu' aria-labelledby='dropdown01'>
                  {menuProducts.map((item, index) => (
                    <>
                      <Link key={item.id} className='dropdown-item' href={item.link}>
                        {item.name}
                      </Link>
                      {index < menuProducts.length - 1 && <div className='dropdown-divider'></div>}
                    </>
                  ))}
                </div>
              </li>
              <li className='dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdown02'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Dịch vụ
                </Link>
                <div className='dropdown-menu' aria-labelledby='dropdown02'>
                  <Link className='dropdown-item' href='/article'>
                    Sửa chữa
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' href='/terms'>
                    Bảo hành
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' href='/privacy'>
                    Bảo trì
                  </Link>
                </div>
              </li>
              {/* <li>
                <Link className='nav-link page-scroll' href='#download'>
                  Download
                </Link>
              </li> */}
            </ul>
            <span className='block space-x-2 lg:ml-3.5'>
              <Link className='no-underline' href='https://www.facebook.com/'>
                <i
                  data-toggle='tooltip'
                  className='fab fa-facebook text-indigo-600 text-xl'
                  title='Theo dõi trên Facebook'></i>
              </Link>
              <Link className='no-underline' href='https://www.youtube.com/'>
                <i
                  data-toggle='tooltip'
                  className='fab fa-youtube text-red-500 text-xl'
                  title='Theo dõi trên Youtube'></i>
              </Link>
              <Link className='no-underline' href='tel:123456789' replace>
                <i
                  data-toggle='tooltip'
                  className='fa fa-phone text-pink-500 text-xl'
                  title='Liên hệ Hotline'></i>
              </Link>
            </span>
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
