"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt = "Enlarged photo", onClose }: ImageLightboxProps) {
  // ── Keyboard accessibility (Escape key) & scroll lock ──────────
  useEffect(() => {
    if (!src) return;

    // Prevent background scrolling while zoomed
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Close on Escape key press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          key="lightbox-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/80 p-4 backdrop-blur-md md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label="Image Zoom Lightbox"
        >
          {/* ── Minimalist Close Button (Top-Right) ── */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-cream/95 text-espresso shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            aria-label="Close image zoom"
          >
            <X strokeWidth={1.5} className="h-6 w-6" />
          </button>

          {/* ── Zoomed Image Container ── */}
          <motion.div
            key="lightbox-content"
            className="relative flex items-center justify-center max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1200}
              priority
              quality={95}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
