"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

interface FAQ {
  question: string;
  answer: string;
}

interface LocationFAQsProps {
  faqs: FAQ[];
  city: string;
}

export function LocationFAQs({ faqs, city }: LocationFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section tone="parchment" className="py-16">
      <Container>
        <Heading as="h2" showDivider={true} className="text-center mb-12">
          Frequently Asked Questions
        </Heading>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-umber/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-parchment/30 transition-colors duration-200"
              >
                <span className="text-lg font-display font-semibold text-ink pr-4">
                  {faq.question}
                </span>
                <svg
                  className={cn(
                    "w-6 h-6 flex-shrink-0 text-brass transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-base text-ink/70 font-elegant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
