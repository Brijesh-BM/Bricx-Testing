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
            Why Bricx.ai
          </h2>

          <p className="mt-1 text-sm font-light leading-relaxed sm:mt-2 font-nunito">
            Most real estate firms are incentivised to close transactions. We are incentivised to give
            you the right advice. As an independent commercial property advisor in Bengaluru, our
            only interest is the outcome that works best for you. Unlike large commercial real estate
            firms in Bangalore, we do not hold developer inventory, earn referral fees, or represent
            landlords on mandates where we also advise occupiers.
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
