import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero-section"
      className="bg-cover bg-center mb-10 pb-10 pt-60 sm:mb-48 sm:pt-72 xl:pt-80 relative"
      style={{ backgroundImage: "url('/images/home-hero.588c3886.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="md:w-8/12 sm:relative sm:text-left w-full text-center">
          <h1 className="font-black italic leading-none lg:text-6xl max-w-3xl mb-4 sm:text-5xl text-4xl text-white tracking-tight uppercase">
            {t("title")}
          </h1>
          <p className="lg:mb-8 max-w-sm mb-6 md:text-xl mx-auto sm:ml-1 sm:text-lg sm:w-10/12 text-base text-muted">
            {t("subtitle")}
          </p>
          <div className="flex flex-col gap-4 max-w-sm mx-auto sm:flex-row sm:max-w-md sm:ml-0">
            <Link
              href="/#pricing"
              className="bg-primary focus:ring-4 focus:ring-primary/30 font-medium hover:bg-primary-dark inline-flex items-center justify-center px-5 py-3 rounded-lg text-base text-center text-white"
            >
              {t("cta")}
            </Link>
            <a
              href={t("trialUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary focus:ring-4 focus:ring-primary/30 font-medium hover:bg-primary-dark inline-flex items-center justify-center px-5 py-3 rounded-lg text-base text-center text-white"
            >
              {t("trial")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
