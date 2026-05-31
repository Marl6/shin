import type { Metadata } from "next";
import { Libre_Caslon_Text, Outfit, Playfair_Display } from "next/font/google";

import GrainOverlay from "@/components/layout/GrainOverlay";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNav from "@/components/layout/SiteNav";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caslon",
});

export const metadata: Metadata = {
  title: "John C. Shin",
  description:
    "Official portfolio of Sir John C. Shin, author, entrepreneur, executive producer, and philanthropist.",
  icons: {
    icon: "/johnshinlogo.png",
    apple: "/johnshinlogo.png",
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
      className={`${playfair.variable} ${outfit.variable} ${caslon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <GrainOverlay />
        <SiteNav />
        <main className="flex-1 pt-24 md:pt-32">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
