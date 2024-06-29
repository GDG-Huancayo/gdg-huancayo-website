"use client";
import { Footer, Header } from "@/components/common";
import {
  Faq,
  LogoClouds,
  OurBlog,
  HeroSection,
  FindUs,
  ActionSection,
  OverviewSection,
} from "@/components/Home/";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoClouds />
        <OverviewSection />
        <OurBlog />
        <FindUs />
        <Faq />
        <ActionSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
