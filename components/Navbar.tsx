"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/donate", label: "Donate" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6EF]/90 backdrop-blur-md shadow-sm border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="HyperEducation home"
          >
            <div className="w-8 h-8 flex-shrink-0">
              <Image
                src="/icon.png"
                alt="HyperEducation logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`font-serif text-xl font-normal tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#0D4F47]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              HyperEducation
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-stone-700 hover:text-[#0D4F47] hover:bg-[#0D4F47]/6"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/apply"
              id="nav-apply-cta"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full active:scale-95 transition-all duration-200 ${
                scrolled
                  ? "bg-[#0D4F47] text-[#FAF6EF] hover:bg-[#136058] shadow-sm"
                  : "bg-[#E8890C] text-white hover:bg-[#edA030]"
              }`}
            >
              Apply now
            </Link>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-stone-700 hover:bg-stone-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                {mobileOpen ? (
                  <>
                    <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#FAF6EF]/95 backdrop-blur-md border-b border-stone-200"
          >
            <nav className="px-6 pb-6 pt-2 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-stone-700 hover:text-[#0D4F47] hover:bg-[#0D4F47]/6 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-[#0D4F47] text-[#FAF6EF] text-sm font-semibold rounded-xl text-center"
              >
                Apply now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
