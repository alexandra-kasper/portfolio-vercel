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

    // Final overlay opacity - maps blob apparent intensity to ~0.25-0.31
    const MAX_OVERLAY = 0.50;

    function getHeroBottom() {
      const hero =
        document.querySelector(".cs-hero") ||
        document.querySelector(".hero");
      if (!hero) return window.innerHeight * 0.75;
      return hero.offsetTop + hero.offsetHeight;
    }

    function update() {
      const heroBottom = getHeroBottom();
      const scrollY = window.scrollY;

      // Fade completes at 60% of hero height so The Problem section
      // is already revealed against the faded background
      const fadeDistance = heroBottom * 0.6;
      const progress = Math.min(1, Math.max(0, scrollY / fadeDistance));
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
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="aurora" ref={blobsRef} aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>
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
