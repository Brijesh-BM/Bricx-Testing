import React from 'react';
import type { Metadata } from 'next';
import AdvisoryClient from './AdvisoryClient';

export const metadata: Metadata = {
  title: "Leasing Advisory Services in Bangalore",
  description: "Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure.",
  alternates: {
    canonical: "https://bricx.ai/advisory"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/advisory",
    title: "Leasing Advisory Services in Bangalore",
    description: "Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure.",
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
    title: "Leasing Advisory Services in Bangalore",
    description: "Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure.",
    images: ["https://bricx.ai/static/og-default.png"]
  }
};

export default function AdvisoryPage() {
  // Exact port of Flask's FAQPage JSON-LD Schema for Advisory
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the commercial leasing process in Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process begins with a detailed spatial and financial needs analysis, followed by market sourcing of off market and pre leased assets. We then perform technical and legal due diligence, negotiate terms in the LOI, and draft/register the lease agreement, concluding with fit out and handover audit."
        }
      },
      {
        "@type": "Question",
        "name": "What are the key office leasing questions to ask before signing a lease in Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Occupiers must clarify: (1) Is the rental rate based on warm shell or plug and play? (2) What is the exact carpet area vs super built up area ratio? (3) Are maintenance, power backup, and water charges included in the CAM? (4) What is the lock in period and what are the penalties for early termination? (5) Does the landlord have a clear title and Occupancy Certificate (OC)?"
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <AdvisoryClient />
    </>
  );
}
