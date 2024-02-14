import Header from '@/components/Header';

import type { Metadata } from 'next';

import '@/styles/reset.css';

export const metadata: Metadata = {
  title: 'B.C.C',
  description: 'Better Clean Code',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="w-full h-full">
          <header className="fixed z-[999] w-full h-12">
            <Header />
          </header>
          <main className="flex justify-center min-h-full box-border pt-[5rem] px-0 pb-[3rem] bg-white [&>*]:max-w-[50rem]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
