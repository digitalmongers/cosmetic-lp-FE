import Image from "next/image";

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
      <div className="mx-auto max-w-7xl px-4 py-4 sm:py-6">
        <div className="grid grid-cols-[394fr_870fr] gap-2 overflow-hidden rounded-sm sm:gap-3">
          <div className="relative aspect-[394/592] rounded-tl-md overflow-hidden bg-neutral-200">
            <Image
              src="/images/image 6.svg"
              alt="Customer applying patch"
              fill
              sizes="(max-width: 640px) 65vw, 450px"
              className="object-cover"
          />
          </div>

          <div className="relative aspect-[870/592] rounded-tr-md overflow-hidden bg-neutral-200">
              <Image
              src="/images/image 5.svg"
              alt="Customer with patch"
              fill
              sizes="(max-width: 640px) 35vw, 250px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* "Hero looks good on you." with curved white card background and 3x3 UGC grid */}
      <div className="bg-white px-4 pb-10 pt-8 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-10 text-xl font-black text-black sm:text-3xl md:text-6xl mt-5">
            Hero looks good on you.
          </h2>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
            {customers.map((customer, index) => (
              <div
                key={`${customer.src}-${index}`}
                className="relative aspect-square overflow-hidden rounded-sm bg-neutral-100 shadow-sm"
              >
                <Image
                  src={customer.src}
                  alt={customer.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 260px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}