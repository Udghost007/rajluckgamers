import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Rajluck Game – Download APK, Login, Register & Complete Guide 2026",
  description:
    "Welcome to RajluckGamers — your complete guide to Rajluck Game. Download the latest Rajluck APK for Android, learn how to register and login, explore Rajluck App features, and discover promotions. Official Rajluck Game download, rajluck apk, rajluck app, rajluckgame — all in one place.",
  keywords: [
    "Rajluck",
    "Rajluck Game",
    "RajluckGame",
    "RajluckGamers",
    "rajluckgamers",
    "Rajluck APK",
    "Rajluck App",
    "Rajluck Download",
    "Rajluck Game Download",
    "Rajluck Game APK",
    "Rajluck Game Login",
    "Rajluck Game Register",
    "Download Rajluck",
    "Rajluck APK Download",
    "Rajluck Game Android",
    "Rajluck Game 2026",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "Rajluck Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "Your complete guide to Rajluck Game. Download the latest Rajluck APK, register, login, and explore features of the Rajluck App for Android.",
    url: "https://rajluckgamers.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajluck Game – Download APK for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajluck Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "Your complete guide to Rajluck Game. Download the latest Rajluck APK, register, login, and explore features of the Rajluck App for Android.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://rajluckgamers.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Rajluck Game available for Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Rajluck Game is designed primarily for Android devices. The application is optimized to work smoothly on supported Android phones and tablets.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, registration is generally available without any registration fee. You can create your account quickly by following the registration steps on the platform.",
      },
    },
    {
      "@type": "Question",
      name: "How do I access my account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use your registered mobile number together with your password or verification code to log in to your Rajluck Game account.",
      },
    },
    {
      "@type": "Question",
      name: "Should I update the application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, installing the latest version is recommended as it can improve performance, stability, and security of the application.",
      },
    },
    {
      "@type": "Question",
      name: "Are promotional offers always available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Promotions may vary depending on the platform's current campaigns and eligibility requirements. Check the app regularly for the latest offers.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomePage />
    </>
  );
}
