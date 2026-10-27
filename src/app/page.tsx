import { Suspense } from "react";
import { HeroSection } from "@/component/landing/hero-section";
import { RoutineSection } from "@/component/landing/routine-section";
import { HowItWorks } from "@/component/landing/how-it-works";
import { SocialProof } from "@/component/landing/social-proof";
import { ProductFinder } from "@/component/landing/product-finder";
import { EditorialSection } from "@/component/landing/editorial-section";
import { SiteFooter } from "@/component/landing/site-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--cream)]">
      <HeroSection />
      <RoutineSection />

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="reviews">
        <SocialProof />
      </div>

      <ProductFinder />

      <div id="story">
        <EditorialSection />
      </div>

      <Suspense fallback={<footer className="bg-[#191919] px-5 py-10 text-white sm:py-16" />}>
        <SiteFooter />
      </Suspense>
    </main>
  );
}