import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import StructuredData, { personSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://petermarkellis.com'),
  title: {
    default: 'Peter Mark Ellis - Visual Designer & Developer',
    template: '%s | Peter Mark Ellis'
  },
  description: 'Visual Designer and Developer partnering with founders, enterprises and visionary startups. Specializing in product design, web development, and creative strategy.',
  keywords: ['Visual Designer', 'Product Designer', 'Web Developer', 'UI/UX Design', 'Webflow', 'Framer', 'Creative Strategy'],
  authors: [{ name: 'Peter Mark Ellis' }],
  creator: 'Peter Mark Ellis',
  
  // Viewport and mobile optimization
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
  // Icons and manifest
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  manifest: '/manifest.json',
  
  // Theme colors for mobile browsers
  themeColor: '#000000',
  colorScheme: 'light',
  
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://petermarkellis.com',
    title: 'Peter Mark Ellis - Visual Designer & Developer',
    description: 'Visual Designer and Developer partnering with founders, enterprises and visionary startups.',
    siteName: 'Peter Mark Ellis',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peter Mark Ellis - Visual Designer & Developer',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Peter Mark Ellis - Visual Designer & Developer',
    description: 'Visual Designer and Developer partnering with founders, enterprises and visionary startups.',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // App-specific metadata
  applicationName: 'Peter Mark Ellis Portfolio',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Peter Ellis',
  },
  
  // Additional meta tags
  category: 'Design Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <StructuredData data={personSchema} />
        
        <LenisProvider>
          {children}
        </LenisProvider>
        
        <Analytics />
      </body>
    </html>
  );
}
