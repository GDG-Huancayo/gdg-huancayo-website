"use client";
import { Footer, Header } from "@/components/common";
import {
  LogoClouds,
  HeroSection,
  ActionSection,
  OverviewSection,
  FaqSection,
  BlogSection,
  FindUsSection,
} from "@/components/home";
import { BenefitsSection } from "@/components/home/BenefitsSection";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoClouds />
        <OverviewSection />
        <BenefitsSection />
        <BlogSection />
        <FindUsSection />
        <FaqSection />
        <ActionSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
