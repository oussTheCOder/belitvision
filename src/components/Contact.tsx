import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-white">{t("title")}</h2>
        <p className="text-muted mb-12 max-w-2xl mx-auto">{t("desc")}</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a
            href={t("whatsappUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-glass rounded-xl hover:shadow-lg hover:shadow-white/5 transition-shadow"
          >
            <svg className="w-12 h-12 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.07.56 4.06 1.62 5.8L2 22l4.5-1.59c1.68.93 3.62 1.42 5.62 1.42 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m4.69 13.87c-.27.76-1.35 1.38-2.2 1.5-.58.08-1.36.13-2.45-.53-.69-.42-1.33-.97-1.88-1.56-.56-.6-1.02-1.25-1.39-1.96-.62-1.18-.96-2.44-.96-3.74 0-.88.24-1.48.67-1.85.21-.18.46-.27.72-.27h.54c.17 0 .33.08.43.23l.77 1.15c.1.15.13.33.08.5-.05.17-.15.32-.28.42l-.35.31c-.11.1-.16.26-.12.41.17.54.5 1.08.91 1.55.43.49.95.92 1.54 1.25.18.1.34.15.51.1.13-.04.29-.18.49-.39.26-.27.55-.61.89-.79.2-.11.44-.13.65-.04l1.15.53c.24.11.4.35.42.61.03.41-.05.84-.28 1.19-.23.34-.82.98-1.1 1.2" />
            </svg>
            <h3 className="text-lg font-semibold text-white mb-1">{t("whatsapp")}</h3>
            <p className="text-muted">{t("whatsappNumber")}</p>
          </a>
          <a
            href={t("emailUrl")}
            className="flex flex-col items-center p-8 bg-glass rounded-xl hover:shadow-lg hover:shadow-white/5 transition-shadow"
          >
            <svg className="w-12 h-12 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5-8-5V6l8 5 8-5z" />
            </svg>
            <h3 className="text-lg font-semibold text-white mb-1">{t("email")}</h3>
            <p className="text-muted">{t("emailAddress")}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
