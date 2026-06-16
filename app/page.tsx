import { SiteFooter } from "@/components/shared/layout/SiteFooter";
import { SiteHeader } from "@/components/shared/layout/SiteHeader";
import { ContactSection } from "@/components/pages/contact/ContactSection";
import { CoreAdvisory } from "@/components/pages/home/CoreAdvisory";
import { Hero } from "@/components/pages/home/Hero";
import { ParallaxZoom } from "@/components/pages/home/ParallaxZoom";
import { OpportunitiesCarousel } from "@/components/pages/home/OpportunitiesCarousel";
import { WhoWeAre } from "@/components/pages/home/WhoWeAre";
import { WhyBricx } from "@/components/pages/home/WhyBricx";
import { FaqSection } from "@/components/shared/FaqSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Commercial Real Estate Advisory in Bangalore",
    description:
      "Independent commercial real estate advisory in Bangalore across leasing, investments and land. Trust earned through discipline, clarity and sound judgment.",
    path: "/",
  }),
  title: {
    absolute: "Commercial Real Estate Advisory in Bangalore | Bricx.ai",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Bricx.ai",
            "image": "https://bricx.ai/images/og-default.png",
            "@id": "https://bricx.ai/#realestateagent",
            "url": "https://bricx.ai/",
            "telephone": "+919070504020",
            "priceRange": "$$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "WeWork Galaxy 43, Residency Rd, Ashok Nagar",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560025",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.9715,
              "longitude": 77.6015
            },
            "founder": {
              "@type": "Person",
              "name": "Krupesh Sanghani",
              "jobTitle": "Founder & Principal Advisor",
              "sameAs": "https://www.linkedin.com/company/bricx-ai"
            },
            "sameAs": [
              "https://www.linkedin.com/company/bricx-ai"
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is Bricx.ai different from other real estate consultants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional brokers represent landlords and focus on closing deals quickly. Bricx.ai operates on an occupier-first, conflict-free advisory model without sales quotas. We evaluate assets using capital markets discipline—examining risk first, structure next, and returns last."
                }
              },
              {
                "@type": "Question",
                "name": "Why should corporate occupiers use tenant representation services rather than direct brokers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tenant representation services like Bricx.ai exclusively represent the occupier's interests. This allows us to perform objective lease audits, negotiate favorable escalation terms, structure early exit or downsizing options, and verify municipal compliance (OC, fire NOC, electrical loads) without conflict of interest."
                }
              },
              {
                "@type": "Question",
                "name": "What is the commercial leasing process in Bengaluru?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The process begins with a detailed spatial and financial needs analysis, followed by market sourcing of off-market and pre-leased assets. We then perform technical and legal due diligence, negotiate terms in the LOI, and draft/register the lease agreement, concluding with fit-out and handover audit."
                }
              }
            ]
          }),
        }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ParallaxZoom />
        <WhoWeAre />
        <CoreAdvisory />
        {/* <OpportunitiesCarousel /> */}
        <WhyBricx />
        <ContactSection />
        <FaqSection page="home" />
      </main>
      <SiteFooter />
    </div>
  );
}
