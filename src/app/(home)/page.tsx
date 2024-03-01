import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import TopBanChay from '@/components/TopBanChay';
import TopSanPham from '@/components/TopSanPham';
// import Detail1 from '@/components/Detail1';
// import Detail2 from '@/components/Detail2';
// import DetailsLightbox from '@/components/DetailsLightbox';
// import Detail3 from '@/components/Detail3';
// import Statistics from '@/components/Statistics';
// import Testimonials from '@/components/Testimonials';
// import Pricing from '@/components/Pricing';
// import Conclusion from '@/components/Conclusion';

export default function Home() {
  return (
    <>
      <div id='home' />
      <Header />
      <Introduction />
      <TopBanChay />

      <TopSanPham label='máy may công nghiệp' />

      <TopSanPham label='MÁY CẮT VẢI' />

      <TopSanPham label='MÁY MAY BAO' />

      <TopSanPham label='MÁY THÊU VI TÍNH' />

      <TopSanPham label='MÁY MAY GIÀY DA, BALO, TÚI, SOFA' />

      <TopSanPham label='MÔ TƠ MÁY MAY' />

      <TopSanPham label='máy may công nghiệp' />

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
