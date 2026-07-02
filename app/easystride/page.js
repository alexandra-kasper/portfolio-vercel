// app/easystride/page.js
import WaveformDivider from "../../components/WaveformDivider";

export const metadata = {
  title: "EasyStride — Case Study",
};

export default function EasyStride() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-mark">ALEXANDRA /</span>
          <div className="nav-links">
            <a href="/#work">work</a>
            <a href="/#contact">contact</a>
          </div>
        </div>
      </nav>

      <main className="wrap">
        <section className="cs-hero">
          <a href="/#work" className="cs-back">
            ← Back to work
          </a>
          <h1>EasyStride</h1>
          <p className="lede">
            A gait-analysis wearable app for runners with injury history —
            designed, researched, and architected solo, end to end.
          </p>

          <div className="cs-meta">
            <div>
              <span>Role</span>
              <strong>Solo founder / PM / designer</strong>
            </div>
            <div>
              <span>Scope</span>
              <strong>Research, signal pipeline, UI/UX, brand</strong>
            </div>
            <div>
              <span>Target user</span>
              <strong>Women 25–40, running-related injury history</strong>
            </div>
          </div>
        </section>

        <WaveformDivider label="Problem" />

        <section className="cs-block">
          <h2>The problem</h2>
          <p>
            Most consumer running wearables report distance and pace, not
            the biomechanical signals that actually predict injury —
            ground reaction force, vertical loading rate, ground contact
            time, bilateral asymmetry, tibial shock, and acute-to-chronic
            workload ratio. Runners coming back from injury need to see
            form breakdown before it becomes a setback, not after.
          </p>
        </section>

        <WaveformDivider label="Research" />

        <section className="cs-block">
          <h2>Research</h2>
          <p>
            I built five synthetic personas grounded in real biomechanics
            literature and running-injury patterns, then mapped four trust
            archetypes — science-backed, social/community-based,
            technology-driven, and experience-based — to understand how
            different runners calibrate trust in wearable data accuracy.
          </p>
          <div className="cs-personas">
            <div className="persona-chip">
              <strong>Maya</strong>
              <span>Returning from injury, data-cautious</span>
            </div>
            <div className="persona-chip">
              <strong>Danielle</strong>
              <span>Community-driven, shares progress</span>
            </div>
            <div className="persona-chip">
              <strong>Priya</strong>
              <span>Science-first, wants the citation</span>
            </div>
            <div className="persona-chip">
              <strong>Sam</strong>
              <span>Technology-driven early adopter</span>
            </div>
            <div className="persona-chip">
              <strong>Renata</strong>
              <span>Experience-based, trusts feel over numbers</span>
            </div>
          </div>
        </section>

        <WaveformDivider label="Pipeline" />

        <section className="cs-block">
          <h2>Signal pipeline</h2>
          <p>
            Raw IMU data moves through filtering and calibration, then
            sensor fusion, before it ever becomes a metric a runner sees.
            Every derived number traces back to a real biomechanical
            signal — nothing on the dashboard is invented.
          </p>
          <div className="cs-pipeline">
            <span className="stage">Raw IMU</span>
            <span className="arrow">→</span>
            <span className="stage">Filtering / Calibration</span>
            <span className="arrow">→</span>
            <span className="stage">Sensor Fusion</span>
            <span className="arrow">→</span>
            <span className="stage">Derived Gait Metrics</span>
          </div>
        </section>

        <WaveformDivider label="Design" />

        <section className="cs-block">
          <h2>Design system</h2>
          <p>
            The visual language is built around overlapping ellipses,
            representing individual stride paths, in a brand pink (#EDA8B8)
            that carries through a full semantic color system and token
            library. The Recovery Day dashboard uses a violet
            battery-charging badge to communicate readiness at a glance,
            paired with a lower-body stress line chart for form breakdown
            over time.
          </p>
        </section>

        <WaveformDivider />

        <section className="contact">
          <h2>Want the full breakdown?</h2>
          <div className="contact-links">
            <a href="mailto:you@example.com">Email me</a>
            <a href="/#work">Back to work</a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© 2026 Alexandra</span>
        <span>EasyStride — case study</span>
      </footer>
    </>
  );
}
