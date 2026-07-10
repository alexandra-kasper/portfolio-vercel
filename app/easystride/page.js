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
              <span className="cs-tag">Hardware</span>
              <span className="cs-tag">Mobile App</span>
              <span className="cs-tag">Product Strategy</span>
            </div>
            <h1 className="cs-title">EasyStride</h1>
            <p className="cs-subtitle">
              Wearable Injury Prevention for Running - a shin-mounted wearable
              for female runners with injury history, built to motivate and
              reward consistency, not just measure performance.
            </p>
          </div>
        </section>

        <div className="cs-body">
          <div className="cs-body-inner">
            <aside className="cs-toc">
              <p className="cs-toc-label">On this page</p>
              <ul className="cs-toc-list">
                <li><a href="#problem">Problem Statement</a></li>
                <li><a href="#market">Market Gap</a></li>
                <li><a href="#strategy">Product Strategy</a></li>
                <li><a href="#constraints">Constraints & Design Decisions</a></li>
                <li><a href="#research">User Research</a></li>
                <li><a href="#hardware">Hardware Design</a></li>
                <li><a href="#signal">Signal Processing & Data Pipeline</a></li>
                <li><a href="#tradeoffs">Key Tradeoffs</a></li>
              </ul>
            </aside>

            <main className="cs-content">

              <section className="cs-section" id="problem">
                <span className="cs-section-num">01 — Problem Statement</span>
                <h2 className="cs-section-title">The four decisions runners get wrong</h2>
                <div className="cs-sub">
                  <p>
                    Recreational runners with a history of injury are left to navigate
                    the four decisions that most determine whether they get hurt again
                    - when to run versus rest, how much to run, how to improve their
                    form, and what cross-training to do - largely alone and without
                    individualized data, because the research on these exact questions
                    is either unresolved at the population level or documented to
                    diverge sharply from what runners themselves believe and practice.
                  </p>
                  <p>
                    EasyStride closes this gap by continuously capturing an individual
                    runner's fatigue-state gait and training load and comparing it
                    against their own history rather than a population norm, replacing
                    guesswork on each of these four decisions with a clear, personalized
                    signal.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="market">
                <span className="cs-section-num">02 — Market Gap</span>
                <h2 className="cs-section-title">Why nothing on the market solves this</h2>
                <div className="cs-sub">
                  <p>
                    The most actionable, modifiable factor in injury prevention is
                    training load management, typically measured through Acute:Chronic
                    Workload Ratio (ACWR) - yet no product on the market measures it
                    from real biomechanical load. Wrist-worn devices (Garmin, COROS,
                    Polar, Apple) derive their load metrics from heart-rate-based
                    cardiovascular effort, a proxy for how hard the heart worked, not
                    for how much force the skeleton absorbed. Two runs with identical
                    wrist-based scores can produce very different tibial loading
                    depending on terrain, fatigue, or form - so the tool most runners
                    already own can't reliably answer "how much should I run" or
                    "should I rest today."
                  </p>
                  <p>
                    Stryd, the only lower-body-worn IMU with meaningful reach among
                    recreational runners, comes closer: its Duo sensors report real
                    force-based bilateral load and asymmetry. But Stryd is built for
                    performance-driven athletes chasing race times, not runners managing
                    injury history - its load metric (Running Stress Balance) is
                    pace/power-based and entirely disconnected from its asymmetry data,
                    and neither is tied to a runner's pain history or translated into
                    form or cross-training guidance.
                  </p>
                  <p>
                    The market splits into cardio-proxy tools for the masses and
                    biomechanical sensors for competitive athletes - nothing fuses real
                    load data with a runner's own injury history to guide when to run,
                    how much, how to adjust form, and what cross-training to do.
                    EasyStride closes that gap: bilateral, tibia-mounted sensors track
                    true impact load and fatigue-state gait against the runner's own
                    baseline, not a population norm or performance target, to guide all
                    four decisions for the population these tools were never built to
                    serve.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="strategy">
                <span className="cs-section-num">03 — Product Strategy</span>
                <h2 className="cs-section-title">Product Strategy</h2>
                <div className="cs-placeholder">Coming soon.</div>
              </section>

              <section className="cs-section" id="constraints">
                <span className="cs-section-num">04 — Constraints & Design Decisions</span>
                <h2 className="cs-section-title">Constraints & Design Decisions</h2>
                <div className="cs-placeholder">Coming soon.</div>
              </section>

              <section className="cs-section" id="research">
                <span className="cs-section-num">05 — User Research</span>
                <h2 className="cs-section-title">User Research</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">Personas</span>
                  <h3 className="cs-sub-title">Five personas, four trust archetypes</h3>
                  <p>
                    I built five synthetic personas grounded in real biomechanics
                    literature and running-injury patterns. Across them I identified
                    four trust archetypes: science-backed, social/community-based,
                    technology-driven, and experience-based. These archetypes drove
                    which metrics to surface first and how to explain them.
                  </p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">Key insight</span>
                  <h3 className="cs-sub-title">Trust in data accuracy, not just privacy</h3>
                  <p>
                    The central design tension is not whether runners will share their
                    data - it's whether they'll believe what the data says. A runner
                    who has been injured once is already skeptical of anything that
                    sounds like overconfidence. The product has to earn trust before
                    it can change behavior.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="hardware">
                <span className="cs-section-num">06 — Hardware Design</span>
                <h2 className="cs-section-title">Hardware Design</h2>
                <div className="cs-placeholder">Coming soon.</div>
              </section>

              <section className="cs-section" id="signal">
                <span className="cs-section-num">07 — Signal Processing & Data Pipeline</span>
                <h2 className="cs-section-title">Signal Processing & Data Pipeline</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">Architecture</span>
                  <h3 className="cs-sub-title">Raw IMU → filtering → sensor fusion → gait metrics</h3>
                  <p>
                    Every metric the user sees traces back through a documented signal
                    chain. Raw accelerometer and gyroscope data moves through a
                    filtering and calibration stage, then sensor fusion, before it
                    becomes a number on the dashboard. Nothing on screen is estimated
                    without a real biomechanical signal behind it.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="tradeoffs">
                <span className="cs-section-num">08 — Key Tradeoffs</span>
                <h2 className="cs-section-title">Key Tradeoffs</h2>
                <div className="cs-placeholder">Coming soon.</div>
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
