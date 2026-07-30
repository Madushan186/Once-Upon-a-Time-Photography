"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { portfolio } from "@/config/mediaConfig";

// ─── Build the categories array from mediaConfig ─────────────────
// This is the ONLY place you need to touch if you want to rename or
// reorder categories. The images themselves live in mediaConfig.ts.
interface Category {
  id: string;
  title: string;
  subtitle?: string;
  cover: string;
  gallery: readonly string[];
}

const categories: Category[] = [
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
    cover: portfolio.family.cover,
    gallery: portfolio.family.gallery,
  },
  {
    id: "milestones",
    title: "Milestones",
    cover: portfolio.milestones.cover,
    gallery: portfolio.milestones.gallery,
  },
];

// ─── Component ───────────────────────────────────────────────────
export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const active = categories.find((c) => c.id === selectedId);

  // Lock background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = selectedId ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  return (
    <section className="bg-background py-24">

      {/* ── Section Header ── */}
      <div className="mx-auto flex flex-col items-center px-6 text-center">
        <h2 className="font-heading text-4xl font-normal text-espresso md:text-5xl lg:text-6xl">
          Where We Both Begin
        </h2>
        <p className="font-body mt-4 text-[0.65rem] uppercase tracking-[0.4em] text-espresso/60">
          Guided photoshoots from bump to beyond
        </p>
      </div>

      {/* ── Category Grid ── */}
      <div className="mx-auto mt-20 max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedId(category.id)}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-espresso/10 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso/40"
              aria-label={`View ${category.title} gallery`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-espresso/5">
                <motion.div
                  className="absolute inset-0 h-full w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={category.cover}           // ← portfolio.<cat>.cover
                    alt={`${category.title} photography cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </motion.div>
              </div>

              {/* Category label */}
              <h3 className="font-heading mt-6 text-xl font-normal lowercase tracking-wide text-espresso transition-colors group-hover:text-espresso/70">
                {category.title}
              </h3>
              {"subtitle" in category && category.subtitle && (
                <p className="font-body mt-2 text-[0.65rem] leading-relaxed text-espresso/50">
                  {category.subtitle}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Interactive Gallery Modal ── */}
      <AnimatePresence>
        {selectedId && active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-cream/90 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-taupe/80 text-espresso shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-taupe focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso/40"
              aria-label="Close gallery"
            >
              <X strokeWidth={1.5} className="h-6 w-6" />
            </button>

            {/* Scrollable modal body */}
            <div className="relative h-full w-full max-w-7xl overflow-y-auto rounded-xl">
              <div className="mx-auto max-w-6xl py-12 md:py-20">

                {/* Modal heading */}
                <h3 className="font-heading mb-12 text-center text-4xl text-espresso md:text-5xl lg:mb-20">
                  {active.title}
                </h3>

                {/* CSS Columns masonry grid */}
                <div className="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3 lg:gap-8 lg:space-y-8">
                  {active.gallery.map((img, idx) => (   // ← portfolio.<cat>.gallery
                    <motion.div
                      key={img}
                      className="relative overflow-hidden rounded-md bg-espresso/5"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${active.title} gallery image ${idx + 1}`}
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
    </section>
  );
}
