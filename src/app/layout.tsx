import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// default font for next.js
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Montserrat for the bold branding text
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// 2. Great Vibes for the "Cleaning Services" script text
const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Maid to Perfection",
  description: "Professional cleaning services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${greatVibes.variable} antialiased min-h-screen relative`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Img/bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
