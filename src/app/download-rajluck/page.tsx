import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Rajluck – Get Rajluck Game APK Free 2026",
  description: "Download Rajluck — get the official Rajluck Game APK free for Android. Secure download, easy installation. Also search: download rajluck, download rajluck game, download rajluck apk.",
  keywords: ["Download Rajluck", "Download Rajluck Game", "Download Rajluck APK", "get Rajluck", "Rajluck free download", "Rajluck Game", "Rajluck", "Rajluck APK", "Raj Luck Download", "RajluckGamers"],
  openGraph: { title: "Download Rajluck – Free APK for Android 2026", description: "Download Rajluck Game APK free at rajluckgamers.com.", url: "https://rajluckgamers.com/download-rajluck", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Download Rajluck" }] },
  twitter: { card: "summary_large_image", title: "Download Rajluck", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajluckgamers.com/download-rajluck" },
};

const CTA_LINK = "https://share-rxapq9cajg.rajluck.co/web/share/index.html?ic=AA64CBGV&ts=1783054980&m=2&lang=en&id=1";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section-padding text-center">
        <Image src="/logo.webp" alt="Download Rajluck" width={160} height={160} className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in" priority />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 animate-slide-up">
          Download Rajluck<br />Beginner's First-Time Guide
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Never installed an APK file before? Don't worry — this guide is written specifically for beginners who are new to Android app installation outside the Play Store. We explain every step in plain language with no assumed technical knowledge.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-8 py-4 inline-block">
          Download Rajluck Free
        </a>
      </section>

      {/* What is an APK */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 gradient-text">First, What Is an APK File?</h2>
          <p className="text-text-secondary mb-4">
            APK stands for <strong>Android Package Kit</strong>. Think of it like a ZIP file that contains an entire app. When you download from the Google Play Store, the Play Store downloads an APK file and installs it for you automatically — you never see the file directly.
          </p>
          <p className="text-text-secondary mb-4">
            When you download Rajluck from rajluckgamers.com, you get the APK file directly. This is called "sideloading." You then tap the file to install it yourself — it's just one extra tap compared to a Play Store app.
          </p>
          <div className="card bg-primary-50 mt-6">
            <h3 className="font-bold text-primary mb-2">Is It Safe?</h3>
            <p className="text-text-secondary text-sm">Downloading APK files from unknown websites can be risky. The Rajluck APK from <strong>rajluckgamers.com</strong> is the official source. It is regularly scanned and verified. Always use our official link — never download from third-party sites claiming to have Rajluck.</p>
          </div>
        </div>
      </section>

      {/* Enable Unknown Sources */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Step 1: Enable "Unknown Sources" (The Beginner's Biggest Question)</h2>
          <p className="text-text-secondary mb-6">
            By default, Android only allows apps from the Play Store. To install the Rajluck APK, you need to tell your phone it's okay to install apps from other places. Here's how — the steps vary slightly by phone brand:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { brand: "Samsung (One UI)", steps: ["Open Settings", "Tap Apps", "Tap the three dots (⋮) in the top right", "Tap Special Access", "Tap Install Unknown Apps", "Find your browser (e.g. Chrome)", "Toggle Allow from this source to ON"] },
              { brand: "Xiaomi (MIUI)", steps: ["Open Settings", "Tap Privacy Protection", "Tap Special app access", "Tap Install unknown apps", "Find Chrome or your browser", "Toggle Allow from this source to ON"] },
              { brand: "Oppo / Realme (ColorOS)", steps: ["Open Settings", "Tap Additional Settings", "Tap Safety and Privacy", "Tap Install apps from external sources", "Find your browser", "Toggle the permission to ON"] },
              { brand: "Google Pixel (Stock Android)", steps: ["Open Settings", "Tap Apps", "Tap Special app access", "Tap Install unknown apps", "Select your browser", "Toggle Allow from this source to ON"] },
            ].map(({ brand, steps }) => (
              <div key={brand} className="card">
                <h3 className="font-bold text-primary mb-3">{brand}</h3>
                <ol className="text-text-secondary text-sm space-y-1 list-decimal list-inside">
                  {steps.map(s => <li key={s}>{s}</li>)}
                </ol>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-4">Can't find these settings? Search "Install unknown apps" in your Settings search bar — all Android phones have this option somewhere.</p>
        </div>
      </section>

      {/* Download Steps */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Step-by-Step: Complete Installation Guide</h2>
          <div className="space-y-5">
            {[
              {
                step: "2",
                title: "Tap the Download Button",
                body: "Tap the orange Download button on this page. Your phone's browser will ask where to save the file — tap OK or Save. You'll see a download progress bar at the bottom of your screen or in the notification bar at the top."
              },
              {
                step: "3",
                title: "Wait for Download to Finish",
                body: "The Rajluck APK is about 52 MB. On WiFi this takes 10–30 seconds. On mobile data it may take 1–2 minutes. Don't close your browser or switch off your screen until the download says 'Complete'."
              },
              {
                step: "4",
                title: "Find and Open the Downloaded File",
                body: "When the download finishes, a notification will appear at the top of your screen. Pull down the notification bar (swipe down from the top). You'll see 'rajluck.apk — Download complete'. Tap it to open the file."
              },
              {
                step: "5",
                title: "Android Will Ask Permission",
                body: "A box will appear asking 'Do you want to install this application?' — tap Install. Another box might ask 'Allow this app to access...?' — tap Allow. These are normal permission prompts for a new app."
              },
              {
                step: "6",
                title: "Wait for Installation",
                body: "Installation takes 5–15 seconds. You'll see a loading bar. When it says 'App installed', you're done! Tap Open to launch Rajluck Game for the first time."
              },
              {
                step: "7",
                title: "Create Your Account or Login",
                body: "If you're new, tap Register and follow the on-screen steps to create your free account in under 3 minutes. If you already have an account, tap Login and enter your mobile number and password."
              },
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

      {/* Beginner Troubleshooting */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Beginner Troubleshooting — "It's Not Working!"</h2>
          <p className="text-text-secondary mb-6">If something went wrong, these are the three most common problems beginners face, and exactly how to fix each one:</p>
          <div className="space-y-4">
            {[
              { problem: "Problem: 'Install blocked' message appeared", fix: "Fix: This means Unknown Sources isn't enabled yet. Go back to Step 1 above and make sure you toggled the permission ON for the browser you used to download. Then try opening the APK file again." },
              { problem: "Problem: 'Parse error — the package appears to be corrupt'", fix: "Fix: The APK file didn't fully download. Go to your Downloads folder, delete the rajluck.apk file, and download it again. Make sure your internet connection stays stable during the download." },
              { problem: "Problem: I can't find the downloaded file", fix: "Fix: Open the Files app on your phone (also called My Files or File Manager on some brands). Tap Downloads. The file is named something like rajluck.apk — tap it to start installation." },
            ].map(({ problem, fix }) => (
              <div key={problem} className="card-static p-5">
                <h3 className="font-semibold text-text-primary mb-2">{problem}</h3>
                <p className="text-text-secondary text-sm">{fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">What Happens After Installation?</h2>
          <p className="text-text-secondary mb-6">Once Rajluck Game is installed, you'll see its icon on your home screen or in your app drawer. Here's what to do next:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { step: "A", title: "Register for Free", desc: "Tap Register. Enter your mobile number. Verify with OTP. Choose a username. Account ready in under 3 minutes." },
              { step: "B", title: "Explore the App", desc: "Browse the game lobby, check the promotions page, and review the help section to understand how everything works." },
              { step: "C", title: "Start Playing", desc: "Select a game that interests you and start with smaller amounts while you learn the platform. Have fun!" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="card text-center">
                <span className="step-number mx-auto mb-3">{step}</span>
                <h3 className="font-bold text-text-primary mb-2">{title}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Beginner FAQs</h2>
          <div className="space-y-5">
            {[
              { q: "Will enabling 'Unknown Sources' make my phone less safe?", a: "Enabling Unknown Sources for your browser only allows apps downloaded through that browser to be installed. You can turn the permission off again after installing Rajluck. It doesn't permanently weaken your device's security." },
              { q: "My phone is asking me to scan the APK. Should I?", a: "Yes! If your Android device or Google Play Protect asks to scan the APK before installing, allow it. The Rajluck APK will pass this scan. Scanning is a good security habit." },
              { q: "Do I need to delete the APK file after installing?", a: "No, but you can. Once the app is installed, the APK file in your Downloads folder is no longer needed. Deleting it frees up about 52 MB of storage space. The app itself remains installed." },
              { q: "The app icon appeared but when I tap it, nothing happens. Help?", a: "Try restarting your phone. If it still doesn't open, uninstall the app (long-press the icon → Uninstall), then download and reinstall the APK using the guide above. This usually fixes launch issues." },
              { q: "Is it free to download and register?", a: "Yes. Downloading the Rajluck Game APK is completely free. Creating an account is also free. There are no subscription fees or download charges." },
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
        <h2 className="text-3xl font-bold text-text-primary mb-4">You're Ready — Download Now</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">Follow the steps above and you'll have Rajluck Game installed on your Android in under 5 minutes — even as a first-time APK installer.</p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block px-8 py-4 text-lg">
          Download Rajluck APK Free
        </a>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary mb-4">Continue Your Journey</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rajluck-game-register" className="btn-outline text-sm px-4 py-2">Registration Walkthrough</Link>
            <Link href="/rajluck-register" className="btn-outline text-sm px-4 py-2">Eligibility Guide</Link>
            <Link href="/rajluck-game-login" className="btn-outline text-sm px-4 py-2">Login Security</Link>
            <Link href="/rajluck-game-android" className="btn-outline text-sm px-4 py-2">Android Optimization</Link>
            <Link href="/rajluck-app-download" className="btn-outline text-sm px-4 py-2">WiFi vs Data Download</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
