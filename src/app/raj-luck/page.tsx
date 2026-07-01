import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Raj Luck – Download Game APK, Login & Register Guide 2026",
  description:
    "Raj Luck is a popular mobile gaming app for Android. Download the Raj Luck Game APK, register, login, and explore all features. Also known as Rajluck, Rajluck Game, RajluckGame, RajluckGamers. Complete guide at rajluckgamers.com.",
  keywords: [
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers", "Rajluck", "Rajluck Game",
    "RajluckGame", "Rajluck APK", "Rajluck App", "Raj Luck APK", "Raj Luck download",
    "Raj Luck login", "Raj Luck register", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "Raj Luck – Download Game APK, Login & Register Guide 2026",
    description: "Raj Luck gaming platform for Android. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/raj-luck",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raj Luck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Luck – Download Game APK & Play",
    description: "Download Raj Luck Game APK, register, and login on Android. Guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/raj-luck" },
};

export default function RajLuckPage() {
  return (
    <SeoLandingPage
      keyword="Raj Luck"
      heading="Raj Luck – Mobile Gaming Platform for Android"
      subheading="Raj Luck • Raj Luck Game • Rajluck APK"
      description="Raj Luck is a mobile-friendly gaming platform. Download the Raj Luck Game APK, register your account, and enjoy a seamless gaming experience on Android."
    />
  );
}
