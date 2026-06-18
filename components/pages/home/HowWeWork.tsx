"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

export function HowWeWork() {
  return (
    <section className="py-16 md:py-28 bg-[var(--color-invest-card)] border-t border-b border-border/40">
      <div className="mx-auto max-w-[50rem] min-w-0 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp} className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito">
            Operations
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.625rem]">
            How We Work Differently
          </h2>
          <div className="mx-auto h-[1px] w-12 bg-[var(--color-accent)]" />
          <div className="space-y-5 text-sm leading-[1.8] text-muted font-light font-nunito text-left mt-8">
            <p>
              Most brokers will show you 30 properties in a week. Bricx.ai will show you 3. The difference is not volume — it is conviction. Our employees do not carry targets. Targets create pressure to close deals regardless of fit. Advisory firms do not operate on sales quotas. Brokerage firms do.
            </p>
            <p>
              We maintain standardised transaction fees across all coworking providers, managed office operators, and property owners. WeWork, Beehive, Novel Office, IndiQube — the commission is identical. This removes the incentive to push clients toward whichever property pays the highest referral fee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
