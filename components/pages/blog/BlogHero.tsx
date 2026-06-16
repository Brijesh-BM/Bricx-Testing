"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function BlogHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    mass: 0.28,
  });
  const imageY = useTransform(smoothProgress, [0, 1], [54, -54]);

  return (
    <div ref={trackRef} className="relative z-0 h-[200svh]">
      <section
        className="sticky top-0 z-0 h-svh w-full overflow-hidden"
        aria-label="Blog hero image"
      >
        <motion.div
          className="absolute -inset-[19%] will-change-transform"
          style={{ y: imageY }}
        >
          <Image
            src="/images/blog/blog-background.jpg"
            alt="Low-angle view of a modern building with undulating curved balconies and glass railings against a twilight sky."
            fill
            priority
            quality={95}
            className="origin-[48%_38%] scale-[1.14] object-cover object-[48%_38%] animate-kenburns"
            sizes="100vw"
          />
        </motion.div>
      </section>
    </div>
  );
}
