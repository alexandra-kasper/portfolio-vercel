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
      <AuroraBackground fadeOnScroll />
      <div className="site-content">
        <Nav />

        <section className="cs-hero">
          <div className="cs-hero-inner">
            <Link href="/" className="cs-back">← Back to portfolio</Link>
            <div className="cs-tags">
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
                <li><a href="#research">04. User Research</a></li>
              </ul>
            </aside>

            <main className="cs-content">

              {/* 01 — The Problem */}
              <section className="cs-section" id="problem">
                <span className="cs-section-num">01</span>
                <h2 className="cs-section-title">The Problem</h2>
                <span className="cs-section-subtitle">
                  Injury-prone runners are negotiating 4 decisions daily without
                  adequate data, translation, or guidance
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

              {/* 02 — Market Gap */}
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

              {/* 03 — Strategic Positioning */}
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
                <div
                  className="cs-img-wrap"
                  onClick={() => openLightbox("https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/app_design_display.png")}
                  style={{ cursor: "zoom-in" }}
                >
                  <img
                    src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/app_design_display.png"
                    alt="EasyStride app UI"
                    style={{ width: "100%", display: "block" }}
                  />
                  <span className="cs-img-hint">Click to zoom</span>
                </div>
              </section>

              {/* 04 — User Research */}
              <section className="cs-section" id="research">
                <span className="cs-section-num">04</span>
                <h2 className="cs-section-title">User Research</h2>
                <div className="cs-sub">
                  <p>
                    To ground EasyStride in real runner experience, I conducted
                    12 semi-structured interviews with recreational runners, all
                    screened for a history of running injury. Participants were 8
                    women and 4 men - a split chosen deliberately: the interviews
                    surfaced distinct identity profiles and motivations between
                    the two groups, and the academic literature points to
                    meaningful sex-based differences in running biomechanics and
                    injury patterns. Interviews ran 30 to 60 minutes and covered
                    running history, injury experience, PT and clinical
                    interactions, data and wearable habits, and each runner&apos;s
                    emotional relationship with the sport.
                  </p>
                </div>

                <div className="cs-sub">
                  <span className="cs-sub-label">Personas</span>
                  <div className="cs-persona">
                    <h4 className="cs-persona-name">The Social Runner</h4>
                    <p className="cs-persona-desc">
                      Running is primarily a social activity for this runner -
                      the group run is the anchor of their week, and injury means
                      losing that as much as losing fitness. They are hesitant to
                      invest in running gear or care because they don&apos;t consider
                      themselves serious enough to justify it.
                    </p>
                  </div>
                  <div className="cs-persona">
                    <h4 className="cs-persona-name">The On-Again-Off-Again Runner</h4>
                    <p className="cs-persona-desc">
                      This runner has been unable to sustain consistent training
                      over the years, usually because of a recurring injury cycle:
                      build up, break down, rehab, return, repeat. They manage
                      load by tracking mileage and by feel, and have not used ACWR
                      even when a tool they own provides it.
                    </p>
                  </div>
                  <div className="cs-persona">
                    <h4 className="cs-persona-name">The Multi-Sport Athlete</h4>
                    <p className="cs-persona-desc">
                      Running is one part of a broader training routine, so a
                      meaningful portion of this runner&apos;s weekly load happens
                      outside of running and is invisible to running wearables.
                      They are comfortable with data and have often tried
                      form-tracking tools already, but stopped using them because
                      the output didn&apos;t translate into a decision.
                    </p>
                  </div>
                </div>

                <div className="cs-sub">
                  <span className="cs-sub-label">Key Insights</span>
                  <ul className="cs-list">
                    <li>
                      <strong>&quot;Not a serious runner.&quot;</strong> The strongest and
                      most consistent theme, especially among women: 6 of 8 women
                      - including one training for a full Ironman - noted
                      unprompted that they hesitate to invest in their running
                      because they don&apos;t consider themselves serious runners.
                      The barrier is identity, not just price.
                    </li>
                    <li>
                      <strong>Existing gait data isn&apos;t actionable.</strong> 2
                      participants had used cadence from a wrist-worn device to
                      adjust form after injury, but 0 participants currently make
                      any decision based on wrist-worn gait data (cadence, stride
                      length, ground contact time). The data exists; runners
                      don&apos;t act on it.
                    </li>
                    <li>
                      <strong>PT fails recreational runners in a specific,
                      consistent way.</strong> 11 of 12 had PT experience; 9 of
                      11 stopped because either (1) the exercises felt too easy to
                      make a difference, or (2) the plan didn&apos;t feel personalized
                      to them.
                    </li>
                  </ul>
                </div>

                <div className="cs-sub">
                  <span className="cs-sub-label">Relationships with Data</span>
                  <ul className="cs-list">
                    <li>
                      Reliance varies widely. Some runners use heart rate, pace,
                      or distance in real time; some look back at mileage to
                      manage week-to-week consistency. None use ACWR to moderate
                      training volume - even those whose tools provide it.
                    </li>
                    <li>
                      3 participants noted that some wearable data (sleep, heart
                      rate) can be demotivating, and they sometimes avoid it.
                    </li>
                    <li>
                      <strong>10 of 12 participants said data must correlate with
                      how they feel before they&apos;ll trust it.</strong>
                    </li>
                    <li>
                      2 participants said they need to see evidence of progress.
                    </li>
                    <li>
                      Other trust pathways varied: (1) scientific evidence /
                      journal articles showing the device works, (2)
                      recommendations and testimonials from friends, and (3) a
                      sanity check against their own understanding. This last one
                      matters because many injury-management best practices
                      don&apos;t match what runners believe or have been told (e.g.,
                      shoe choice has been shown to have little to no effect on
                      injury rates).
                    </li>
                  </ul>
                </div>

                <div className="cs-sub">
                  <span className="cs-sub-label">Considerations & Decisions</span>
                  <table className="cs-table">
                    <thead>
                      <tr>
                        <th>Insight</th>
                        <th>Product decision</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>&quot;Not a serious runner&quot; barrier is identity-based</td>
                        <td>Positioning around injury prevention and identity, not performance</td>
                      </tr>
                      <tr>
                        <td>Gait data exists but 0/12 act on it</td>
                        <td>Prioritize actionability over displaying metrics</td>
                      </tr>
                      <tr>
                        <td>Data must match felt experience (10/12)</td>
                        <td>Conservative alert thresholds; multi-signal confirmation; journal as two-way calibration loop</td>
                      </tr>
                      <tr>
                        <td>Data anxiety, avoidance (3/12)</td>
                        <td>Conservative alert thresholds; lead with positives</td>
                      </tr>
                      <tr>
                        <td>No one uses ACWR despite access</td>
                        <td>Automate load management through planning feature; include ACWR education in onboarding</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="cs-table-note">
                    * Test assumption about lack of education: follow up with
                    participants to see if they are aware of ACWR.
                  </p>
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
