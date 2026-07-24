"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "From the moment we arrived, everything felt comfortable and relaxed. There was no pressure to perform — just space to be ourselves.",
    name: "Sarah",
    session: "Family Session",
  },
  {
    quote:
      "There is such a safe, warm and beautiful aura to every session. You feel instantly at ease, like you're among friends.",
    name: "Felicity",
    session: "Maternity Session",
  },
  {
    quote:
      "The photos captured exactly who we are. Gentle guidance, beautiful light, and memories we'll treasure for a lifetime.",
    name: "James & Emma",
    session: "Wedding Session",
  },
  {
    quote:
      "Absolutely magical! Ruvani has an incredible gift for catching those fleeting, authentic smiles that I thought were impossible to photograph.",
    name: "Chloe",
    session: "Newborn Session",
  },
  {
    quote:
      "The entire experience was seamless and joyous. The final gallery brought tears to my eyes. A true artist behind the lens.",
    name: "Olivia & Mark",
    session: "Milestones Session",
  },
  {
    quote:
      "I was so nervous about being in front of the camera, but she made me feel beautiful and empowered. The maternity photos are stunning.",
    name: "Jessica",
    session: "Maternity Session",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-cream py-24 md:py-32">
      <h2 className="text-center font-heading text-4xl font-normal text-espresso md:text-5xl lg:text-6xl">
        Kind Words
      </h2>

      {/* Marquee Container */}
      <div className="relative mx-auto mt-16 max-w-[100vw] overflow-hidden md:mt-24">
        {/* Fading edges for the cinematic look */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent sm:w-48" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent sm:w-48" />

        <motion.div
          className="flex w-max items-start"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Render the list twice to create a seamless infinite scroll loop */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="flex w-[85vw] max-w-[420px] shrink-0 flex-col items-center px-8 text-center sm:w-[50vw] md:w-[33vw] lg:w-[450px]"
            >
              <Quote
                className="mb-8 h-10 w-10 text-taupe md:h-12 md:w-12"
                strokeWidth={1}
                aria-hidden
              />
              <blockquote className="font-body text-base leading-loose text-espresso/75 md:text-[1.05rem]">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-8 flex flex-col items-center">
                <div className="mb-3 h-px w-6 bg-wicker" />
                <p className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-espresso/50">
                  {testimonial.name}
                  <span className="mx-2 opacity-40">·</span>
                  {testimonial.session}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
