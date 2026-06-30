import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer – Rajluck Game",
  description:
    "Read the disclaimer for rajluckgamers.com. This is an independent informational website providing guides and resources about Rajluck Game, Rajluck APK, and the Rajluck App. We are not affiliated with the official Rajluck Game platform.",
  keywords: [
    "Rajluck Game disclaimer",
    "rajluckgamers disclaimer",
    "Rajluck App independent site",
    "Rajluck APK info site",
    "RajluckGamers",
    "Raj Luck",
    "Raj Luck Game",
    "Raj Luck Gamers",
  ],
  openGraph: {
    title: "Disclaimer – Rajluck Game",
    description: "Disclaimer for rajluckgamers.com — an independent informational website about Rajluck Game, Rajluck APK, and the Rajluck App.",
    url: "https://rajluckgamers.com/disclaimer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajluck Game Disclaimer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer – Rajluck Game",
    description: "Disclaimer for rajluckgamers.com — an independent informational website about Rajluck Game, Rajluck APK, and the Rajluck App.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajluckgamers.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-xs font-semibold mb-4">
            Legal
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-3">
            Disclaimer
          </h1>
          <p className="text-text-secondary text-base sm:text-lg">
            Please read this disclaimer carefully before using our website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="card-static p-5 sm:p-8 bg-amber-50 border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h2 className="text-lg font-bold text-amber-800 mb-2">Important Notice</h2>
                  <p className="text-amber-700 leading-relaxed">
                    This website (<strong>rajluckgamers.com</strong>) is created for <strong>informational purposes only</strong> and is <strong>not affiliated with or operated by</strong> the official Rajluck Game platform.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Independent Website</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                This website is an independent informational platform created to provide guides, tutorials, and resources related to Rajluck Game and Rajluck APK. We are not the official website, official application, developer, owner, or operator of Rajluck Game.
              </p>
              <p className="text-text-secondary leading-relaxed">
                All trademarks, logos, brand names, and other intellectual property mentioned on this website belong to their respective owners and are used solely for identification and informational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Content Accuracy</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information, we make no warranties or representations about the completeness, accuracy, reliability, or availability of the information, products, services, or related graphics contained on this website.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Any reliance you place on such information is strictly at your own risk. We shall not be liable for any loss or damage arising from the use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">External Links</h2>
              <p className="text-text-secondary leading-relaxed">
                This website may contain links to external websites. These links are provided for convenience and informational purposes only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites. Visiting external links is at your own discretion and risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">No Guarantees</h2>
              <p className="text-text-secondary leading-relaxed">
                We do not guarantee the availability, functionality, or performance of any application, service, or feature mentioned on this website. Features, promotions, and offerings may change without notice at the discretion of the respective platform operators.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">User Responsibility</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Users are responsible for:
              </p>
              <ul className="space-y-2">
                {[
                  "Verifying information independently before taking any action.",
                  "Complying with all applicable laws and regulations in their jurisdiction.",
                  "Using any downloaded applications at their own risk.",
                  "Protecting their personal information and account credentials.",
                  "Reading and understanding the terms and conditions of any platform they use.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Changes to This Disclaimer</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to update or modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this page. We encourage users to review this disclaimer periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Contact</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have any questions or concerns about this disclaimer, please contact us through our website. We will make reasonable efforts to respond in a timely manner.
              </p>
            </div>

            <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-text-muted text-sm italic">
                By using this website, you acknowledge that you have read and understood this disclaimer.
              </p>
              <Link href="/privacy-policy" className="btn-outline !text-sm !py-2 !px-4">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
