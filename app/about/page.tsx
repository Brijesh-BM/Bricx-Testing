import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { pageMetadata } from "@/lib/seo";
import { Shield, Award, Map } from "lucide-react";

export const metadata = pageMetadata({
  title: "About Us | Commercial Real Estate Advisors Bengaluru",
  description:
    "Bricx.ai is an independent commercial real estate advisory firm in Bengaluru. Learn about our institutional philosophy, E-E-A-T trust signals, and Founder Krupesh Sanghani.",
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
              Born in Bengaluru.
              <br />
              Built for Occupiers.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 font-nunito">
              Evaluating commercial real estate with the analytical discipline of
              capital markets—examining risk first, structure next, and returns last.
            </p>
          </div>
        </section>

        {/* ── E-E-A-T TRUST INDEX ────────────────────────────────────────── */}
        <section className="bg-background py-16 border-b border-border/40">
          <div className="mx-auto max-w-5xl-plus px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Stat 1 */}
              <div className="bg-[var(--color-invest-card)] border border-border/60 p-8 text-center rounded-sm transition-all duration-300 hover:border-[var(--color-accent)]">
                <div className="font-serif text-5xl font-bold text-[var(--color-accent)] mb-3">
                  4+
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Years of Experience
                </h3>
                <p className="text-sm font-light text-muted leading-relaxed font-nunito">
                  Serving global enterprises, high-growth startups, and capital
                  allocators across Bengaluru.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[var(--color-invest-card)] border border-border/60 p-8 text-center rounded-sm transition-all duration-300 hover:border-[var(--color-accent)]">
                <div className="font-serif text-5xl font-bold text-[var(--color-accent)] mb-3">
                  2.4M+
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Sq Ft Underwritten
                </h3>
                <p className="text-sm font-light text-muted leading-relaxed font-nunito">
                  Of grade-A office space, commercial buildings, and prime land
                  development opportunities.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[var(--color-invest-card)] border border-border/60 p-8 text-center rounded-sm transition-all duration-300 hover:border-[var(--color-accent)]">
                <div className="font-serif text-5xl font-bold text-[var(--color-accent)] mb-3">
                  6+
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Active Corridors
                </h3>
                <p className="text-sm font-light text-muted leading-relaxed font-nunito">
                  Deep localized analysis of Whitefield, HSR Layout, Bellandur,
                  Electronic City, Hebbal, and Koramangala.
                </p>
              </div>
            </div>
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
                  Krupesh Sanghani
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] font-nunito">
                  Founder, Bricx.ai • Commercial Real Estate Advisor
                </p>
                <p className="mt-4 text-base font-light leading-relaxed text-muted font-nunito">
                  Over 4 years of transactional expertise in commercial investments,
                  tenant representation, and joint development (JDA) land
                  acquisition in Bangalore growth corridors. Krupesh built Bricx.ai
                  to eliminate traditional broker conflicts, delivering data-driven
                  spatial analysis, institutional lease audits, and uncompromised
                  buy-side representation.
                </p>
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

        {/* ── METHODOLOGY & CREED ───────────────────────────────────────── */}
        <section className="bg-[var(--color-invest-card)] py-20 md:py-24 border-t border-b border-border/40">
          <div className="mx-auto max-w-5xl-plus px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito">
                The Bricx Creed
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground uppercase tracking-wide">
                Conflict-Free Representation
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {/* Principle 1 */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[var(--color-accent)] border-b border-border/85 pb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5" /> 01 / Risk First
                </h3>
                <p className="text-sm font-light text-muted leading-relaxed font-nunito">
                  We evaluate assets using rigorous institutional due diligence. Title
                  flows, municipal zoning, structural load, compliance checklists, and
                  commercial lock-ins are thoroughly audited before discussing potential
                  yields or returns.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[var(--color-accent)] border-b border-border/85 pb-2 flex items-center gap-2">
                  <Award className="h-5 w-5" /> 02 / Structure Next
                </h3>
                <p className="text-sm font-light text-muted leading-relaxed font-nunito">
                  Contracts dictate cash flows. We negotiate flexible escalations,
                  tenant expansion/contraction rights, security deposit terms, and
                  clear exit provisions to ensure corporate occupiers retain strategic
                  control.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[var(--color-accent)] border-b border-border/85 pb-2 flex items-center gap-2">
                  <Map className="h-5 w-5" /> 03 / Returns Last
                </h3>
                <p className="text-sm font-light text-muted leading-relaxed font-nunito">
                  Returns are a byproduct of a low-risk, soundly structured
                  transaction. By focusing on asset fundamentals first, we safeguard
                  investor yields and lease performance for the long term.
                </p>
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
            "name": "About Bricx.ai",
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
