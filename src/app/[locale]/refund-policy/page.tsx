import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const title = locale === "nl" ? "Terugbetalingsbeleid - IPTV Abonnement" : "Refund Policy - IPTV Subscription";
  return { title: `${title} | ${t("title")}`, description: t("description") };
}

const nlNoRefund = [
  "de code al is geleverd en geactiveerd;",
  "het gaat om een maandabonnement;",
  "het verzoek later dan 7 dagen na aankoop wordt ingediend;",
  "de klant van gedachten verandert na aankoop;",
  "verkeerde gegevens zijn ingevuld tijdens het bestellen;",
  "het probleem wordt veroorzaakt door het apparaat, de app, internetverbinding of een externe dienst;",
  "de code is gedeeld, doorverkocht, overgedragen of gebruikt door iemand anders;",
  "het abonnement verlopen is of intensief gebruikt werd;",
  "de activeringsinstructies niet correct zijn gevolgd.",
];

const enNoRefund = [
  "the code has already been delivered and activated;",
  "it is a one-month subscription;",
  "the request is submitted more than 7 days after purchase;",
  "the customer changes their mind after purchase;",
  "incorrect information was provided during ordering;",
  "the issue is caused by the device, app, internet connection, or an external service;",
  "the code has been shared, resold, transferred, or used by someone else;",
  "the subscription has expired or been used extensively;",
  "the activation instructions were not followed correctly.",
];

const nlInfo = [
  "het e-mailadres dat gebruikt werd bij de aankoop;",
  "gebruikersnaam of account-ID van het abonnement, zonder wachtwoord;",
  "een duidelijke beschrijving van het probleem;",
  "screenshots of bewijs van het probleem.",
];

const enInfo = [
  "the email address used for the purchase;",
  "username or account ID of the subscription (no password);",
  "a clear description of the issue;",
  "screenshots or proof of the issue.",
];

export default async function RefundPage({ params }: Props) {
  const { locale } = await params;
  const isNl = locale === "nl";

  return (
    <>
      <Header />
      <section className="pt-40 pb-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-12 text-white text-center">
            {isNl ? "Terugbetalingsbeleid" : "Refund Policy"}
          </h1>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <p className="text-muted leading-relaxed">
                {isNl
                  ? "Bij Belitvision willen we een duidelijk en betrouwbaar aankoopproces aanbieden. Dit beleid legt uit hoe terugbetalingsverzoeken worden behandeld voor digitale abonnementscodes die via onze website zijn gekocht."
                  : "At Belitvision we aim to provide a clear and reliable purchase process. This policy explains how refund requests are handled for digital subscription codes purchased through our website."}
              </p>
              <p className="text-muted leading-relaxed mt-4">
                {isNl
                  ? "Door een bestelling te plaatsen, gaat u akkoord met dit terugbetalingsbeleid."
                  : "By placing an order, you agree to this refund policy."}
              </p>
            </div>

            <Section
              title={isNl ? "Digitale producten" : "Digital Products"}
              text={isNl
                ? "Belitvision verkoopt digitale abonnementscodes die elektronisch worden geleverd. Zodra een code is verzonden, geopend of geactiveerd, wordt de aankoop in principe als definitief beschouwd."
                : "Belitvision sells digital subscription codes that are delivered electronically. Once a code has been sent, opened, or activated, the purchase is generally considered final."}
            />

            <Section
              title={isNl ? "Voorwaarden voor terugbetaling" : "Refund Eligibility"}
              text={isNl
                ? "Een maandabonnement is niet terugbetaalbaar. Voor andere abonnementen kan een terugbetalingsverzoek alleen worden bekeken binnen de eerste 7 dagen na aankoop. Na deze periode worden geen terugbetalingen geaccepteerd. Elk verzoek wordt gecontroleerd en beoordeeld door Belitvision voordat een beslissing wordt genomen."
                : "A one-month subscription is non-refundable. For other subscriptions, a refund request can only be considered within the first 7 days after purchase. After this period, no refunds will be accepted. Each request is reviewed and assessed by Belitvision before a decision is made."}
            />

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isNl ? "Situaties zonder terugbetaling" : "Non-Refundable Situations"}
              </h2>
              <p className="text-muted mb-2">
                {isNl ? "Een terugbetaling wordt niet toegekend wanneer:" : "A refund will not be granted when:"}
              </p>
              <ul className="list-disc list-inside text-muted space-y-1">
                {(isNl ? nlNoRefund : enNoRefund).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <Section
              title={isNl ? "Vervanging vóór terugbetaling" : "Replacement Before Refund"}
              text={isNl
                ? "Als een code ongeldig, foutief of niet werkend blijkt, zal Belitvision eerst het probleem onderzoeken. Indien mogelijk wordt een vervangende code of technische oplossing aangeboden. Een terugbetaling kan alleen worden overwogen als Belitvision het probleem bevestigt en er geen passende vervanging of oplossing beschikbaar is. Belitvision behoudt zich het recht voor om de status van de code te controleren voordat een vervanging of terugbetaling wordt goedgekeurd."
                : "If a code proves to be invalid, incorrect, or non-functional, Belitvision will first investigate the issue. Where possible, a replacement code or technical solution will be offered. A refund can only be considered if Belitvision confirms the issue and no suitable replacement or solution is available. Belitvision reserves the right to verify the code status before approving a replacement or refund."}
            />

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isNl ? "Terugbetaling aanvragen" : "Requesting a Refund"}
              </h2>
              <p className="text-muted mb-2">
                {isNl
                  ? "Klanten moeten contact opnemen met Belitvision via WhatsApp om een probleem of terugbetalingsverzoek te melden. Gelieve de volgende informatie mee te sturen:"
                  : "Customers must contact Belitvision via WhatsApp to report an issue or refund request. Please include the following information:"}
              </p>
              <ul className="list-disc list-inside text-muted space-y-1">
                {(isNl ? nlInfo : enInfo).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <Section
              title={isNl ? "Verwerking van terugbetalingen" : "Processing Refunds"}
              text={isNl
                ? "Als een terugbetaling wordt goedgekeurd, wordt deze indien mogelijk uitgevoerd via de oorspronkelijke betaalmethode. De verwerkingstijd kan verschillen afhankelijk van de bank, betaalprovider of gebruikte betaalmethode."
                : "If a refund is approved, it will be processed via the original payment method where possible. Processing time may vary depending on the bank, payment provider, or payment method used."}
            />

            <Section
              title={isNl ? "Contact" : "Contact"}
              text={isNl
                ? "Voor ondersteuning of terugbetalingsverzoeken kunt u Belitvision contacteren via WhatsApp via de contactgegevens op onze website. Elk verzoek wordt zorgvuldig beoordeeld om de meest geschikte oplossing te bieden."
                : "For support or refund requests, you can contact Belitvision via WhatsApp through the contact details on our website. Each request will be carefully reviewed to provide the most suitable solution."}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <p className="text-muted leading-relaxed">{text}</p>
    </div>
  );
}
