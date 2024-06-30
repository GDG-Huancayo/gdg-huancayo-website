"use client";

import { ExplorerSection, HeroSection } from "@/components/blog";
import { Footer, Header } from "@/components/common";
import { BlogSection } from "@/components/home";

function Blog() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExplorerSection />
      </main>
      <Footer />
    </>
  );
}
export default Blog;
