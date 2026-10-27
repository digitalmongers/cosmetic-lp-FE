"use client";

import Image from "next/image";
import { motion } from "motion/react";

const customers = [
  { src: "/images/Frame19.svg", alt: "Customer with Mighty Patch 1" },
  { src: "/images/Frame20.svg", alt: "Customer with Mighty Patch 2" },
  { src: "/images/Frame21.svg", alt: "Customer with Mighty Patch 3" },
  { src: "/images/Frame19 (1).svg", alt: "Customer with Mighty Patch 4" },
  { src: "/images/Frame 20 (1).svg", alt: "Customer with Mighty Patch 5" },
  { src: "/images/Frame 21 (1).svg", alt: "Customer with Mighty Patch 6" },
  { src: "/images/Frame 19 (2).svg", alt: "Customer with Mighty Patch 7" },
  { src: "/images/Frame 20 (2).svg", alt: "Customer with Mighty Patch 8" },
  { src: "/images/Frame 21 (2).svg", alt: "Customer with Mighty Patch 9" },
];

export function SocialProof() {
  return (
    <section className="bg-[var(--cream)]">
      {/* Two customer portraits side-by-side matching Figma */}
      <div className="mx-auto max-w-6xl py-4 sm:py-6">
        <div className="grid grid-cols-[394fr_870fr] gap-2 overflow-hidden rounded-md sm:gap-3">
          <div className="relative aspect-[394/592] overflow-hidden bg-neutral-200">
            <Image
              src="/images/image 6.svg"
              alt="Customer applying patch"
              fill
              sizes="(max-width: 640px) 32vw, 400px"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[870/592] overflow-hidden bg-neutral-200">
            <Image
              src="/images/image 5.svg"
              alt="Customer with patch"
              fill
              sizes="(max-width: 640px) 68vw, 850px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* "Hero looks good on you." with curved white card background and 3x3 UGC grid */}
      <div className="bg-white px-4 pb-10 pt-5 mt-5 sm:pb-16 md:mt-10 ">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mt-2 sm:mt-5 mb-6 sm:mb-10 text-2xl font-black text-black sm:text-4xl md:text-6xl">
            Hero looks good on you.
          </h2>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
            {customers.map((customer, index) => (
              <motion.div
                key={`${customer.src}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative aspect-square overflow-hidden rounded-sm bg-neutral-100 shadow-sm cursor-pointer"
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Image
                    src={customer.src}
                    alt={customer.alt}
                    fill
                    sizes="(max-width: 640px) 33vw, 260px"
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}