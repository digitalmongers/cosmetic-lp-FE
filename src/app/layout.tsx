import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#C93837",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://cosmetic-lp-fe.vercel.app"
  ),
  title: {
    default: "Mighty Patch | Hero Cosmetics - The #1 Best-Selling Acne Patch",
    template: "%s | Hero Cosmetics",
  },
  description:
    "Pimple, meet your Mighty Patch®. The original award-winning hydrocolloid patch that visibly absorbs pimple gunk overnight. Gentle, drug-free, and suitable for sensitive skin.",
  applicationName: "Hero Cosmetics",
  authors: [{ name: "Hero Cosmetics" }],
  generator: "Next.js",
  keywords: [
    "Mighty Patch",
    "Hero Cosmetics",
    "acne patch",
    "pimple patch",
    "hydrocolloid patch",
    "blemish spot treatment",
    "overnight acne treatment",
    "skincare routine",
  ],
  creator: "Hero Cosmetics",
  publisher: "Hero Cosmetics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hero Cosmetics",
    title: "Mighty Patch | Hero Cosmetics - The #1 Best-Selling Acne Patch",
    description:
      "Pimple, meet your Mighty Patch®. Visibly absorbs pimple gunk overnight. Gentle, drug-free, and suitable for all skin types.",
    images: [
      {
        url: "/images/productimagelogos.png",
        width: 1200,
        height: 630,
        alt: "Mighty Patch by Hero Cosmetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Patch | Hero Cosmetics - The #1 Best-Selling Acne Patch",
    description:
      "Pimple, meet your Mighty Patch®. Visibly absorbs pimple gunk overnight. Gentle and suitable for sensitive skin.",
    images: ["/images/productimagelogos.png"],
    creator: "@herocosmetics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
              geistSans.variable,
              geistMono.variable
            , "font-sans", outfit.variable)}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
