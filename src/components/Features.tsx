import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  return (
    <section className="-mt-10 lg:pb-16 lg:pt-0 max-w-screen-xl mx-auto px-2 py-8 sm:-mt-40 relative z-20">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col flex-1">
          <div className="backdrop-blur-sm bg-glass flex flex-col items-center justify-center p-6 rounded-xl h-full">
            <div className="h-10 mb-4 w-10">
              <svg fill="#2789fc" viewBox="0 0 24 24">
                <path d="m10 16.5 6-4.5-6-4.5M22 12c0-5.54-4.46-10-10-10-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53 4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53 0-.79.71-1.5 1.5-1.5" />
              </svg>
            </div>
            <h3 className="text-white mb-2 text-center text-xl">{t("quality.title")}</h3>
            <p className="text-muted font-light sm:text-lg text-center">{t("quality.desc")}</p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="backdrop-blur-sm bg-glass flex flex-col items-center justify-center p-6 rounded-xl h-full">
            <div className="h-10 mb-4 w-10">
              <svg fill="#2789fc" viewBox="0 0 24 24">
                <path d="M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h4.3c.6 0 1.2.6 1.2 1.3M18 5H4v14h9v2H4a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v4.1L19 9l-1 .1zM9 8l5 4-5 4z" />
              </svg>
            </div>
            <h3 className="text-white mb-2 text-center text-xl">{t("channels.title")}</h3>
            <p className="text-muted font-light sm:text-lg text-center">{t("channels.desc")}</p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="backdrop-blur-sm bg-glass flex flex-col items-center justify-center p-6 rounded-xl h-full">
            <div className="h-10 mb-4 w-10">
              <svg fill="#2789fc" viewBox="0 0 24 24">
                <path d="M18 9h-2V7h2m0 6h-2v-2h2m0 6h-2v-2h2M8 9H6V7h2m0 6H6v-2h2m0 6H6v-2h2M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3z" />
              </svg>
            </div>
            <h3 className="text-white mb-2 text-center text-xl">{t("vod.title")}</h3>
            <p className="text-muted font-light sm:text-lg text-center">{t("vod.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
