import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Bricx.ai — Commercial Real Estate Advisory in Bangalore, Bengaluru",
  description:
    "Bricx.ai is a boutique commercial real estate advisory firm founded in Bengaluru. We operate across three verticals — leasing, income investments, and land.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* ── HERO SECTION ──────────────────────────────────────────────── */}
        <section className="bg-[var(--color-footer-bg)] py-28 sm:py-32 md:py-36 text-center relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito">
              Institutional Profile
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#F9F6F0] sm:text-5xl md:text-6xl">
              About Bricx.ai — Commercial Real Estate Advisory in Bangalore, Bengaluru
            </h1>
            <h2 className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 font-nunito uppercase tracking-wider">
              Independent Thinking. No Developer Bias.
            </h2>
          </div>
        </section>

        {/* ── ABOUT BODY CONTENT SECTION ────────────────────────────────────────── */}
        <section className="bg-background py-16 border-b border-border/40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-base font-light leading-relaxed text-muted font-nunito mb-6">
              Bricx.ai is a boutique commercial real estate advisory firm founded in Bengaluru. We operate across three verticals — leasing, income investments, and land — with a single guiding principle: the client's interest comes before the transaction.
            </p>
            <p className="text-base font-light leading-relaxed text-muted font-nunito mb-6">
              Our perspective is shaped by capital markets discipline. Every mandate is evaluated the way a serious asset class should be — risk first, structure next, returns after that. We do not carry developer relationships that compromise our advice, and we do not run on sales targets.
            </p>
            <p className="text-base font-light leading-relaxed text-muted font-nunito mb-6">
              As an independent commercial property advisor in Bangalore, we work with a deliberately small client base. That is how we maintain the quality of counsel that institutional advisory demands.
            </p>
          </div>
        </section>

        {/* ── HOW WE ARE STRUCTURED SECTION ───────────────────────────────────── */}
        <section className="bg-[var(--color-invest-card)] py-20 md:py-24 border-t border-b border-border/40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground uppercase tracking-wide text-center mb-8">
              How We Are Structured
            </h2>
            <p className="text-base font-light leading-relaxed text-muted font-nunito mb-6">
              Most brokers are compensated for closing deals quickly. Bricx.ai is structured to prioritise long-term fit over short-term commissions. When a client needed 47 seats for a back-end support operation with zero hires on day one, most brokers would have locked them into paying for all 47 seats immediately. Bricx.ai structured staggered billing instead — 15 seats upfront, 15 more after 45 days, full occupancy after 90 days. The client avoided paying for empty seats. We earned less upfront but gained a client for life.
            </p>
            <p className="text-base font-light leading-relaxed text-muted font-nunito">
              A commercial investment provider once approached us offering 9.8% annual returns. In the fine print: hidden management fees and baseless deductions that reduced the actual investor return to below 6% — worse than bank FD rates with significantly higher risk. We severed the partnership immediately and presented alternatives with verified net yields. If Bricx.ai would not set up its own office in a space, invest its own capital in a property, or buy the land personally, it does not get recommended to clients.
            </p>
          </div>
        </section>

        {/* ── FOUNDER SECTION ───────────────────────────────────────────── */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              {/* Left Side: Avatar/Initials Box */}
              <div className="h-44 w-44 shrink-0 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[#F9F6F0] font-serif font-bold text-6xl shadow-lg border-2 border-[var(--color-accent)]">
                KS
              </div>
              {/* Right Side: Bio details */}
              <div className="text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito">
                  Founder Profile &amp; Leadership
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
                  Krupesh Sanghani — Founder
                </h2>
                <p className="mt-4 text-base font-light leading-relaxed text-muted font-nunito">
                  Krupesh brings four years of direct deal experience across commercial leasing and investment sale of commercial properties in Bengaluru. His understanding of the market spans managed offices, coworking, land aggregation, and income-producing assets — built through hands-on work with occupiers, operators, and investors across Bangalore.
                </p>
                <blockquote className="mt-6 border-l-2 border-[var(--color-accent)] pl-4 italic text-lg text-[var(--color-accent)] font-serif">
                  "Transactions may close in months. Trust compounds over years."
                </blockquote>
                <div className="mt-6 flex justify-center md:justify-start items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/bricx-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-[var(--color-accent)]"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <span className="text-xs font-light text-muted font-nunito">
                    Bengaluru Headquarters
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ───────────────────────────────────────────────── */}
        <section className="bg-[var(--color-footer-bg)] py-20 text-center text-[#F9F6F0]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold uppercase tracking-wider">
              Consult Our Advisors
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-white/80 max-w-xl mx-auto font-nunito">
              Schedule an independent briefing regarding office space leasing, joint
              development strategy, or off-market yield investments in Bangalore.
            </p>
            <a
              href="/contact-us"
              className="mt-8 inline-block rounded-sm bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-opacity-95 font-nunito tracking-wide"
            >
              Initiate Briefing
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      {/* Structured JSON-LD Founder & E-E-A-T Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Bricx.ai — Commercial Real Estate Advisory in Bangalore, Bengaluru",
            "description":
              "About Bricx.ai, an independent commercial real estate advisory firm in Bengaluru.",
            "publisher": {
              "@type": "RealEstateAgent",
              "name": "Bricx.ai",
              "url": "https://bricx.ai/",
              "logo": "https://bricx.ai/images/og-default.png",
              "founder": {
                "@type": "Person",
                "name": "Krupesh Sanghani",
                "jobTitle": "Founder & Principal Advisor",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Bricx.ai",
                },
                "sameAs": "https://www.linkedin.com/company/bricx-ai",
              },
            },
          }),
        }}
      />
    </div>
  );
}
