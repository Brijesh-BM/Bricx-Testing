import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { ContactSection } from "@/components/pages/contact/ContactSection";
import { Support24x7 } from "@/components/shared/Support24x7";
import { FaqSection } from "@/components/shared/FaqSection";

const capabilities = [
    {
        title: "Title Clarity",
        icon: "/icons/land/titleclarity.svg",
        description:
            "We verify ownership, trace title history, and flag gaps before anything moves forward. An investor wanted to acquire land in South Bangalore. Market research identified 23 available parcels. Bricx.ai's due diligence process rejected all 23 — each carried litigation issues, occupancy certificate conversion problems, or title disputes. We presented alternative micro-markets with clean titles and better appreciation potential. If the paper is not clean, we do not take it forward.",
    },
    {
        title: "Feasibility First",
        icon: "/icons/land/feasibility.svg",
        description:
            "Every land acquisition in Bangalore is evaluated for realistic use — including real estate due diligence on title, zoning, FSI, and infrastructure access. Litigation history, disputed ownership, unclear zoning classifications, pending BBMP sanctions, environmental clearance delays, and unrealistic development assumptions cause most land deals to fail post-acquisition. Feasibility analysis is built into every mandate, not treated as an afterthought.",
    },
    {
        title: "JDA and Structuring",
        icon: "/icons/land/jointdevelopment.svg",
        description:
            "For developers and landowners exploring joint development, we provide joint development advisory in India — whether structured as a JDA, joint venture, or development management arrangement. We evaluate revenue share frameworks and stress-test assumptions before any commitment is made.",
    },
    {
        title: "Time and Exit",
        icon: "/icons/land/growthcorridors.svg",
        description:
            "Land needs patience. North Bangalore — particularly Hebbal and the airport corridor — offers strong land appreciation potential in 2026. Airport proximity, Metro expansion expected within 24 months, GCC cluster development, and current underdevelopment relative to demand create compounding appreciation drivers. We help you understand realistic timelines and whether the opportunity matches your capital horizon and risk appetite.",
    },
] as const;

export const metadata = pageMetadata({
    title: "Land & Joint Development Opportunities Bengaluru | Strategic Real Estate",
    description:
        "Premium commercial land acquisition, site feasibility, and joint development opportunities in Bengaluru's growth corridors. We provide institutional-grade due diligence for landowners and developers.",
    path: "/land-opportunities",
});

export default function LandOpportunitiesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <section id="land" className="pt-28 pb-6 sm:pt-32 sm:pb-8 md:pt-36 md:pb-10">
                    <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="mx-auto mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-5xl">
                            Land Acquisition Advisory in Bangalore, Bengaluru
                        </h1>
                        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-xl font-semibold leading-[1.2] text-[var(--color-accent)] sm:text-2xl uppercase tracking-wider">
                            Title Clarity. Realistic Use. No Assumptions.
                        </h2>
                        <p className="mx-auto mt-6 max-w-4xl text-base font-light leading-relaxed text-muted font-nunito text-left">
                            Litigation, unclear titles, access gaps, and projections that do not hold up. Bricx.ai provides land acquisition advisory in Bengaluru with a filter-first approach — most land across the Bangalore metropolitan region does not pass our bar, and that is by design. Land is Bangalore's most litigation-vulnerable asset class. We reject more land opportunities than any other step in our process to protect client capital.
                        </p>
                    </div>
                </section>

                <section className="pb-16 md:pb-18">
                    <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 text-center pb-8">
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">How We Work</h2>
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

                <section className="py-16 md:py-24 bg-[var(--color-invest-card)] border-t border-border/40">
                  <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito block text-center mb-2">
                      Partnerships
                    </span>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-center mb-8">
                      Who We Work With
                    </h2>
                    <div className="mx-auto max-w-4xl text-base font-light leading-relaxed text-muted font-nunito text-center">
                      <p className="text-left">
                        HNIs and UHNIs looking at land as a long-term asset. Developers sourcing sites for greenfield development in Bengaluru — particularly along growth corridors like Devanahalli, Sarjapur Road, and the northern periphery. Landowners exploring land monetization advisory and development partnerships in Bangalore. We work with a small number of mandates at any given time — by design.
                      </p>
                    </div>
                  </div>
                </section>

                <Support24x7 />

                <ContactSection />
                <FaqSection page="land" />
            </main>
            <SiteFooter />
        </div>
    );
}
