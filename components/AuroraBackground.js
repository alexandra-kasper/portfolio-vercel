"use client";
import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const blobsRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Max overlay opacity - maps blob apparent intensity to 0.26-0.31 range
    const MAX_OVERLAY = 0.38;

    function getHeroBottom() {
      // Works for both main page (.hero) and case study pages (.cs-hero)
      const hero =
        document.querySelector(".cs-hero") ||
        document.querySelector(".hero");
      if (!hero) return window.innerHeight * 0.75;
      return hero.offsetTop + hero.offsetHeight;
    }

    function update() {
      const heroBottom = getHeroBottom();
      const scrollY = window.scrollY;

      // Progress: 0 at top of page, 1 when first section is reached
      const progress = Math.min(1, Math.max(0, scrollY / heroBottom));
      overlay.style.opacity = (progress * MAX_OVERLAY).toString();

      // Parallax on blobs (skipped if reduced motion)
      if (!prefersReduced) {
        const blobs = blobsRef.current?.querySelectorAll(".aurora-blob");
        const rates = [0.04, 0.07, 0.05, 0.03];
        blobs?.forEach((blob, i) => {
          blob.style.transform = `translateY(${scrollY * rates[i]}px)`;
        });
      }
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update(); // set initial state

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      {/* Blobs - fixed, always at their set opacity */}
      <div className="aurora" ref={blobsRef} aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>

      {/* Scroll-driven overlay - fades the aurora as user scrolls past the hero */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "#f7f5f2",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
