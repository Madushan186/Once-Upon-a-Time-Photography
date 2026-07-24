"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { global as globalMedia } from "@/config/mediaConfig";

/**
 * GlobalBackground
 * ─────────────────────────────────────────────────────────────────
 * Renders the window-shadow JPEG in a fixed full-screen layer
 * behind every page (-z-50).
 *
 * "Moving Sun" animation — a 45-second drifting pan + subtle scale
 * that makes the shadow feel like natural sunlight slowly shifting
 * across a real wall. The motion is barely perceptible on first
 * glance but creates a living, organic texture behind your content.
 *
 * A semi-transparent cream wash (cream / 65%) sits over the image
 * to blend the JPEG's own tones with the site's design system and
 * keep all dark typography 100% crisp.
 */
export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 h-screen w-screen overflow-hidden"
    >
      {/* ── The drifting window-shadow image ── */}
      <motion.div
        className="absolute inset-0 h-full w-full"
        animate={{
          scale: [1, 1.08, 1],
          x: ["0%", "-1.5%", "1%", "0%"],
          y: ["0%", "1.5%", "-1%", "0%"],
        }}
        transition={{
          duration: 45,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src={globalMedia.background}
          alt="Soft window shadow on a beige wall — ambient background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Brand-colour wash overlay ──────────────────────────────
          65% opacity blends the JPEG's natural tones with cream,
          unifying it with every UI component while keeping shadows
          subtly visible as organic ambient texture.               */}
      <div className="absolute inset-0 bg-cream/65" />
    </div>
  );
}
