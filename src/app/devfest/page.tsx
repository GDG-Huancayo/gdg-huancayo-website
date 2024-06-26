"use client";
import {
  DevFestInfo,
  Guests,
  HeroSection,
  PriceSection,
} from "@/components/DevFest/";
import { Footer, Header } from "@/components/common";

function DevFest() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DevFestInfo />
        <PriceSection />
        <Guests />
      </main>
      <Footer />
    </>
  );
}
export default DevFest;
