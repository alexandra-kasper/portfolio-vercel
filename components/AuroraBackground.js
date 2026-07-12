"use client";
import { useEffect, useRef } from "react";

export default function AuroraBackground({ fadeOnScroll = false }) {
  const blobsRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const overlay = overlayRef.current;
    const MAX_OVERLAY = 0.50;

    function getHeroBottom() {
      const hero =
        document.querySelector(".cs-hero") || document.querySelector(".hero");
      if (!hero) return window.innerHeight * 0.75;
      return hero.offsetTop + hero.offsetHeight;
    }

    function update() {
      const scrollY = window.scrollY;

      // Scroll-driven fade — case study pages only
      if (fadeOnScroll && overlay) {
        const fadeDistance = getHeroBottom() * 0.6;
        const progress = Math.min(1, Math.max(0, scrollY / fadeDistance));
        overlay.style.opacity = (progress * MAX_OVERLAY).toString();
      }

      // Parallax on blobs (all pages)
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
  }, [fadeOnScroll]);

  return (
    <>
      <div className="aurora" ref={blobsRef} aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>

      {fadeOnScroll && (
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
      )}
    </>
  );
}
