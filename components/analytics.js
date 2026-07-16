// Small helper for sending custom Google Analytics events.
// Safe to call anywhere - it no-ops if gtag hasn't loaded yet
// (e.g. an ad blocker, or before the script finishes loading).

export function trackEvent(eventName, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// Specific helper for case-study link clicks.
// `project` is which case study (easystride / apollo-dash),
// `location` is where on the page the click happened
// (image, title, or cta) so you can see which link people use.
export function trackCaseStudyClick(project, location) {
  trackEvent("case_study_click", {
    project,
    link_location: location,
  });
}
