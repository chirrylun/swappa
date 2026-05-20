import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
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
  // Fixed: now 57 chars (was 46)
  title: 'Swappa — Buy & Sell Digital Assets Safely on WhatsApp',
  description:
    "Nigeria's trusted escrow marketplace for Google Ads accounts, social media pages, AdSense sites, gift cards and more. Trade safely inside WhatsApp.",
  keywords:
    'buy google ads account nigeria, sell facebook ad account, adsense site for sale, whatsapp escrow marketplace, escrow nigeria, sell google ads account',
  metadataBase: new URL('https://www.swappa.chat'),
  alternates: {
    canonical: '/',  // renders as https://www.swappa.chat/
  },
  openGraph: {
    title: 'Swappa — Buy & Sell Digital Assets Safely on WhatsApp',
    description:
      'Verified listings. Escrow protection. Entirely inside WhatsApp.',
    type: 'website',
    url: 'https://www.swappa.chat',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Swappa',
  url: 'https://www.swappa.chat',
  description:
    "Nigeria's trusted escrow marketplace for buying and selling digital assets on WhatsApp.",
  areaServed: 'NG',
  knowsAbout: [
    'Google Ads accounts',
    'Social media pages',
    'AdSense sites',
    'Gift cards',
    'Digital asset escrow',
  ],
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
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* GA4 — replace G-XXXXXXXXXX with your actual measurement ID */}
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId="G-N22Z9J9JQ3" />
        )}

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