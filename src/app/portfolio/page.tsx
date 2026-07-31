"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { portfolio } from "@/config/mediaConfig";

// ─── Build the category cards array ──────────────────────────────
const categories = [
  {
    id: "maternity",
    title: "Maternity",
    cover: portfolio.maternity.cover,
    gallery: portfolio.maternity.gallery,
  },
  {
    id: "newborn",
    title: "Newborn",
    cover: portfolio.newborn.cover,
    gallery: portfolio.newborn.gallery,
  },
  {
    id: "family",
    title: "Family",
    subtitle: "Because today's moments become tomorrow's most treasured memories.",
    cover: portfolio.family.cover,
    gallery: portfolio.family.gallery,
  },
  {
    id: "milestones",
    title: "Milestones",
    cover: portfolio.milestones.cover,
    gallery: portfolio.milestones.gallery,
  },
] as const;

// ─── Filter categories ────────────────────────────────────────────
const FILTERS = ["Maternity", "Newborn", "Family", "Milestones"] as const;
type Filter = (typeof FILTERS)[number];

// ─── Dynamic Full Gallery ─────────────────────────────────────────
const buildCategoryImages = (
  category: "Maternity" | "Newborn" | "Family" | "Milestones",
  cover: string,
  gallery: readonly string[]
) => {
  const allSources = gallery.includes(cover) ? [...gallery] : [cover, ...gallery];
  return allSources.map((src, i) => ({
    id: `${category.toLowerCase()}-${i + 1}`,
    category,
    src,
    alt: `${category} gallery image ${i + 1}`,
  }));
};

const GALLERY = [
  ...buildCategoryImages("Maternity", portfolio.maternity.cover, portfolio.maternity.gallery),
  ...buildCategoryImages("Newborn", portfolio.newborn.cover, portfolio.newborn.gallery),
  ...buildCategoryImages("Family", portfolio.family.cover, portfolio.family.gallery),
  ...buildCategoryImages("Milestones", portfolio.milestones.cover, portfolio.milestones.gallery),
];

// ─── Shared motion variants ───────────────────────────────────────
const itemVariants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  exit:    { opacity: 0, scale: 0.90, transition: { duration: 0.25, ease: "easeIn" as const } },
};

export default function PortfolioPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>("Maternity");

  const activeModalCategory = categories.find((c) => c.id === selectedId);

  // Lock background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = selectedId ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  const filteredImages = GALLERY.filter((img) => img.category === activeFilter);

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

      {/* ── Filter navigation (4 Core Categories ONLY) ── */}
      <motion.nav
        className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3"
        aria-label="Portfolio filter"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body relative pb-1.5 text-[0.75rem] uppercase tracking-[0.3em] transition-all duration-300 ${
                isActive
                  ? "font-semibold text-wicker"
                  : "text-espresso/60 hover:text-espresso/90"
              }`}
            >
              {filter}
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
        <motion.div
          layout
          className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedId(img.category.toLowerCase())}
                className="group mb-5 break-inside-avoid overflow-hidden rounded-sm bg-espresso/5 cursor-pointer"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={1200}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-cream/0 transition-all duration-500 group-hover:bg-cream/10" />
                </div>
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

        {filteredImages.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-body text-sm text-espresso/40">
              No images in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* ── Interactive Category Modal ── */}
      <AnimatePresence>
        {selectedId && activeModalCategory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-cream/90 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-taupe/80 text-espresso shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-taupe focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso/40"
              aria-label="Close gallery"
            >
              <X strokeWidth={1.5} className="h-6 w-6" />
            </button>

            <div className="relative h-full w-full max-w-7xl overflow-y-auto rounded-xl">
              <div className="mx-auto max-w-6xl py-12 md:py-20">
                <h3 className="font-heading mb-12 text-center text-4xl text-espresso md:text-5xl lg:mb-20">
                  {activeModalCategory.title}
                </h3>
                <div className="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3 lg:gap-8 lg:space-y-8">
                  {activeModalCategory.gallery.map((img, idx) => (
                    <motion.div
                      key={img}
                      className="relative overflow-hidden rounded-md bg-espresso/5"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: Math.min(idx * 0.05, 0.4),
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${activeModalCategory.title} gallery image ${idx + 1}`}
                        width={800}
                        height={1200}
                        className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
