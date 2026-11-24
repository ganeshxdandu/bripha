import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRIPHA | Pharmaceutical Contract Development & Manufacturing (CDMO)",
  description:
    "You Bring The Product | We Build What's Behind It. World-class pharmaceutical contract manufacturing and formulation development for tablets, liquid orals, and semisolids.",
  keywords: [
    "BRIPHA",
    "Pharmaceutical Manufacturing",
    "CDMO",
    "Contract Manufacturing",
    "Tablets",
    "Liquid Orals",
    "Semisolids",
    "WHO-GMP",
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit text-neutral-800 bg-white antialiased text-[16px] tracking-tight">
        {children}
      </body>
    </html>
  );
}
