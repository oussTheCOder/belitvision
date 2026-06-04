import { useTranslations } from "next-intl";

const icons = [
  "cash-refund",
  "video-outline",
  "cogs",
  "reload",
  "hours-24",
  "emoticon-outline",
];

function WhyIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "cash-refund":
      return (
        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
          <path d="M11.95 2C6.82 2 2.55 5.95 2.05 11h2.02c.47-4.25 4.08-7.52 8.49-7.52 4.7 0 8.52 3.82 8.52 8.52 0 4.41-3.27 8.02-7.52 8.49v2.02c5.05-.5 9-4.77 9-9.95 0-5.52-4.48-10-10-10M11.95 6c-3.32 0-6 2.68-6 6 0 3.31 2.68 6 6 6 3.31 0 6-2.69 6-6 0-3.32-2.69-6-6-6m-11 7v6h2v-6zm0 8v2h2v-2z" />
        </svg>
      );
    case "video-outline":
      return (
        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
          <path d="M15.07 11.25l-4.72-2.72c-.32-.18-.68-.19-1-.02s-.53.48-.53.84v5.45c0 .36.2.67.53.84.12.07.26.1.39.1.22 0 .44-.07.62-.2l4.72-2.72c.27-.16.43-.44.43-.74s-.17-.58-.44-.83M18 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H4V7h14z" />
        </svg>
      );
    case "cogs":
      return (
        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2" />
        </svg>
      );
    case "reload":
      return (
        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
          <path d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" />
        </svg>
      );
    case "hours-24":
      return (
        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2.5-6.5c0 1.38-1.12 2.5-2.5 2.5-1 0-1.88-.59-2.28-1.44l-1.76.76c.62 1.46 2 2.5 4.04 2.68V18h1v-1.08c1.74-.3 3-1.52 3-3.42 0-1.5-1.3-2.5-3-2.5-1.11 0-2.03.51-2.48 1.27l-1.75-.75C10.42 9.65 11.67 9 13 9c2.27 0 4 1.35 4 3.5zM8 11.5c0-1.38 1.12-2.5 2.5-2.5 1 0 1.88.59 2.28 1.44l1.76-.76C13.92 8.22 12.5 7.18 10.5 7V6H9.5v1c-1.74.3-3 1.52-3 3.42 0 1.5 1.3 2.5 3 2.5 1.11 0 2.03-.51 2.48-1.27l1.75.75C13.58 13.35 12.33 14 11 14c-2.27 0-4-1.35-4-3.5z" />
        </svg>
      );
    case "emoticon-outline":
      return (
        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-primary uppercase text-xl mb-2">{t("title")}</h2>
        <h3 className="text-3xl font-extrabold mb-12 text-white">{t("subtitle")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6">
              <div className="text-primary mb-4">{WhyIcon({ icon: icons[i] })}</div>
              <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
