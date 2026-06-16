import Image from "next/image";
import { AdvisoryListings } from "@/components/pages/advisory/AdvisoryListings";
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
      "Office space is not just desks and internet. It’s about shaping an environment that supports focus, growth, and how your team performs over time.",
  },
  {
    title: "Terms That Matter",
    icon: "/icons/advisory/termsthatmatter.svg",
    description:
      "Rent is only one part of the deal. We focus on lock-ins, flexibility, and the fine print that shapes long-term outcomes.",
  },
  {
    title: "For Every Budget",
    icon: "/icons/advisory/foreverybudget.svg",
    description:
      "Every budget has trade-offs. We show you what changes across price points so you can choose what actually matters to you.",
  },
  {
    title: "If Things Change",
    icon: "/icons/advisory/ifthingschange.svg",
    description:
      "Businesses evolve. We help you understand your flexibility if you need to expand, reduce, or exit early.",
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
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
            <h1 className="mx-auto mt-4 max-w-4xl text-center font-serif text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-5xl">
              Office Space Advisory & Tenant Representation in Bengaluru
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground">
              Finding the right workspace is only the beginning. Structuring the
              right lease ensures your business operates with flexibility, cost
              efficiency, and long-term stability. Connect directly with our tenant representation services.
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
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={48}
                  height={48}
                  className="mx-auto"
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

        <AdvisoryListings />

        <ContactSection />
        <FaqSection page="advisory" />
      </main>
      <SiteFooter />
    </div>
  );
}
