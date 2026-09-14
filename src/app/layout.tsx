import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { MobileBottomNav } from '@/components/MobileBottomNav';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Gupta Jwellery — Timeless Jewellery. Modern Elegance. | Kurukshetra',
    template: '%s | Gupta Jwellery',
  },
  description:
    'Discover exquisite gold, diamond and bridal jewellery at Gupta Jwellery, Kurukshetra. Visit our showroom at Sector 7 or enquire on WhatsApp for a personal jewellery consultation.',
  keywords: [
    'jewellery shop in Kurukshetra',
    'jewellers in Kurukshetra',
    'gold jewellery shop Kurukshetra',
    'bridal jewellery Kurukshetra',
    'diamond jewellery Kurukshetra',
    'gold jewellery Sector 7 Kurukshetra',
    'Gupta Jwellery',
  ],
  openGraph: {
    title: 'Gupta Jwellery — Timeless Jewellery. Modern Elegance.',
    description:
      'Discover exquisite gold, diamond and bridal jewellery at Gupta Jwellery, Kurukshetra.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Gupta Jwellery',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'JewelryStore',
              name: 'Gupta Jwellery',
              description:
                'Discover exquisite gold, diamond and bridal jewellery at Gupta Jwellery, Kurukshetra.',
              telephone: '+91 98960 07477',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Shop No. 21–22, Market Rd, Urban Estate, Sector 7',
                addressLocality: 'Kurukshetra',
                addressRegion: 'Haryana',
                postalCode: '136118',
                addressCountry: 'IN',
              },
              priceRange: '₹₹₹',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileBottomNav />
      </body>
    </html>
  );
}
