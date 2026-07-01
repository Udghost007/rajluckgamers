import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Raj Luck Game – Download APK, Features, Login & Register 2026",
  description:
    "Raj Luck Game is the ultimate Android gaming platform. Download the latest Raj Luck Game APK, register, login, and explore all features. Also known as Rajluck Game, RajluckGame, Rajluck, RajluckGamers. Full guide at rajluckgamers.com.",
  keywords: [
    "Raj Luck Game", "Raj Luck", "Raj Luck Gamers", "Rajluck Game", "Rajluck",
    "RajluckGame", "Rajluck APK", "Raj Luck Game APK", "Raj Luck Game download",
    "Raj Luck Game login", "Raj Luck Game register", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "Raj Luck Game – Download APK, Features, Login & Register 2026",
    description: "Raj Luck Game for Android. Download APK, register, login, explore features at rajluckgamers.com.",
    url: "https://rajluckgamers.com/raj-luck-game",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck Game" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Luck Game – Download APK & Play",
    description: "Download Raj Luck Game APK for Android. Complete guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck-game" },
};

export default function RajLuckGamePage() {
  return (
    <SeoLandingPage
      keyword="Raj Luck Game"
      heading="Raj Luck Game – Complete Gaming Experience"
      subheading="Raj Luck Game • Rajluck Game • Rajluck APK • Download"
      description="Raj Luck Game brings together multiple entertainment options in one app. Download the APK, create your account, and start playing on Android."
    />
  );
}
