import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Blog – Latest News, Guides & Updates",
  description:
    "Read the latest articles, guides, and news about Rajluck Game. Get tips on Rajluck APK download, Rajluck Game register, Rajluck Game login, Rajluck App features, and more from RajluckGamers.",
  keywords: [
    "Rajluck Game blog",
    "Rajluck Game news",
    "Rajluck Game updates",
    "Rajluck APK guide",
    "Rajluck Game tips",
    "Rajluck",
    "RajluckGamers",
    "Rajluck Game",
    "Rajluck APK",
    "Rajluck App",
    "Rajluck Game download",
    "Rajluck Game login",
    "Rajluck Game register",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "Rajluck Game Blog – Latest News, Guides & Updates",
    description: "Read the latest articles, guides, and news about Rajluck Game. Tips on APK download, registration, login, and features.",
    url: "https://rajluckgamers.com/blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajluck Game Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajluck Game Blog – Latest News, Guides & Updates",
    description: "Read the latest articles, guides, and news about Rajluck Game. Tips on APK download, registration, login, and features.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/blog" },
};

const posts = [
  {
    slug: "rajluck-game-complete-guide",
    title: "Rajluck Game Complete Guide 2026 – Everything You Need to Know",
    excerpt:
      "A comprehensive guide covering everything about Rajluck Game — from downloading the APK to exploring features, managing your account, and making the most of promotions.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "Guide",
    icon: "📖",
  },
  {
    slug: "rajluck-apk-download-android",
    title: "How to Download Rajluck APK on Android – Step by Step",
    excerpt:
      "Learn how to safely download and install the latest version of Rajluck Game APK on your Android device with our detailed step-by-step tutorial.",
    date: "June 25, 2026",
    readTime: "5 min read",
    category: "Tutorial",
    icon: "📱",
  },
  {
    slug: "rajluck-game-register-login",
    title: "How to Register & Login on Rajluck Game – Complete Tutorial",
    excerpt:
      "Step-by-step instructions for creating your Rajluck Game account and logging in securely. Includes tips for account safety and troubleshooting.",
    date: "June 22, 2026",
    readTime: "6 min read",
    category: "Tutorial",
    icon: "🔐",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-5 backdrop-blur-sm">
              Blog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Rajluck Game Blog
            </h1>
            <p className="text-lg text-red-100 leading-relaxed max-w-2xl mx-auto">
              Latest guides, tutorials, and news about Rajluck Game. Stay informed and get the most out of your experience.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-5 sm:p-8 block group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    {post.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-100 text-primary text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-text-muted">{post.date}</span>
                      <span className="text-xs text-text-muted">•</span>
                      <span className="text-xs text-text-muted">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Rajluck Game Blog",
            url: "https://rajluckgamers.com/blog",
            description: "Latest guides, tutorials, and news about Rajluck Game.",
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.excerpt,
              datePublished: "2026-06-" + p.date.split(" ")[1].replace(",", ""),
              url: `https://rajluckgamers.com/blog/${p.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
