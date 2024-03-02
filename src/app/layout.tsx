import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <head>
        <script src='/js/jquery.min.js' defer />
        <script src='/js/jquery.easing.min.js' defer />
        <script src='/js/scripts.js' defer />
      </head>

      <body className={font.className} data-spy='scroll' data-target='.fixed-top'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
