import './globals.css';
import { Navbar, Footer } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Find the best car for your trip',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative" suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
