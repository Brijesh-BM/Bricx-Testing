import { pageMetadata } from "@/lib/seo";
import { BlogArticleGrid } from "@/components/pages/blog/BlogArticleGrid";
import { BlogHero } from "@/components/pages/blog/BlogHero";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";

export const metadata = pageMetadata({
  title: "Insights & Perspectives",
  description:
    "Thoughts on commercial real estate, market trends, and strategic decision-making across leasing, investment, and land.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <BlogHero />

        <div
          className="relative z-10 -mt-[100svh] border border-border bg-background shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.12)]"
        >
          <section
            className="px-4 pt-10 text-center sm:px-6 sm:pt-12 md:pt-14"
            aria-labelledby="blog-heading"
          >
            <div className="mx-auto lg:px-8 max-w-4xl space-y-4">
              <h1
                id="blog-heading"
                className="mt-4 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                Commercial Real Estate Intelligence — Bangalore, Bengaluru
              </h1>
              <h2 className="mx-auto font-serif text-xl font-semibold leading-[1.2] text-[var(--color-accent)] sm:text-2xl uppercase tracking-wider">
                Market Insights. Advisory Thinking. No Filler.
              </h2>
              <p className="mx-auto mt-6 text-base font-light leading-relaxed text-muted font-nunito">
                The Bricx.ai blog covers commercial real estate in Bangalore and India — leasing frameworks, investment thinking, land advisory, and micro-market analysis across Whitefield, Outer Ring Road, Koramangala, Electronic City, HSR Layout, and South Bengaluru.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] font-nunito">
                <span>Leasing Advisory</span> <span>|</span>
                <span>Income Investments</span> <span>|</span>
                <span>Land & Opportunity</span> <span>|</span>
                <span>Market Intelligence</span>
              </div>
            </div>
          </section>

          <BlogArticleGrid />

          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
