"use client";
import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference - skip parallax entirely
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const blobs = el.querySelectorAll(".aurora-blob");
    // Each blob moves at a slightly different parallax rate
    const rates = [0.04, 0.07, 0.05, 0.03];

    function onScroll() {
      const y = window.scrollY;
      blobs.forEach((blob, i) => {
        const offset = y * rates[i];
        blob.style.transform = `translateY(${offset}px)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="aurora" ref={ref} aria-hidden="true">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
    </div>
  );
}
