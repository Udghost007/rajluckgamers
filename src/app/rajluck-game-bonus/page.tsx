import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Bonus – Welcome Bonus, Referral & Daily Rewards 2026",
  description: "Rajluck Game Bonus — discover welcome bonuses, referral rewards, daily activity bonuses, and seasonal promotions. rajluck game bonus, rajluck bonus, rajluck game rewards.",
  keywords: ["Rajluck Game Bonus", "Rajluck Bonus", "Rajluck Game rewards", "Rajluck welcome bonus", "Rajluck referral bonus", "Rajluck daily bonus", "Rajluck Game", "Rajluck", "Raj Luck Game Bonus", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Bonus – Rewards & Promotions 2026", description: "Discover Rajluck Game bonuses and rewards at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-bonus", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Bonus" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Bonus", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-bonus" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game Bonus" heading="Rajluck Game Bonus – Rewards & Promotions" subheading="Rajluck Game Bonus • Welcome Offers • Daily Rewards" description="Discover all Rajluck Game bonuses — welcome offers, referral rewards, daily activity bonuses, and seasonal promotions for Android users." />;
}
