"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Pricing() {
  const t = useTranslations("pricing");
  const [activeTab, setActiveTab] = useState<"standard" | "premium">("standard");

  const plans = t.raw(`plans.${activeTab}`) as Array<{
    id: string;
    name: string;
    price: string;
    period: string;
    features: string[];
    url: string;
    popular: boolean;
  }>;

  return (
    <section id="pricing" className="max-w-screen-2xl pb-20 relative">
      <div className="absolute inset-0 bg-section-alt -z-10" />
      <div className="lg:py-16 mx-auto px-2 py-8">
        <h2 className="mb-4 mt-4 relative text-center text-xl">
          <span className="text-primary uppercase">{t("sectionTitle")}</span>
        </h2>
        <div className="lg:mb-20 max-w-screen-md mb-16 mx-auto relative text-center">
          <h2 className="text-white font-extrabold mb-4 text-4xl tracking-tight">
            {t("heading")}
          </h2>
          <div className="flex gap-4 items-center justify-center px-2 mb-4">
            <button
              onClick={() => setActiveTab("standard")}
              className={`cursor-pointer font-semibold p-3 rounded-xl text-base min-w-[120px] ${
                activeTab === "standard"
                  ? "bg-primary text-white"
                  : "bg-glass text-muted hover:bg-glass-light"
              }`}
            >
              {t("standardTab")}
            </button>
            <button
              onClick={() => setActiveTab("premium")}
              className={`cursor-pointer font-semibold p-3 rounded-xl text-base min-w-[120px] ${
                activeTab === "premium"
                  ? "bg-primary text-white"
                  : "bg-glass text-muted hover:bg-glass-light"
              }`}
            >
              {t("premiumTab")}
            </button>
          </div>
          <p className="text-white font-extrabold my-4 text-xl tracking-tight">
            {t("multiDevice")}{" "}
            <Link href="/multiple-devices" className="italic text-primary underline-offset-1">
              {t("multiDeviceLink")}
            </Link>
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-6 justify-center w-full">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col p-6 rounded-lg shadow text-center w-80 xl:p-8 ${
                plan.popular
                  ? "bg-elevated border border-border text-white shadow-2xl shadow-primary/20 relative"
                  : "backdrop-blur-sm bg-glass border border-border text-muted hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              }`}
            >
              {plan.popular && (
                <span className="-top-4 -translate-x-1/2 absolute bg-gradient-to-r bg-opacity-25 font-medium from-accent left-1/2 p-3 rounded-full text-white text-xs to-primary whitespace-nowrap">
                  {t("mostPopular")}
                </span>
              )}
              <h3 className="font-semibold mb-4 text-2xl">{plan.name}</h3>
              <p className="text-muted font-light sm:text-lg">{plan.period}</p>
              <div className="flex items-baseline justify-center my-8">
                <span className="font-extrabold text-5xl">
                  {plan.price.split(".")[0]}
                  <span className="-top-6 relative text-xs">.{plan.price.split(".")[1]}€</span>
                </span>
              </div>
              <ul role="list" className="mb-8 pl-8 space-y-4 text-left text-muted flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      fill="currentColor"
                      className="flex-shrink-0 h-5 text-green-500 w-5"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary focus:outline-none focus:ring-4 focus:ring-primary/30 font-medium h-11 hover:bg-primary-dark mx-auto py-2 rounded-lg text-center text-sm text-white w-11/12"
              >
                {t("buyNow")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
