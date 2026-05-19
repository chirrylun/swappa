import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
})

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
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSans.variable}`}
    >
      <body className="antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* Meta Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '25261984080087536');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=25261984080087536&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}