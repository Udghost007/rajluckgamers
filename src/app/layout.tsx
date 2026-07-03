import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajluckgamers.com"),
  title: {
    default: "Rajluck Game – Download APK, Login, Register & Features Guide 2026",
    template: "%s | Rajluck Game",
  },
  description:
    "Rajluck Game is a mobile-friendly gaming platform for Android. Download the latest Rajluck APK, learn how to register & login, explore features, rewards & promotions. Complete guide for Rajluck App users.",
  keywords: [
    "Rajluck Game",
    "Rajluck",
    "Rajluck APK",
    "Rajluck App",
    "Rajluck Game Download",
    "Rajluck Game APK",
    "Download Rajluck",
    "Rajluck Game Login",
    "Rajluck Game Register",
    "Rajluck Game Features",
    "Rajluck Game 2026",
    "Rajluck Android",
    "Rajluck Game Guide",
    "Rajluck Download APK",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  authors: [{ name: "rajluckgamers.com" }],
  creator: "rajluckgamers.com",
  publisher: "rajluckgamers.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajluckgamers.com",
    siteName: "Rajluck Game",
    title: "Rajluck Game – Download APK, Login, Register & Features Guide 2026",
    description:
      "Rajluck Game is a mobile-friendly gaming platform for Android. Download the latest Rajluck APK, register, login, and explore features & rewards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajluck Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajluck Game – Download APK, Login, Register & Features Guide 2026",
    description:
      "Rajluck Game is a mobile-friendly gaming platform for Android. Download the latest Rajluck APK, register, login, and explore features & rewards.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "0-OG2l1pCdOxbT9qR_S_XQ7_mwLRJDWpC6yXcMnFU44",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://rajluckgamers.com/#website",
      url: "https://rajluckgamers.com",
      name: "Rajluck Game",
      description:
        "Rajluck Game is a mobile-friendly gaming platform for Android. Download APK, register, login, and explore features.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://rajluckgamers.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://rajluckgamers.com/#organization",
      name: "Rajluck Game",
      url: "https://rajluckgamers.com",
      logo: "https://rajluckgamers.com/logo.webp",
      sameAs: [
        "https://www.facebook.com/rajluckgame",
        "https://t.me/rajluckgame"
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Rajluck Game",
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GoogleAnalytics />
        <AnalyticsTracker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
