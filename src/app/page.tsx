"use client";
import { Footer, Header } from "@/components/common";
import {
  Faq,
  LogoClouds,
  OurBlog,
  HeroSection,
  FindUs,
  ActionSection,
} from "@/components/Home/";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoClouds />
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
