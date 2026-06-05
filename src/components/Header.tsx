"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";

function Flag({ country }: { country: string }) {
  if (country === "nl") {
    return (
      <svg className="h-5 w-6 rounded-sm shrink-0" viewBox="0 0 24 16">
        <rect width="24" height="5.33" fill="#AE1C28" />
        <rect y="5.33" width="24" height="5.34" fill="#FFF" />
        <rect y="10.67" width="24" height="5.33" fill="#21468B" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-6 rounded-sm shrink-0" viewBox="0 0 60 40">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#FFF" strokeWidth="6" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="2" />
      <rect x="27" width="6" height="40" fill="#FFF" />
      <rect x="27" width="2" height="40" fill="#C8102E" />
      <rect y="17" width="60" height="6" fill="#FFF" />
      <rect y="17" width="60" height="2" fill="#C8102E" />
    </svg>
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const s = useTranslations("site");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const otherLocale = locale === "nl" ? "en" : "nl";
  const otherHref = pathname === "/" ? `/${otherLocale}` : `/${otherLocale}${pathname}`;

  return (
    <header className="fixed w-full z-50">
      <nav className="left-0 top-0 w-full z-20 bg-black/70 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <Link href="/" className="flex flex-col">
            <span
              className="bg-clip-text font-extrabold max-w-2xl sm:text-4xl text-2xl text-primary tracking-wider"
              style={{ fontFamily: "Nero, sans-serif" }}
            >
              {s("brandName")}
            </span>
            <span className="font-bold italic sm:text-xs text-muted-more tracking-wider" style={{ fontSize: "8px" }}>
              {s("brandSubtitle")}
            </span>
          </Link>

          <div className="flex md:order-2 gap-1">
            <a
              href={`https://wa.me/13328956041?text=${encodeURIComponent(t("trialMsg"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] cursor-pointer flex gap-1.5 items-center justify-center p-2 px-3 rounded-sm text-white text-sm font-medium transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("trialBtn")}
            </a>
            <div className="p-2 relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="bg-primary cursor-pointer flex gap-2 items-center justify-center p-2 px-4 rounded-sm text-white min-w-[110px]"
              >
                <Flag country={locale === "nl" ? "nl" : "gb"} />
                <span className="text-white text-sm">{t("languageLabel")}</span>
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute bg-elevated border border-border flex-col gap-2 flex items-center py-3 rounded-sm top-full mt-1 w-40 right-0 shadow-lg">
                  <Link
                    href={pathname === "/" ? "/" : pathname}
                    locale={otherLocale}
                    className="cursor-pointer flex gap-2 items-center px-4 py-2 hover:bg-glass-light w-full justify-center"
                    onClick={() => setLangOpen(false)}
                  >
                    <Flag country={locale === "nl" ? "gb" : "nl"} />
                    <span className="text-muted hover:text-white text-sm">{t("otherLang")}</span>
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-border hover:bg-glass-light inline-flex items-center md:hidden p-2 rounded-lg text-muted text-sm"
            >
              <span className="sr-only">Open main menu</span>
              <svg fill="currentColor" aria-hidden="true" className="h-6 w-6" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${menuOpen ? "flex" : "hidden"} items-center justify-between md:flex md:order-1 md:w-auto w-full`}
          >
            <ul className="bg-elevated border border-border flex flex-col font-medium md:bg-transparent md:border-0 md:flex-row md:mt-0 md:p-0 md:space-x-8 mt-4 p-4 rounded-lg w-full">
              {[
                { href: "/", label: t("home") },
                { href: "/#pricing", label: t("pricing") },
                { href: "/blog", label: t("blog") },
                { href: "/blog/setup-guide", label: t("setupGuide") },
              ].map((item) => {
                const active = item.href === "/"
                  ? pathname === "/"
                  : item.href === "/blog"
                    ? pathname.startsWith("/blog") && !pathname.includes("/setup-guide")
                    : item.href === "/blog/setup-guide"
                      ? pathname.startsWith("/blog/setup-guide")
                      : pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block border-border hover:bg-glass-light hover:text-white md:hover:bg-transparent md:hover:text-primary md:p-0 pl-3 pr-4 py-2 rounded ${
                        active
                          ? "bg-primary text-white md:bg-transparent md:text-primary"
                          : "text-muted"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
