import AboutExperience from "@/components/AboutExperience";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import StrengthAndCourage from "@/components/StrengthAndCourage";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <StrengthAndCourage />
      <AboutExperience />
      <Testimonials />
      <Contact />
    </>
  );
}
