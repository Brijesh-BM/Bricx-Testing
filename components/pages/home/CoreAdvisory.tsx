"use client";

import { motion } from "framer-motion";
import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

const pillars = [
  {
    title: "Leasing Advisory",
    cta: "Explore Leasing",
    description: "Workspace decisions are long-term commitments. We provide leasing advisory in Bengaluru that goes beyond finding space — structuring terms, evaluating trade-offs, and ensuring the lease works for your business over time.",
    href: "/advisory",
    image: {
      src: "/images/home/advisoryLeasing.jpg",
      alt: "Business professionals discussing leasing strategy in a modern office",
    },
  },
  {
    title: "Income Investments",
    cta: "Explore Investments",
    description: "Commercial property investment in Bangalore requires more than a good yield. We bring underwriting discipline, risk-first evaluation, and capital markets rigour to every mandate.",
    href: "/investment-opportunities",
    image: {
      src: "/images/home/advisoryInvestments.jpg",
      alt: "Stacked coins under a dollar bill shaped like a house roof",
    },
  },
  {
    title: "Land & Opportunity",
    cta: "Explore Land",
    description: "Land acquisition advisory in Bengaluru starts with saying no to most of what is available. We filter on title, access, and realistic use before anything reaches you.",
    href: "/land-opportunities",
    image: {
      src: "/images/home/advisoryLand.jpg",
      alt: "Map with location pins showing land positioning strategy",
    },
  },
];

export function CoreAdvisory() {
  return (
    <section id="advisory" className="py-16 md:py-28">
        <div className="mx-auto max-w-[74rem] min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl text-center">
          What We Do
        </h2>
        <p className="mt-3 text-lg text-foreground font-nunito font-bold sm:mt-4 text-center">
          Conflict-Free Counsel. Capital Markets Discipline.
        </p>
        <p className="mt-5 mx-auto text-sm leading-relaxed sm:mt-6 font-semibold text-center text-muted">
          Whether you&apos;re occupying space, allocating capital or planning development, we advise across three focused domains.
        </p>
        <div className="mt-8 grid min-w-0 gap-5 sm:gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex h-[22rem] min-w-0 flex-col overflow-hidden bg-card p-3 sm:h-[24rem] sm:p-4 transition-colors duration-1000 ease-out hover:bg-accent"
            >
              <div className="relative min-h-0 flex-1 w-full overflow-hidden rounded-sm transition-[flex] duration-[1800ms] ease-out group-hover:flex-[1.2]">
                <ParallaxScrollImage
                  src={item.image.src}
                  alt={item.image.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="eager"
                  yRange={40}
                  insetClassName="-inset-[20%]"
                  className="object-cover"
                  containerClassName="h-full w-full"
                />
              </div>
              <div className="shrink-0 px-1 py-5 sm:py-6">
                <h3 className="text-xl font-semibold text-accent sm:text-2xl font-serif transition-all duration-1000 ease-out group-hover:-translate-y-0.5 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-[1800ms] ease-out group-hover:max-h-24 group-hover:opacity-100">
                  {item.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-1000 group-hover:text-white">
                  {item.cta}
                  <span
                    aria-hidden
                    className="transition-transform duration-1000 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
