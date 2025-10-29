import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { HowItWorks } from "@/components/how-it-works";

import { FinalCTA } from "@/components/final-cta";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0C]">
      <Hero />
      <Products />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
