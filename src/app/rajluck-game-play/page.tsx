import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Play – How to Play Rajluck Game 2026",
  description: "Rajluck Game Play — learn how to play Rajluck Game on Android. Download, register, login, and start playing. rajluck game play, play rajluck game, how to play rajluck.",
  keywords: ["Rajluck Game Play", "play Rajluck Game", "how to play Rajluck", "Rajluck Game guide", "Rajluck Game", "Rajluck", "Raj Luck Game Play", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Play – How to Play 2026", description: "Learn how to play Rajluck Game. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-play", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Play" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Play", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-play" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game" heading="Rajluck Game Play – Start Your Gaming Journey" subheading="Rajluck Game Play • How to Play • Android" description="Learn how to play Rajluck Game. Download the APK, register your account, login, and enjoy multiple gaming options on Android." />;
}
