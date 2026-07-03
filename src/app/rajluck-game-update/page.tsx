import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rajluck Game Update – How to Update Rajluck APK 2026",
  description: "Rajluck Game Update — step-by-step guide to update your Rajluck Game APK. Auto-update, manual update, troubleshooting failed updates. rajluck game update, rajluck update, update rajluck apk.",
  keywords: ["Rajluck Game Update", "Rajluck update", "update Rajluck APK", "Rajluck Game new update", "how to update Rajluck", "Rajluck auto update", "Rajluck manual update", "Rajluck Game", "Rajluck", "Raj Luck Game Update", "RajluckGamers"],
  openGraph: { title: "Rajluck Game Update – Step-by-Step Guide 2026", description: "Learn how to update Rajluck Game APK at rajluckgamers.com.", url: "https://rajluckgamers.com/rajluck-game-update", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rajluck Game Update" }] },
  twitter: { card: "summary_large_image", title: "Rajluck Game Update Guide", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/rajluck-game-update" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Rajluck Game Update" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          How to Update<br />Rajluck Game APK
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Keeping Rajluck updated ensures you have the latest features, security patches, and bug fixes. This guide covers auto-update setup, manual update steps, what happens to your data during updates, and how to fix update failures.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Get Latest Update
        </a>
      </section>

      {/* Check Current Version */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">Check Your Current Version</h2>
          <p className="text-text-secondary mb-6">Before updating, check which version you are running to confirm whether an update is needed:</p>
          <div className="space-y-4">
            {[
              { step: "1", title: "Open the Rajluck App", body: "Launch the Rajluck Game app on your Android device. If the app fails to open, skip to the Manual Update section below." },
              { step: "2", title: "Go to Settings", body: "Tap the menu icon (three lines or gear icon) and navigate to Settings or About." },
              { step: "3", title: "Find Version Number", body: "Look for 'App Version' or 'Version' at the bottom of the Settings screen. It will display something like 'v3.2.1'." },
              { step: "4", title: "Compare with Latest", body: "Visit rajluckgamers.com or check the in-app update banner to see the latest available version. If your version is lower, update is recommended." },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-4 items-start card-static p-5">
                <span className="step-number">{step}</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{title}</h3>
                  <p className="text-text-secondary text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Update vs Manual */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Auto-Update vs Manual Update</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Auto-Update (Recommended)</h3>
              <p className="text-text-secondary text-sm mb-3">When enabled, Rajluck downloads and installs updates automatically in the background. You will see a notification when the update is ready.</p>
              <ul className="text-text-secondary text-xs space-y-1">
                <li>• Enable in Settings &rarr; App Updates &rarr; Auto-Update</li>
                <li>• Updates download over Wi-Fi only by default</li>
                <li>• App restarts automatically after installation</li>
                <li>• No manual action required</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3">Manual Update</h3>
              <p className="text-text-secondary text-sm mb-3">If auto-update is disabled or fails, you can update manually by downloading the latest APK file:</p>
              <ul className="text-text-secondary text-xs space-y-1">
                <li>• Visit rajluckgamers.com from your phone browser</li>
                <li>• Tap the download button for the latest APK</li>
                <li>• Open the downloaded file and tap Install</li>
                <li>• The installer will update the existing app without removing data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Manual Update */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Manual Update: Step-by-Step</h2>
          <p className="text-text-secondary mb-6">Follow these detailed steps if you need to update manually:</p>
          <div className="space-y-4">
            {[
              { step: "1", title: "Enable Unknown Sources", body: "Go to Android Settings → Security → enable 'Install from Unknown Sources' for your browser. On Android 12+, this is under 'Install Unknown Apps' per-app." },
              { step: "2", title: "Download the APK", body: "Open your browser and navigate to the Rajluck download page. Tap the download button. Wait for the APK file to finish downloading completely." },
              { step: "3", title: "Open the APK File", body: "Tap the download notification or find the file in your Downloads folder. Tap to open it. Android will show an installation prompt." },
              { step: "4", title: "Confirm Installation", body: "Tap 'Update' or 'Install'. Since Rajluck is already installed, Android will update the existing installation. This preserves all your account data and settings." },
              { step: "5", title: "Launch Updated App", body: "After installation completes, tap 'Open'. The app will launch with the new version. You may need to log in again depending on the update scope." },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-4 items-start card-static p-5">
                <span className="step-number">{step}</span>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{title}</h3>
                  <p className="text-text-secondary text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Safety */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">What Happens to Your Data During Updates</h2>
          <p className="text-text-secondary mb-6">Many users worry about losing their balance or game progress when updating. Here is what actually happens:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card-static p-4">
              <h3 className="font-semibold text-primary mb-2">Account Balance</h3>
              <p className="text-text-secondary text-sm">Your balance is stored on Rajluck servers, not on your phone. Updates cannot affect your balance. It will be exactly the same after updating.</p>
            </div>
            <div className="card-static p-4">
              <h3 className="font-semibold text-primary mb-2">Login Credentials</h3>
              <p className="text-text-secondary text-sm">Minor updates preserve your login session. Major version updates may require you to log in again, but your credentials remain valid.</p>
            </div>
            <div className="card-static p-4">
              <h3 className="font-semibold text-primary mb-2">Game History</h3>
              <p className="text-text-secondary text-sm">All game history, transaction records, and referral data are server-side. Nothing is lost during an app update.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Troubleshooting Failed Updates</h2>
          <p className="text-text-secondary mb-6">If your update fails or the app behaves unexpectedly after updating, try these solutions in order:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { problem: "Download Fails Midway", solution: "Check your internet connection and available storage (need at least 150 MB free). Switch from mobile data to Wi-Fi and retry the download." },
              { problem: "'Parse Error' on Install", solution: "The APK file may be corrupted or incomplete. Delete the downloaded file and download it again from the official source." },
              { problem: "'App Not Installed' Error", solution: "This occurs when the signing certificate doesn't match. Uninstall the old version first, then install the new APK. Note: you will need to log in again." },
              { problem: "App Crashes After Update", solution: "Clear the app cache: Settings → Apps → Rajluck Game → Clear Cache. If that doesn't work, clear data as well (you will need to log in again)." },
              { problem: "Update Notification Won't Go Away", solution: "If you already updated but still see an update prompt, force-close the app and reopen it. The notification checks version on launch." },
              { problem: "'Insufficient Storage' Error", solution: "Free up space by deleting unused apps, clearing other app caches, or moving media to cloud storage. Rajluck updates need approximately 80-150 MB." },
            ].map(({ problem, solution }) => (
              <div key={problem} className="card-static p-4">
                <h3 className="font-semibold text-primary mb-1 text-sm">{problem}</h3>
                <p className="text-text-secondary text-xs">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Notifications */}
      <section className="section-padding bg-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Update Notifications</h2>
          <p className="text-text-secondary mb-6">Rajluck notifies you about available updates through three channels:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card-static p-4">
              <h3 className="font-semibold text-text-primary mb-2">In-App Banner</h3>
              <p className="text-text-secondary text-sm">A banner appears at the top of the home screen when a new version is available. Tapping it starts the update process directly.</p>
            </div>
            <div className="card-static p-4">
              <h3 className="font-semibold text-text-primary mb-2">Push Notification</h3>
              <p className="text-text-secondary text-sm">A push notification is sent to your device when a critical or major update is released. Non-critical updates may not trigger a push.</p>
            </div>
            <div className="card-static p-4">
              <h3 className="font-semibold text-text-primary mb-2">Forced Update Screen</h3>
              <p className="text-text-secondary text-sm">For security-critical updates, the app will show a mandatory update screen. You must update to continue using the app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Will I lose my money if I update the Rajluck app?", a: "No. Your balance is stored securely on Rajluck servers. Updating the app on your phone does not affect your account balance in any way." },
              { q: "Can I skip an update and keep using the old version?", a: "You can skip optional updates, but mandatory security updates will block app access until you update. We recommend always updating promptly." },
              { q: "How much data does an update download use?", a: "A typical Rajluck update is between 30-80 MB. Full APK downloads are 80-150 MB. Use Wi-Fi if you have limited mobile data." },
              { q: "Do I need to uninstall the old version before updating?", a: "No. Installing the new APK over the old one will update it in place. Only uninstall if you get an 'App Not Installed' error due to signing conflicts." },
              { q: "Why does the update require so many permissions?", a: "Rajluck requests only necessary permissions: storage (for downloads), internet (for connectivity), and notifications. Review permissions in Android Settings if concerned." },
            ].map(({ q, a }) => (
              <div key={q} className="card">
                <h3 className="font-semibold text-text-primary mb-2">{q}</h3>
                <p className="text-text-secondary text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient-soft section-padding text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Update Now for the Best Experience</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Running the latest version means fewer bugs, faster performance, and access to the newest games and features.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Download Latest Update
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-game-latest-version" className="btn-outline text-sm px-4 py-2">Latest Version Features</Link>
            <Link href="/download-rajluck" className="btn-outline text-sm px-4 py-2">Quick Start Download</Link>
            <Link href="/rajluck-game-download" className="btn-outline text-sm px-4 py-2">Full Installation Guide</Link>
            <Link href="/rajluck-login" className="btn-outline text-sm px-4 py-2">Login Help</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
