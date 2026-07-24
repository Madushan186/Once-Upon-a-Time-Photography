"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/config/mediaConfig";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <>
      <section
        id="hero"
        aria-label="Hero section"
        className="relative flex min-h-screen w-full flex-col items-center justify-end pb-32 overflow-hidden"
      >
        {/* ══════════════════════════════════════════════════════════
            IMAGE LAYER
            Ultra-slow scaling effect (30s loop) for a breathing feel.
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={
            prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.05, 1] }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={hero.background}
            alt="Beautiful cinematic photography background"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>



        {/* ══════════════════════════════════════════════════════════
            REFINED BOTTOM VIGNETTE
            Removed the white wash entirely! Since the bottom of the photo 
            is naturally dark, we use a subtle dark fade to anchor the text
            and let the photography shine.
        ══════════════════════════════════════════════════════════ */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-espresso/60 to-transparent pointer-events-none"
        />

        {/* ══════════════════════════════════════════════════════════
            HERO TYPOGRAPHY
            Positioned at the bottom. Changed text to 'cream' so it pops
            beautifully against the naturally dark bottom of the photo!
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-20 flex w-full max-w-5xl flex-col items-center px-6 text-center">
          <motion.div
            className="mb-8 rounded-full bg-espresso/40 px-6 py-2 backdrop-blur-md ring-1 ring-cream/20"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body text-[0.65rem] font-medium uppercase tracking-[0.4em] text-cream drop-shadow-sm">
              specialising in newborn <span className="mx-1 opacity-60">|</span> family <span className="mx-1 opacity-60">|</span> maternity
            </p>
          </motion.div>

          <motion.h1
            className="font-heading mb-12 text-[2.4rem] font-normal leading-[1.3] text-cream drop-shadow-lg md:text-[3.5rem] lg:text-[4rem] max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Artful, honest photography for your family.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="font-body inline-block bg-clay px-10 py-4 text-[0.75rem] uppercase tracking-[0.25em] text-white transition-opacity duration-500 hover:opacity-85"
            >
              Let&apos;s plan your photoshoot
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          QUICK INTRO SECTION
          Seamlessly follows the hero, keeping the premium editorial feel.
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-cream py-24 px-6 relative z-20 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <motion.h2 
            className="font-heading text-2xl md:text-3xl text-espresso mb-6 font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m Ruvani, the one behind the camera.
          </motion.h2>
          
          <motion.p 
            className="font-body text-espresso/80 text-sm md:text-base leading-relaxed mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am a natural light photographer passionate about capturing the fleeting, beautiful chaos of family life. From the first kicks of maternity to the joyful chaos of birthdays, I create timeless, organic artwork of your most cherished milestones.
          </motion.p>
        </div>

        {/* Minimalist category menu */}
        <motion.div 
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-body text-[0.65rem] uppercase tracking-[0.4em] text-espresso/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link href="/portfolio#maternity" className="hover:text-espresso transition-colors duration-300">m a t e r n i t y</Link>
          <span className="opacity-40">|</span>
          <Link href="/portfolio#newborn" className="hover:text-espresso transition-colors duration-300">n e w b o r n</Link>
          <span className="opacity-40">|</span>
          <Link href="/portfolio#family" className="hover:text-espresso transition-colors duration-300">f a m i l y</Link>
          <span className="opacity-40">|</span>
          <Link href="/portfolio#birthdays" className="hover:text-espresso transition-colors duration-300">b i r t h d a y s</Link>
        </motion.div>
      </section>
    </>
  );
}
