import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { ContactSection } from "@/components/pages/contact/ContactSection";
import { AdvisoryListings } from "@/components/pages/advisory/AdvisoryListings";
import { Support24x7 } from "@/components/shared/Support24x7";
import { FaqSection } from "@/components/shared/FaqSection";

const capabilities = [
    {
        title: "Title Clarity",
        icon: "/icons/land/titleclarity.svg",
        description:
            "We verify ownership, trace title history, and flag any gaps early. If the paper is not clean, we don’t take it forward.",
    },
    {
        title: "Time & Exit Thinking",
        icon: "/icons/land/timeandexitthinking.svg",
        description:
            "Land needs patience. We help you understand how long it may take to move and what your exit could realistically look like.",
    },
    {
        title: "Fit Over All",
        icon: "/icons/land/fitoverall.svg",
        description:
            "Not every good land is right for you. We look at your time horizon, risk appetite, and capital comfort before recommending anything.",
    },
    {
        title: "What We Skip",
        icon: "/icons/land/whatweskip.svg",
        description:
            "Most land looks good on paper. We spend more time saying no than yes. If something doesn’t meet our bar, it doesn’t reach you",
    },
] as const;

export const metadata = pageMetadata({
  title: "Land Acquisition Advisory Bangalore | Joint Development (JDA)",
  description:
    "Strategic land acquisition and joint development (JDA) advisory in Bengaluru. We provide 30-year title chain vetting, zoning analysis, and FSI optimization.",
  path: "/land-opportunities",
});

export default function InvestmentOpportunitiesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <section id="opportunities" className="pt-28 pb-5 sm:pt-32 sm:pb-9 md:pt-36 md:pb-11">
                    <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
                        <h1 className="mx-auto mt-4 max-w-4xl text-center font-serif text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-5xl">
                            Land Acquisition & Joint Development Advisory in Bengaluru
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground">
                            Litigation, unclear titles, access gaps, and assumptions that do not hold up.
                        </p>
                        <p className="mx-auto max-w-3xl text-center text-sm font-light leading-relaxed text-muted">
                            We filter aggressively before anything reaches you: clean ownership, clear access, and realistic use. Connect directly with our land acquisition advisory desk.
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
                                <h2 className="mt-3 w-full text-left text-2xl font-semibold text-[var(--color-opp-text)] font-serif">
                                    {item.title}
                                </h2>
                                <p className="mt-3 w-full text-left text-sm font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
                {/* 
        <AdvisoryListings /> */}
                <Support24x7 />

                <ContactSection />
                <FaqSection page="land" />
            </main>
            <SiteFooter />
        </div>
    );
}
