"use client";
import Link from "next/link";
import { useEffect } from "react";
import AuroraBackground from "../../components/AuroraBackground";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import OtherProjects from "../../components/OtherProjects";

export default function EasyStride() {
  useEffect(() => {
    const links = document.querySelectorAll(".cs-toc-list a");
    const handler = () => {
      let current = "";
      links.forEach((l) => {
        const sec = document.querySelector(l.getAttribute("href"));
        if (sec && sec.getBoundingClientRect().top <= 100) current = l.getAttribute("href");
      });
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === current));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function openLightbox(src) {
    document.getElementById("lb-img").src = src;
    document.getElementById("lightbox").classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("open");
    document.body.style.overflow = "";
  }

  return (
    <>
      <AuroraBackground />
      <div className="site-content">
        <Nav />

        <section className="cs-hero">
          <div className="cs-hero-inner">
            <Link href="/" className="cs-back">← Back to portfolio</Link>
            <div className="cs-tags">
              <span className="cs-tag">Independent Project</span>
              <span className="cs-tag">Wearable</span>
              <span className="cs-tag">IoT</span>
            </div>
            <h1 className="cs-title">EasyStride</h1>
            <p className="cs-subtitle">
              Wearable Injury Prevention for Running - a shin-mounted wearable for female runners with injury history, built to motivate and reward consistency, not just measure performance.
            </p>
          </div>
        </section>

        <div className="cs-body">
          <div className="cs-body-inner">
            <aside className="cs-toc">
              <p className="cs-toc-label">On this page</p>
              <ul className="cs-toc-list">
                <li><a href="#problem">Problem</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#pipeline">Signal pipeline</a></li>
                <li><a href="#design">Design system</a></li>
                <li><a href="#status">Status</a></li>
              </ul>
            </aside>

            <main className="cs-content">
              <section className="cs-section" id="problem">
                <span className="cs-section-num">Problem definition</span>
                <h2 className="cs-section-title">The gap between clinical and real-world</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">The problem</span>
                  <h3 className="cs-sub-title">Injury happens at mile 3, not in a clinic</h3>
                  <p>44.6% of recreational runners get injured every year. Female runners are up to 3x more likely than men - yet women make up only 34% of sports research subjects. Gait analysis captures 1-2 minutes of controlled, non-fatigued running. Form breakdown - the window where injuries actually develop - happens well beyond that.</p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">The opportunity</span>
                  <h3 className="cs-sub-title">Continuous monitoring, without a clinic</h3>
                  <p>A wearable that tracks the biomechanical signals that actually predict injury - vertical loading rate, ground contact time, bilateral asymmetry, tibial shock - across an entire run, and delivers actionable feedback in plain language.</p>
                </div>
              </section>

              <section className="cs-section" id="research">
                <span className="cs-section-num">Research</span>
                <h2 className="cs-section-title">Understanding how runners trust data</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">User research</span>
                  <h3 className="cs-sub-title">Five personas, four trust archetypes</h3>
                  <p>I built five synthetic personas grounded in real biomechanics literature and running-injury patterns. Across them I identified four trust archetypes: science-backed, social/community-based, technology-driven, and experience-based. These archetypes drove which metrics to surface first and how to explain them.</p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">Key insight</span>
                  <h3 className="cs-sub-title">Trust in data accuracy, not just privacy</h3>
                  <p>The central design tension isn't whether runners will share their data - it's whether they'll believe what the data says. A runner who has been injured once is already skeptical of anything that sounds like overconfidence. The product has to earn trust before it can change behavior.</p>
                </div>
              </section>

              <section className="cs-section" id="pipeline">
                <span className="cs-section-num">Signal pipeline</span>
                <h2 className="cs-section-title">From raw IMU to actionable metrics</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">Architecture</span>
                  <h3 className="cs-sub-title">Raw IMU → filtering → sensor fusion → gait metrics</h3>
                  <p>Every metric the user sees traces back through a documented signal chain. Raw accelerometer and gyroscope data moves through a filtering and calibration stage, then sensor fusion, before it becomes a number on the dashboard. Nothing on screen is estimated without a real biomechanical signal behind it.</p>
                </div>
              </section>

              <section className="cs-section" id="design">
                <span className="cs-section-num">Design system</span>
                <h2 className="cs-section-title">Visual language built for trust</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">Brand</span>
                  <h3 className="cs-sub-title">Overlapping ellipses, brand pink #EDA8B8</h3>
                  <p>The visual language is built around overlapping ellipses representing individual stride paths. A full semantic color system and token library sits underneath - built in Figma, designed to scale from the mobile app to any future dashboard or report format.</p>
                </div>
              </section>

              <section className="cs-section" id="status">
                <span className="cs-section-num">Status</span>
                <h2 className="cs-section-title">Active development</h2>
                <div className="cs-placeholder">
                  EasyStride is an active project. Hardware, signal pipeline, and UI design are all in progress. This case study will expand as each workstream completes.
                </div>
              </section>
            </main>
          </div>
        </div>

        <OtherProjects currentSlug="easystride" />

        <div className="lightbox" id="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <img id="lb-img" src="" alt="Zoomed view" onClick={(e) => e.stopPropagation()} />
        </div>

        <Footer />
      </div>
    </>
  );
}
