import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <div className='footer border-t-2'>
        <div className="grid xl:grid-cols-4 sm:grid-cols-1 gap-6 px-4 sm:px-8 container">
          <div id="text-2" className="text-start">
            <h5 className="pb-2">THÔNG TIN CÔNG TY</h5>
            <div>
              <p>
                CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU ĐIỆN MÁY TỔNG HỢP MIỀN NAM
              </p>
              <ul className=''>
                <li>Mã số thuế: 0317087514</li>
                <li>Ngày thành lập: 17/12/2021</li>
                <li>Email: maytonghop2010@gmail.com</li>
                <li><i className="fas fa-phone"></i> Điện thoại: 0914639068</li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Địa chỉ: 1/76 Nguyễn
                  Thế Truyện, phường Tân Sơn Nhì, Quận Tân Phú, TPHCM
                </li>
              </ul>
              <p>
                Hãy gọi ngay cho ĐIỆN MÁY TỔNG HỢP MIỀN NAM khi quý khách có
                nhu cầu và được tư vấn miễn phí về các loại máy, đổi trả trong
                vòng 7 ngày &#8211; bảo hành dài hạn.
              </p>
              <p>
                ĐIỆN MÁY TỔNG HỢP MIỀN NAM rất hân hạnh được phục vụ Quý Khách
                !!!!
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div id="text-3" className="text-start">
            <h5 className="pb-2">CHÍNH SÁCH DỊCH VỤ</h5>
            <div className="">
              <ul>
                <li>
                  <Link href="#">Chính sách bảo mật thông
                    tin</Link>
                </li>
                <li>
                  <Link href="#">Chính sách giao hàng</Link>
                </li>
                <li>
                  <Link href="#">Chính sách thanh toán</Link>
                </li>
                <li>
                  <Link href="#">Khiếu nại và Bồi thường</Link>
                </li>
                <li>
                  <Link href="#">Chính sách bảo hành sản
                    phẩm</Link>
                </li>
              </ul>
            </div>
          </div>
          <div id="text-4" className="text-start">
            <h5 className="pb-2">CÁC SẢN PHẨM ĐANG ĐƯỢC QUAN TÂM NHIỀU:</h5>
            <div className="">
              <ul>
                <li>
                  <Link href="#">Máy may công nghiệp</Link>
                </li>
                <li>
                  <Link href="#">Máy vắt sổ</Link>
                </li>
                <li>
                  <Link href="#">Máy may 1 kim</Link>
                </li>
                <li>
                  <Link href="#">Bàn ủi công nghiệp</Link>
                </li>
                <li>
                  <Link href="#">Máy may bao</Link>
                </li>
                <li>
                  <Link href="#">Máy cắt vải</Link>
                </li>
              </ul>
            </div>
          </div>
          <div id="text-5" className="text-start">
            <h5 className="pb-2 uppercase">Rủi ro khi mua các loại máy may công nghiệp ở đơn vị kém uy
              tín:</h5>
            <div className="">
              <ul>
                <li className='text-justify'>
                  <strong>&#8211; Mua phải máy may công nghiệp giả, nhái, hàng tái
                    chế kém chất lượng:</strong>
                  độ bền thấp, dễ bị hỏng hóc trong quá trình sử dụng.
                </li>
                <li className='text-justify'>
                  <strong>&#8211; Quảng cáo sai sự thật về sản phẩm, đưa ra mức giá
                    rẻ bất ngờ để thu hút khách hàng:</strong>
                  Khi khách hàng đặt mua hàng, họ sẽ yêu cầu khách hàng đặt
                  cọc trước một số tiền. Sau khi nhận được tiền cọc, họ sẽ
                  không giao hàng hoặc giao hàng không đúng như cam kết.
                </li>
                <li className='text-justify'>
                  <strong>&#8211; Không được hưởng các chính sách bảo hành, bảo
                    trì, hướng dẫn sử dụng chuẩn chính hãng:</strong>
                  khiến khách hàng gặp nhiều khó khăn khi máy móc gặp lỗi,
                  hỏng hóc, hao mòn.
                </li>
                <li className='text-justify'>
                  <strong>&#8211; Không có giấy tờ chứng minh nguồn gốc xuất xứ rõ
                    ràng.</strong>
                </li>
                <li className='text-justify'>
                  <strong>&#8211; Không đủ kinh nghiệm để tư vấn loại máy phù hợp
                    với nhu cầu</strong>: gây thiếu &#8211; thừa tính năng trong quá trình sử dụng.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
            Copyright ©&nbsp;
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
