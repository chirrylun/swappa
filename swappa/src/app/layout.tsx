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
  title: 'Swappa — Buy & Sell Google Ads, Social Media & Digital Assets in Nigeria',
  description:
    "Nigeria's #1 escrow marketplace to buy and sell Google Ads accounts, Facebook ad accounts, AdSense sites, Play Console accounts, Instagram, TikTok & Twitter/X accounts safely on WhatsApp.",
  keywords:
    'buy google ads account, buy google ads account nigeria, sell google ads account, sell google ads account nigeria, buy facebook ad account, buy facebook ad account nigeria, sell facebook ad account, sell facebook ad account nigeria, buy adsense site, buy adsense site nigeria, sell adsense site, adsense site for sale nigeria, buy google play console account, buy google play console account nigeria, sell google play console account, google play developer account for sale nigeria, buy instagram account, buy instagram account nigeria, sell instagram account nigeria, buy twitter account, buy x account nigeria, sell twitter account nigeria, buy tiktok account, buy tiktok account nigeria, sell tiktok account nigeria, buy social media account nigeria, sell social media page nigeria, whatsapp escrow marketplace, escrow nigeria, escrow service nigeria, buy digital assets safely nigeria, sell digital assets nigeria, safe escrow whatsapp, trusted escrow nigeria',
  metadataBase: new URL('https://www.swappa.chat'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Swappa — Buy & Sell Google Ads, Social Media & Digital Assets in Nigeria',
    description:
      'Verified listings. Escrow protection. Buy Google Ads accounts, Facebook ad accounts, AdSense sites and social media accounts safely inside WhatsApp.',
    type: 'website',
    url: 'https://www.swappa.chat',
    images: [
      {
        url: 'https://www.swappa.chat/images/swappa-og.png',
        width: 1200,
        height: 630,
        alt: 'Swappa — Buy and Sell Digital Assets Safely in Nigeria on WhatsApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swappa — Buy & Sell Digital Assets in Nigeria',
    description: 'Escrow-protected trades for Google Ads, social media accounts, AdSense sites and gift cards. Entirely inside WhatsApp.',
    images: ['https://www.swappa.chat/images/swappa-og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/swappa-icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/swappa-icon.svg',
    shortcut: '/favicon.ico',
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
  logo: 'https://www.swappa.chat/images/swappa-icon.svg',
  description:
    "Nigeria's trusted escrow marketplace for buying and selling digital assets on WhatsApp.",
  areaServed: 'NG',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'English',
    url: 'https://wa.me/2348143653652',
  },
  sameAs: [
    'https://web.facebook.com/profile.php?id=61579138644345',
    'https://www.instagram.com/swappa_ng',
    'https://x.com/swappa_ng',
    'https://www.linkedin.com/company/swappa-technologies',
  ],
  knowsAbout: [
    'Google Ads accounts',
    'Facebook Ad accounts',
    'Google Play Console accounts',
    'Social media pages',
    'AdSense sites',
    'Gift cards',
    'Digital asset escrow',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Swappa',
  url: 'https://www.swappa.chat',
  description: "Nigeria's escrow marketplace for digital assets on WhatsApp.",
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://wa.me/2348143653652?text=LISTINGS',
    'query-input': 'required name=search_term_string',
  },
}

const marketplaceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Swappa Escrow Marketplace',
  url: 'https://www.swappa.chat',
  serviceType: 'Digital Asset Escrow Marketplace',
  description:
    "Nigeria's trusted escrow marketplace for buying and selling Google Ads accounts, Facebook ad accounts, AdSense sites, Play Console accounts, Instagram, TikTok and Twitter/X accounts safely on WhatsApp.",
  provider: {
    '@type': 'Organization',
    name: 'Swappa',
    url: 'https://www.swappa.chat',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://wa.me/2348143653652',
    servicePhone: '+2348143653652',
    availableLanguage: 'English',
  },
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
  <script
    id="organization-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />
  <script
    id="website-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(websiteSchema),
    }}
  />
  <script
    id="marketplace-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(marketplaceSchema),
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