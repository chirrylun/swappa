// src/app/page.tsx
import { Suspense } from "react";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/NavBar";
import HowItWorks from "@/components/layout/HowItWorks";
import AssetCategories from "@/components/layout/AssetCategories";
import TickerStats from "@/components/layout/TickerStats";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <HowItWorks />
      <AssetCategories />
      <TickerStats />
      <Navbar />
      <Footer/>
    </main>
  );
}
