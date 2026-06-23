(function () {
    "use strict";

    var DOWNLOAD_EXTENSION_PATTERN = /\.(?:7z|csv|docx?|epub|gz|ics|jpe?g|mov|mp3|mp4|pdf|png|pptx?|rar|svg|tar|txt|webp|xlsx?|zip)$/i;
    var SERVICE_PATH_PATTERN = /^\/(?:en\/(?:business-automation|saas-product-teams|technical-teams)|pl\/(?:automatyzacja-biznesu|saas-i-zespoly-produktowe|zespoly-techniczne))\/?$/;
    var SCHEDULING_HOST_PATTERN = /(?:^|\.)(?:cal\.com|calendly\.com|calendar\.app\.google|calendar\.google\.com)$/i;

    function normalizeText(value) {
        return String(value || "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 80);
    }

    function toUrl(href) {
        try {
            return new URL(href, window.location.href);
        } catch (error) {
            return null;
        }
    }

    function isExternalLink(linkOrUrl) {
        var url = linkOrUrl instanceof URL ? linkOrUrl : toUrl(linkOrUrl && (linkOrUrl.href || linkOrUrl));
        return Boolean(url && /^https?:$/.test(url.protocol) && url.origin !== window.location.origin);
    }

    function safeHref(url) {
        if (!url) {
            return "";
        }

        if (url.protocol === "mailto:") {
            return "mailto:";
        }

        if (url.protocol === "tel:") {
            return "tel:";
        }

        if (/^https?:$/.test(url.protocol)) {
            return isExternalLink(url) ? url.origin + url.pathname : url.pathname;
        }

        return "";
    }

    function trackSiteEvent(eventName, details) {
        if (!eventName) {
            return;
        }

        details = details || {};

        var payload = {
            event: "site_event",
            eventName: eventName,
            category: details.category || "engagement",
            label: details.label || "link",
            href: details.href || "",
            path: window.location.pathname
        };

        try {
            if (window.dataLayer && typeof window.dataLayer.push === "function") {
                window.dataLayer.push(payload);
            }
        } catch (error) {
            // Analytics must never interfere with navigation.
        }

        try {
            window.dispatchEvent(new CustomEvent("site-analytics-event", { detail: payload }));
        } catch (error) {
            // CustomEvent may be unavailable in older browsers.
        }

        try {
            if (window.localStorage.getItem("analyticsDebug") === "true" && window.console) {
                window.console.debug("[site analytics]", payload);
            }
        } catch (error) {
            // Storage may be blocked by browser privacy settings.
        }
    }

    function classifyLinkClick(link) {
        var explicitEvent = normalizeText(link.dataset.analyticsEvent);
        var url = toUrl(link.getAttribute("href"));
        var text = normalizeText(link.textContent).toLowerCase();
        var pathname = url ? url.pathname.replace(/\/+$/, "") || "/" : "";

        if (explicitEvent) {
            return {
                eventName: explicitEvent,
                category: normalizeText(link.dataset.analyticsCategory) || "engagement",
                label: normalizeText(link.dataset.analyticsLabel) || "link",
                href: safeHref(url)
            };
        }

        if (!url) {
            return null;
        }

        if (url.protocol === "mailto:") {
            return { eventName: "contact_email_click", category: "conversion", label: "email", href: "mailto:" };
        }

        if (url.protocol === "tel:") {
            return { eventName: "contact_phone_click", category: "conversion", label: "phone", href: "tel:" };
        }

        if (/(?:^|\.)linkedin\.com$/i.test(url.hostname)) {
            return { eventName: "linkedin_click", category: "social", label: "linkedin", href: safeHref(url) };
        }

        if (SCHEDULING_HOST_PATTERN.test(url.hostname) || /(?:book|schedule|calendar|um[oó]w|kalendarz)/i.test(text)) {
            return { eventName: "book_call_click", category: "conversion", label: "calendar", href: safeHref(url) };
        }

        if (link.classList.contains("lang-link") || link.hasAttribute("hreflang")) {
            return { eventName: "language_switch_click", category: "navigation", label: "language", href: safeHref(url) };
        }

        if (link.hasAttribute("download") || DOWNLOAD_EXTENSION_PATTERN.test(pathname)) {
            return { eventName: "download_click", category: "engagement", label: "download", href: safeHref(url) };
        }

        if (url.origin === window.location.origin && SERVICE_PATH_PATTERN.test(url.pathname)) {
            return { eventName: "service_page_nav_click", category: "navigation", label: "service page", href: safeHref(url) };
        }

        if (isExternalLink(url)) {
            return { eventName: "external_link_click", category: "outbound", label: "external link", href: safeHref(url) };
        }

        return null;
    }

    document.addEventListener("click", function (event) {
        var target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        var trackable = target.closest("a[href], [data-analytics-event]");

        if (!trackable) {
            return;
        }

        var classification;

        if (trackable.matches("a[href]")) {
            classification = classifyLinkClick(trackable);
        } else {
            classification = {
                eventName: normalizeText(trackable.dataset.analyticsEvent),
                category: normalizeText(trackable.dataset.analyticsCategory) || "engagement",
                label: normalizeText(trackable.dataset.analyticsLabel) || "button",
                href: ""
            };
        }

        if (classification && classification.eventName) {
            trackSiteEvent(classification.eventName, classification);
        }
    });

    window.siteAnalytics = Object.freeze({
        classifyLinkClick: classifyLinkClick,
        isExternalLink: isExternalLink,
        normalizeText: normalizeText,
        trackSiteEvent: trackSiteEvent
    });
}());
