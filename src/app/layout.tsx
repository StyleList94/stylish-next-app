import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AppProvider from '@/components/providers';

import { inter, robotoMono } from '@/assets/fonts';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Stylish Next App',
  description: 'Whatever you want',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
