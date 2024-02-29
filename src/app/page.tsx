import Header from '@/components/HomePage/Header';
import Introduction from '@/components/HomePage/Introduction';
import Features from '@/components/HomePage/Features';
import Detail1 from '@/components/HomePage/Detail1';
import Detail2 from '@/components/HomePage/Detail2';
import DetailsLightbox from '@/components/HomePage/DetailsLightbox';
import Detail3 from '@/components/HomePage/Detail3';
import Statistics from '@/components/HomePage/Statistics';
import Testimonials from '@/components/HomePage/Testimonials';
import Pricing from '@/components/HomePage/Pricing';
import Conclusion from '@/components/HomePage/Conclusion';

export default function Home() {
  return (
    <>
      <div id='home' />
      <Header />
      <Introduction />
      <Features />

      <Detail1 />
      <Detail2 />
      <DetailsLightbox />
      <Detail3 />

      <Statistics />
      <Testimonials />
      <Pricing />

      <Conclusion />
    </>
  );
}
