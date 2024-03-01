import Header from '@/components/HomePage/Header';
import Introduction from '@/components/HomePage/Introduction';
import TopBanChay from '@/components/HomePage/TopBanChay';
import TopSanPham from '@/components/HomePage/TopSanPham';
// import Statistics from '@/components/Statistics';\
// import Pricing from '@/components/Pricing';
// import Conclusion from '@/components/Conclusion';

export default function Home() {
  return (
    <>
      <div id='home' />
      <Header />
      <Introduction />
      <TopBanChay />

      <TopSanPham label='MÁY MAY CÔNG NGHIỆP' />

      <TopSanPham label='MÁY CẮT VẢI' />

      <TopSanPham label='MÁY MAY BAO' />

      <TopSanPham label='MÁY THÊU VI TÍNH' />

      <TopSanPham label='MÁY MAY GIÀY DA, BALO, TÚI, SOFA' />

      <TopSanPham label='MÔ TƠ MÁY MAY' />

      {/* <Detail1 />
      <Detail2 />
      <DetailsLightbox />
      <Detail3 /> */}

      {/* <Statistics />
      <Testimonials />
      <Pricing /> */}

      {/* <Conclusion /> */}
    </>
  );
}
