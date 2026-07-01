import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck – Download APK, Login, Register & Play on Android 2026",
  description:
    "Rajluck is a top mobile gaming platform for Android. Download the latest Rajluck APK, register your Rajluck account, login securely, and explore features. Also known as Rajluck Game, RajluckGame, Raj Luck, RajluckGamers. Visit rajluckgamers.com for the complete guide.",
  keywords: [
    "Rajluck", "Rajluck Game", "RajluckGame", "Rajluck APK", "Rajluck App",
    "Rajluck download", "Rajluck login", "Rajluck register",
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "Rajluck – Download APK, Login, Register & Play on Android 2026",
    description: "Rajluck is a mobile gaming platform for Android. Download Rajluck APK, register, login, and explore features at rajluckgamers.com.",
    url: "https://rajluckgamers.com/rajluck",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajluck – Download APK, Login & Register",
    description: "Download Rajluck APK, register, login, and play on Android. Complete guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/rajluck" },
};

export default function RajluckPage() {
  return (
    <SeoLandingPage
      keyword="Rajluck"
      heading="Rajluck – Your Ultimate Gaming Platform"
      subheading="Rajluck • Rajluck Game • Rajluck APK • Raj Luck"
      description="Rajluck is a mobile-friendly gaming platform for Android. Download the Rajluck APK, create your account, and start your gaming journey today."
    />
  );
}
