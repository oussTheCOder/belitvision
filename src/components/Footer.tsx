import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const s = useTranslations("site");
  const c = useTranslations("contact");

  return (
    <footer className="bg-true-dark text-muted">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-primary font-extrabold text-2xl tracking-wider">
              {s("brandName")}
            </Link>
            <p className="text-xs text-muted-more mt-1">{s("brandSubtitle")}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t("welcome")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <Link href="/multiple-devices" className="hover:text-white transition-colors">
                  {t("multipleDevices")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contactUs")}</h3>
            <ul className="space-y-2">
              <li>
                <a href={c("emailUrl")} className="hover:text-white transition-colors">
                  {c("emailAddress")}
                </a>
              </li>
              <li>
                <a href={c("whatsappUrl")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {c("whatsappNumber")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t("legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  {t("refundPolicy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} {s("brandName")}. {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
