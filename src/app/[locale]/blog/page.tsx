import { Link } from "@/i18n/navigation";
import { categories, posts } from "@/content/blog";
import type { BlogPost } from "@/content/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isNl = locale === "nl";
  const title = isNl
    ? "Blog - IPTV Tips, Installatiegidsen & Nieuws | beste iptv abonnement in belgie"
    : "Blog - IPTV Tips, Setup Guides & News | beste iptv abonnement in belgie";
  const description = isNl
    ? "Lees onze blog met handige IPTV gidsen, installatietips, app-vergelijkingen en apparaatadvies. Alles wat u moet weten over IPTV in België."
    : "Read our blog with helpful IPTV guides, setup tips, app comparisons and device advice. Everything you need to know about IPTV in Belgium.";
  return {
    title,
    description,
    metadataBase: new URL("https://www.belitvision.com"),
    alternates: {
      canonical: locale === "nl" ? "https://www.belitvision.com/blog" : "https://www.belitvision.com/en/blog",
      languages: {
        nl: "https://www.belitvision.com/blog",
        en: "https://www.belitvision.com/en/blog",
      },
    },
    openGraph: {
      title,
      description,
      siteName: "BELITVISION",
      locale: locale === "nl" ? "nl_BE" : "en_US",
      type: "website",
      url: locale === "nl" ? "https://www.belitvision.com/blog" : "https://www.belitvision.com/en/blog",
      images: [{ url: "/images/home-hero.588c3886.webp", width: 1920, height: 1080 }],
    },
  };
}

function categoryLabel(catSlug: string, isNl: boolean): string {
  const cat = categories.find((c) => c.slug === catSlug);
  return cat ? (isNl ? cat.nl : cat.en) : catSlug;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const isNl = locale === "nl";

  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isNl ? "Home" : "Home", item: "https://www.belitvision.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.belitvision.com/blog" },
    ],
  };

  const blogJson = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: isNl ? "IPTV Blog België" : "IPTV Blog Belgium",
    description: isNl
      ? "IPTV tips, gidsen en nieuws voor IPTV gebruikers in België."
      : "IPTV tips, guides and news for IPTV users in Belgium.",
    publisher: { "@type": "Organization", name: "BELITVISION" },
  };

  return (
    <>
      <Header />
      <section className="pt-40 pb-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4 text-white text-center">
            {isNl ? "IPTV Blog" : "IPTV Blog"}
          </h1>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            {isNl
              ? "Ontdek handige gidsen, tips en informatie over IPTV in België."
              : "Discover useful guides, tips and information about IPTV in Belgium."}
          </p>

          <div className="flex gap-8 flex-col md:flex-row">
            <aside className="md:w-56 shrink-0">
              <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-muted">
                {isNl ? "Categorieën" : "Categories"}
              </h2>
              <nav className="flex flex-wrap md:flex-col gap-2">
                <Link
                  href="/blog"
                  className="text-sm px-3 py-2 rounded-lg bg-primary text-white"
                >
                  {isNl ? "Alle artikelen" : "All articles"}
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/${cat.slug}`}
                    className="text-sm px-3 py-2 rounded-lg bg-elevated border border-border text-muted hover:text-white hover:border-primary transition-colors"
                  >
                    {isNl ? cat.nl : cat.en}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="flex-1 grid sm:grid-cols-2 gap-6">
              {sorted.length > 0 ? (
                sorted.map((post) => (
                  <PostCard key={`${post.category}/${post.slug}`} post={post} isNl={isNl} />
                ))
              ) : (
                <div className="sm:col-span-2 text-center py-20">
                  <p className="text-muted text-lg">
                    {isNl ? "Nog geen blog artikelen beschikbaar. Binnenkort meer!" : "No blog articles available yet. Coming soon!"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJson) }} />
    </>
  );
}

function PostCard({ post, isNl }: { post: BlogPost; isNl: boolean }) {
  return (
    <Link
      href={`/blog/${post.category}/${post.slug}`}
      className="bg-elevated border border-border rounded-xl p-6 hover:border-primary transition-colors flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
          {categoryLabel(post.category, isNl)}
        </span>
        <span className="text-xs text-muted">{post.date}</span>
      </div>
      <h2 className="text-lg font-semibold text-white mb-2">
        {isNl ? post.title.nl : post.title.en}
      </h2>
      <p className="text-muted text-sm leading-relaxed flex-1">
        {isNl ? post.excerpt.nl : post.excerpt.en}
      </p>
      <span className="text-primary text-sm mt-3 inline-block">
        {isNl ? "Lees meer →" : "Read more →"}
      </span>
    </Link>
  );
}
