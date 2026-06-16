import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { ContactSection } from "@/components/pages/contact/ContactSection";
import { AdvisoryListings } from "@/components/pages/advisory/AdvisoryListings";
import { Support24x7 } from "@/components/shared/Support24x7";
import { FaqSection } from "@/components/shared/FaqSection";

const capabilities = [
  {
    title: "Real Income",
    icon: "/icons/opportunities/realincome.svg",
    description:
      "We look beyond the headline yield and focus on how steady and reliable the income really is.",
  },
  {
    title: "Return Clarity",
    icon: "/icons/opportunities/returnclarity.svg",
    description:
      "Returns can look good on paper. We help you understand what they look like over time, not just in projections.",
  },
  {
    title: "Risk First",
    icon: "/icons/opportunities/riskfirst.svg",
    description:
      "Before returns, we look at what can go wrong. Tenant strength, location, and downside all come first.",
  },
  {
    title: "Exit & Timing",
    icon: "/icons/opportunities/exitandtiming.svg",
    description:
      "We think about how you will exit before you enter, and what the asset needs to achieve for that to happen.",
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
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
            <h1 className="mx-auto mt-4 max-w-4xl text-center font-serif text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-5xl">
              Commercial Property Investment & Office Yield Advisory
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground">
              Commercial real estate investments require more than opportunity.
              They demand analysis, foresight, and disciplined decision making. Connect directly with our commercial property investment consultant.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-18">
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

        <Support24x7 />

        {/* <AdvisoryListings /> */}

        <ContactSection />
        <FaqSection page="investments" />
      </main>
      <SiteFooter />
    </div>
  );
}
