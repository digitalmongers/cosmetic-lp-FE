"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the hero section from scroll position 0
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Mobile-first proportional vertical parallax (smooth float downwards as user scrolls)
  // Percentage-based translation scales gracefully across mobile, tablet, and desktop viewports
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--cream)]">
      {/* 1. TOP HERO UNIT (Matches reference design mobile-first) */}
      <div
        ref={heroRef}
        className="relative flex flex-col items-center w-full pt-6 sm:pt-10 px-4"
      >
        {/* Red Circle Arch */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[310px] sm:w-[480px] md:w-[600px] lg:w-[720px] aspect-[1090/792]">
          <Image
            src="/images/Ellipse1.svg"
            alt=""
            fill
            priority
            className="object-contain object-top"
          />
        </div>

        {/* Headings inside Red Arch */}
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <p className="font-extrabold tracking-wide text-xl sm:text-3xl md:text-4xl">
            Hero.
          </p>

          <p className="mt-6 sm:mt-9 font-bold text-sm sm:text-xl md:text-2xl text-white/95">
            Pimple, meet your
          </p>

          <h1 className="mt-2 sm:mt-3 font-black uppercase leading-none text-5xl sm:text-7xl md:text-8xl">
            <div>MIGHTY</div>
            <div className="relative inline-block">
              <span>PATCH</span>
              <sup className="text-xs sm:text-lg md:text-xl font-normal absolute -top-1 sm:top-1.5 -right-3.5 sm:-right-3">
                ®
              </sup>
            </div>
          </h1>
        </div>

        {/* 3D Product Box & Blister Pack overlapping the bottom curve of the red dome */}
        <div className="relative z-20 mt-3 sm:mt-16 w-[270px] sm:w-[390px] md:w-[460px] aspect-[724/727]">
          {/* Layer behind: image4.svg (Blister pack sheet) */}
          <div className="absolute -top-5 right-[3%] w-[54%] h-[66%] z-10 pointer-events-none">
            <Image
              src="/images/image4.svg"
              alt="Mighty Patch blister sheet"
              fill
              priority
              sizes="(max-width: 640px) 150px, 250px"
              className="object-contain"
            />
          </div>

          {/* Layer front: image3.svg (Mighty Patch box) with vertical parallax scroll */}
          <motion.div
            style={{ y }}
            className="relative w-full h-full z-20 pointer-events-none will-change-transform"
          >
            <Image
              src="/images/image3.svg"
              alt="Mighty Patch Original packaging"
              fill
              priority
              sizes="(max-width: 640px) 270px, (max-width: 768px) 390px, 460px"
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* 2. THE #1 BEST-SELLING ACNE PATCH SECTION */}
      <div className="relative w-full flex flex-col items-center pt-6 pb-12 sm:pt-10 sm:pb-20 text-center">
        {/* Title */}
        <div className="w-full px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl font-black leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
            The <span className="text-[#C93837]">#1</span>
            <br />
            best-selling
            <br />
            acne patch.
          </h2>
        </div>

        {/* Two photos side-by-side matching Figma - Full Width & Mobile Responsive */}
        <div className="w-full px-2 sm:px-4 md:px-8 max-w-7xl mx-auto mt-6 sm:mt-10">
          <div className="grid grid-cols-[394fr_870fr] gap-1.5 sm:gap-3 md:gap-4 overflow-hidden rounded-md sm:rounded-lg">
            <div className="relative w-full aspect-[394/592] overflow-hidden bg-neutral-200">
              <Image
                src="/images/image54.svg"
                alt="Woman touching face with Mighty Patch"
                fill
                sizes="(max-width: 640px) 35vw, (max-width: 1024px) 32vw, 420px"
                className="object-cover"
              />
            </div>

            <div className="relative w-full aspect-[870/592] overflow-hidden bg-neutral-200">
              <Image
                src="/images/image 6 (1).svg"
                alt="Applying a Mighty Patch"
                fill
                sizes="(max-width: 640px) 65vw, (max-width: 1024px) 68vw, 920px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Quote & CTA Button */}
        <div className="w-full max-w-lg px-4 mt-6 sm:mt-8 flex flex-col items-center">
          <blockquote className="text-center text-sm sm:text-base md:text-4xl font-small leading-relaxed">
            “These patches truly are mighty! They really work and keep my breakouts covered.”
            <footer className="mt-2 text-[11px] sm:text-sm font-normal text-neutral-600">Robyn D.</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}