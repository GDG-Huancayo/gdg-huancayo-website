"use client";
import {
  ActionSection,
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
        <Guests />
        <PriceSection />
        <ActionSection />
      </main>
      <Footer />
    </>
  );
}
export default DevFest;
