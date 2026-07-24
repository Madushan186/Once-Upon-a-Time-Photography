"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/navigation";
import { navbar } from "@/config/mediaConfig";

// DESIGN TOKENS
const TOKENS = {
  espressoWood: "#2E2015",
  walnutMocha: "#6B5642",
  wickerTan: "#C7A374",
  knitOat: "#D8CBB4",
  floralCream: "#F3EEE1",
  clayAccent: "#B8875C",
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Trigger state change immediately upon scrolling past the hero
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60 && !scrolled) setScrolled(true);
    else if (latest <= 60 && scrolled) setScrolled(false);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-6 z-50 mx-auto w-full max-w-5xl px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="relative">
        <motion.div
          className="w-full overflow-hidden rounded-full backdrop-blur-[6px]"
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? `rgba(243, 238, 225, 1)` // Solid floral-cream
              : `rgba(46, 32, 21, 0.6)`, // Translucent espresso-wood
            borderColor: scrolled
              ? `rgba(199, 163, 116, 1)` // Solid wicker-tan
              : `rgba(216, 203, 180, 0.35)`, // Translucent knit-oat
            borderWidth: scrolled ? "1px" : "0.5px",
            boxShadow: scrolled
              ? `0 4px 18px rgba(46, 32, 21, 0.35)`
              : `0 0px 0px rgba(46, 32, 21, 0)`,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ borderStyle: "solid" }}
        >
          <nav
            className="mx-auto flex w-full items-center justify-between px-8 py-3"
            aria-label="Main navigation"
          >
            {/* ── Brand Logo ── */}
            <Link
              href="/"
              className="shrink-0 transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A374]"
              aria-label="Once Upon a Time Photography — home"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={navbar.logo}
                alt="Once Upon a Time Photography logo"
                width={1024}
                height={292}
                priority
                className="h-[3.25rem] w-auto transition-all duration-300 md:h-[4rem]"
                style={{
                  filter: scrolled 
                    ? "brightness(0) saturate(100%) invert(35%) sepia(20%) saturate(692%) hue-rotate(345deg) brightness(94%) contrast(85%)" 
                    : "brightness(0) saturate(100%) invert(95%) sepia(9%) saturate(416%) hue-rotate(338deg) brightness(101%) contrast(92%)",
                }}
              />
            </Link>

            {/* ── Desktop navigation ── */}
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="group relative">
                  <Link
                    href={href}
                    className="font-body text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[#C7A374]"
                    style={{
                      color: scrolled ? TOKENS.walnutMocha : TOKENS.knitOat,
                    }}
                  >
                    {label}
                  </Link>
                  {/* Hover Underline Animation */}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-[#C7A374] transition-transform duration-200 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>

            {/* ── Mobile hamburger ── */}
            <button
              type="button"
              className="flex flex-col gap-[5px] p-2 md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span
                className={`block h-[1.5px] w-6 transition-all duration-300 ${
                  isOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
                style={{ backgroundColor: scrolled ? TOKENS.walnutMocha : TOKENS.knitOat }}
              />
              <span
                className={`block h-[1.5px] w-6 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
                style={{ backgroundColor: scrolled ? TOKENS.walnutMocha : TOKENS.knitOat }}
              />
              <span
                className={`block h-[1.5px] w-6 transition-all duration-300 ${
                  isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
                style={{ backgroundColor: scrolled ? TOKENS.walnutMocha : TOKENS.knitOat }}
              />
            </button>
          </nav>
        </motion.div>

        {/* ── Mobile navigation drawer ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-[110%] w-full overflow-hidden rounded-2xl border-[0.5px] border-[#D8CBB4]/35 bg-[#2E2015]/95 backdrop-blur-[6px] md:hidden"
            >
              <ul className="flex flex-col px-6 py-4">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block py-3 font-body text-[11px] uppercase tracking-[0.2em] text-[#D8CBB4] transition-colors hover:text-[#C7A374]"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
