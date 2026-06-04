import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const title = locale === "nl" ? "Algemene Voorwaarden - IPTV Abonnement" : "Terms and Conditions - IPTV Subscription";
  return { title: `${title} | ${t("title")}`, description: t("description") };
}

const nlContent = [
  { h2: "Algemene voorwaarden", p: "Welkom bij Belitvision. Deze voorwaarden beschrijven de regels voor het gebruik van onze website en het aankopen van abonnementscodes. Door onze website te gebruiken of een bestelling te plaatsen, bevestigt u dat u deze voorwaarden hebt gelezen en ermee akkoord gaat. Als u niet akkoord gaat, dient u onze website en diensten niet te gebruiken." },
  { h2: "Gebruik van Belitvision", p: "Door Belitvision te gebruiken, gaat u akkoord met deze voorwaarden en met alle toepasselijke wet- en regelgeving. U verklaart dat u bevoegd bent om onze diensten te gebruiken en aankopen te doen. Belitvision behoudt zich het recht voor om deze voorwaarden op elk moment te wijzigen. Nieuwe voorwaarden gelden zodra ze op onze website worden gepubliceerd." },
  { h2: "Abonnementscodes", p: "Belitvision verkoopt abonnementscodes die toegang geven tot geselecteerde streamingdiensten voor de periode die tijdens de aankoop wordt vermeld. De codes zijn uitsluitend bedoeld voor persoonlijk gebruik. Het is niet toegestaan om codes te delen, door te verkopen, over te dragen of openbaar te verspreiden. Belitvision kan abonnementen, codes of gerelateerde diensten aanpassen, tijdelijk stopzetten of beëindigen wanneer dit nodig is." },
  { h2: "Bestellingen en betalingen", p: "Bij het plaatsen van een bestelling kiest u een abonnement, vult u de gevraagde gegevens in en voltooit u de betaling via een beschikbare betaalmethode. U bent zelf verantwoordelijk voor het correct invullen van uw gegevens, vooral uw e-mailadres, omdat de abonnementscode mogelijk daarheen wordt verzonden. Prijzen, aanbiedingen en beschikbaarheid kunnen zonder voorafgaande kennisgeving worden gewijzigd." },
  { h2: "Verantwoordelijkheden van de gebruiker", p: "U dient correcte en actuele informatie te verstrekken, onze diensten alleen op een wettelijke manier te gebruiken en geen handelingen te verrichten die onze website, systemen of beveiliging kunnen schaden. U bent ook verantwoordelijk voor het veilig bewaren van uw account- of toegangsgegevens. Neem contact met ons op als u vermoedt dat er sprake is van ongeautoriseerd gebruik." },
  { h2: "Beschikbaarheid van de dienst", p: "Belitvision garandeert niet dat de website of dienst altijd beschikbaar, foutloos of ononderbroken zal werken. De kwaliteit en beschikbaarheid van streaming kunnen afhankelijk zijn van uw internetverbinding, apparaat, serverstatus, locatie en andere externe factoren." },
  { h2: "Aansprakelijkheid", p: "Belitvision is niet aansprakelijk voor verlies, schade, onderbrekingen of ongemakken die voortkomen uit het gebruik van onze website, abonnementscodes of diensten. Gebruik van onze diensten gebeurt op eigen risico." },
  { h2: "Opschorting of beëindiging", p: "Belitvision mag de toegang tot diensten beperken, opschorten of beëindigen wanneer een gebruiker deze voorwaarden schendt, onjuiste gegevens verstrekt, codes misbruikt of verdacht of frauduleus gedrag vertoont." },
  { h2: "Wijzigingen", p: "Wij kunnen deze algemene voorwaarden op elk moment aanpassen. Het is uw verantwoordelijkheid om deze pagina regelmatig te controleren. Door onze website te blijven gebruiken na wijzigingen, accepteert u de bijgewerkte voorwaarden." },
];

const enContent = [
  { h2: "Terms and Conditions", p: "Welcome to Belitvision. These terms describe the rules for using our website and purchasing subscription codes. By using our website or placing an order, you confirm that you have read and agree to these terms. If you do not agree, you should not use our website or services." },
  { h2: "Use of Belitvision", p: "By using Belitvision, you agree to these terms and all applicable laws and regulations. You declare that you are authorized to use our services and make purchases. Belitvision reserves the right to modify these terms at any time. New terms apply once published on our website." },
  { h2: "Subscription Codes", p: "Belitvision sells subscription codes that grant access to selected streaming services for the period stated at purchase. Codes are for personal use only. Sharing, reselling, transferring, or publicly distributing codes is not permitted. Belitvision may modify, suspend, or terminate subscriptions, codes, or related services when necessary." },
  { h2: "Orders and Payments", p: "When placing an order, you select a subscription, fill in the required information, and complete payment via an available payment method. You are responsible for providing correct information, especially your email address, as the subscription code may be sent there. Prices, offers, and availability may change without prior notice." },
  { h2: "User Responsibilities", p: "You must provide accurate and up-to-date information, use our services only lawfully, and not engage in any activity that could harm our website, systems, or security. You are also responsible for keeping your account or access credentials safe. Contact us if you suspect unauthorized use." },
  { h2: "Service Availability", p: "Belitvision does not guarantee that the website or service will always be available, error-free, or uninterrupted. Streaming quality and availability may depend on your internet connection, device, server status, location, and other external factors." },
  { h2: "Liability", p: "Belitvision is not liable for any loss, damage, interruptions, or inconvenience arising from the use of our website, subscription codes, or services. Use of our services is at your own risk." },
  { h2: "Suspension or Termination", p: "Belitvision may restrict, suspend, or terminate access to services when a user violates these terms, provides incorrect information, misuses codes, or engages in suspicious or fraudulent behavior." },
  { h2: "Changes", p: "We may modify these terms and conditions at any time. It is your responsibility to check this page regularly. By continuing to use our website after changes, you accept the updated terms." },
];

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const content = locale === "nl" ? nlContent : enContent;

  return (
    <>
      <Header />
      <section className="pt-40 pb-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-12 text-white text-center">
            {locale === "nl" ? "Algemene Voorwaarden" : "Terms and Conditions"}
          </h1>
          <div className="max-w-3xl mx-auto space-y-8">
            {content.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-white mb-3">{section.h2}</h2>
                <p className="text-muted leading-relaxed">{section.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
