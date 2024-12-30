import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'mistery egg',
  description: 'proiect facultate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
