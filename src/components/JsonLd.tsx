type Props = {
  locale: string;
};

export default function JsonLd({ locale }: Props) {
  const baseUrl = "https://www.belitvision.com";
  const siteUrl = locale === "nl" ? baseUrl : `${baseUrl}/en`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BELITVISION",
    url: siteUrl,
    logo: `${baseUrl}/images/home-hero.588c3886.webp`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-332-895-6041",
      contactType: "customer service",
      availableLanguage: ["Dutch", "English"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: locale === "nl" ? "IPTV België - BELITVISION" : "IPTV Belgium - BELITVISION",
    url: siteUrl,
    description: locale === "nl"
      ? "Beste IPTV abonnement in België. 31.000+ kanalen, 170.000+ VOD, 24/7 support."
      : "Best IPTV subscription in Belgium. 31.000+ channels, 170.000+ VOD, 24/7 support.",
    inLanguage: locale === "nl" ? "nl-BE" : "en-US",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "nl" ? "IPTV België" : "IPTV Belgium",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
