"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = t.raw("items") as Array<{ q: string; a: string }>;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="py-16 bg-section-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-12 text-center text-white">{t("title")}</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-glass rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer hover:bg-glass-light"
                >
                  <span className="font-semibold text-white pr-4">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-muted">{item.a}</div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
