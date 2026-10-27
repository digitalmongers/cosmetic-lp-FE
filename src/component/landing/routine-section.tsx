import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const benefits = [
  "Absorbs pimple gunk overnight",
  "Works on whiteheads",
  "Gentle + suitable for sensitive skin",
];

export function RoutineSection() {
  return (
    <section className="border-y border-black/15 bg-[var(--cream)] px-5 py-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-6 sm:grid-cols-2 sm:gap-10">
        <div>
          <h2 className="text-4xl font-black leading-tight sm:text-6xl text-black">
            Add it to
            <br />
            your routine
          </h2>

          <ul className="mt-10 space-y-5">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-5 border-b border-black/10 pb-2.5 text-sm sm:text-lg font-medium text-neutral-800"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C93837]" />
                {benefit}
              </li>
            ))}
          </ul>

          <Button
            variant="default"
            className="mt-6 w-full md:text-lg sm:text-sm py-6 mt-10 cursor-pointer"
          >
            $12.99 — Add to Cart
          </Button>
          <Button variant={"link"} className="flex justify-center mt-3 text-xs sm:text-base md:text-lg text-red-500 w-full cursor-pointer ">Find Them In Store</Button>
        </div>

        <div className="relative mx-auto aspect-[549/708] w-full max-w-[320px] sm:max-w-[400px]">
          <Image
            src="/images/product image + logos.svg"
            alt="Mighty Patch packaging and features"
            fill
            sizes="(max-width: 640px) 80vw, 400px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}