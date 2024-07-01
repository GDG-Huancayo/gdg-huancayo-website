"use client";

import {
  CategorySection,
  ExplorerSection,
  HeroSection,
} from "@/components/blog";
import { Footer, Header } from "@/components/common";
import { BlogSection } from "@/components/home";

function Blog() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <ExplorerSection />
      </main>
      <Footer />
    </>
  );
}
export default Blog;
