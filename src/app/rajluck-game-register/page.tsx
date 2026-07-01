import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rajluck Game Register – Create Your Account Free 2026",
  description: "Rajluck Game Register — create your free Rajluck Game account in minutes. Step-by-step registration guide, mobile verification, and account setup tips. rajluck game register, rajluck register, rajluck sign up.",
  keywords: ["Rajluck Game Register", "Rajluck Register", "Rajluck Game sign up", "create Rajluck account", "Rajluck registration", "Rajluck Game", "Rajluck", "Raj Luck Register", "Raj Luck Game Register", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Register – Create Your Account Free 2026", description: "Register your Rajluck Game account for free. Guide at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-register", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Register" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Register", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-register" },
};

export default function Page() {
  return <SeoLandingPage keyword="Rajluck Game Register" heading="Rajluck Game Register – Create Your Free Account" subheading="Rajluck Game Register • Free Sign Up • Quick Setup" description="Create your Rajluck Game account for free. Simple registration with mobile number verification — get started in minutes." />;
}
