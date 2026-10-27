"use client";

import Link from "next/link";

const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "Mighty Patch", href: "#products" },
      { label: "Best Sellers", href: "#products" },
      { label: "All Products", href: "#products" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "mailto:hello@example.com" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-[#191919] px-5 py-10 text-white sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-1">
            <Link href="#" className="inline-block">
              <span className="text-3xl font-black uppercase sm:text-6xl">
                MIGHTY
              </span>
              <br />
              <span className="text-2xl font-bold tracking-wider sm:text-5xl">
                PATCH <span className="text-white/60 font-normal">by Hero.</span>
              </span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-5 text-white/50">
              Your skincare routine, with a little extra confidence.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/80">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Mighty Patch by Hero Cosmetics. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://digitalmongers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 transition-colors hover:underline"
            >
              Digital Mongers Softech
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}