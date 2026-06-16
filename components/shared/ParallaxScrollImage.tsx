"use client";

import Image, { type ImageProps } from "next/image";
import type { UseScrollOptions } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const defaultSpring = {
  stiffness: 220,
  damping: 28,
  mass: 0.28,
};

type ScrollOffsetOption = NonNullable<UseScrollOptions["offset"]>;

const defaultScrollOffset: ScrollOffsetOption = ["start end", "end start"];

export type ParallaxScrollImageProps = {
  src: ImageProps["src"];
  alt: string;
  sizes: string;
  /** Half the vertical travel in px (maps to [yRange, -yRange] over scroll). */
  yRange?: number;
  /** Extra room for the image to move without gaps (Tailwind classes). */
  insetClassName?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  quality?: number;
  loading?: ImageProps["loading"];
  /** Passed to `useScroll` — default is viewport in/out parallax. */
  scrollOffset?: ScrollOffsetOption;
};

/**
 * Fill-mode image with subtle vertical parallax tied to scroll through the viewport.
 */
export function ParallaxScrollImage({
  src,
  alt,
  sizes,
  yRange = 42,
  insetClassName = "-inset-[22%]",
  className = "object-cover",
  containerClassName = "",
  priority,
  quality = 95,
  loading,
  scrollOffset = defaultScrollOffset,
}: ParallaxScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset,
  });
  const smoothProgress = useSpring(scrollYProgress, defaultSpring);
  const imageY = useTransform(smoothProgress, [0, 1], [yRange, -yRange]);

  const isAbsoluteRoot = /(^|\s)absolute(\s|$)/.test(containerClassName);

  return (
    <div
      ref={ref}
      className={
        isAbsoluteRoot
          ? `min-h-0 w-full overflow-hidden ${containerClassName}`
          : `relative h-full min-h-[1px] w-full overflow-hidden ${containerClassName}`
      }
    >
      <motion.div
        className={`absolute ${insetClassName} will-change-transform`}
        style={{ y: imageY }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          loading={loading}
          className={className}
        />
      </motion.div>
    </div>
  );
}
