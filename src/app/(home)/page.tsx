/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Header from '../components/HomePage/Header/Header';
import Introduction from '../components/HomePage/Header/Introduction';
import Features from '../components/HomePage/Header/Features';
import Detail1 from '../components/HomePage/Header/Detail1';
import Detail2 from '../components/HomePage/Header/Detail2';
import DetailsLightbox from '../components/HomePage/Header/DetailsLightbox';
import Detail3 from '../components/HomePage/Header/Detail3';
import Statistics from '../components/HomePage/Header/Statistics';
import Testimonials from '../components/HomePage/Header/Testimonials';
import Pricing from '../components/HomePage/Header/Pricing';
import Conclusion from '../components/HomePage/Header/Conclusion';

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
