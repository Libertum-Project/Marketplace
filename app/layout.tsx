import type { Metadata } from 'next';
import './globals.css';
import { ThirdwebContextProvider } from './providers/ThirdWebContextProvider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Marketplace - Libertum',
  description:
    'Exploring freedom, technology, and innovation in our journey to a brighter future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.ad360.media" />
        {/* <GoogleTagManager gtmId="GTM-WBK9FF4T" /> */}
      </head>

      <body>
        <ThirdwebContextProvider>{children}</ThirdwebContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
