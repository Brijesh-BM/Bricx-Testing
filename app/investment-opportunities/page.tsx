import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { ContactSection } from "@/components/pages/contact/ContactSection";
import { Support24x7 } from "@/components/shared/Support24x7";
import { FaqSection } from "@/components/shared/FaqSection";

const capabilities = [
  {
    title: "Real Income",
    icon: "/icons/opportunities/realincome.svg",
    description:
      "We look beyond the headline yield. A commercial investment provider once offered a mandate at 9.8% annual returns. Bricx.ai's due diligence uncovered hidden management fees and operational charges that reduced the actual investor return to below 6% — worse than bank FD rates with significantly higher risk. We severed that partnership. Our focus is on how steady and reliable the income stream actually is — tenant quality, lease tenure, and vacancy risk all come before the number on the brochure.",
  },
  {
    title: "Return Clarity",
    icon: "/icons/opportunities/returnclarity.svg",
    description:
      "Returns can look strong in projections. We recently closed a Rs 9.2 crore investment in a pre-leased commercial property on Outer Ring Road delivering 8.2% annual ROI through monthly rental income backed by a reputed builder and established tenant. Marathahalli's position in Bangalore's tech corridor — proximity to Whitefield, strong connectivity, and sustained corporate demand — supports both immediate yield and long-term capital appreciation. We help you understand what returns look like over a realistic hold period, not just in projections.",
  },
  {
    title: "Risk First",
    icon: "/icons/opportunities/riskfirst.svg",
    description:
      "Before any commercial property investment in Bangalore is recommended, we examine what can go wrong. Tenant strength, micro-market dynamics, and downside scenarios are evaluated first. Comparing a Rs 1 crore residential property generating Rs 25,000 monthly rent at 3% ROI against a Rs 1 crore commercial property generating Rs 66,000 monthly rent at 7.9% ROI with 10-year lease certainty and tenant-borne maintenance makes the structural case for commercial real estate clear.",
  },
  {
    title: "Exit and Timing",
    icon: "/icons/opportunities/exitandtiming.svg",
    description:
      "We think about how you will exit before you enter. Every income asset advisory mandate includes an exit framework — what the asset needs to achieve and over what timeline. Bangalore remains India's technology and AI hub. GCC growth and undersupply of Grade A office inventory create favorable conditions for investors seeking inflation-hedged income.",
  },
] as const;

export const metadata = pageMetadata({
  title: "Commercial Property Investment Bangalore | Office Investment Advisory",
  description:
    "Strategic commercial property investment advisory in Bengaluru. We evaluate income-producing assets with capital market discipline—focusing on risk first and return projections next.",
  path: "/investment-opportunities",
});

export default function InvestmentOpportunitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section id="opportunities" className="pt-28 pb-6 sm:pt-32 sm:pb-8 md:pt-36 md:pb-10">
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mx-auto mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-5xl">
              Commercial Property Investment Advisory in Bangalore, Bengaluru
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-xl font-semibold leading-[1.2] text-[var(--color-accent)] sm:text-2xl uppercase tracking-wider">
              Buy-Side. Sell-Side. Capital Markets Discipline.
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base font-light leading-relaxed text-muted font-nunito text-left">
              Commercial real estate investments require more than identifying an opportunity. Bricx.ai provides real estate investment advisory in Bengaluru with a focus on income reliability, risk assessment, and disciplined underwriting — before returns are ever discussed.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-18">
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 text-center pb-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">How We Evaluate</h2>
          </div>
          <div className="mx-auto grid max-w-[76rem] gap-3 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="bg-[var(--color-invest-card)] p-6 text-center min-h-[16.5rem] md:min-h-[17.5rem] md:p-7 flex flex-col items-center justify-center"
              >
                <div
                  className="h-12 w-12 shrink-0 self-center bg-[var(--color-accent)] md:self-auto"
                  style={{
                    maskImage: `url(${item.icon})`,
                    WebkitMaskImage: `url(${item.icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                  role="img"
                  aria-label={`${item.title} icon`}
                />
                <h2 className="mt-4 w-full text-left text-2xl font-semibold text-[var(--color-opp-text)] font-serif">
                  {item.title}
                </h2>
                <p className="mt-3 w-full text-left text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* What We Work On Section */}
        <section className="py-16 md:py-24 bg-[var(--color-invest-card)] border-t border-border/40">
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito block text-center mb-2">
              Asset Coverage
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-center mb-8">
              What We Work On
            </h2>
            <div className="mx-auto max-w-4xl text-base font-light leading-relaxed text-muted font-nunito text-center">
              <p className="text-left">
                Grade A office investments in Bengaluru. Income-producing commercial properties across office, retail, and mixed-use asset classes in Bangalore. Buy-side and sell-side mandates for HNIs and family offices. Capital structuring and portfolio strategy for investors building exposure to real estate capital markets in India. We also advise NRIs and diaspora investors evaluating commercial real estate in Bengaluru. Entry points start at Rs 10 lakh for fractional co-owned units with guaranteed rental income, scaling to Rs 1.5 to 3 crore for small-format office units, Rs 5 to 10 crore for independent floors, and Rs 25 to 50 crore for institutional-grade standalone assets.
              </p>
            </div>
          </div>
        </section>

        <Support24x7 />

        <ContactSection />
        <FaqSection page="investments" />
      </main>
      <SiteFooter />
    </div>
  );
}
