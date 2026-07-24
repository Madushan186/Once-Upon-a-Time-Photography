"use client";

import { ChevronDown } from "lucide-react";
import { FormEvent } from "react";
import { sessionTypes } from "@/lib/navigation";

const inputClassName =
  "w-full border-0 border-b border-foreground/25 bg-transparent py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-foreground/60 focus:outline-none";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl px-8 py-24 md:px-12 md:py-32"
    >
      <div className="text-center">
        <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Ready to begin? Share a few details and I&apos;ll be in touch soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-16 space-y-10">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className={inputClassName}
          />
        </div>

        <div className="relative">
          <label htmlFor="session-type" className="sr-only">
            Type of Session
          </label>
          <select
            id="session-type"
            name="sessionType"
            required
            defaultValue=""
            className={`${inputClassName} cursor-pointer appearance-none pr-8`}
          >
            <option value="" disabled>
              Type of Session
            </option>
            {sessionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-0 bottom-3 h-5 w-5 text-muted/60"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Message"
            className={`${inputClassName} resize-none`}
          />
        </div>

        <div className="pt-4 text-center">
          <button
            type="submit"
            className="inline-block border border-foreground/25 bg-transparent px-12 py-5 text-sm uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-beige-solid"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
