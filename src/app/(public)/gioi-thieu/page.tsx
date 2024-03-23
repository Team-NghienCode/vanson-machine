/* eslint-disable react/no-unescaped-entities */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ArticlePage() {
  return (
    <>
      {/* <!-- Header --> */}
      <header className='ex-header bg-gray'>
        <div className='container px-4 sm:px-8 xl:px-4'>
          <h1 className='xl:ml-24'>Giới thiệu</h1>
        </div>
        {/* <!-- end of container --> */}
      </header>
      {/* <!-- end of ex-header --> */}
      {/* <!-- end of header --> */}

      {/* <!-- Basic --> */}
      <div className='ex-basic-1 py-12'>
        <div className='container px-4 sm:px-8'>
          <img className='inline mt-12 mb-4' src='images/article-details-large.jpg' alt='alternative' />
        </div>
        {/* <!-- end of container --> */}
      </div>
      {/* <!-- end of ex-basic-1 --> */}
      {/* <!-- end of basic --> */}

      {/* <!-- Basic --> */}
      <div className='ex-basic-1 pt-4'>
        <div className='container px-4 sm:px-8 xl:px-32'>
          <p className='mb-4'>
            Công ty TNHH thương mại dịch vụ xuất nhập khẩu điện máy tổng hợp miền Nam chuyên nhập khẩu và phân
            phối máy ngành may mặc và thiết bị trên toàn quốc. Với hơn 10 năm hoạt động trên lĩnh vực nhập
            khẩu và phân phối máy ngành may mặc. Điện máy tổng hợp miền Nam là một trong số ít công ty được
            đánh giá cao về cả chất lượng và dịch vụ.
          </p>
          <p className='mb-12'>
            Với nhiều năm kinh nghiệm hoạt động trên thị trường thì công ty đã mang đến cho khách hàng nhiều
            sản phẩm chất lượng và giá cả hợp lý. Đồng thời, chúng tôi luôn quan tâm và tiếp nhận những đánh
            giá và góp ý của khách hàng để cân nhắc và sửa đổi sao cho tốt nhất. Nhờ vậy mà những Quý khách
            hàng đã và đang trải nghiệm dịch vụ cảm thấy rất hài lòng.
          </p>

          <h2 className='mb-4'>
            Khi mua hàng tại Điện máy tổng hợp miền Nam, chúng tôi luôn cam kết với Quý khách hàng:
          </h2>
          <ul className='list-unstyled mb-6 space-y-2 *:flex *:items-center'>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' /> Sản phẩm chính hãng, mới 100%
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' /> Nhân viên giàu kinh nghiệm và tận
              tâm
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' /> Giá cả sản phẩm phải chăng
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' /> Chính sách bảo hành sản phẩm
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' /> Giao hàng tận nơi, nhanh chóng và
              đảm bảo
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs mr-2' /> Hỗ trợ lắp đặt miễn phí
            </li>
          </ul>
          <p className='mb-6'>
            Với phương châm phục vụ tận tâm và đem đến sự hài lòng, Điện máy tổng hợp miền Nam luôn mong muốn
            được chia sẻ và hợp tác cùng Quý khách để cùng nhau vươn lên và phát triển trong lĩnh vực may mặc.
          </p>
        </div>
        {/* <!-- end of container --> */}
      </div>
      {/* <!-- end of ex-basic-1 --> */}
      {/* <!-- end of basic --> */}

      {/* <!-- Basic --> */}
      <div className='ex-basic-1 pt-6 pb-12'>
        <div className='container px-4 sm:px-8 xl:px-32'>
          <h3 className='mb-2'>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU ĐIỆN MÁY TỔNG HỢP MIỀN NAM</h3>

          <ul className='list-unstyled mb-12 space-y-2 *:flex *:items-center'>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs' />
              <div className='flex-1 ml-2'>
                <strong>Mã số thuế:</strong> 0317087514
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs' />
              <div className='flex-1 ml-2'>
                <strong>Người đại diện:</strong> Phạm Văn Lâm
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs' />
              <div className='flex-1 ml-2'>
                <strong>Trụ sở chính:</strong> 1/76 Đường Nguyễn Thế Truyện, Phường Tân Sơn Nhì, Quận Tân Phú,
                Thành phố Hồ Chí Minh, Việt Nam
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs' />
              <div className='flex-1 ml-2'>
                <strong>Website:</strong> https://dienmaytonghopmiennam.com/
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs' />
              <div className='flex-1 ml-2'>
                <strong>SĐT:</strong> 0914 639 068 (Mr Lâm)
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className='text-xs' />
              <div className='flex-1 ml-2'>
                <strong>Email:</strong> maytonghop2010@gmail.com
              </div>
            </li>
          </ul>

          {/* <Link className='btn-solid-reg mb-12' href='/#download'>
            Download
          </Link> */}
        </div>
        {/* <!-- end of container --> */}
      </div>
      {/* <!-- end of ex-basic-1 --> */}
      {/* <!-- end of basic --> */}
    </>
  );
}
