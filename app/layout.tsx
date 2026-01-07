import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollObserver from "@/components/ScrollObserver";
import BackgroundBeams from "@/components/BackgroundBeams";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hazine - Omni-channel Inventory & Sales Management",
  description: "The all-in-one platform for markets and warehouses to track products and manage sales across physical stores and online channels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-gray-900 text-gray-100 font-sans`}
      >
        <ScrollObserver />
        <BackgroundBeams />
        {children}
      </body>
    </html>
  );
}
