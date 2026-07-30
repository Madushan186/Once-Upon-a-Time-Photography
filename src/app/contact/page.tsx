"use client";

import { motion, useInView } from "framer-motion";
import { useRef, FormEvent, useState } from "react";
import { MapPin, Mail, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { sessionTypes } from "@/lib/navigation";

// ─── Scroll-triggered fade-up wrapper ────────────────────────────
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

// ─── Inline brand SVGs (lucide-react removed brand icons in v1) ──
function InstagramSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ─── Contact details data ─────────────────────────────────────────
const contactDetails: Array<{
  Icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}> = [
  { Icon: MapPin, label: "Location", value: "Pakenham, Victoria 3810" },
  { Icon: Mail,   label: "Email",    value: "niwanthi_r@hotmail.com",  href: "mailto:niwanthi_r@hotmail.com" },
  { Icon: Phone,  label: "Phone",    value: "0425 790 079",            href: "tel:+61425790079" },
];

// ─── Form input shared style ──────────────────────────────────────
const field =
  "w-full border-0 border-b border-[oat] bg-transparent py-3 text-[espresso] placeholder:text-[espresso]/35 transition-colors duration-200 focus:border-[espresso] focus:outline-none text-sm";

// ─────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[cream] pt-24 pb-32">
      {/* ── Page header ── */}
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <FadeUp>
          <p className="font-body mb-3 text-[0.62rem] uppercase tracking-[0.42em] text-[espresso]/40">
            Let&apos;s Connect
          </p>
          <h1 className="font-heading text-4xl font-normal leading-tight tracking-tight text-[espresso] md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <div className="mt-5 h-px w-10 bg-[oat]" />
        </FadeUp>
      </div>

      {/* ── Two-column layout ── */}
      <div className="mx-auto mt-16 max-w-7xl px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ════════════════════════════════════════════════════
              LEFT — Contact details
          ════════════════════════════════════════════════════ */}
          <div className="flex flex-col">

            {/* Intro */}
            <FadeUp delay={0.05}>
              <p className="font-body text-base leading-loose text-[espresso]/75 md:text-[1.05rem]">
                I&apos;d love to hear from you! Whether you&apos;re ready to
                book a session, have a question, or would simply like to chat
                about your photography ideas, I&apos;d be delighted to help.
                Please complete the contact form, and I&apos;ll get back to you
                as soon as possible. I aim to respond to all enquiries within{" "}
                <span className="font-medium text-[espresso]">24–48 hours.</span>
              </p>
            </FadeUp>

            {/* Contact info */}
            <FadeUp delay={0.1} className="mt-12">
              <ul className="space-y-6">
                {contactDetails.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    {/* Icon circle */}
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[oat] bg-[taupe]/60">
                      <Icon className="h-4 w-4 text-[espresso]/60" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-[espresso]/40">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body mt-0.5 block text-sm text-[espresso]/80 transition-colors hover:text-[espresso]"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body mt-0.5 text-sm text-[espresso]/80">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Divider */}
            <FadeUp delay={0.12} className="mt-12">
              <div className="h-px w-full bg-[oat]/60" />
            </FadeUp>

            {/* Follow Along */}
            <FadeUp delay={0.14} className="mt-10">
              <p className="font-body text-[0.62rem] uppercase tracking-[0.38em] text-[espresso]/40">
                Follow Along
              </p>
              <p className="font-body mt-3 text-sm leading-relaxed text-[espresso]/65">
                Follow me on social media to see my latest sessions, recent
                work, and special offers.
              </p>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[oat] bg-[taupe]/60 text-[espresso]/55 transition-all duration-200 hover:border-[espresso]/40 hover:text-[espresso]"
                >
                  <InstagramSVG className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[oat] bg-[taupe]/60 text-[espresso]/55 transition-all duration-200 hover:border-[espresso]/40 hover:text-[espresso]"
                >
                  <FacebookSVG className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>

            {/* Closing text */}
            <FadeUp delay={0.16} className="mt-14">
              <p className="font-heading text-lg font-normal italic leading-relaxed tracking-wide text-[espresso]/55">
                &ldquo;Thank you for considering Once Upon a Time Photography by
                Ruvani. I look forward to meeting you and capturing memories
                you&apos;ll treasure for a lifetime.&rdquo;
              </p>
            </FadeUp>
          </div>

          {/* ════════════════════════════════════════════════════
              RIGHT — The form
          ════════════════════════════════════════════════════ */}
          <FadeUp delay={0.18}>
            <div className="rounded-2xl bg-[taupe]/50 p-8 md:p-12">

              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  className="flex h-full min-h-[480px] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[oat] bg-[cream]">
                    <svg className="h-6 w-6 text-[espresso]/60" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-normal text-[espresso]">
                    Message Sent
                  </h2>
                  <p className="font-body mt-3 text-sm leading-relaxed text-[espresso]/60">
                    Thank you for reaching out! I&apos;ll be in touch within
                    24–48 hours.
                  </p>
                </motion.div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>

                  <div>
                    <label htmlFor="cf-name" className="block font-body text-[0.6rem] uppercase tracking-[0.3em] text-[espresso]/45">
                      Name <span aria-hidden>*</span>
                    </label>
                    <input id="cf-name" name="name" type="text" required
                      placeholder="Your full name"
                      className={`${field} mt-2`} />
                  </div>

                  <div>
                    <label htmlFor="cf-email" className="block font-body text-[0.6rem] uppercase tracking-[0.3em] text-[espresso]/45">
                      Email <span aria-hidden>*</span>
                    </label>
                    <input id="cf-email" name="email" type="email" required
                      placeholder="your@email.com"
                      className={`${field} mt-2`} />
                  </div>

                  <div>
                    <label htmlFor="cf-phone" className="block font-body text-[0.6rem] uppercase tracking-[0.3em] text-[espresso]/45">
                      Phone
                    </label>
                    <input id="cf-phone" name="phone" type="tel"
                      placeholder="04XX XXX XXX"
                      className={`${field} mt-2`} />
                  </div>

                  <div className="relative">
                    <label htmlFor="cf-session" className="block font-body text-[0.6rem] uppercase tracking-[0.3em] text-[espresso]/45">
                      Type of Session <span aria-hidden>*</span>
                    </label>
                    <select id="cf-session" name="sessionType" required
                      defaultValue=""
                      className={`${field} mt-2 cursor-pointer appearance-none pr-8`}>
                      <option value="" disabled>Select a session type</option>
                      {sessionTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-0 bottom-3 h-4 w-4 text-[espresso]/40"
                      strokeWidth={1.5} aria-hidden />
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="block font-body text-[0.6rem] uppercase tracking-[0.3em] text-[espresso]/45">
                      Message <span aria-hidden>*</span>
                    </label>
                    <textarea id="cf-message" name="message" required rows={4}
                      placeholder="Tell me a little about your session ideas…"
                      className={`${field} mt-2 resize-none`} />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 border-b border-[espresso]/30 pb-1 font-body text-[0.72rem] uppercase tracking-[0.3em] text-[espresso]/65 transition-all duration-300 hover:border-[espresso]/70 hover:text-[espresso]"
                    >
                      Send Message
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </main>
  );
}
