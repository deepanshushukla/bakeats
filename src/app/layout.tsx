import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bakeats - Premium Biscuits & Rusks",
  description: "Discover premium rusks and biscuits at Bakeats. Handcrafted with love and quality ingredients.",
  icons: {
    icon: "/bakeats-logo.png",
  },
  keywords: "rusks, biscuits, premium baked goods, artisanal cookies, online bakery",
  authors: [{ name: "Bakeats" }],
  creator: "Bakeats",
  publisher: "Bakeats",
  robots: "index, follow",
  openGraph: {
    title: "Bakeats - Premium Biscuits & Rusks",
    images: [
      {
        url: "/bakeats-logo.png",
        width: 1200,
        height: 630,
        alt: "Bakeats Logo - Premium Bakery and Baking Company",
      },
    ],
    description: "Discover premium rusks and biscuits at Bakeats. Handcrafted with love and quality ingredients.",
    url: "https://www.bakeats.in",
    siteName: "Bakeats",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakeats - Premium Biscuits & Rusks",
    description: "Discover premium rusks and biscuits at Bakeats. Handcrafted with love and quality ingredients.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <div className="min-h-screen relative">
          <Navigation />
          {children}
          <WhatsAppButton position="fixed" className="z-50" />
        </div>
      </body>
    </html>
  );
}
