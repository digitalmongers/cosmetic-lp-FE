import Image from "next/image";
import Link from "next/link";

export function ProductFinder() {
  return (
    <section id="products" className="relative w-full overflow-hidden bg-[#152238]">
      <Link href="#footer" className="block w-full">
        <div className="relative w-full min-h-[200px] aspect-[16/9] sm:aspect-[1440/608]">
          <Image
            src="/images/Frame 25.svg"
            alt="Find your perfect patch - Take our quiz"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </Link>
    </section>
  );
}