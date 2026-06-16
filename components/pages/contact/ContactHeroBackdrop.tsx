"use client";

import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

export function ContactHeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <ParallaxScrollImage
        src="/images/contact/contactImage.jpg"
        alt="Modern architectural facade under clear sky"
        sizes="100vw"
        priority
        yRange={48}
        insetClassName="-inset-[18%]"
        className="object-cover object-center"
        containerClassName="absolute inset-0 min-h-full"
      />
    </div>
  );
}
