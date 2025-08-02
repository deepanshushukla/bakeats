import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

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
  keywords: "rusks, biscuits, premium baked goods, artisanal cookies, online bakery",
  authors: [{ name: "Bakeats" }],
  creator: "Bakeats",
  publisher: "Bakeats",
  robots: "index, follow",
  openGraph: {
    title: "Bakeats - Premium Biscuits & Rusks",
    description: "Discover premium rusks and biscuits at Bakeats. Handcrafted with love and quality ingredients.",
    url: "https://www.bakeats.com",
    siteName: "Bakeats",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bakeats Hero Image",
      },
    ],
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
        <div className="min-h-screen">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
