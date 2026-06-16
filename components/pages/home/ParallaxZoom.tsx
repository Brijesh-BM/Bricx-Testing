"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

type FitTransform = {
  x: number;
  y: number;
  scale: number;
  viewportWidth: number;
  viewportHeight: number;
  squareInsetX: number;
  squareInsetY: number;
};

const parallaxZoomImages = [
  { src: "/images/home/parallaxzoom1.jpg", alt: "Curved white modern building" },
  { src: "/images/home/parallaxzoom2.jpg", alt: "Minimalist wall with circular window" },
  { src: "/images/home/parallaxzoom3.jpg", alt: "Brutalist concrete structure and sky" },
  { src: "/images/home/parallaxzoom4.jpg", alt: "Tiled facade with warm light" },
  { src: "/images/home/parallaxzoom5.jpg", alt: "Concrete wall against deep blue sky" },
] as const;

export function ParallaxZoom() {
  const sectionRef = useRef<HTMLElement>(null);
  const centerMeasureRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<FitTransform>({
    x: 0,
    y: 0,
    scale: 1,
    viewportWidth: 0,
    viewportHeight: 0,
    squareInsetX: 0,
    squareInsetY: 0,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 20,
    mass: 0.35,
  });
  const centerIndex = 2;
  const sideExitX = fit.viewportWidth * 0.84;
  const sideExitY = fit.viewportHeight * 0.55;
  const leftX = useTransform(smoothProgress, [0, 0.95], [0, -sideExitX]);
  const rightX = useTransform(smoothProgress, [0, 0.95], [0, sideExitX]);
  const sideY = useTransform(smoothProgress, [0, 0.95], [0, -sideExitY]);
  const sideOpacity = useTransform(smoothProgress, [0, 0.55], [1, 0.82]);
  const centerX = useTransform(smoothProgress, [0, 0.42], [0, fit.x]);
  const centerY = useTransform(smoothProgress, [0, 0.42], [0, fit.y]);
  const centerScale = useTransform(smoothProgress, [0, 0.42], [1, fit.scale]);
  const centerInsetX = useTransform(smoothProgress, [0, 0.42], [0, fit.squareInsetX]);
  const centerInsetY = useTransform(smoothProgress, [0, 0.42], [0, fit.squareInsetY]);
  const centerClipPath = useMotionTemplate`inset(${centerInsetY}% ${centerInsetX}% ${centerInsetY}% ${centerInsetX}%)`;
  const overlayOpacity = useTransform(smoothProgress, [0, 0.3], [0, 0.62]);
  const postFillProgress = useTransform(smoothProgress, [0.39, 0.56], [0, 1]);
  const beliefOpacity = useTransform(postFillProgress, [0, 1], [0, 1]);
  const beliefY = useTransform(postFillProgress, [0, 1], [220, 0]);

  useLayoutEffect(() => {
    function measureFit() {
      const el = centerMeasureRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const squareSide = Math.min(rect.width, rect.height);
      const coverScale =
        Math.max(window.innerWidth / squareSide, window.innerHeight / squareSide) * 1.08;
      const squareInsetX = rect.width > rect.height ? ((rect.width - rect.height) / 2 / rect.width) * 100 : 0;
      const squareInsetY = rect.height > rect.width ? ((rect.height - rect.width) / 2 / rect.height) * 100 : 0;

      setFit({
        x: window.innerWidth / 2 - (rect.left + rect.width / 2),
        y: window.innerHeight / 2 - (rect.top + rect.height / 2),
        scale: coverScale,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        squareInsetX,
        squareInsetY,
      });
    }

    const raf1 = requestAnimationFrame(measureFit);
    const raf2 = requestAnimationFrame(measureFit);
    const onLoad = () => measureFit();
    const onResize = () => measureFit();
    const onScroll = () => measureFit();
    const ro = new ResizeObserver(measureFit);
    if (centerMeasureRef.current) ro.observe(centerMeasureRef.current);

    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.fonts?.ready.then(() => measureFit());
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      ro.disconnect();
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[340vh] md:h-[430vh]"
      style={{ position: "relative" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="flex h-[65vh] w-full items-center justify-center gap-0 pt-[25vh] md:justify-start md:gap-9">
          {parallaxZoomImages.map((img, index) => (
            <div
              key={img.src}
              ref={index === centerIndex ? centerMeasureRef : undefined}
              className={`relative h-full ${
                index === centerIndex
                  ? "z-20 w-full max-w-none will-change-transform md:w-1/5"
                  : "z-10 hidden w-1/5 md:block"
              }`}
            >
              {index === centerIndex ? (
                <motion.div
                  className="relative h-full w-full"
                  style={{
                    x: centerX,
                    y: centerY,
                  }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    style={{
                      scale: centerScale,
                      clipPath: centerClipPath,
                      transformOrigin: "center center",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="z-0 object-cover"
                      sizes="(max-width: 768px) 100vw, 20vw"
                      quality={95}
                    />
                    <motion.div
                      className="pointer-events-none absolute inset-0 z-10 bg-black"
                      style={{ opacity: overlayOpacity }}
                      aria-hidden
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  className="relative h-full w-full"
                  style={{
                    x: index < centerIndex ? leftX : rightX,
                    y: sideY,
                    opacity: sideOpacity,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="20vw"
                    quality={95}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <motion.p
          className="pointer-events-none absolute bottom-[13rem] font-nunito right-6 z-30 max-w-[min(38rem,90vw)] text-left text-lg font-semibold text-white sm:bottom-[13rem] sm:right-10 sm:text-xl md:bottom-[13rem] md:text-2xl"
          style={{
            opacity: beliefOpacity,
            y: beliefY,
          }}
        >
          Bricx.ai is founded on a simple belief: Transactions may close in months. Trust compounds over years.
        </motion.p>
      </div>
    </section>
  );
}
