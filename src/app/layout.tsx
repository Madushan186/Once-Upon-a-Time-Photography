import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import Navigation from "@/components/Navigation";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Once Upon a Time Photography by Ruvani",
  description:
    "Guided photoshoots from bump to beyond. Capturing magical memories for memory keepers and feeling chasers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      {/* Navigation is fixed/floating — no margin needed on main */}
      {/* body transparent so the fixed GlobalBackground beach layer shows through */}
      <body className="min-h-screen bg-transparent">
        {/* Sits at -z-50 behind everything — animated beach tide */}
        <GlobalBackground />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
