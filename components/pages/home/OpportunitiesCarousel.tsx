"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

type Opportunity = {
  tag: "Income Investments" | "Land & Opportunity";
  title: string;
  location: string;
  detail: string;
  cta: string;
  image: { src: string; alt: string };
};

const baseItems: Opportunity[] = [
  {
    tag: "Income Investments",
    title: "Commercial Tower",
    location: "Indiranagar, Bengaluru",
    detail: "Pre-leased asset | 9% indicative yield",
    cta: "Access Investment Brief",
    image: {
      src: "/images/home/opportunitiesCommercial.jpg",
      alt: "Commercial office towers and city skyline",
    },
  },
  {
    tag: "Land & Opportunity",
    title: "North Corridor Parcel",
    location: "Whitefield, Bengaluru",
    detail: "2.5 acres | Development-ready",
    cta: "Enquire Now",
    image: {
      src: "/images/home/opportunitieLand.jpg",
      alt: "Development land parcel",
    },
  },
  {
    tag: "Income Investments",
    title: "Commercial Tower",
    location: "Indiranagar, Bengaluru",
    detail: "Pre-leased asset | 9% indicative yield",
    cta: "Access Investment Brief",
    image: {
      src: "/images/home/opportunitiesCommercial.jpg",
      alt: "Commercial office towers and city skyline",
    },
  },
  {
    tag: "Land & Opportunity",
    title: "North Corridor Parcel",
    location: "Whitefield, Bengaluru",
    detail: "2.5 acres | Development-ready",
    cta: "Enquire Now",
    image: {
      src: "/images/home/opportunitieLand.jpg",
      alt: "Development land parcel",
    },
  },
];

const items = [...baseItems, ...baseItems];

export function OpportunitiesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="opportunities"
      className="overflow-x-clip py-16 md:py-28"
      style={{ backgroundColor: "var(--color-accent)" }}
    >
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif font-bold tracking-tight text-white sm:text-3xl md:text-4xl text-center">
          Current Opportunities
        </h2>
        <p className="mt-5 mx-auto text-base text-white sm:mt-6 text-center font-nunito">
          Alongside advisory, we present a curated set of leasing, investment
          and land opportunities.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative mx-auto mt-8 max-w-[74rem] px-4 sm:mt-8 sm:px-6 lg:px-6"
      >
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition-colors duration-300 hover:bg-black/40 sm:left-8 sm:h-9 sm:w-9 lg:left-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition-colors duration-300 hover:bg-black/40 sm:right-8 sm:h-9 sm:w-9 lg:right-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, i) => (
            <article
              key={`${item.title}-${i}`}
              className="group ml-0 mr-0 flex h-[28rem] min-w-0 shrink-0 basis-full flex-col overflow-hidden p-3 sm:mr-5 sm:h-[30rem] sm:basis-[42%] sm:p-4 lg:basis-[calc(32%-1rem)] lg:mr-5 bg-[var(--color-opp-card)] transition-[background-color] duration-1000 ease-out hover:bg-white/60"
            >
              <p className="shrink-0 px-1 pb-2 font-semibold font-nunito transition-colors duration-1000 group-hover:text-white/60" style={{ color: "var(--color-opp-text)" }}>
                {item.tag}
              </p>
              <div className="relative min-h-0 flex-1 w-full overflow-hidden rounded-sm">
                <ParallaxScrollImage
                  src={item.image.src}
                  alt={item.image.alt}
                  sizes="(max-width: 639px) 100vw, (max-width: 1024px) 45vw, 33vw"
                  priority={i === 0}
                  yRange={36}
                  insetClassName="-inset-[20%]"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                  containerClassName="h-full w-full"
                />
              </div>
              <div className="shrink-0 px-1 py-5 sm:py-6">
                <h3 className="text-xl font-semibold font-serif sm:text-2xl transition-all duration-1000 ease-out group-hover:-translate-y-0.5 group-hover:text-white" style={{ color: "var(--color-opp-text)" }}>
                  {item.title}
                </h3>
                <p className="mt-1 text-base transition-colors duration-1000 group-hover:text-white/60" style={{ color: "var(--color-opp-text)"}}>{item.location}</p>
                <p className="mt-1 text-sm transition-colors duration-1000 group-hover:text-white/80" style={{ color: "var(--color-opp-text)", opacity: 0.8 }}>
                  {item.detail}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-1000 group-hover:text-white" style={{ color: "var(--color-opp-text)" }}>
                  {item.cta}
                  <span
                    aria-hidden
                    className="transition-transform duration-1000 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-6 max-w-6xl px-4 sm:mt-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === selectedIndex}
              onClick={() => scrollTo(i)}
              className="p-1"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "h-2.5 w-8 bg-white"
                    : "h-2.5 w-2.5 bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
