import { pageMetadata } from "@/lib/seo";
import { ContactHeroBackdrop } from "@/components/pages/contact/ContactHeroBackdrop";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { ContactSection } from "@/components/pages/contact/ContactSection";

export const metadata = pageMetadata({
  title: "Contact Bricx.ai | Commercial Real Estate Advisor Bengaluru",
  description:
    "Contact Bricx.ai in Bengaluru for commercial real estate advisory, office leasing tenant representation, yield investments, and joint development land acquisition.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative min-h-[58vh] overflow-hidden pt-32 pb-24 sm:min-h-[64vh] sm:pt-36 sm:pb-28 md:min-h-[70vh] md:pt-40 md:pb-32">
          <ContactHeroBackdrop />
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="relative z-10 mt-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:mt-8 sm:text-5xl md:mt-14 md:text-5xl">
              Contact Bricx.ai — Independent Real Estate Advisory in Bangalore, Bengaluru
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base font-light leading-relaxed text-foreground/90 font-nunito">
              Bricx.ai works with a limited number of clients at any given time. If you are evaluating an office space decision, a commercial property investment, or a land opportunity in Bengaluru, reach out directly.
            </p>
          </div>
        </section>
        <ContactSection isContactPage={true} />
      </main>
      <SiteFooter />
    </div>
  );
}
