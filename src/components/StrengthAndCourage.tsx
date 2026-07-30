"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function StrengthAndCourage() {
  return (
    <section className="bg-[#EAE3D5]/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ── Left Column: Portrait Image ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full overflow-hidden rounded-md bg-espresso/5 shadow-sm"
          >
            <div className="aspect-[4/5] w-full">
              <Image
                src="/images/portfolio/strength-and-courage/strength-cover.jpg"
                alt="Strength & Courage Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* ── Right Column: The Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-heading mb-8 text-3xl font-normal leading-tight text-espresso md:text-4xl lg:text-5xl">
              Strength &amp; Courage<br />Portrait Sessions
            </h2>

            <div className="font-body space-y-6 text-[0.85rem] leading-relaxed text-espresso/80 md:text-[0.95rem]">
              <p>
                A cancer journey is filled with challenges, courage, hope, and incredible strength. These portrait sessions are created to honour your story, celebrate your resilience, and capture the remarkable person behind the diagnosis.
              </p>

              <p>
                Using natural light and contemporary portraiture, my goal is to create timeless, heartfelt images that reflect who you are not your illness. These photographs become treasured keepsakes for you and your loved ones, preserving your strength, hope, and the love that surrounds you.
              </p>

              <p>
                Giving back through photography is something deeply meaningful to me. As someone whose family has been personally touched by cancer, I understand how precious photographs become. It is my privilege to offer a complimentary Resilience Portrait Session for individuals who are currently undergoing treatment or are recovering from cancer.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-heading mb-6 text-xl text-espresso">What&apos;s Included</h3>
              <ul className="space-y-4">
                {[
                  "30-minute portrait session",
                  "5 professionally edited high-resolution digital images",
                  "Private online gallery for viewing and downloading your images",
                  "A relaxed, supportive, and compassionate experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-wicker/50 text-wicker">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm text-espresso/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-heading mt-10 text-lg italic text-espresso/90">
              &quot;It is truly an honour to be trusted with your story. I look forward to creating beautiful images that reflect your courage, resilience, and the person you are beyond cancer.&quot;
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full border border-espresso/20 bg-transparent px-8 py-3 text-[0.7rem] uppercase tracking-widest text-espresso transition-all hover:border-espresso/40 hover:bg-espresso/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso/40"
              >
                Inquire About a Session
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
