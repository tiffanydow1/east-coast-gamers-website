import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

import LeftSideBar from './components/layout/LeftSideBar/LeftSideBar';
import TopBar from './components/layout/TopBar/TopBar';
import ToasterProvider from "@/lib/ToasterProvider";

export const metadata: Metadata = {
  title: 'East Coast Gamers - Admin Dashboard',
  description: "Admin Dashboard to manage East Coast Gamer's data",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <div className='flex max-lg:flex-col text-grey-1'>
          <LeftSideBar />
          <TopBar />
          <div className='flex-1'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
