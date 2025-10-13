import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'], // Specify the weights you need
});

export const metadata: Metadata = {
  title: {
    default: 'Marc Kwee — Freelance Drupal Developer & Consultant',
    template: '%s | Marc Kwee',
  },
  description:
    'Marc Kwee — freelance Drupal developer and consultant based in Rotterdam. I build and maintain Drupal websites, integrations and provide consulting and mentoring services.',
  openGraph: {
    title: 'Marc Kwee — Freelance Drupal Developer & Consultant',
    description:
      'Freelance Drupal developer and consultant based in Rotterdam. Portfolio, references and contact information.',
    url: 'https://marckwee.nl',
    siteName: 'marckwee.nl',
    images: [
      {
        url: 'https://marckwee.nl/marc.jpg',
        width: 1200,
        height: 630,
        alt: 'Marc Kwee',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marc Kwee — Freelance Drupal Developer',
    description:
      'Marc Kwee — freelance Drupal developer and consultant based in Rotterdam.',
    images: ['https://marckwee.nl/marc.jpg'],
  },
  icons: {
    icon: '/favicon.svg?v=2',
    shortcut: '/favicon.svg?v=2',
    apple: '/favicon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Explicit favicon links with cache-busting query to avoid old .ico caching */}
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=2" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=2" />
        <meta name="theme-color" content="#32AF7F" />
      </head>
      <body
        className={`${outfit.className} transition-colors duration-1000 ease-in-out`}
      >
        {children}
      </body>
    </html>
  );
}
