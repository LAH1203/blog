import type { Metadata } from 'next';

import localFont from 'next/font/local';

import Sidebar from '@/components/Sidebar/Sidebar';
import cn from '@/utils/cn';

import './globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${pretendard.variable} antialiased`,
          'flex justify-center items-center h-dvh w-dvw',
        )}
      >
        <div className="relative w-[90%] h-full">
          <Sidebar />
          <div className="absolute left-[210px] top-0 h-full w-[calc(100%-194px)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
