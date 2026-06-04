"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const reviewImages = [
  "wa1_1.dfc63d63.webp",
  "wa2_1.19b85f62.webp",
  "wa3_1.768c086b.webp",
  "wa4_1.77329b41.webp",
  "wa5-1.e351b31e.webp",
  "wa6.069f9053.webp",
  "wa7 (1).0f84ee3c.webp",
  "wa8.780ee383.webp",
  "wa-9.52a9bafb.webp",
];

export default function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section className="py-16 bg-section-alt overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-2 text-white">{t("title")}</h2>
        <p className="text-muted mb-8 max-w-2xl mx-auto">{t("desc")}</p>
      </div>
      <div className="flex gap-4 animate-scroll-left px-4" style={{ width: "max-content" }}>
        {[...reviewImages, ...reviewImages].map((img, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-md flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(50vw-1.5rem)] md:w-[calc(33.333vw-1.333rem)] lg:w-[calc(25vw-1rem)] max-w-[280px]"
          >
            <Image
              src={`/images/${img}`}
              alt={`${t("alt")} ${(i % reviewImages.length) + 1}`}
              width={200}
              height={280}
              className="w-full h-auto object-cover max-h-[350px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
