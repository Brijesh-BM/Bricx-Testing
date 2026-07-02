import React from 'react';
import type { Metadata } from 'next';
import blogsData from '../blogs.json';
import HomeClient from './HomeClient';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  hero_image: string;
  hero_image_alt: string;
  date: string;
  content: string[];
}

export const metadata: Metadata = {
  title: "Independent Commercial Real Estate Advisory in Bangalore",
  description: "Bricx.ai is a boutique real estate advisory firm in Bangalore. Conflict free counsel across leasing, investments, and land without developer bias.",
  alternates: {
    canonical: "https://bricx.ai/"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/",
    title: "Independent Commercial Real Estate Advisory in Bangalore",
    description: "Bricx.ai is a boutique real estate advisory firm in Bangalore. Conflict free counsel across leasing, investments, and land without developer bias.",
    images: [
      {
        url: "https://bricx.ai/static/og-default.png",
        width: 1200,
        height: 630,
        alt: "Bricx.ai Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Independent Commercial Real Estate Advisory in Bangalore",
    description: "Bricx.ai is a boutique real estate advisory firm in Bangalore. Conflict free counsel across leasing, investments, and land without developer bias.",
    images: ["https://bricx.ai/static/og-default.png"]
  }
};

export default function HomePage() {
  const latestBlogs: BlogPost[] = (blogsData as BlogPost[]).slice(0, 3);

  // Exact port of Flask's RealEstateAgent JSON-LD Schema
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Bricx.ai",
    "image": "https://bricx.ai/static/og-default.png",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bricx-ai",
      "https://twitter.com/bricx_ai"
    ]
  };

  // Exact port of Flask's ProfessionalService JSON-LD Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Bricx Capital Markets & Wealth Advisory",
    "url": "https://bricx.ai/",
    "logo": "https://bricx.ai/static/home_about_advisory.png",
    "description": "Evaluating commercial real estate with the analytical discipline of capital markets, examining risk first, structure next, and returns last."
  };

  // Exact port of Flask's FAQPage JSON-LD Schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Bricx.ai different from other real estate consultants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional brokers represent landlords and focus on closing deals quickly. Bricx.ai operates on an occupier first, conflict free advisory model without sales quotas. We evaluate assets using capital markets discipline: examining risk first, structure next, and returns last."
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
          "text": "The process begins with a detailed spatial and financial needs analysis, followed by market sourcing of off market and pre leased assets. We then perform technical and legal due diligence, negotiate terms in the LOI, and draft/register the lease agreement, concluding with fit out and handover audit."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      
      <HomeClient latestBlogs={latestBlogs} />
    </>
  );
}
