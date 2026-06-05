import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { categories, getPost } from "@/content/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, category, slug } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const post = getPost(category, slug);
  if (!post) return { title: `404 | ${t("title")}` };

  const title = locale === "nl" ? post.title.nl : post.title.en;
  const description = locale === "nl" ? post.excerpt.nl : post.excerpt.en;
  const baseUrl = "https://belitvisio.com";
  const path = `/blog/${category}/${slug}`;
  const imgUrl = post.image || "/images/home-hero.588c3886.webp";

  return {
    title: `${title} | ${t("title")}`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: locale === "nl" ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: {
        nl: `${baseUrl}${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      siteName: "BELITVISION",
      locale: locale === "nl" ? "nl_BE" : "en_US",
      type: "article",
      url: locale === "nl" ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      publishedTime: post.date,
      images: [{ url: imgUrl, width: 1920, height: 1080 }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { locale, category, slug } = await params;
  const isNl = locale === "nl";
  const post = getPost(category, slug);
  if (!post) notFound();

  const cat = categories.find((c) => c.slug === category);
  const catLabel = cat ? (isNl ? cat.nl : cat.en) : category;
  const baseUrl = "https://belitvisio.com";
  const path = `/blog/${category}/${slug}`;
  const imgUrl = post.image || "/images/home-hero.588c3886.webp";
  const imgAlt = post.imageAlt
    ? (isNl ? post.imageAlt.nl : post.imageAlt.en)
    : (isNl ? post.title.nl : post.title.en);

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isNl ? post.title.nl : post.title.en,
    description: isNl ? post.excerpt.nl : post.excerpt.en,
    image: imgUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "BELITVISION",
    },
    publisher: {
      "@type": "Organization",
      name: "BELITVISION",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/home-hero.588c3886.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": isNl ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
    },
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isNl ? "Home" : "Home", item: isNl ? baseUrl : `${baseUrl}/en` },
      { "@type": "ListItem", position: 2, name: "Blog", item: isNl ? `${baseUrl}/blog` : `${baseUrl}/en/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: catLabel,
        item: isNl ? `${baseUrl}/blog/${category}` : `${baseUrl}/en/blog/${category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isNl ? post.title.nl : post.title.en,
        item: isNl ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <section className="pt-40 pb-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <Link
            href={`/blog/${category}`}
            className="text-primary hover:underline text-sm mb-6 inline-block"
          >
            ← {isNl ? `Terug naar ${catLabel}` : `Back to ${catLabel}`}
          </Link>
          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
                {catLabel}
              </span>
              <time className="text-xs text-muted" dateTime={post.date}>{post.date}</time>
            </div>
            <h1 className="text-3xl font-extrabold text-white mb-8">
              {isNl ? post.title.nl : post.title.en}
            </h1>
            <div className="space-y-4">
              {(isNl ? post.content.nl : post.content.en).map((paragraph, i) => (
                <p key={i} className="text-muted leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
    </>
  );
}
