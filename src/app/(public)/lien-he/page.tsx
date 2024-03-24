import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LienHePage() {
  return (
    <section className='py-8 px-2 xl:px-32 flex items-center relative flex-nowrap flex-row min-h-[auto]'>
      <div className='relative w-full'>
        <div className='flex flex-wrap w-full flex-row'>
          <div className='flex px-4 pb-8 relative w-full max-w-full basis-full'>
            <div className='bg-[50%_50%] bg-no-repeat bg-cover flex-[1_0_auto] relative w-full'>
              <p>
                <iframe
                  loading='lazy'
                  style={{ border: 0 }}
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.83207141083!2d106.6309609!3d10.795374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b48419d6d1d%3A0x1468e475d31616ab!2zxJBp4buHbiBtw6F5IHThu5VuZyBo4bujcCBtaeG7gW4gTmFtIEhvw6BuZyBMw6Jt!5e0!3m2!1svi!2s!4v1699865537912!5m2!1svi!2s'
                  width='100%'
                  height='450'
                  allowFullScreen
                  data-rocket-lazyload='fitvidscompatible'
                  data-lazy-src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.83207141083!2d106.6309609!3d10.795374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b48419d6d1d%3A0x1468e475d31616ab!2zxJBp4buHbiBtw6F5IHThu5VuZyBo4bujcCBtaeG7gW4gTmFtIEhvw6BuZyBMw6Jt!5e0!3m2!1svi!2s!4v1699865537912!5m2!1svi!2s'
                  data-ll-status='loaded'
                  className='entered lazyloaded'></iframe>
                <noscript>
                  <iframe
                    style={{ border: 0 }}
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.83207141083!2d106.6309609!3d10.795374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b48419d6d1d%3A0x1468e475d31616ab!2zxJBp4buHbiBtw6F5IHThu5VuZyBo4bujcCBtaeG7gW4gTmFtIEhvw6BuZyBMw6Jt!5e0!3m2!1svi!2s!4v1699865537912!5m2!1svi!2s'
                    width='100%'
                    height='450'
                    allowFullScreen></iframe>
                </noscript>
                <br />
              </p>
            </div>
          </div>

          <div className='flex px-4 pb-8 relative w-full max-w-full sm:max-w-[50%] basis-full'>
            <div className='bg-[50%_50%] bg-no-repeat bg-cover flex-[1_0_auto] relative w-full'>
              <div className='relative' lang='vi' dir='ltr'>
                <div className='absolute overflow-hidden h-px w-px'>
                  <p role='status' aria-live='polite' aria-atomic='true'></p> <ul></ul>
                </div>
                <form method='post' className='mb-5' aria-label='Form liên hệ' noValidate data-status='init'>
                  <div className='relative space-y-3'>
                    <span className='relative block' data-name='text-474'>
                      <input
                        size={40}
                        className='rounded-full py-1 px-2 w-full border border-slate-400 focus:border-slate-600 focus:outline-slate-600'
                        aria-required='true'
                        aria-invalid='false'
                        placeholder='Tên của bạn'
                        value=''
                        type='text'
                        name='text-474'
                      />
                    </span>
                    <span className='relative block' data-name='tel-579'>
                      <input
                        size={40}
                        className='rounded-full py-1 px-2 w-full border border-slate-400 focus:border-slate-600 focus:outline-slate-600'
                        aria-required='true'
                        aria-invalid='false'
                        placeholder='Số điện thoại'
                        value=''
                        type='tel'
                        name='tel-579'
                      />
                    </span>
                    <span className='relative block' data-name='email-95'>
                      <input
                        size={40}
                        className='rounded-full py-1 px-2 w-full border border-slate-400 focus:border-slate-600 focus:outline-slate-600'
                        aria-required='true'
                        aria-invalid='false'
                        placeholder='Email'
                        value=''
                        type='email'
                        name='email-95'
                      />
                    </span>
                    <span className='relative block' data-name='textarea-431'>
                      <textarea
                        cols={40}
                        rows={10}
                        className='rounded-lg py-1 px-2 w-full border border-slate-400 focus:border-slate-600 focus:outline-slate-600'
                        aria-required='true'
                        aria-invalid='false'
                        placeholder='Nội dung'
                        name='textarea-431'></textarea>
                    </span>
                    <button
                      className='btn-solid-reg !bg-red-600 !border-red-600 hover:!bg-transparent hover:!text-red-600'
                      type='submit'>
                      Gửi đi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='flex px-4 pb-8 relative w-full max-w-full sm:max-w-[50%] basis-full'>
            <div className='bg-[50%_50%] bg-no-repeat bg-cover flex-[1_0_auto] relative w-full'>
              <div className='relative space-y-3'>
                <p>
                  <strong>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU ĐIỆN MÁY TỔNG HỢP MIỀN NAM</strong>
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' />
                    Mã số thuế: 0317087514
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' />
                    Người đại diện: &nbsp;
                    <a href=''>Phạm Văn Lâm</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' />
                    Trụ sở chính: 1/76 Đường Nguyễn Thế Truyện, Phường Tân Sơn Nhì, Quận Tân Phú, Thành phố Hồ
                    Chí Minh, Việt Nam
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' />
                    Website:&nbsp;
                    <a href=''>https://vanson.com/</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' />
                    SĐT:&nbsp;0914 639 068 (Mr Lâm)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' />
                    Email:&nbsp;<a href='mailto:vanson@gmail.com'>vanson@gmail.com</a>
                  </li>
                </ul>
                <p>
                  Hãy gọi ngay cho chúng tôi khi quý khách có nhu cầu và đuợc tư vấn miễn phí về các loại máy.
                </p>
                <p>Chúng tôi rất hân hạnh được phục vụ Quý Khách&nbsp;!!!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
