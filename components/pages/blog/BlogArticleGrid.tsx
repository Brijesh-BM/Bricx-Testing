"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

function PostCoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-sm bg-card">
      <ParallaxScrollImage
        src={src}
        alt={alt}
        sizes="(max-width: 640px) 100vw, 50vw"
        yRange={54}
        insetClassName="-inset-[21%]"
        className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        containerClassName="absolute inset-0"
      />
    </div>
  );
}

const staggerContainer = {
  initial: {},
  whileInView: {},
};

export function BlogArticleGrid() {
  return (
    <section
      className="py-20"
      aria-labelledby="blog-articles-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.ul
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
          className="mt-10 grid list-none gap-8 sm:grid-cols-2"
        >
          {blogPosts.map((post, index) => (
            <motion.li
              key={post.slug}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08 * index,
                  },
                },
              }}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-md bg-card p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:bg-[var(--color-invest-card)]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex h-full min-h-0 flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <PostCoverImage src={post.imageSrc} alt={post.imageAlt} />
                  <div className="flex flex-1 flex-col px-2 pt-4 text-left sm:pt-5">
                    <h3 className="mt-2 font-sans text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-auto pt-4 text-sm text-muted">
                      By {post.author}
                      <span className="mx-2 text-muted/50" aria-hidden>
                        |
                      </span>
                      {post.readMinutes} min read
                    </p>
                    <div className="relative mt-4 h-[1.5px] w-full bg-foreground/10" aria-hidden>
                      <div className="absolute inset-y-0 left-0 h-full w-0 bg-foreground/80 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                  </div>
                </Link>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
