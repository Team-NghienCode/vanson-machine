import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface IProductInfoDetailProps {}

export default function ProductInfoDetail(props: IProductInfoDetailProps) {
  return (
    <div className='product-info-detail'>
      <div className='video'>
        <iframe
          className='w-full'
          height='500'
          src='https://www.youtube.com/embed/NPGpy-8o3BU?si=dIW7LPDSk4zodJ3b'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
      </div>
      <div className='my-8 text-text-1 border border-border-1 w-fit p-3 rounded-md bg-slate-100'>
        <div>
          <span>Nội dung</span>
        </div>
        <div className='*:block hover:*:underline'>
          <Link href='#'>
            Giới thiệu về máy may 1 kim điện tử Juki DDL 7000A-7
          </Link>
          <Link href='#'>
            Thông số kỹ thuật của máy may 1 kim điện tử Juki DDL 7000A-7
          </Link>
          <Link href='#'>
            Những tính năng nổi bật của máy may 1 kim điện tử Juki DDL 7000A-7
          </Link>
          <Link href='#'>
            Những lưu ý khi sử dụng máy may 1 kim điện tử Juki DDL 7000A-7
          </Link>
        </div>
      </div>
      <div className='mt-3'>
        <div className='h3-bold text-text-1'>
          <span>Giới thiệu về máy may 1 kim điện tử Juki DDL 7000A-7</span>
        </div>
        <div className='mt-2'>
          <p>
            <strong>Máy may 1 kim điện tử Juki DDL 7000A-7</strong> là một máy
            may công nghiệp chất lượng cao được sản xuất bởi Juki, một trong
            những thương hiệu nổi tiếng Nhật Bản và là hàng đầu trong lĩnh vực
            máy may công nghiệp. Đây là một máy may được thiết kế để đáp ứng nhu
            cầu may mặc chuyên nghiệp, từ các xưởng may đến các nhà máy sản xuất
            hàng may mặc lớn.
          </p>
          <p className='my-3'>
            <strong>
              Một số đặc trưng cơ bản của máy may 1 kim điện tử Juki DDL
              7000A-7:
            </strong>
          </p>
          <ul className='list-disc ms-5'>
            <li>
              Hệ thống truyền động trực tiếp: Máy được trang bị hệ thống truyền
              động trực tiếp, giúp tăng tính chính xác và hiệu suất của máy.
            </li>
            <li>
              Kích thước nhỏ gọn: Cả hộp điều khiển và bảng điều khiển được tích
              hợp vào đầu máy, giúp tiết kiệm không gian và dễ dàng trong việc
              vận hành.
            </li>
            <li>
              Khả năng may đa dạng vật liệu: Máy có khả năng làm việc với nhiều
              loại vật liệu khác nhau, đáp ứng các yêu cầu đa dạng của sản xuất
              may mặc.
            </li>
            <li>
              Động cơ servo tiết kiệm năng lượng: Máy trang bị động cơ servo
              tiết kiệm năng lượng, giúp giảm lượng điện tiêu thụ và mang lại
              hiệu suất cao hơn.
            </li>
            <li>
              Đèn LED: Máy được trang bị đèn LED chiếu sáng chính xác, giúp làm
              việc dễ dàng và tiện lợi trong môi trường ánh sáng tốt.
            </li>
            <li>
              Công tắc cảm ứng: Máy được trang bị công tắc cảm ứng có chức năng
              cao, giúp ngăn ngừa gãy kim và đảm bảo an toàn trong quá trình
              may.
            </li>
          </ul>
        </div>
      </div>
      <div className='flex-center text-center'>
        <div>
          <Image
            width={500}
            height={500}
            src='https://dienmaytonghopmiennam.com/wp-content/uploads/2023/08/maymay1kimdientuddl7000a7-1028.jpg'
            alt='product-image'
          />
          <div className='px-5 py-1 bg-slate-100'>
            <i>Máy May 1 Kim Điện Tử Juki DDL 7000A-7</i>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div>
          <span className='h5-bold text-text-1'>
            Thông số kỹ thuật của máy may 1 kim điện tử Juki DDL 7000A-7
          </span>
        </div>
        <div className='mt-3'>
          <i className='base-bold text-text-1'>
            Thông số kỹ thuật của máy may 1 kim điện tử Juki DDL 7000A07
          </i>
        </div>
      </div>
      <div className='table w-full mt-5'>
        {/* <table className='w-full'>
            <tr>
              {' '}
              <th>Mẫu máy</th>
              <th> DDL-7000AS-7</th>
              <th>DDL-7000AH-7</th>
            </tr>
            <tr>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
              <td>Tốc độ may tối đa</td>
            </tr>
          </table> */}
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody className='*:border-b *:border-border-1'>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                <strong>Mẫu máy</strong>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                <strong>&nbsp;DDL-7000AS-7</strong>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                <strong>DDL-7000AH-7</strong>
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Tốc độ may tối đa
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                5000 mũi/phút
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                4000 mũi/phút
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Chiều dài mũi khâu tối đa
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                5mm
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                5mm
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Độ nâng chân vịt
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Bằng tay: 5,5mm / Bằng đầu gối: 13mm
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Bằng tay: 5,5mm / Bằng đầu gối: 13mm
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Dầu bôi trơn
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Dầu máy Juki 7 (tương đương với ISO VG7)
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Dầu máy Juki 7 (tương đương với ISO VG7)
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Độ chính xác của cơ chế nén kim
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                0,55mm
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                0,55mm
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Loại kim
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                DB × 1 (#14) #14~#18
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                DP × 5 (#21) #20～#23
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Điện năng tiêu thụ
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                210VA
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                210VA
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Trọng lượng đầu máy
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                34kg (bao gồm động cơ, hộp điều khiển, vỏ bọc)
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                34kg (bao gồm động cơ, hộp điều khiển, vỏ bọc)
              </td>
            </tr>
            <tr style={{ height: 21 }}>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                Kích thước bên ngoài
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                833 × 278 × 459
              </td>
              <td
                style={{
                  textAlign: 'center',
                  height: 21,
                  width: '33.3333%'
                }}>
                833 × 278 × 459
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-6'>
        <div className='h3-bold text-text-1'>
          <span>
            Những tính năng nổi bật của máy may 1 kim điện tử Juki DDL 7000A-7
          </span>
        </div>
        <div className='mt-2'>
          <p>
            <strong>Máy may 1 kim điện tử Juki DDL 7000A-7</strong> là một máy
            may công nghiệp chất lượng cao được sản xuất bởi Juki, một trong
            những thương hiệu nổi tiếng Nhật Bản và là hàng đầu trong lĩnh vực
            máy may công nghiệp. Đây là một máy may được thiết kế để đáp ứng nhu
            cầu may mặc chuyên nghiệp, từ các xưởng may đến các nhà máy sản xuất
            hàng may mặc lớn.
          </p>
          <p className='my-3'>
            <strong>
              Một số đặc trưng cơ bản của máy may 1 kim điện tử Juki DDL
              7000A-7:
            </strong>
          </p>
          <ul className='list-disc ms-5'>
            <li>
              Hệ thống truyền động trực tiếp: Máy được trang bị hệ thống truyền
              động trực tiếp, giúp tăng tính chính xác và hiệu suất của máy.
            </li>
            <li>
              Kích thước nhỏ gọn: Cả hộp điều khiển và bảng điều khiển được tích
              hợp vào đầu máy, giúp tiết kiệm không gian và dễ dàng trong việc
              vận hành.
            </li>
            <li>
              Khả năng may đa dạng vật liệu: Máy có khả năng làm việc với nhiều
              loại vật liệu khác nhau, đáp ứng các yêu cầu đa dạng của sản xuất
              may mặc.
            </li>
            <li>
              Động cơ servo tiết kiệm năng lượng: Máy trang bị động cơ servo
              tiết kiệm năng lượng, giúp giảm lượng điện tiêu thụ và mang lại
              hiệu suất cao hơn.
            </li>
            <li>
              Đèn LED: Máy được trang bị đèn LED chiếu sáng chính xác, giúp làm
              việc dễ dàng và tiện lợi trong môi trường ánh sáng tốt.
            </li>
            <li>
              Công tắc cảm ứng: Máy được trang bị công tắc cảm ứng có chức năng
              cao, giúp ngăn ngừa gãy kim và đảm bảo an toàn trong quá trình
              may.
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-6'>
        <div className='h3-bold text-text-1'>
          <span>
            Những lưu ý khi sử dụng máy may 1 kim điện tử Juki DDL 7000A-7
          </span>
        </div>
        <div className='mt-2'>
          <p>
            <strong>Máy may 1 kim điện tử Juki DDL 7000A-7</strong> là một máy
            may công nghiệp chất lượng cao được sản xuất bởi Juki, một trong
            những thương hiệu nổi tiếng Nhật Bản và là hàng đầu trong lĩnh vực
            máy may công nghiệp. Đây là một máy may được thiết kế để đáp ứng nhu
            cầu may mặc chuyên nghiệp, từ các xưởng may đến các nhà máy sản xuất
            hàng may mặc lớn.
          </p>
          <p className='my-3'>
            <strong>
              Một số đặc trưng cơ bản của máy may 1 kim điện tử Juki DDL
              7000A-7:
            </strong>
          </p>
          <ul className='list-disc ms-5'>
            <li>
              Hệ thống truyền động trực tiếp: Máy được trang bị hệ thống truyền
              động trực tiếp, giúp tăng tính chính xác và hiệu suất của máy.
            </li>
            <li>
              Kích thước nhỏ gọn: Cả hộp điều khiển và bảng điều khiển được tích
              hợp vào đầu máy, giúp tiết kiệm không gian và dễ dàng trong việc
              vận hành.
            </li>
            <li>
              Khả năng may đa dạng vật liệu: Máy có khả năng làm việc với nhiều
              loại vật liệu khác nhau, đáp ứng các yêu cầu đa dạng của sản xuất
              may mặc.
            </li>
            <li>
              Động cơ servo tiết kiệm năng lượng: Máy trang bị động cơ servo
              tiết kiệm năng lượng, giúp giảm lượng điện tiêu thụ và mang lại
              hiệu suất cao hơn.
            </li>
            <li>
              Đèn LED: Máy được trang bị đèn LED chiếu sáng chính xác, giúp làm
              việc dễ dàng và tiện lợi trong môi trường ánh sáng tốt.
            </li>
            <li>
              Công tắc cảm ứng: Máy được trang bị công tắc cảm ứng có chức năng
              cao, giúp ngăn ngừa gãy kim và đảm bảo an toàn trong quá trình
              may.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
