import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <div className='footer'>
        <div className='container px-4 sm:px-8'>
          <h4 className='mb-8 lg:max-w-3xl lg:mx-auto'>
            Pavo is a mobile application for marketing automation and you can reach the team at&nbsp;
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
            Copyright ©
            <Link href='#your-link' className='no-underline'>
              LoganZ
            </Link>
          </p>

          <p className='pb-2 p-small statement'>
            Distributed by:&nbsp;
            <Link href='https://github.com/Team-NghienCode' className='no-underline' replace>
              Team NghienCode
            </Link>
          </p>
        </div>

        {/* <!-- end of container --> */}
      </div>
      {/* <!-- end of copyright --> */}
      {/* <!-- end of copyright --> */}
    </>
  );
};

export default Footer;
