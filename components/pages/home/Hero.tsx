"use client";

import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

export function Hero() {
  return (
    <section id="top" className="relative">
      {/* overflow-x-clip only above the scroll strip — clip would break sticky belief section */}
      <div className="w-full overflow-x-clip pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(8.5rem+env(safe-area-inset-top,0px))]">
        {/* Full-bleed image */}
        <div className="relative aspect-[2.5/1] w-full min-h-[140px] sm:aspect-[3/1] sm:min-h-[160px] md:aspect-[4/1] md:min-h-[180px]">
          <ParallaxScrollImage
            src="/images/home/hero.jpg"
            alt="Modern building facade against clear blue sky"
            sizes="100vw"
            priority
            yRange={36}
            insetClassName="-inset-[15%]"
            className="object-cover object-[center_64%]"
            containerClassName="absolute inset-0"
          />
        </div>

        {/* Copy below image: column centered via text-center wrapper + inline-block; copy is text-left */}
        <div className="relative mx-auto max-w-6xl min-w-0 px-4 pt-4 text-center sm:px-6 sm:pt-6 md:pt-7 lg:px-8">
          <div className="inline-flex flex-col max-w-4xl text-left md:max-w-5xl-plus font-serif">
            <div className="relative mt-12 mb-6 -mx-16 sm:mt-16 sm:mb-8 sm:-mx-24 md:mt-20 md:mb-10 md:-mx-32 lg:mt-24 lg:mb-12 lg:-mx-40 order-2">
              <h1 className="relative z-10 mx-16 sm:mx-24 md:mx-32 lg:mx-40 text-4xl font-bold leading-[1.1] font-serif tracking-tight text-foreground py-6 sm:text-5xl sm:py-9 md:text-6xl md:py-12 lg:text-7xl lg:py-16 xl:text-8xl xl:py-18">
                Independent Commercial Real Estate Advisory in Bangalore, Bengaluru
              </h1>
            </div>
            <h2 className="text-[1.0625rem] font-semibold leading-[1.2] text-foreground sm:text-[1.1875rem] sm:leading-[1.2] md:text-[1.3125rem] md:leading-[1.2] lg:text-[1.4375rem] lg:leading-[1.25] xl:text-[1.5625rem] xl:leading-[1.25] order-1">
              <span className="block">
                Conflict-Free Counsel. Capital Markets Discipline.
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* <HeroBeliefScroll /> */}
    </section>
  );
}
