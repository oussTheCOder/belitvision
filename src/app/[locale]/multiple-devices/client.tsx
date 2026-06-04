"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface DevicePlan {
  name: string;
  label: string;
  price: string;
  features: string[];
  url: string;
  popular: boolean;
}

const plans: Record<string, { standard: DevicePlan[]; premium: DevicePlan[] }> = {
  nl: {
    standard: [
      { name: "1 Maand", label: "02 apparaten", price: "22.48", features: ["Alle apparaten zijn ondersteund", "+24000 Kanalen", "+160.000 Films en series", "Toegang tot premiumkanalen", "Alle topsport kanalen", "4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1132", popular: false },
      { name: "3 Maand", label: "02 apparaten", price: "44.98", features: ["Alle apparaten zijn ondersteund", "+24000 Kanalen", "+160.000 Films en series", "Toegang tot premiumkanalen", "Alle topsport kanalen", "4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1131", popular: false },
      { name: "6 Maand", label: "02 apparaten", price: "64.98", features: ["Alle apparaten zijn ondersteund", "+24000 Kanalen", "+160.000 Films en series", "Toegang tot premiumkanalen", "Alle topsport kanalen", "4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1130", popular: true },
      { name: "1 Jaar", label: "02 apparaten", price: "99.98", features: ["Alle apparaten zijn ondersteund", "+24000 Kanalen", "+160.000 Films en series", "Toegang tot premiumkanalen", "Alle topsport kanalen", "4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1775", popular: false },
    ],
    premium: [
      { name: "1 Maand", label: "Premium - 02 apparaten", price: "33.98", features: ["Alle apparaten zijn ondersteund", "+31000 Kanalen", "+170.000 Films en series", "Catch-up en epg-gids", "Vpn m3u-link indien nodig", "Toegang tot premiumkanalen", "Alle topsport kanalen", "8K. 4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2364&clear-cart=true", popular: false },
      { name: "3 Maand", label: "Premium - 02 apparaten", price: "64.98", features: ["Alle apparaten zijn ondersteund", "+31000 Kanalen", "+170.000 Films en series", "Catch-up en epg-gids", "Vpn m3u-link indien nodig", "Toegang tot premiumkanalen", "Alle topsport kanalen", "8K. 4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2363&clear-cart=true", popular: false },
      { name: "6 Maand", label: "Premium - 02 apparaten", price: "84.98", features: ["Alle apparaten zijn ondersteund", "+31000 Kanalen", "+170.000 Films en series", "Catch-up en epg-gids", "Vpn m3u-link indien nodig", "Toegang tot premiumkanalen", "Alle topsport kanalen", "8K. 4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2362&clear-cart=true", popular: true },
      { name: "1 Jaar", label: "Premium - 02 apparaten", price: "125", features: ["Alle apparaten zijn ondersteund", "+31000 Kanalen", "+170.000 Films en series", "Catch-up en epg-gids", "Vpn m3u-link indien nodig", "Toegang tot premiumkanalen", "Alle topsport kanalen", "8K. 4K. HD. FHD. HEVC-kwaliteit", "M3U MAG Enigma2", "Snelle en stabiele server", "Antivries technologieën", "24/7 Steun"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2361&clear-cart=true", popular: false },
    ],
  },
  en: {
    standard: [
      { name: "1 Month", label: "02 devices", price: "22.48", features: ["All devices supported", "+24000 Channels", "+160.000 Movies & Series", "Access to premium channels", "All sports channels", "4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1132", popular: false },
      { name: "3 Months", label: "02 devices", price: "44.98", features: ["All devices supported", "+24000 Channels", "+160.000 Movies & Series", "Access to premium channels", "All sports channels", "4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1131", popular: false },
      { name: "6 Months", label: "02 devices", price: "64.98", features: ["All devices supported", "+24000 Channels", "+160.000 Movies & Series", "Access to premium channels", "All sports channels", "4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1130", popular: true },
      { name: "1 Year", label: "02 devices", price: "99.98", features: ["All devices supported", "+24000 Channels", "+160.000 Movies & Series", "Access to premium channels", "All sports channels", "4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=1775", popular: false },
    ],
    premium: [
      { name: "1 Month", label: "Premium - 02 devices", price: "33.98", features: ["All devices supported", "+31000 Channels", "+170.000 Movies & Series", "Catch-up and epg guide", "Vpn m3u-link if needed", "Access to premium channels", "All sports channels", "8K. 4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2364&clear-cart=true", popular: false },
      { name: "3 Months", label: "Premium - 02 devices", price: "64.98", features: ["All devices supported", "+31000 Channels", "+170.000 Movies & Series", "Catch-up and epg guide", "Vpn m3u-link if needed", "Access to premium channels", "All sports channels", "8K. 4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2363&clear-cart=true", popular: false },
      { name: "6 Months", label: "Premium - 02 devices", price: "84.98", features: ["All devices supported", "+31000 Channels", "+170.000 Movies & Series", "Catch-up and epg guide", "Vpn m3u-link if needed", "Access to premium channels", "All sports channels", "8K. 4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2362&clear-cart=true", popular: true },
      { name: "1 Year", label: "Premium - 02 devices", price: "125", features: ["All devices supported", "+31000 Channels", "+170.000 Movies & Series", "Catch-up and epg guide", "Vpn m3u-link if needed", "Access to premium channels", "All sports channels", "8K. 4K. HD. FHD. HEVC quality", "M3U MAG Enigma2", "Fast and stable server", "Anti-freeze technology", "24/7 Support"], url: "https://renotechsolutions.net/checkout/?add-to-cart=2361&clear-cart=true", popular: false },
    ],
  },
};

export default function MultipleDevicesClient({ locale }: { locale: string }) {
  const t = useTranslations("pricing");
  const [activeTab, setActiveTab] = useState<"standard" | "premium">("standard");

  const localePlans = plans[locale] || plans.nl;

  return (
    <section id="hero-section" className="pt-40 pb-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-4 text-white text-center">
          {t("multiDevice")}
        </h1>
        <p className="text-muted text-center max-w-2xl mx-auto mb-8">
          {locale === "nl"
            ? "Bekijk onze prijzen voor 2 apparaten. Kies uit Standard of Premium server."
            : "Check our prices for 2 devices. Choose Standard or Premium server."}
        </p>

        <div className="flex gap-4 items-center justify-center mb-12">
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

        <div className="flex flex-row flex-wrap gap-6 justify-center">
          {(activeTab === "standard" ? localePlans.standard : localePlans.premium).map((plan) => (
            <div
              key={plan.name}
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
              <h3 className="font-semibold mb-4 text-2xl text-white">{plan.name}</h3>
              <p className="text-muted font-light sm:text-lg">{plan.label}</p>
              <div className="flex items-baseline justify-center my-8">
                <span className="font-extrabold text-5xl text-white">
                  {plan.price}
                  <span className="-top-6 relative text-xs">€</span>
                </span>
              </div>
              <ul role="list" className="mb-8 pl-8 space-y-4 text-left text-muted flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg fill="currentColor" className="flex-shrink-0 h-5 text-green-500 w-5" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0" clipRule="evenodd" />
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

        <div className="mt-12 text-center">
          <Link href="/#pricing" className="text-primary hover:underline">
            &larr; {t("multiDeviceLink")}
          </Link>
        </div>
      </div>
    </section>
  );
}
