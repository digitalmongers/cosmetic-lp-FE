import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Prep your skin.",
    description: "Cleanse and dry pimple area.",
    image: "/images/image.svg",
    alt: "Pimple before patch application",
  },
  {
    number: "2",
    title: "Patch the zit.",
    description: "Leave on 6-8 hours.",
    image: "/images/image (1).svg",
    alt: "Patch applied over pimple",
  },
  {
    number: "3",
    title: "Watch it work.",
    description: "Peel off once patch turns white.",
    badge: "turns white",
    image: "/images/image (2).svg",
    alt: "Patch turning white absorbing impurity",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[var(--cream)] px-5 py-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-4xl font-black leading-tight sm:text-6xl text-black">
          How the
          <br />
          Magic
          <br />
          Happens
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid grid-cols-[1fr_1.3fr] items-center gap-3 sm:grid-cols-2 sm:gap-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-sm font-black text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl md:text-5xl font-black text-black">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs sm:text-base md:text-3xl leading-relaxed text-neutral-700">
                  {step.description}
                </p>
                {step.badge && (
                  <span className="mt-2 inline-block rounded-full bg-black px-2.5 py-0.5 text-xs font-medium text-white">
                    {step.badge}
                  </span>
                )}
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white shadow-sm">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 55vw, 380px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}