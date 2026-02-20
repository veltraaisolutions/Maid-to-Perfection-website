"use client";

import React, { useState } from "react";
import {
  Phone,
  Info,
  Image as ImageIcon,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Shiny gold gradient utility string
  const shinyGoldGradient =
    "bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] via-[#b38728] via-[#fbf5b7] to-[#aa771c] bg-clip-text text-transparent";

  const navLinks = [
    { href: "/", label: "Home", icon: null },
    { href: "/about", label: "About", icon: <Info size={14} /> },
    { href: "/gallery", label: "Portfolio", icon: <ImageIcon size={14} /> },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-black/95 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/Img/logo/logo.jpeg"
              alt="Maid To Perfection Logo"
              fill
              className="object-contain"
              priority
              sizes="48px"
            />
          </div>

          <div className="flex flex-col justify-center">
            {/* Main Title */}
            <h1
              className={`text-[10px] md:text-sm font-black tracking-[0.1em] leading-none uppercase italic ${shinyGoldGradient}`}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Maid To Perfection
            </h1>

            {/* Subtitle  */}
            <p
              className={`text-base md:text-xl ${shinyGoldGradient}`}
              style={{
                fontFamily: "var(--font-great-vibes)",
                marginTop: "5px",
                lineHeight: "1.2",
                paddingLeft: "2px",
                paddingBottom: "4px",
              }}
            >
              Cleaning Services
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:07340519197"
            className="hidden lg:flex items-center gap-2 text-[10px] font-bold tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 text-white hover:border-[#D4AF37]/50 transition-all"
          >
            <Phone
              size={12}
              className="text-[#D4AF37]"
            />
            07340519197
          </a>

          <Link
            href="/#quote"
            className="hidden sm:block bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full shadow-lg shadow-[#D4AF37]/20 hover:bg-[#C5A028] active:scale-95 transition-all"
          >
            Get Quote
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/98 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-4 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] border-b border-white/5"
            >
              {link.icon || <Sparkles size={14} />}
              {link.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:07340519197"
              className="flex items-center justify-center gap-2 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-[#D4AF37]"
            >
              <Phone size={16} />
              07340519197
            </a>
            <Link
              href="/#quote"
              onClick={() => setIsOpen(false)}
              className="bg-[#D4AF37] text-black text-center py-4 rounded-xl font-black uppercase tracking-widest shadow-xl"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
