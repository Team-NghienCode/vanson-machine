import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Features from '@/components/Features';
import Detail1 from '@/components/Detail1';
import Detail2 from '@/components/Detail2';
import DetailsLightbox from '@/components/DetailsLightbox';
import Detail3 from '@/components/Detail3';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Conclusion from '@/components/Conclusion';

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
