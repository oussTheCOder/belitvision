import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { categories, getPostsByCategory } from "@/content/blog";
import type { Category } from "@/content/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return { title: "404 | beste iptv abonnement in belgie" };

  const label = locale === "nl" ? cat.nl : cat.en;
  const description = locale === "nl" ? cat.description.nl : cat.description.en;
  const baseUrl = "https://www.belitvision.com";
  const path = `/blog/${category}`;

  return {
    title: `${label} - IPTV Blog | beste iptv abonnement in belgie`,
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
      title: `${label} - IPTV Blog`,
      description,
      siteName: "BELITVISION",
      locale: locale === "nl" ? "nl_BE" : "en_US",
      type: "website",
      url: locale === "nl" ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      images: [{ url: "/images/home-hero.588c3886.webp", width: 1920, height: 1080 }],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const isNl = locale === "nl";
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const label = isNl ? cat.nl : cat.en;
  const posts = getPostsByCategory(category);

  const baseUrl = "https://www.belitvision.com";
  const path = `/blog/${category}`;

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isNl ? "Home" : "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: label, item: `${baseUrl}${path}` },
    ],
  };

  return (
    <>
      <Header />
      <section className="pt-40 pb-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <Link href="/blog" className="text-primary hover:underline text-sm mb-6 inline-block">
            ← {isNl ? "Terug naar blog" : "Back to blog"}
          </Link>
          <h1 className="text-4xl font-extrabold mb-4 text-white">{label}</h1>
          <p className="text-muted max-w-2xl mb-12">
            {isNl ? cat.description.nl : cat.description.en}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${category}/${post.slug}`}
                className="bg-elevated border border-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <p className="text-xs text-muted mb-2">{post.date}</p>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {isNl ? post.title.nl : post.title.en}
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  {isNl ? post.excerpt.nl : post.excerpt.en}
                </p>
                <span className="text-primary text-sm mt-3 inline-block">
                  {isNl ? "Lees meer →" : "Read more →"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
    </>
  );
}
