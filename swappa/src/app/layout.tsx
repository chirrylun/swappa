import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Swappa — Buy & Sell Digital Assets on WhatsApp",
  description:
    "Nigeria's trusted escrow marketplace for Google Ads accounts, social media pages, AdSense sites, gift cards and more. Trade safely inside WhatsApp.",
  keywords: "buy google ads account nigeria, sell facebook ad account, adsense site for sale, whatsapp marketplace",
  openGraph: {
    title: "Swappa — Buy & Sell Digital Assets on WhatsApp",
    description: "Verified listings. Escrow protection. Entirely inside WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}