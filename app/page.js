// app/page.js
import WaveformDivider from "../components/WaveformDivider";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-mark">ALEXANDRA /</span>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#work">work</a>
            <a href="#background">background</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </nav>

      <main className="wrap">
        {/* ---------- Hero ---------- */}
        <section className="hero" id="top">
          <p className="hero-eyebrow">Process Engineer → Product Manager</p>
          <h1>I find where the process breaks, then I build the fix.</h1>
          <p className="lede">
            Six years in genomics and health-tech manufacturing, most recently
            as Senior Process Engineer and Acting Platform PM at Illumina.
            Incoming MBA/MEng in Materials Science at UC Berkeley Haas,
            focused on semiconductors and commercializing new technology.
            Outside of work, I&apos;m building EasyStride — a gait-analysis
            wearable, end to end.
          </p>
          <div className="hero-links">
            <a href="#work">See the work →</a>
            <a href="mailto:you@example.com">Email</a>
            <a href="https://linkedin.com/in/your-handle">LinkedIn</a>
          </div>

          <div className="hero-chart" aria-hidden="true">
            <div className="hero-chart-head">
              <span>Flow Cell Defect Rate · Control Chart</span>
              <span>UCL / LCL Marked</span>
            </div>
            <WaveformDivider />
            <p className="hero-chart-annotation">
              Out-of-spec drift flagged at the design stage —{" "}
              <strong>caught in DFMEA, not in the field.</strong>
            </p>
          </div>
        </section>

        <WaveformDivider label="01 / About" />

        {/* ---------- About ---------- */}
        <section id="about">
          <div className="section-head">
            <span className="section-num">01</span>
            <h2>About</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                My background is bioengineering — microfluidics, surface
                chemistry, the kind of work where a tolerance stack-up
                decides whether a product ships. That training is what
                pulled me toward product: I kept ending up the person who
                turned a messy manufacturing process into a system someone
                could actually run, then asking why that system existed in
                the first place.
              </p>
              <p>
                At Illumina, I led a sub-module through FDA approval on the
                NovaSeq X, built a manufacturing data analytics platform that
                reached 100% adoption and saved roughly $9M a year, and ran
                45+ user interviews before writing a single requirement. I&apos;m
                now applying that same instinct to product management —
                across health tech, consumer hardware, and enterprise
                software.
              </p>
            </div>
            <ul className="fact-list">
              <li>
                <span>Now</span>
                <span>Senior Process Engineer &amp; Acting Platform PM, Illumina</span>
              </li>
              <li>
                <span>Next</span>
                <span>MBA/MEng, Materials Science — UC Berkeley Haas</span>
              </li>
              <li>
                <span>Focus</span>
                <span>Semiconductors, hardware platforms, applied AI</span>
              </li>
              <li>
                <span>Building</span>
                <span>EasyStride — gait analysis wearable</span>
              </li>
              <li>
                <span>Roots</span>
                <span>Hobby farm, FFA chapter president</span>
              </li>
            </ul>
          </div>
        </section>

        <WaveformDivider label="02 / Work" />

        {/* ---------- Case studies ---------- */}
        <section id="work">
          <div className="section-head">
            <span className="section-num">02</span>
            <h2>Selected work</h2>
          </div>
          <div className="case-grid">
            <a href="/easystride" className="case-card">
              <div className="case-card-top">
                <h3>EasyStride</h3>
                <span className="case-tag">Personal · 0→1</span>
              </div>
              <p>
                A gait-analysis wearable app for runners with injury
                history. Full-stack ownership: signal-processing
                architecture, design system, and synthetic user research
                across five personas.
              </p>
              <div className="case-stats">
                <span>
                  <strong>5</strong>personas researched
                </span>
                <span>
                  <strong>IMU → metrics</strong>full pipeline
                </span>
                <span>
                  <strong>Figma</strong>design system, built solo
                </span>
              </div>
            </a>

            <a href="#" className="case-card">
              <div className="case-card-top">
                <h3>Manufacturing Data Analytics Platform</h3>
                <span className="case-tag">Illumina</span>
              </div>
              <p>
                Replaced a manual, spreadsheet-driven reporting process on
                the flow cell manufacturing line with a live analytics
                platform — built around the failure modes I&apos;d already
                mapped through DFMEA.
              </p>
              <div className="case-stats">
                <span>
                  <strong>$9M</strong>annual savings
                </span>
                <span>
                  <strong>100%</strong>line adoption
                </span>
                <span>
                  <strong>50%+</strong>defect rate reduction
                </span>
              </div>
            </a>
          </div>
        </section>

        <WaveformDivider label="03 / Background" />

        {/* ---------- Timeline ---------- */}
        <section id="background">
          <div className="section-head">
            <span className="section-num">03</span>
            <h2>Where I&apos;ve been</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2025 — Present</span>
              <div>
                <p className="timeline-role">Acting Platform Product Manager</p>
                <p className="timeline-org">Illumina</p>
                <p className="timeline-desc">
                  Stepped into platform PM responsibilities alongside process
                  engineering — translating manufacturing and quality
                  requirements into product decisions.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2020 — Present</span>
              <div>
                <p className="timeline-role">Senior Process Engineer</p>
                <p className="timeline-org">Illumina</p>
                <p className="timeline-desc">
                  Sub-module lead on NovaSeq X through FDA approval. Built a
                  73-failure-mode DFMEA and a manufacturing analytics
                  platform with 100% adoption and ~$9M in annual savings.
                  Led a $1.2M capital vendor evaluation and cut flow cell
                  defect rates by more than 50%.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2026 — 2028</span>
              <div>
                <p className="timeline-role">MBA/MEng, Materials Science (incoming)</p>
                <p className="timeline-org">UC Berkeley, Haas</p>
                <p className="timeline-desc">
                  Dual degree concentrating in semiconductors, with a focus
                  on commercializing new technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WaveformDivider label="04 / Skills" />

        {/* ---------- Skills ---------- */}
        <section id="skills">
          <div className="section-head">
            <span className="section-num">04</span>
            <h2>What I work with</h2>
          </div>
          <div className="skills-grid">
            <div className="skills-group">
              <h4>Build</h4>
              <ul>
                <li>Product requirements &amp; roadmapping</li>
                <li>DFMEA &amp; failure-mode analysis</li>
                <li>Signal processing pipelines</li>
                <li>Figma — design systems</li>
              </ul>
            </div>
            <div className="skills-group">
              <h4>Analyze</h4>
              <ul>
                <li>Manufacturing data analytics</li>
                <li>User interviews &amp; synthesis</li>
                <li>Vendor &amp; capital evaluation</li>
                <li>Process control &amp; SPC</li>
              </ul>
            </div>
            <div className="skills-group">
              <h4>Lead</h4>
              <ul>
                <li>Cross-functional program ownership</li>
                <li>Regulatory &amp; FDA submission support</li>
                <li>Stage-gate &amp; PRD documentation</li>
                <li>Bioengineering — microfluidics, surface chemistry</li>
              </ul>
            </div>
          </div>
        </section>

        <WaveformDivider />

        {/* ---------- Contact ---------- */}
        <section className="contact" id="contact">
          <h2>Let&apos;s talk product.</h2>
          <div className="contact-links">
            <a href="mailto:you@example.com">Email</a>
            <a href="https://linkedin.com/in/your-handle">LinkedIn</a>
            <a href="https://github.com/your-handle">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© 2026 Alexandra</span>
        <span>Built with Next.js</span>
      </footer>
    </>
  );
}
