import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Display / headings — tight, geometric, modern
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
})

// Body — warm, readable, slightly editorial
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Swappa — Buy & Sell Digital Assets on WhatsApp',
  description:
    "Nigeria's trusted escrow marketplace for Google Ads accounts, social media pages, AdSense sites, gift cards and more. Trade safely inside WhatsApp.",
  keywords:
    'buy google ads account nigeria, sell facebook ad account, adsense site for sale, whatsapp marketplace, escrow nigeria',
  openGraph: {
    title: 'Swappa — Buy & Sell Digital Assets on WhatsApp',
    description:
      'Verified listings. Escrow protection. Entirely inside WhatsApp.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Both CSS variables are injected here — available globally
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSans.variable}`}
    >
      <body className="antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}