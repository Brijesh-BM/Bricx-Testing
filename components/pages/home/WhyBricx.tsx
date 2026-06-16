"use client";

import { motion } from "framer-motion";
import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

const fadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export function WhyBricx() {
  return (
    <section className="pt-0 pb-16 md:pb-28">
      <div className="flex flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:gap-0 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto mt-14 flex w-full max-w-[35rem] flex-1 flex-col justify-center md:py-16">
          <h2 className="text-2xl text-center font-serif font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Why Work With Bricx.ai
          </h2>
          <p className="mt-3 font-light text-center text-lg text-foreground sm:mt-4 font-nunito font-semibold">
            Independent advice. Structured decisions.
          </p>
          <p className="mt-1 text-sm font-light leading-relaxed sm:mt-2 font-nunito">
            Independent thinking guides every engagement, ensuring advice is
            shaped by what truly aligns with the mandate rather than the pressure
            to close a transaction. Real estate is evaluated with the discipline
            of capital markets, where risk is examined first, structure follows,
            and returns are considered with a long-term view. Each opportunity is
            positioned strategically within its broader market context, looking
            beyond location to assess relevance, demand and future potential. A
            structured approach governs the process from initial analysis to
            final execution, reducing uncertainty and supporting informed
            decisions. The focus ultimately extends beyond individual deals to
            building enduring relationships grounded in trust, clarity and
            continuity.
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 bg-transparent text-lg font-medium text-foreground transition-colors hover:bg-card"
          >
            Speak With an Advisor →
          </a>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="relative aspect-[2/3] w-full min-h-0 overflow-hidden md:aspect-auto md:min-h-[600px] md:w-[42%] md:flex-shrink-0 lg:min-h-[700px]"
        >
          {/* Fill box: ParallaxScrollImage must not mix `relative` + `absolute` on one node (layout collapse). */}
          <div className="absolute inset-0 size-full min-h-0">
            <ParallaxScrollImage
              src="/images/home/whyBricx.jpg"
              alt="Team of professionals standing together in a modern office"
              sizes="(max-width: 768px) 100vw, 45vw"
              yRange={32}
              insetClassName="-inset-[6%]"
              className="object-cover"
              containerClassName="relative size-full min-h-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
