import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "RajluckGame – Download APK, Login, Register & Features 2026",
  description:
    "RajluckGame is a leading Android gaming platform. Download the RajluckGame APK, create your account, login, and explore features. Also known as Rajluck Game, Rajluck, Raj Luck Game, RajluckGamers. Visit rajluckgamers.com for the full guide.",
  keywords: [
    "RajluckGame", "Rajluck Game", "Rajluck", "Rajluck APK", "Rajluck App",
    "RajluckGame download", "RajluckGame APK", "RajluckGame login", "RajluckGame register",
    "Raj Luck", "Raj Luck Game", "Raj Luck Gamers", "RajluckGamers", "rajluckgamers",
  ],
  openGraph: {
    title: "RajluckGame – Download APK, Login, Register & Features 2026",
    description: "RajluckGame for Android. Download APK, register, login at rajluckgamers.com.",
    url: "https://rajluckgamers.com/rajluckgame",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RajluckGame" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RajluckGame – Download APK & Play",
    description: "Download RajluckGame APK for Android. Full guide at rajluckgamers.com.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/rajluckgame" },
};

export default function RajluckGamePage() {
  return (
    <SeoLandingPage
      keyword="RajluckGame"
      heading="RajluckGame – Download, Play & Win"
      subheading="RajluckGame • Rajluck Game • Rajluck APK"
      description="RajluckGame is a feature-rich mobile gaming platform for Android. Download the APK, register, login, and enjoy gaming with promotions and rewards."
    />
  );
}
