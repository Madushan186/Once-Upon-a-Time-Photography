"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/config/mediaConfig";

// ─── Filter categories ────────────────────────────────────────────
const FILTERS = ["All", "Maternity", "Newborn", "Family", "Milestones"] as const;
type Filter = (typeof FILTERS)[number];

// ─────────────────────────────────────────────────────────────────
//  GALLERY  —  single source of truth for all portfolio images
//
//  HOW TO ADD MORE PHOTOS:
//  1. Copy your .jpg into the matching /public/images/portfolio/<category>/ folder.
//  2. Add its path to the correct gallery[] array in mediaConfig.ts.
//  3. Append a new object here, e.g.:
//     { id: 20, category: "Maternity", src: portfolio.maternity.gallery[4], alt: "..." }
//  That’s it — the masonry grid and filter update automatically.
// ─────────────────────────────────────────────────────────────────
const GALLERY = [
  // ── Maternity ────────────────────────────────────────────
  { id: 1,  category: "Maternity" as const, src: portfolio.maternity.cover,      alt: "Maternity photography session" },
  { id: 2,  category: "Maternity" as const, src: portfolio.maternity.gallery[0],  alt: "Maternity gallery image 1" },
  { id: 3,  category: "Maternity" as const, src: portfolio.maternity.gallery[1],  alt: "Maternity gallery image 2" },
  { id: 4,  category: "Maternity" as const, src: portfolio.maternity.gallery[2],  alt: "Maternity gallery image 3" },
  { id: 5,  category: "Maternity" as const, src: portfolio.maternity.gallery[3],  alt: "Maternity gallery image 4" },
  // ── Newborn ─────────────────────────────────────────────
  { id: 6,  category: "Newborn"  as const, src: portfolio.newborn.cover,         alt: "Newborn photography session" },
  { id: 7,  category: "Newborn"  as const, src: portfolio.newborn.gallery[0],     alt: "Newborn gallery image 1" },
  { id: 8,  category: "Newborn"  as const, src: portfolio.newborn.gallery[1],     alt: "Newborn gallery image 2" },
  { id: 9,  category: "Newborn"  as const, src: portfolio.newborn.gallery[2],     alt: "Newborn gallery image 3" },
  { id: 10, category: "Newborn"  as const, src: portfolio.newborn.gallery[3],     alt: "Newborn gallery image 4" },
  // ── Family ──────────────────────────────────────────────
  { id: 11, category: "Family"   as const, src: portfolio.family.cover,          alt: "Family photography session" },
  { id: 12, category: "Family"   as const, src: portfolio.family.gallery[0],      alt: "Family gallery image 1" },
  { id: 13, category: "Family"   as const, src: portfolio.family.gallery[1],      alt: "Family gallery image 2" },
  { id: 14, category: "Family"   as const, src: portfolio.family.gallery[2],      alt: "Family gallery image 3" },
  { id: 15, category: "Family"   as const, src: portfolio.family.gallery[3],      alt: "Family gallery image 4" },
  // ── Milestones ─────────────────────────────────────────
  { id: 16, category: "Milestones" as const, src: portfolio.milestones.cover,     alt: "Milestone photography session" },
  { id: 17, category: "Milestones" as const, src: portfolio.milestones.gallery[0], alt: "Milestones gallery image 1" },
  { id: 18, category: "Milestones" as const, src: portfolio.milestones.gallery[1], alt: "Milestones gallery image 2" },
  { id: 19, category: "Milestones" as const, src: portfolio.milestones.gallery[2], alt: "Milestones gallery image 3" },
  { id: 20, category: "Milestones" as const, src: portfolio.milestones.gallery[3], alt: "Milestones gallery image 4" },
  { id: 21, category: "Milestones" as const, src: portfolio.milestones.gallery[4], alt: "Milestones gallery image 5" },
  { id: 22, category: "Milestones" as const, src: portfolio.milestones.gallery[5], alt: "Milestones gallery image 6" },
  { id: 23, category: "Milestones" as const, src: portfolio.milestones.gallery[6], alt: "Milestones gallery image 7" },
];

// ─── Shared motion variants ───────────────────────────────────────
const itemVariants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.90, transition: { duration: 0.25, ease: "easeIn" } },
};

// ─── Page ─────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All"
    ? GALLERY
    : GALLERY.filter((img) => img.category === active);

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24 px-4 md:px-12">

      {/* ── Page header ── */}
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          className="font-body text-[0.62rem] uppercase tracking-[0.42em] text-espresso/45"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Once Upon a Time Photography
        </motion.p>

        <motion.h1
          className="font-heading mt-3 text-5xl font-normal text-espresso md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Portfolio
        </motion.h1>

        <motion.p
          className="font-body mt-4 text-[0.7rem] uppercase tracking-[0.35em] text-espresso/50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Moments captured, stories told.
        </motion.p>

        {/* Taupe rule */}
        <motion.div
          className="mx-auto mt-7 h-px w-10 bg-wicker"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </div>

      {/* ── Filter navigation ── */}
      <motion.nav
        className="mx-auto mt-14 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3"
        aria-label="Portfolio filter"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {FILTERS.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`font-body relative pb-1.5 text-[0.72rem] uppercase tracking-[0.3em] transition-all duration-300 ${
                isActive
                  ? "font-medium text-wicker"
                  : "text-espresso/50 hover:text-espresso/80"
              }`}
            >
              {filter}
              {/* Animated underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-[1.5px] w-full bg-wicker"
                initial={false}
                animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />
            </button>
          );
        })}
      </motion.nav>

      {/* ── Masonry grid ── */}
      <div className="mx-auto mt-14 max-w-7xl">
        {/* CSS Columns masonry */}
        <motion.div
          layout
          className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group mb-5 break-inside-avoid overflow-hidden rounded-sm bg-espresso/5"
              >
                {/* Image with hover overlay */}
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={1200}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Soft hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-cream/0 transition-all duration-500 group-hover:bg-cream/10" />
                </div>

                {/* Category tag on hover */}
                <div className="overflow-hidden">
                  <motion.p
                    className="font-body px-4 py-3 text-[0.58rem] uppercase tracking-[0.3em] text-espresso/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {img.category}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-body text-sm text-espresso/40">
              No images in this category yet.
            </p>
          </div>
        )}
      </div>

    </main>
  );
}
