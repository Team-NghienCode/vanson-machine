import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './uk.css';
import './globals.css';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
      <Script src='/js/uikit.min.js' />

      <body className={font.className} data-spy='scroll' data-target='.fixed-top'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
