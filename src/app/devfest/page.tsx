"use client";
import {
  ActionSection,
  GuestsSection,
  HeroSection,
  InfoSection,
  PriceSection,
} from "@/components/devfest";
import { Footer, Header } from "@/components/common";

function DevFest() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InfoSection />
        <GuestsSection />
        <PriceSection />
        <ActionSection />
      </main>
      <Footer />
    </>
  );
}
export default DevFest;
