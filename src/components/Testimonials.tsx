"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I got my family photos done by Ruvani and she have done amazing job. She is the best photographer in the town. She is very professional polite and friendly. Highly recommend.",
    name: "Harpreet Kaur",
    session: "Family Session",
  },
  {
    quote:
      "I had completed a maternity shoot with Ruvani and had a very pleasant and warm experience. Ruvani was professional, kind and I felt comfortable with her suggested poses. Her editing skills are also very impressive, my final photos were sharp and exquisite.",
    name: "Cristian A",
    session: "Maternity Session",
  },
  {
    quote:
      "We had such a lovely experience with this family business for our baby’s cake smash photoshoot! She was so flexible and accommodating throughout the whole session and made everything feel easy and relaxed. The photos turned out beautiful.",
    name: "Wathsala R",
    session: "Milestones Session",
  },
  {
    quote:
      "The service was so good and she is so humble and kind. She make sure your baby is comfortable and cozy.",
    name: "Rubby Khan",
    session: "Newborn Session",
  },
  {
    quote:
      "I am so glad that I got acquainted with Ruvani. She is a natural photographer. I was so pleased with my Maternity session and my son's cake smash shoot. She was instantly able to put my family at ease, and capture some captivating photos.",
    name: "Mishu Sareen",
    session: "Maternity & Milestones",
  },
  {
    quote:
      "Highly recommend!! I received my maternity photos today and I am beyond happy with how they turned out. Ruvani made us feel very comfortable and was patient and helpful throughout the photo shoot. You have done spectacular job.",
    name: "Vaishnavi Wassvi",
    session: "Maternity Session",
  },
  {
    quote:
      "Working with Ruvani was an absolute pleasure from start to finish. Her exceptional talent, professionalism, and dedication to her craft make her a standout choice in the world of photography. My family and I are so comfortable with Ruvani.",
    name: "R Kaur",
    session: "Family Session",
  },
  {
    quote:
      "We had our maternity photoshoot with Ruvani, she is quite humble, patient, dedicated and professional at work. Absolutely loved her photography and editing..will definitely recommend her.",
    name: "Maddy Madhvi",
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
