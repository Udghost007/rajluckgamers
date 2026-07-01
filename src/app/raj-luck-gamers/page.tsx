import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Raj Luck Gamers – Download Rajluck Game APK & Complete Guide 2026",
  description:
    "Raj Luck Gamers is your trusted source for Rajluck Game. Download the latest Raj Luck Game APK for Android, register, login, and discover features. Also known as RajluckGamers, Rajluck Gamers, Rajluck Game, RajluckGame, Rajluck. Full guide at rajluckgamers.com.",
  keywords: [
    "Raj Luck Gamers", "RajluckGamers", "Rajluck Gamers", "rajluckgamers",
    "Rajluck Game", "Rajluck", "RajluckGame", "Rajluck APK", "Rajluck App",
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers download",
  ],
  openGraph: {
    title: "Raj Luck Gamers – Download Rajluck Game APK & Guide 2026",
    description: "Raj Luck Gamers: complete guide to Rajluck Game. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/raj-luck-gamers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck Gamers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Luck Gamers – Rajluck Game Guide",
    description: "Complete Rajluck Game guide. Download APK, register, login at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck-gamers" },
};

export default function RajLuckGamersPage() {
  return (
    <SeoLandingPage
      keyword="Raj Luck Gamers"
      heading="Raj Luck Gamers – Everything About Rajluck Game"
      subheading="Raj Luck Gamers • Rajluck Game • Rajluck APK"
      description="Raj Luck Gamers is your trusted guide for Rajluck Game. Download the APK, create your account, login, and enjoy gaming on Android."
    />
  );
}
