import Image from "next/image";
import { InvestmentListings } from "@/components/pages/investment/InvestmentListings";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { ContactSection } from "@/components/pages/contact/ContactSection";
import { Support24x7 } from "@/components/shared/Support24x7";
import { FaqSection } from "@/components/shared/FaqSection";
import { pageMetadata } from "@/lib/seo";

const capabilities = [
  {
    title: "More Than Offices",
    icon: "/icons/advisory/morethanoffices.svg",
    description:
      "Office space is not just desks and internet. It shapes how your team focuses, collaborates, and performs over time. An advertising agency in Hebbal was quoted Rs 5,000 per seat — but the all-in cost was Rs 7,200 per seat after accounting for AC charges past 7 PM, weekend access fees, and mandatory private internet. Companies underestimate total occupancy cost by 20 to 30 percent when evaluating only headline rent figures. We conduct line-item cost audits before recommending any space.",
  },
  {
    title: "Terms That Matter",
    icon: "/icons/advisory/termsthatmatter.svg",
    description:
      "Rent is one line item. Lock-ins, exit clauses, fit-out contributions, and escalation terms shape the real cost. A partnership firm took 50 seats based on one large client contract. When that client was lost, they were locked into paying for all 50 seats. Bricx.ai restructured the contract with a downsize clause, allowing them to reduce to 20 seats without penalty. We focus on the fine print that determines long-term outcomes — not just the headline figure.",
  },
  {
    title: "For Every Budget",
    icon: "/icons/advisory/foreverybudget.svg",
    description:
      "Office space cost in Bangalore varies significantly by micro-market. A 30-seater in Whitefield costs approximately Rs 1.8 lakh per month all-inclusive. The same configuration in Koramangala runs Rs 3 lakh monthly. For 50-seater setups, HSR Layout pricing sits around Rs 2 lakh per month compared to Rs 4 to 4.5 lakh in Indiranagar. We show you exactly what changes across price points so you can choose what actually matters to your business.",
  },
  {
    title: "If Things Change",
    icon: "/icons/advisory/ifthingschange.svg",
    description:
      "Businesses evolve. A technology company took 1,200 seats with a rigid three-year lock-in. When business conditions changed, Bricx.ai restructured the agreement with staggered billing — allowing both parties to survive the downturn. We help you understand your flexibility for expansion, reduction, or early exit before you sign.",
  },
] as const;

export const metadata = pageMetadata({
  title: "Office Space Advisory Bengaluru | Tenant Representation & Leasing",
  description:
    "Conflict-free office leasing advisory and tenant representation services in Bengaluru. We audit lease structures, lock-ins, and spatial performance to protect occupiers.",
  path: "/advisory",
});

export default function AdvisoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the commercial leasing process in Bengaluru?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The process begins with a detailed spatial and financial needs analysis, followed by market sourcing of off-market and pre-leased assets. We then perform technical and legal due diligence, negotiate terms in the LOI, and draft/register the lease agreement, concluding with fit-out and handover audit."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key office leasing questions to ask before signing a lease in Bengaluru?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Occupiers must clarify: (1) Is the rental rate based on warm shell or plug-and-play? (2) What is the exact carpet area vs super built-up area ratio? (3) Are maintenance, power backup, and water charges included in the CAM? (4) What is the lock-in period and what are the penalties for early termination? (5) Does the landlord have a clear title and Occupancy Certificate (OC)?"
                }
              },
              {
                "@type": "Question",
                "name": "How does Bricx.ai verify property compliance for office leasing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bricx.ai audits the property's title deeds, occupancy certificates, fire safety compliance, structural stability, and electricity load capabilities to protect occupiers from legal and operational disruptions."
                }
              }
            ]
          }),
        }}
      />
      <SiteHeader />
      <main className="flex-1">
        <section
          id="advisory"
          className="pt-28 pb-6 sm:pt-32 sm:pb-8 md:pt-36 md:pb-10"
        >
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mx-auto mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-5xl">
              Leasing Advisory Services in Bangalore, Bengaluru
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-xl font-semibold leading-[1.2] text-[var(--color-accent)] sm:text-2xl uppercase tracking-wider">
              Tenant Representation. Lease Structuring. Long-Term Fit.
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base font-light leading-relaxed text-muted font-nunito text-left">
              Finding the right office space is only the beginning. Bricx.ai provides end-to-end leasing advisory in Bengaluru — from requirement understanding and location strategy to lease negotiation and deal closure. We represent occupiers, not landlords. Our leasing advisory covers Bangalore&apos;s key office corridors — Outer Ring Road, Whitefield, Koramangala, Electronic City, and central Bengaluru — and we bring the same discipline regardless of location or deal size.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-18">
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-center mb-10">
              What We Cover
            </h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </section>

        {/* Where We Work Section */}
        <section className="py-16 md:py-24 bg-background border-t border-border/40">
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito block text-center mb-2">
              Locations
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-center mb-8">
              Where We Work
            </h2>
            <div className="mx-auto max-w-4xl text-base font-light leading-relaxed text-muted font-nunito text-center">
              <p>
                There is no universal best location — only the right micro-market for your specific business model. Software companies in Whitefield and Outer Ring Road benefit from talent density and tech culture at Rs 6,000 to 10,000 per seat for managed configurations. Non-IT startups in Koramangala access central location and Gen Z talent at Rs 8,000 to 25,000 per seat. BPO and support operations in Kudlu Gate, JP Nagar, and Silk Board benefit from proximity to affordable employee housing and public transport. North Bangalore — Hebbal and surrounding areas — has seen the sharpest rent increases over the last 12 months driven by airport proximity and infrastructure development. Bricx.ai&apos;s first question when founders ask where to look is always: what industry are you in?
              </p>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-16 md:py-24 bg-[var(--color-invest-card)] border-t border-border/40">
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito block text-center mb-2">
              Partnerships
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-center mb-8">
              Who We Work With
            </h2>
            <div className="mx-auto max-w-4xl text-base font-light leading-relaxed text-muted font-nunito text-center">
              <p>
                Startups scaling their teams. Mid-sized companies making significant office decisions. Enterprise clients requiring managed office and coworking advisory across Bengaluru. We provide corporate real estate advisory to occupiers who want workspace consulting grounded in strategy, not inventory.
              </p>
            </div>
          </div>
        </section>

        <Support24x7 />

        <InvestmentListings />

        <ContactSection />
        <FaqSection page="advisory" />
      </main>
      <SiteFooter />
    </div>
  );
}
