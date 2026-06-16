"use client";

import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

type ArticleScrollImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  variant?: "hero" | "section";
};

export function ArticleScrollImage({
  src,
  alt,
  sizes,
  priority = false,
  variant = "section",
}: ArticleScrollImageProps) {
  const isHero = variant === "hero";
  return (
    <ParallaxScrollImage
      src={src}
      alt={alt}
      sizes={sizes}
      priority={priority}
      yRange={54}
      insetClassName={isHero ? "-inset-[19%]" : "-inset-[21%]"}
      className="origin-[48%_38%] scale-[1.14] object-cover object-[48%_38%]"
      scrollOffset={
        isHero ? ["start start", "end start"] : ["start end", "end start"]
      }
      containerClassName="size-full"
    />
  );
}
