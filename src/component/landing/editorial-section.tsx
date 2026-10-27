import Image from "next/image";

const images = [
  { src: "/images/Frame 28.svg", alt: "Editorial skincare portrait 1" },
  { src: "/images/Frame 29.svg", alt: "Editorial skincare portrait 2" },
  { src: "/images/Frame 30.svg", alt: "Editorial skincare portrait 3" },
];

export function EditorialSection() {
  return (
    <section className="bg-white sm:pt-14 sm:pb-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 pb-6 sm:gap-10 sm:pb-10">
        <h2 className="md:text-4xl text-xl font-black text-black sm:text-5xl">
          Revealing the
          <br />
          hero within
        </h2>

        <p className="text-xs text-neutral-600 sm:text-lg">
          We're a functional skincare brand focused on acne-prone skin, and we've created a full suite of products that address the full lifecycle of breakouts. What we make helps put you back in control of your skin – so you can open up, not cover up.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-0">
        {images.map((item) => (
          <div
            key={item.src}
            className="relative aspect-[597/778] overflow-hidden bg-neutral-100"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}