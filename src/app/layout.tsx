import type { Metadata } from 'next';

import localFont from 'next/font/local';

import cn from '@/utils/cn';

import '../styles/globals.css';
import MarkdownHMRClient from '@/components/MarkdownHMRClient/MarkdownHMRClient';
import Profile from '@/components/Profile/Profile';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '거북이로그',
  description: '프론트엔드 개발자 이아현의 블로그',
  openGraph: {
    type: 'website',
    title: '거북이로그',
    description: '프론트엔드 개발자 이아현의 블로그',
    locale: 'ko',
    url: 'https://lah1203.vercel.app',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/21af14de-59cb-4848-a058-5476e4bcb2b5',
      },
    ],
  },
  authors: {
    url: 'https://github.com/LAH1203',
    name: '이아현',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CONTENT}
        />
      </head>
      <body
        className={cn(
          `${pretendard.variable} antialiased`,
          'flex justify-center items-center h-dvh w-dvw px-8 py-8',
        )}
      >
        <div className="flex flex-col items-center gap-8 max-w-[1024px] w-full h-full">
          <Profile />
          {children}
          <footer className="text-xxs text-right text-[#4B5945] w-full pt-2 pb-8">
            <p>Copyright 2022-{new Date().getFullYear()}.</p>
            <p>All rights reserved by AhhyunLee.</p>
          </footer>
        </div>
        {process.env.NODE_ENV === 'development' && <MarkdownHMRClient />}
      </body>
    </html>
  );
}
