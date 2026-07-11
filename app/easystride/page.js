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
              for runners with injury history, built to motivate and reward
              consistency, not just measure performance.
            </p>
          </div>
        </section>

        <div className="cs-hero-gradient-fade" />

        <div className="cs-body">
          <div className="cs-body-inner">
            <aside className="cs-toc">
              <p className="cs-toc-label">On this page</p>
              <ul className="cs-toc-list">
                <li><a href="#problem">01. The Problem</a></li>
                <li><a href="#market">02. Market Gap</a></li>
                <li><a href="#positioning">03. Strategic Positioning</a></li>
                <li><a href="#constraints">04. Constraints & Design Decisions</a></li>
                <li><a href="#research">05. User Research</a></li>
                <li><a href="#hardware">06. Hardware Design</a></li>
                <li><a href="#signal">07. Signal Processing & Data Pipeline</a></li>
                <li><a href="#tradeoffs">08. Key Tradeoffs</a></li>
              </ul>
            </aside>

            <main className="cs-content">

              <section className="cs-section" id="problem">
                <span className="cs-section-num">01</span>
                <h2 className="cs-section-title">The Problem</h2>
                <span className="cs-section-subtitle">
                  Injury-prone runners are negotiating 4 decisions daily
                </span>
                <div className="four-decisions">
                  <div className="decision-list">
                    <div className="decision-row">
                      <span className="decision-num">1</span>
                      <span className="decision-title">Run vs. Rest</span>
                      <span className="decision-sub">When to push and when to hold back</span>
                    </div>
                    <div className="decision-row">
                      <span className="decision-num">2</span>
                      <span className="decision-title">Volume, Pace & Terrain</span>
                      <span className="decision-sub">How much load the body can handle today</span>
                    </div>
                    <div className="decision-row">
                      <span className="decision-num">3</span>
                      <span className="decision-title">Gait & Form</span>
                      <span className="decision-sub">Whether form is contributing to pain and whether it should be corrected</span>
                    </div>
                    <div className="decision-row">
                      <span className="decision-num">4</span>
                      <span className="decision-title">Cross-Training & Recovery</span>
                      <span className="decision-sub">What else to do to stay healthy between runs</span>
                    </div>
                  </div>
                  <p className="four-decisions-closing">
                    EasyStride makes these decisions easier by tracking an
                    individual&apos;s biomechanical data, comparing it to baseline,
                    providing recommendations, and partnering with the user on
                    training plans.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="market">
                <span className="cs-section-num">02</span>
                <h2 className="cs-section-title">Market Gap</h2>
                <span className="cs-section-subtitle">
                  Why nothing on the market solves this
                </span>
                <div className="cs-sub">
                  <p>
                    The most actionable, modifiable factor in injury prevention
                    is training load management, typically measured through
                    Acute:Chronic Workload Ratio (ACWR) - yet no product on the
                    market measures it from real biomechanical load. Wrist-worn
                    devices (Garmin, COROS, Polar, Apple) derive their load
                    metrics from heart-rate-based cardiovascular effort, a proxy
                    for how hard the heart worked, not for how much force the
                    skeleton absorbed. Two runs with identical wrist-based scores
                    can produce very different tibial loading depending on
                    terrain, fatigue, or form - so the tool most runners already
                    own can&apos;t reliably answer &quot;how much should I run&quot; or
                    &quot;should I rest today.&quot;
                  </p>
                  <p>
                    Stryd, the only lower-body-worn IMU with meaningful reach
                    among recreational runners, comes closer: its Duo sensors
                    report real force-based bilateral load and asymmetry. But
                    Stryd is built for performance-driven athletes chasing race
                    times, not runners managing injury history - its load metric
                    (Running Stress Balance) is pace/power-based and entirely
                    disconnected from its asymmetry data, and neither is tied to
                    a runner&apos;s pain history or translated into form or
                    cross-training guidance.
                  </p>
                  <p>
                    The market splits into cardio-proxy tools for the masses and
                    biomechanical sensors for competitive athletes - nothing fuses
                    real load data with a runner&apos;s own injury history to guide
                    when to run, how much, how to adjust form, and what
                    cross-training to do.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="positioning">
                <span className="cs-section-num">03</span>
                <h2 className="cs-section-title">Strategic Positioning</h2>
                <div className="cs-sub">
                  <p>
                    EasyStride is built for a runner focused primarily on staying
                    healthy, not performance. The target user values accurate data
                    and wants help managing biomechanical load and automatic
                    detection of changes in their baseline form that could
                    increase injury risk.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="constraints">
                <span className="cs-section-num">04</span>
                <h2 className="cs-section-title">Constraints & Design Decisions</h2>
                <div className="cs-placeholder">Coming soon.</div>
              </section>

              <section className="cs-section" id="research">
                <span className="cs-section-num">05</span>
                <h2 className="cs-section-title">User Research</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">Personas</span>
                  <h3 className="cs-sub-title">Five personas, four trust archetypes</h3>
                  <p>
                    I built five synthetic personas grounded in real biomechanics
                    literature and running-injury patterns. Across them I
                    identified four trust archetypes: science-backed,
                    social/community-based, technology-driven, and
                    experience-based. These archetypes drove which metrics to
                    surface first and how to explain them.
                  </p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">Key insight</span>
                  <h3 className="cs-sub-title">Trust in data accuracy, not just privacy</h3>
                  <p>
                    The central design tension is not whether runners will share
                    their data - it&apos;s whether they&apos;ll believe what the data
                    says. A runner who has been injured once is already skeptical
                    of anything that sounds like overconfidence. The product has
                    to earn trust before it can change behavior.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="hardware">
                <span className="cs-section-num">06</span>
                <h2 className="cs-section-title">Hardware Design</h2>
                <div className="cs-placeholder">Coming soon.</div>
              </section>

              <section className="cs-section" id="signal">
                <span className="cs-section-num">07</span>
                <h2 className="cs-section-title">Signal Processing & Data Pipeline</h2>
                <div className="cs-sub">
                  <span className="cs-sub-label">Architecture</span>
                  <h3 className="cs-sub-title">Raw IMU → filtering → sensor fusion → gait metrics</h3>
                  <p>
                    Every metric the user sees traces back through a documented
                    signal chain. Raw accelerometer and gyroscope data moves
                    through a filtering and calibration stage, then sensor fusion,
                    before it becomes a number on the dashboard. Nothing on screen
                    is estimated without a real biomechanical signal behind it.
                  </p>
                </div>
              </section>

              <section className="cs-section" id="tradeoffs">
                <span className="cs-section-num">08</span>
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
