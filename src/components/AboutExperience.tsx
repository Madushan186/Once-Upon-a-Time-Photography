import Image from "next/image";
import { about } from "@/config/mediaConfig";

export default function AboutExperience() {
  return (
    <section className="bg-beige-dark">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-8 py-24 md:grid-cols-2 md:gap-16 md:px-12 md:py-32 lg:gap-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
            About the Experience
          </p>
          <h2 className="text-3xl leading-snug tracking-tight md:text-4xl lg:text-5xl">
            Relax, breathe — I&apos;ll take care of the details for you
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted md:mt-10">
            Every session is designed to feel calm, unhurried, and entirely
            yours. From choosing the perfect location to guiding you through
            natural poses, my goal is to make the entire experience feel
            effortless — so you can simply be present with the people you love.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            No stiff directions or awkward moments. Just a relaxed atmosphere
            where genuine connection shines through, and every detail is taken
            care of before you even arrive.
          </p>
        </div>

        <div className="relative aspect-[3/4] w-full max-w-md justify-self-center overflow-hidden md:max-w-none md:justify-self-end">
          <Image
            src={about.profileImage}
            alt="Portrait of Ruvani, photographer"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
