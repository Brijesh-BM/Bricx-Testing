"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import type { BlogPost } from "@/data/blogPosts";
import type { BlogArticleContent } from "@/data/blogArticleContent";

type BlogArticleClientProps = {
  post: BlogPost;
  articleContent: BlogArticleContent;
  relatedPosts: BlogPost[];
};

const scrollReveal = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.1, margin: "0px 0px -50px 0px" },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const staggerContainer = {
  initial: {},
  whileInView: {},
};

export function BlogArticleClient({
  post,
  articleContent,
  relatedPosts,
}: BlogArticleClientProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 pb-24">
        {/* Editorial Title Block at the very top (starting with normal text) */}
        <div className="w-full bg-background pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(8.5rem+env(safe-area-inset-top,0px))] pb-8">
          <motion.header
            {...scrollReveal}
            className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
          >
            <div className="text-[#C5B897] font-nunito text-xs font-semibold tracking-widest uppercase mb-4">
              BRICX REPORT &bull; {post.targetKeyword || "ADVISORY"}
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-wide text-[#080d16] uppercase max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted font-nunito">
              <span>By {post.author}</span>
              <span className="mx-1 text-muted/30" aria-hidden>|</span>
              <time dateTime={post.dateIso}>{post.date}</time>
              <span className="mx-1 text-muted/30" aria-hidden>|</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </motion.header>
        </div>

        {/* Hero Image Section (Placed below the title, restricted width, rounded border) */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative h-[260px] sm:h-[400px] md:h-[600px] w-full overflow-hidden rounded-[4px] border border-border">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              priority
              quality={95}
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* Article Container */}
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-base leading-relaxed text-foreground/90 font-light font-nunito">
            {/* Paragraph 1 */}
            {articleContent.contentParagraphs[0] && (
              <motion.p
                {...scrollReveal}
                className="text-lg leading-relaxed text-foreground/80 font-normal blog-editorial-paragraph lead"
              >
                {articleContent.contentParagraphs[0]}
              </motion.p>
            )}

            {/* Paragraph 2 */}
            {articleContent.contentParagraphs[1] && (
              <motion.p {...scrollReveal} className="blog-editorial-paragraph">
                {articleContent.contentParagraphs[1]}
              </motion.p>
            )}

            {/* Blockquote Quote (Inserts under Paragraph 2) */}
            {articleContent.quote && (
              <motion.blockquote
                {...scrollReveal}
                className="my-12 border-l-[3px] pl-6 py-2"
                style={{ borderColor: "#C5B897" }}
              >
                <p className="font-serif text-xl italic leading-relaxed text-[#080d16]">
                  &ldquo;{articleContent.quote.text}&rdquo;
                </p>
                <cite className="mt-3 block text-xs font-semibold uppercase tracking-wider not-italic text-muted font-sans">
                  &mdash; {articleContent.quote.author}
                </cite>
              </motion.blockquote>
            )}

            {/* Paragraph 3 */}
            {articleContent.contentParagraphs[2] && (
              <motion.p {...scrollReveal} className="blog-editorial-paragraph">
                {articleContent.contentParagraphs[2]}
              </motion.p>
            )}

            {/* Visual Image Spread (Inserts under Paragraph 3) */}
            {articleContent.spreadImages && articleContent.spreadImages.length > 0 && (
              <motion.div
                {...scrollReveal}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12"
              >
                <div className="relative h-[260px] sm:h-[320px] md:h-[380px] w-full overflow-hidden border border-border">
                  <Image
                     src={articleContent.spreadImages[0]}
                     alt={`${post.title} spread image 1`}
                     fill
                     quality={95}
                     className="object-cover"
                     sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                {articleContent.spreadImages[1] && (
                  <div className="relative h-[260px] sm:h-[320px] md:h-[380px] w-full overflow-hidden border border-border">
                    <Image
                      src={articleContent.spreadImages[1]}
                      alt={`${post.title} spread image 2`}
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Paragraph 4 */}
            {articleContent.contentParagraphs[3] && (
              <motion.p {...scrollReveal} className="blog-editorial-paragraph">
                {articleContent.contentParagraphs[3]}
              </motion.p>
            )}

            {/* Paragraph 5 */}
            {articleContent.contentParagraphs[4] && (
              <motion.p {...scrollReveal} className="blog-editorial-paragraph">
                {articleContent.contentParagraphs[4]}
              </motion.p>
            )}
          </div>

          {/* Social sharing icons block matching Image 1 raw symbol layouts */}
          <motion.div
            {...scrollReveal}
            className="blog-share-section"
          >
            <a href="#" className="blog-share-icon" aria-label="Share on Facebook">
              <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/></svg>
            </a>
            <a href="#" className="blog-share-icon" aria-label="Share on X">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="blog-share-icon" aria-label="Share via Email">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="#" className="blog-share-icon" aria-label="Share on LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </motion.div>

          {/* CTA Box (Premium Dark Slate/Navy Design with Sand-Gold Accents) */}
          {articleContent.cta && (
            <motion.div
              {...scrollReveal}
              className="mt-16 rounded-xl bg-[#0e182a]/95 p-8 text-center sm:p-10 border border-white/10 shadow-2xl backdrop-blur-md"
            >
              <h3 className="font-cinzel text-xl font-medium tracking-wide uppercase text-white sm:text-2xl">
                {articleContent.cta.title}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 font-nunito font-light">
                {articleContent.cta.text}
              </p>
              <div className="mt-8 font-nunito">
                <Link
                  href={articleContent.cta.link}
                  className="inline-flex min-h-11 items-center justify-center rounded bg-[#C5B897] hover:bg-[#b0a382] px-6 py-3 text-sm font-semibold text-[#080D16] transition-colors"
                >
                  {articleContent.cta.buttonText}
                </Link>
              </div>
            </motion.div>
          )}

          {/* Recommended Reading Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 border-t border-border pt-16">
              <motion.h3
                {...scrollReveal}
                className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8"
              >
                Recommended Reading
              </motion.h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                className="grid gap-8 sm:grid-cols-2"
              >
                {relatedPosts.map((rPost, index) => (
                  <motion.article
                    key={rPost.slug}
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
                    className="group flex flex-col bg-card rounded-lg border border-border p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:bg-[var(--color-invest-card)]"
                  >
                    <Link href={`/blog/${rPost.slug}`} className="flex flex-col h-full justify-between">
                      <div>
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-muted mb-4">
                          <Image
                            src={rPost.imageSrc}
                            alt={rPost.imageAlt}
                            fill
                            quality={95}
                            className="object-cover size-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                            sizes="(max-width: 640px) 100vw, 30vw"
                          />
                        </div>
                        <h4 className="font-sans text-lg font-semibold text-foreground leading-snug">
                          {rPost.title}
                        </h4>
                        <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-2 font-nunito">
                          {rPost.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 text-xs text-muted font-nunito">
                        By {rPost.author} &bull; {rPost.readMinutes} min read
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          )}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
