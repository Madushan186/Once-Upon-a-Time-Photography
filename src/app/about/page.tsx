"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/config/mediaConfig";

// ─── Reusable scroll-triggered fade-up wrapper ───────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen pt-24 pb-32">
      {/* ── Page header ── */}
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <FadeUp>
          <p className="font-body mb-3 text-[0.65rem] uppercase tracking-[0.4em] text-espresso/40">
            About
          </p>
          <h1 className="font-heading text-4xl font-normal leading-tight tracking-tight text-espresso md:text-5xl lg:text-6xl">
            Get to Know Me
          </h1>
          {/* Taupe divider */}
          <div className="mt-6 h-px w-12 bg-oat" />
        </FadeUp>
      </div>

      {/* ── Two-column editorial layout ── */}
      <div className="mx-auto mt-16 max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* ── Left: Sticky portrait ── */}
          <div className="md:sticky md:top-28 md:self-start">
            <FadeUp>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg shadow-espresso/8">
                <Image
                  src={about.profileImage}
                  alt="Portrait of Ruvani, photographer at Once Upon a Time Photography"
                  fill
                  priority
                  quality={90}
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle warm vignette at the bottom */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(243,238,225,0.25) 100%)",
                  }}
                />
              </div>

              {/* Decorative caption below image */}
              <p className="mt-4 text-center font-body text-[0.6rem] uppercase tracking-[0.35em] text-espresso/40">
                Ruvani&nbsp;·&nbsp;Pakenham, Melbourne
              </p>
            </FadeUp>
          </div>

          {/* ── Right: The story ── */}
          <div className="flex flex-col">

            {/* Introduction Lead */}
            <FadeUp delay={0.1}>
              <h2 className="font-heading text-2xl font-normal leading-relaxed tracking-wide text-espresso md:text-3xl lg:leading-snug">
                Hello and welcome! I&apos;m{" "}
                <span className="italic text-clay">Ruvani</span>, a natural
                light photographer based in Pakenham, Melbourne.
              </h2>
            </FadeUp>

            <FadeUp delay={0.12} className="mt-6">
              <p className="font-body text-base leading-loose text-espresso/70 md:text-[1.05rem]">
                My passion for photography began after becoming a mother. As my
                children grew, I wanted to capture every smile, milestone, and
                precious moment. What started as a way to preserve memories for
                my own family soon became a passion for helping other families
                capture theirs.
              </p>
            </FadeUp>

            {/* ── My Story ── */}
            <FadeUp delay={0.14} className="mt-14">
              <h3 className="font-heading text-2xl font-normal tracking-tight text-espresso md:text-3xl">
                My Story
              </h3>
              <div className="mt-3 h-px w-8 bg-oat" />
            </FadeUp>

            <FadeUp delay={0.16} className="mt-7">
              <p className="font-body text-base leading-loose text-espresso/70 md:text-[1.05rem]">
                When I&apos;m not behind the camera, I&apos;m a wife, a proud
                mother, and a devoted dog mum to our Golden Retriever. Alongside
                my photography business, I work as a Casual Relief Teacher (CRT)
                in Special Development Schools and as an NDIS Support Worker.
                Working with children and individuals of all abilities has
                strengthened my patience, compassion, and understanding that
                every person and every family is unique.
              </p>
            </FadeUp>

            <FadeUp delay={0.16} className="mt-7">
              <p className="font-body text-base leading-loose text-espresso/70 md:text-[1.05rem]">
                These experiences have taught me the importance of creating a
                calm, welcoming, and inclusive environment where everyone feels
                comfortable. Whether your little one is full of energy, shy, or
                has additional needs, I take the time to help everyone relax so
                genuine smiles and heartfelt moments can naturally unfold.
              </p>
            </FadeUp>

            {/* ── My Approach ── */}
            <FadeUp delay={0.18} className="mt-14">
              <h3 className="font-heading text-2xl font-normal tracking-tight text-espresso md:text-3xl">
                My Approach
              </h3>
              <div className="mt-3 h-px w-8 bg-oat" />
            </FadeUp>

            <FadeUp delay={0.2} className="mt-7">
              <p className="font-body text-base leading-loose text-espresso/70 md:text-[1.05rem]">
                Photography is so much more than taking beautiful pictures, it's
                about preserving genuine connections, real emotions, and the
                moments that tell your family&apos;s story. My style is natural,
                relaxed, and timeless. I love using beautiful natural light to
                create authentic images that you&apos;ll treasure for
                generations.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="mt-7">
              <p className="font-body text-base leading-loose text-espresso/70 md:text-[1.05rem]">
                As a mum myself, I understand just how quickly little ones grow.
                That&apos;s why I create a fun, stress-free experience where
                families can simply enjoy being together while I capture the
                memories that matter most. Whether you&apos;re celebrating a
                pregnancy, welcoming a newborn, gathering your family together,
                or marking a special milestone, I would be honoured to capture
                this chapter of your story.
              </p>
            </FadeUp>

            {/* ── Closing quote ── */}
            <FadeUp delay={0.25} className="mt-14">
              <blockquote className="border-l-2 border-oat pl-6">
                <p className="font-heading text-xl font-normal italic leading-relaxed tracking-wide text-espresso/60 md:text-2xl">
                  &ldquo;Thank you for stopping by. I can&apos;t wait to meet
                  you and create beautiful memories you&apos;ll cherish for
                  years to come.&rdquo;
                </p>
                <footer className="mt-4 font-body text-[0.65rem] uppercase tracking-[0.35em] text-espresso/40">
                  — Ruvani
                </footer>
              </blockquote>
            </FadeUp>

            {/* ── CTA ── */}
            <FadeUp delay={0.3} className="mt-16">
              <Link
                href="/contact"
                className="font-body group inline-flex items-center gap-3 border-b border-espresso/30 pb-1 text-[0.75rem] uppercase tracking-[0.3em] text-espresso/65 transition-all duration-300 hover:border-espresso/65 hover:text-espresso"
              >
                Get in Touch
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </FadeUp>

          </div>
        </div>
      </div>
    </main>
  );
}
