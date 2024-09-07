import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './layout.module.css';

import ToasterProvider from '@/lib/ToasterProvider';
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SidebarCart from '@/components/SidebarCart/SidebarCart';

const inter = Inter({ subsets: ["latin"] });

// const roboto = Roboto({
//   weight: ['300', '400', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-roboto',
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <CartProvider>
        <body>
          <ToasterProvider />
          <Header />
          <div className={styles.page}></div>
          {children}
          <Footer />

          <SidebarCart />
        </body>
      </CartProvider>
    </html>
  );
}