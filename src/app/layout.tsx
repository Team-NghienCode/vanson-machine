import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';

import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

// import .css from public folder
import '../../public/css/jquery-ui.css';
import '../../public/css/fontawesome-all.css';
import '../../public/css/magnific-popup.css';
import '../../public/css/swiper.css';
import '../../public/css/styles.css';

const font = Inter({ subsets: ['vietnamese'] });

export const metadata: Metadata = {
  title: 'VanSon - Machine',
  description: 'VanSon - Machine'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Script src='/js/jquery.min.js' defer />
      <Script src='/js/jquery-ui.js' defer />
      <Script src='/js/jquery.easing.min.js' defer />
      <Script src='/js/jquery.magnific-popup.js' defer />
      <Script src='/js/swiper.min.js' defer />
      <Script src='/js/scripts.js' defer />

      <body
        className={font.className}
        data-spy='scroll'
        data-target='.fixed-top'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
