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
            <div className="mx-auto lg:px-8">
              <h1
                id="blog-heading"
                className="mt-4 font-serif text-2xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-[1.05]"
              >
                Insights &amp; Perspectives
              </h1>
              <p className="mx-auto mt-6 text-base leading-relaxed">
                Thoughts on commercial real estate, market trends, and strategic
                decision-making across leasing, investment, and land.
              </p>
            </div>
          </section>

          <BlogArticleGrid />

          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
