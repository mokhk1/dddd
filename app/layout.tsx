import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Kufi_Arabic, Playfair_Display } from 'next/font/google';
import { AppProviders } from '@/components/providers/app-providers';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DETHAR – Geological Digital Museum',
  description:
    'Discover rocks, minerals and Earth geological heritage through an interactive digital museum.',
  openGraph: {
    title: 'DETHAR – Geological Digital Museum',
    description:
      'Discover rocks, minerals and Earth geological heritage through an interactive digital museum.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoKufi.variable} ${playfair.variable} font-sans`}>
        <AppProviders>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
