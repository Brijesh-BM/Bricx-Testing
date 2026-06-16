"use client";

import { useState } from "react";
import { allFaqs, FaqItem } from "@/data/faqData";

interface FaqSectionProps {
  page: "home" | "advisory" | "investments" | "land";
}

export function FaqSection({ page }: FaqSectionProps) {
  const faqs = allFaqs[page] || [];
  const [openId, setOpenId] = useState<string | null>(null);

  if (faqs.length === 0) return null;

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Helper to extract a teaser (approximately half of the first sentence, or up to first comma/sensible length)
  const getTeaser = (answer: string) => {
    // Extract first sentence
    const firstSentenceMatch = answer.match(/^[^.!?]+[.!?]/);
    const firstSentence = firstSentenceMatch ? firstSentenceMatch[0] : answer;
    
    // We want "like half initial sentence of answer"
    // Let's take the first 65 characters or split at a comma/pause
    if (firstSentence.length > 70) {
      // Find a space near the 60-character mark to avoid cutting a word
      const spaceIndex = firstSentence.indexOf(" ", 60);
      if (spaceIndex !== -1 && spaceIndex < 90) {
        return firstSentence.substring(0, spaceIndex) + ".....";
      }
      return firstSentence.substring(0, 60) + ".....";
    }
    
    // If the sentence is short, take about 70% of it
    const cutLength = Math.max(15, Math.floor(firstSentence.length * 0.7));
    const lastSpace = firstSentence.indexOf(" ", cutLength);
    if (lastSpace !== -1 && lastSpace < firstSentence.length) {
      return firstSentence.substring(0, lastSpace) + ".....";
    }
    return firstSentence.substring(0, cutLength) + ".....";
  };

  return (
    <section className="bg-background py-28 md:py-32 border-t border-border/40">
      <div className="mx-auto max-w-5xl-plus px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-muted font-light max-w-lg mx-auto">
            Clear insights and structural answers to help you navigate our services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto divide-y divide-border/60">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="py-6 transition-colors duration-200"
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="flex w-full items-start justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="pr-8 flex-1 min-w-0">
                    <h3 className="font-serif text-lg font-medium text-foreground tracking-tight transition-colors duration-200 group-hover:text-[var(--color-accent)] sm:text-xl">
                      {faq.question}
                    </h3>
                    
                    {/* Collapsed Teaser */}
                    {!isOpen && (
                      <p className="mt-2 text-xs md:text-sm font-light text-muted/80 leading-relaxed font-nunito animate-fade-in">
                        {getTeaser(faq.answer)}
                      </p>
                    )}
                  </div>

                  {/* Icon Indicator: Thin Chevron */}
                  <span className="ml-4 flex h-6 items-center justify-center shrink-0">
                    <svg
                      className={`h-4 w-4 text-foreground/60 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {/* Expandable Full Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base leading-relaxed font-light text-foreground/90 font-nunito">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
