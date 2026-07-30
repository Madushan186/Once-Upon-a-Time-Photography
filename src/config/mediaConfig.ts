/**
 * ─────────────────────────────────────────────────────────────────
 *  SITE MEDIA CONFIGURATION
 *  Once Upon a Time Photography by Ruvani
 * ─────────────────────────────────────────────────────────────────
 *
 *  HOW TO UPDATE AN IMAGE
 *  1. Find the key below that matches the part of the site you want
 *     to update (e.g. `hero.background`, `portfolio.newborn`).
 *  2. Copy your real .jpg file into  /public/images/
 *     using the exact filename listed here.
 *  3. Save — no other code changes needed anywhere in the app.
 *
 *  All paths are served from the /public folder, so Next.js will
 *  optimise, resize, and cache them automatically via next/image.
 * ─────────────────────────────────────────────────────────────────
 */

export const siteMedia = {
  // ── Global Background ───────────────────────────────────────
  global: {
    /**
     * Full-screen ambient background shown behind every page.
     * The GlobalBackground component applies a heavy beige overlay
     * so this image becomes a soft, calming texture.
     * File location: /public/images/global/beach-bg.jpg
     */
    background: "/images/global/window-shadow-bg.jpg",
  },

  // ── Global / Navbar ───────────────────────────────────────────
  navbar: {
    /**
     * Primary brand logo shown in the navigation bar.
     * Save the file at:  /public/images/logo-black.png
     * Recommended: PNG with transparent background, ≥ 400 px wide.
     */
    logo: "/images/logo-black.png",
  },

  // ── Hero Section ──────────────────────────────────────────────
  hero: {
    /**
     * Cinematic full-screen background image.
     * Ensure the source file is high-res (≥ 2400 px wide) for crisp display.
     */
    background: "/images/hero/hero-bg.jpg",
  },

  // ── Services / Session-type cards ─────────────────────────────
  services: {
    /** Thumbnail shown on the "Newborns" session card.
     *  Recommended: portrait 3:4, ≥ 800 × 1067 px */
    newborn: "/images/services-newborn.jpg",

    /** Thumbnail shown on the "Maternity" session card.
     *  Recommended: portrait 3:4, ≥ 800 × 1067 px */
    maternity: "/images/services-maternity.jpg",

    /** Thumbnail shown on the "Family" session card.
     *  Recommended: portrait 3:4, ≥ 800 × 1067 px */
    family: "/images/services-family.jpg",

    /** Thumbnail shown on the "Weddings" session card.
     *  Recommended: portrait 3:4, ≥ 800 × 1067 px */
    weddings: "/images/services-weddings.jpg",
  },

  // ── Portfolio Grid ──────────────────────────────────────────────
  portfolio: {
    /**
     * Each category has a `cover` (shown on the grid card) and a `gallery`
     * array (shown in the modal). Add or remove items from `gallery` freely.
     * All files live under /public/images/portfolio/<category>/
     */
    maternity: {
      cover:   "/images/portfolio/maternity/maternity-cover.jpg",
      gallery: [
        "/images/portfolio/maternity/maternity-1.jpg",
        "/images/portfolio/maternity/maternity-2.jpg",
        "/images/portfolio/maternity/maternity-3.jpg",
        "/images/portfolio/maternity/maternity-4.jpg",
      ],
    },
    newborn: {
      cover:   "/images/portfolio/newborn/newborn-cover.jpg",
      gallery: [
        "/images/portfolio/newborn/newborn-1.jpg",
        "/images/portfolio/newborn/newborn-2.jpg",
        "/images/portfolio/newborn/newborn-3.jpg",
        "/images/portfolio/newborn/newborn-4.jpg",
      ],
    },
    family: {
      cover:   "/images/portfolio/family/family-cover.jpg",
      gallery: [
        "/images/portfolio/family/family-1.jpg",
        "/images/portfolio/family/family-2.jpg",
        "/images/portfolio/family/family-3.jpg",
        "/images/portfolio/family/family-4.jpg",
        "/images/portfolio/family/family-5.jpg",
        "/images/portfolio/family/family-6.jpg",
        "/images/portfolio/family/family-7.jpg",
        "/images/portfolio/family/family-8.jpg",
        "/images/portfolio/family/family-9.jpg",
        "/images/portfolio/family/family-10.jpg",
        "/images/portfolio/family/family-11.jpg",
        "/images/portfolio/family/family-12.jpg",
        "/images/portfolio/family/family-13.jpg",
        "/images/portfolio/family/family-14.jpg",
        "/images/portfolio/family/family-15.jpg",
        "/images/portfolio/family/family-16.jpg",
        "/images/portfolio/family/family-17.jpg",
        "/images/portfolio/family/family-18.jpg",
        "/images/portfolio/family/family-19.jpg",
        "/images/portfolio/family/family-20.jpg",
        "/images/portfolio/family/family-21.jpg",
        "/images/portfolio/family/family-22.jpg",
        "/images/portfolio/family/family-23.jpg",
        "/images/portfolio/family/family-24.jpg",
        "/images/portfolio/family/family-25.jpg",
        "/images/portfolio/family/family-26.jpg",
        "/images/portfolio/family/family-27.jpg",
        "/images/portfolio/family/family-28.jpg",
        "/images/portfolio/family/family-29.jpg",
        "/images/portfolio/family/family-30.jpg",
      ],
    },
    milestones: {
      cover:   "/images/portfolio/milestones/milestones-cover-v2.jpg",
      gallery: [
        "/images/portfolio/milestones/milestones-1.jpg",
        "/images/portfolio/milestones/milestones-2.jpg",
        "/images/portfolio/milestones/milestones-3.jpg",
        "/images/portfolio/milestones/milestones-4.jpg",
        "/images/portfolio/birthdays/birthday-1.jpg",
        "/images/portfolio/birthdays/birthday-2.jpg",
        "/images/portfolio/birthdays/birthday-3.jpg",
      ],
    },
  },

  // ── About / Experience Section ────────────────────────────────
  about: {
    /**
     * Portrait of Ruvani shown on the About page (left sticky column).
     * Recommended: portrait 3:4, ≥ 800 × 1067 px, subject near top.
     * File location: /public/images/about/ruvani-profile.jpg
     */
    profileImage: "/images/about/ruvani-profile.jpg",
  },

  // ── Testimonials Section ──────────────────────────────────────
  testimonials: {
    /**
     * Optional decorative background or divider image behind the
     * testimonial cards. Leave as an empty string ("") to omit it.
     */
    backgroundAccent: "",
  },
} as const;

// Re-export individual sections for convenient named imports
export const { global, navbar, hero, services, portfolio, about, testimonials } = siteMedia;
