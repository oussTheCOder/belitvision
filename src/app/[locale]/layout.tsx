import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL("https://www.belitvision.com"),
    alternates: {
      canonical: locale === "nl" ? "https://www.belitvision.com" : "https://www.belitvision.com/en",
      languages: {
        nl: "https://www.belitvision.com",
        en: "https://www.belitvision.com/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "BELITVISION",
      locale: locale === "nl" ? "nl_BE" : "en_US",
      type: "website",
      images: [{ url: "/images/home-hero.588c3886.webp", width: 1920, height: 1080 }],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "nl" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-black font-helvetica z-0">
        <NextIntlClientProvider messages={messages}>
          <JsonLd locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
