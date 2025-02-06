import type { Metadata } from 'next';

import localFont from 'next/font/local';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import cn from '@/utils/cn';

import '../styles/globals.css';

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
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CONTENT}
        />
      </head>
      <body
        className={cn(
          `${pretendard.variable} antialiased`,
          'flex flex-col justify-center items-center h-dvh w-dvw',
        )}
      >
        <Header />
        <div className="relative xs:w-[90%] w-full h-full overflow-x-hidden overflow-y-auto">
          <Sidebar />
          <div className="absolute xs:left-[210px] left-0 top-0 flex justify-center items-center h-full xs:w-[calc(100%-210px)] w-full">
            <div className="xs:h-[90%] h-full xs:w-full w-[90%]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
