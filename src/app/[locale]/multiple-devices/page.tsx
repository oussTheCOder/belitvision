import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MultipleDevicesClient from "./client";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    title: (locale === "nl" ? "IPTV Abonnement voor 2 Apparaten - Prijzen" : "IPTV Subscription for 2 Devices - Prices") + ` | ${t("title")}`,
    description: locale === "nl"
      ? "Bekijk onze prijzen voor 2 apparaten. Kies uit Standard of Premium server voor IPTV op twee schermen tegelijk."
      : "Check our prices for 2 devices. Choose from Standard or Premium server for IPTV on two screens at once.",
  };
}

export default async function MultipleDevicesPage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <Header />
      <MultipleDevicesClient locale={locale} />
      <Footer />
    </>
  );
}
