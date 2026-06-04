import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-extrabold text-primary">+400</div>
          <div className="text-muted mt-2">{t("activeUsers")}</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-primary">+2000</div>
          <div className="text-muted mt-2">{t("sportChannels")}</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-primary">+31000</div>
          <div className="text-muted mt-2">{t("channels")}</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-primary">+170000</div>
          <div className="text-muted mt-2">{t("movies")}</div>
        </div>
      </div>
    </section>
  );
}
