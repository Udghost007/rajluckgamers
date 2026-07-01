import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Rewards – Promotions, Bonuses & Offers 2026",
  description: "Rajluck Game Rewards — explore all rewards, promotions, welcome bonuses, referral benefits, and daily offers on Rajluck Game. rajluck game rewards, rajluck rewards, rajluck game offers.",
  keywords: ["Rajluck Game Rewards", "Rajluck Rewards", "Rajluck Game promotions", "Rajluck Game offers", "Rajluck Game bonuses", "Rajluck welcome reward", "Rajluck Game", "Rajluck", "Raj Luck Game Rewards", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Rewards – Bonuses & Offers 2026", description: "Explore Rajluck Game rewards and promotions at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-rewards", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Rewards" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Rewards", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-rewards" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game Rewards" heading="Rajluck Game Rewards – Bonuses & Promotions" subheading="Rajluck Game Rewards • Bonuses • Daily Offers" description="Explore all Rajluck Game rewards — welcome bonuses, referral benefits, daily activity rewards, and seasonal promotions for all users." />;
}
