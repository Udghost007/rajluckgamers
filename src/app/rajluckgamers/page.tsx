import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "RajluckGamers – Official Guide to Rajluck Game APK Download 2026",
  description:
    "RajluckGamers is your official guide to Rajluck Game. Download the latest Rajluck APK, learn how to register and login, explore features and promotions. Also known as Rajluck Gamers, Raj Luck Gamers, Rajluck Game, RajluckGame. Complete resource at rajluckgamers.com.",
  keywords: [
    "RajluckGamers", "rajluckgamers", "Rajluck Gamers", "Raj Luck Gamers",
    "Rajluck Game", "Rajluck", "RajluckGame", "Rajluck APK", "Rajluck App",
    "Raj Luck", "Raj Luck Game", "rajluckgamers.com",
  ],
  openGraph: {
    title: "RajluckGamers – Official Rajluck Game Guide & APK Download 2026",
    description: "RajluckGamers: your complete guide to Rajluck Game. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/rajluckgamers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RajluckGamers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RajluckGamers – Rajluck Game Guide",
    description: "Your complete guide to Rajluck Game APK download, register, and login. rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/rajluckgamers" },
};

export default function RajluckGamersPage() {
  return (
    <SeoLandingPage
      keyword="RajluckGamers"
      heading="RajluckGamers – Your Complete Rajluck Game Guide"
      subheading="RajluckGamers • Rajluck Game • Rajluck APK • Download"
      description="RajluckGamers is the ultimate resource for everything about Rajluck Game. Download the APK, register, login, and explore all features and promotions."
    />
  );
}
