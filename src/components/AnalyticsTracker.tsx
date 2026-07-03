"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/gtag";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const startTime = useRef(Date.now());

  // ── Page view on route change ──
  useEffect(() => {
    startTime.current = Date.now();
    trackEvent("page_view", {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  // ── Time on page (fires when user leaves) ──
  useEffect(() => {
    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        const seconds = Math.round((Date.now() - startTime.current) / 1000);
        trackEvent("time_on_page", {
          page_path: pathname,
          duration_seconds: seconds,
        });
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [pathname]);

  // ── Scroll depth tracking (25%, 50%, 75%, 100%) ──
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackEvent("scroll_depth", {
            page_path: pathname,
            depth_percent: t,
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // ── Global click tracking ──
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement;

      // ── Link clicks ──
      const anchor = el.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        const text = anchor.textContent?.trim() || "";
        const isExternal =
          href.startsWith("http") && !href.includes("rajluckgamers.com");
        const isCTA = href.includes("share-rxapq9cajg.rajluck.co");

        // CTA / Download button
        if (isCTA) {
          trackEvent("cta_click", {
            event_category: "conversion",
            event_label: text || "CTA Button",
            link_url: href,
            page_path: pathname,
          });
        }

        // External link
        if (isExternal && !isCTA) {
          trackEvent("external_link_click", {
            event_category: "outbound",
            event_label: text || href,
            link_url: href,
            page_path: pathname,
          });
        }

        // Download-related text
        if (
          /download|apk/i.test(text) ||
          anchor.classList.contains("btn-cta")
        ) {
          trackEvent("download_click", {
            event_category: "engagement",
            event_label: text || "Download Button",
            link_url: href,
            page_path: pathname,
          });
        }

        // Header nav click
        const header = anchor.closest("header");
        if (header && !isExternal) {
          trackEvent("nav_click", {
            event_category: "navigation",
            event_label: text,
            link_url: href,
            nav_location: "header",
          });
        }

        // Footer link click
        const footer = anchor.closest("footer");
        if (footer) {
          trackEvent("footer_link_click", {
            event_category: "navigation",
            event_label: text,
            link_url: href,
            nav_location: "footer",
          });
        }

        // Internal page navigation
        if (!isExternal && !header && !footer) {
          trackEvent("internal_link_click", {
            event_category: "navigation",
            event_label: text,
            link_url: href,
            page_path: pathname,
          });
        }

        return;
      }

      // ── Button clicks (non-link) ──
      const button = el.closest("button");
      if (button) {
        const text = button.textContent?.trim() || "";
        const ariaLabel = button.getAttribute("aria-label") || "";

        // FAQ accordion toggle
        if (button.classList.contains("faq-question")) {
          const isExpanding = button.getAttribute("aria-expanded") === "false";
          trackEvent("faq_toggle", {
            event_category: "engagement",
            event_label: text.substring(0, 100),
            action: isExpanding ? "expand" : "collapse",
            page_path: pathname,
          });
          return;
        }

        // Mobile menu toggle
        if (ariaLabel === "Toggle menu") {
          trackEvent("mobile_menu_toggle", {
            event_category: "navigation",
            event_label: "hamburger_menu",
            page_path: pathname,
          });
          return;
        }

        // Generic button click
        trackEvent("button_click", {
          event_category: "engagement",
          event_label: text.substring(0, 100) || ariaLabel,
          page_path: pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // ── Track copy events (user copying content) ──
  useEffect(() => {
    function handleCopy() {
      const selection = window.getSelection()?.toString().substring(0, 100);
      trackEvent("content_copy", {
        event_category: "engagement",
        event_label: selection || "unknown",
        page_path: pathname,
      });
    }
    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, [pathname]);

  return null;
}
