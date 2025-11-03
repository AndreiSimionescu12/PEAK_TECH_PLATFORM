import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import FloatingContact from '@/components/FloatingContact'
import CookiesBanner from '@/components/CookiesBanner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Construim experiențe digitale care inspiră',
  description: 'Peak Tech SRL oferă soluții digitale complete: site-uri web de prezentare, magazine online, aplicații mobile și dezvoltare software custom. Experiență profesională în tehnologie.',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo_peak_tech_transparent_background.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/images/logo_peak_tech_transparent_background.png',
  },
  keywords: 'site web, magazin online, aplicații mobile, software custom, dezvoltare web, Peak Tech SRL',
  authors: [{ name: 'Peak Tech SRL' }],
  creator: 'Peak Tech SRL',
  publisher: 'Peak Tech SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://peaktech.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Construim experiențe digitale care inspiră',
    description: 'Soluții digitale complete: site-uri web, magazine online, aplicații mobile și software custom.',
    url: 'https://peaktech.ro',
    siteName: 'Peak Tech SRL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peak Tech SRL - Soluții digitale profesionale',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construim experiențe digitale care inspiră',
    description: 'Soluții digitale complete: site-uri web, magazine online, aplicații mobile și software custom.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        <CustomCursor />
        <FloatingContact />
        <CookiesBanner />
        {children}
      </body>
    </html>
  )
}
