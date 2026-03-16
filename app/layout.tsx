import type { Metadata } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { foundationMissionStatement } from "@/data/site-content";

import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap"
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.safecrossingfoundation.org"),
  title: {
    default: "Safe Crossing Foundation",
    template: "%s | Safe Crossing Foundation"
  },
  description: foundationMissionStatement,
  openGraph: {
    title: "Safe Crossing Foundation",
    description: foundationMissionStatement,
    images: ["/images/safe-crossing-logo.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${sourceSerif.variable} bg-background text-ink`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
