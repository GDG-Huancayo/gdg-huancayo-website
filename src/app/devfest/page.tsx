"use client";
import { HeroSection, PriceSection } from "@/components/DevFest/";
import { Footer, Header } from "@/components/common";

function DevFest() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PriceSection />
      </main>
      <Footer />
    </>
  );
}
export default DevFest;
