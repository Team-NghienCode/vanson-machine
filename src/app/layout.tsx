import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import .css from public folder
import "../../public/css/styles.css";
import "../../public/css/fontawesome-all.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/swiper.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} data-spy="scroll" data-target=".fixed-top">{children}</body>
    </html>
  );
}
