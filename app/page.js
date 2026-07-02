import Link from "next/link";
import AuroraBackground from "../components/AuroraBackground";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <div className="site-content">
        <Nav />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-inner">
            <div>
              <p className="hero-eyebrow">Product Manager · Berkeley, CA</p>
              <h1 className="hero-name">Hi, I&apos;m<br />Alexandra Kasper.</h1>
              <p className="hero-bio">
                I came up as an engineer in fast-paced, high-stakes manufacturing
                - an environment where priorities change hour-to-hour and
                under-tested changes have million dollar consequences. That
                experience developed my passion for hardware design and data
                analytics, and a deep conviction that trust with users and
                stakeholders is the foundation for any product decision. I'm now
                bringing that background to the consumer tech space.
              </p>
              <Link href="#work" className="hero-cta">View selected work</Link>
            </div>
            <div className="hero-photo-col">
              <img
                className="profile-img"
                src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/Profile_Picture.jpeg"
                alt="Alexandra Kasper"
              />
            </div>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────── */}
        <section className="about" id="about">
          <div className="wrap">
            <p className="section-eyebrow">About</p>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I have six years of experience influencing global,
                  cross-functional teams across engineering, quality, data
                  science, and product functions - without direct authority over
                  any of them. My work has spanned designing and shipping both
                  software and hardware, running structured experiments, and
                  building consensus across organizations that didn't always agree
                  on the problem, let alone the solution.
                </p>
                <p>
                  Most recently I served as sole PM on Illumina's NovaSeq X
                  manufacturing data platform - a tool that went from zero to 100%
                  adoption and cut annual costs by $14M. Before that I led a
                  sub-module of the NovaSeq X through FDA approval, including
                  customer interviews across research universities and clinical
                  labs.
                </p>
                <p>
                  Alongside my industry work, I'm building consumer-facing product
                  sense through EasyStride - a gait-analysis wearable I'm
                  designing, engineering, and researching end to end.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-row">
                  <span className="stat-label">Experience</span>
                  <span className="stat-value"><strong>6</strong>years</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">User interviews</span>
                  <span className="stat-value"><strong>45+</strong>conducted</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Cost impact</span>
                  <span className="stat-value"><strong>$14M</strong>annual savings</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Tool adoption</span>
                  <span className="stat-value"><strong>100%</strong>line-wide</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Next</span>
                  <span className="stat-value">MBA/MEng, UC Berkeley Haas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Work ───────────────────────────────────────────── */}
        <section className="work" id="work">
          <div className="wrap">
            <p className="section-eyebrow">Work</p>
            <h2 className="section-title">Selected projects</h2>
            <p className="section-subtext">A mix of independent projects and industry work.</p>

            {/* EasyStride */}
            <div className="project-row">
              <Link href="/easystride" className="project-img-link">
                <div className="project-img-wrap">
                  <span className="project-img-placeholder">Image coming soon</span>
                </div>
              </Link>
              <div className="project-text">
                <span className="project-num">01</span>
                <div className="project-bar" />
                <Link href="/easystride" className="project-title-link">
                  <h3 className="project-title">EasyStride Gait Assistant Wearable</h3>
                </Link>
                <p className="project-desc">
                  A wearable gait analyzer for recreational runners with injury
                  history. It captures the real-time biomechanics that clinical PT
                  misses - form breakdown under fatigue, asymmetries across a full
                  run - and delivers actionable feedback without a clinic visit.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Wearable</span>
                  <span className="project-tag">IoT</span>
                  <span className="project-tag">Health Tech</span>
                </div>
                <span className="project-origin">Independent project</span>
                <Link href="/easystride" className="project-link">View case study →</Link>
              </div>
            </div>

            {/* Manufacturing - image on right */}
            <div className="project-row flip">
              <Link href="/manufacturing" className="project-img-link">
                <div className="project-img-wrap">
                  <img
                    src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/mfg_dash_img.png"
                    alt="NovaSeqX dashboard"
                  />
                </div>
              </Link>
              <div className="project-text">
                <span className="project-num">02</span>
                <div className="project-bar" />
                <Link href="/manufacturing" className="project-title-link">
                  <h3 className="project-title">NovaSeqX Flow Cell Manufacturing Data Platform</h3>
                </Link>
                <p className="project-desc">
                  Enabling the $200 genome from Illumina - from 94.26% to 97.98%
                  yield and $14M in annual savings through automated analytics and
                  user-centered dashboard design.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Data</span>
                  <span className="project-tag">Analytics</span>
                  <span className="project-tag">Manufacturing</span>
                </div>
                <span className="project-origin">Industry project · Illumina</span>
                <Link href="/manufacturing" className="project-link">View case study →</Link>
              </div>
            </div>

            {/* Tamawatchi */}
            <div className="project-row">
              <div className="project-img-wrap">
                <span className="project-img-placeholder">Image coming soon</span>
              </div>
              <div className="project-text">
                <span className="project-num">03</span>
                <div className="project-bar" />
                <h3 className="project-title">Tamawatchi Social Fitness App</h3>
                <p className="project-desc">
                  An app harnessing the Tamagotchi effect to turn fitness goals
                  into pet care - your creature thrives when you do, and a social
                  layer keeps everyone accountable without the comparison anxiety.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Mobile</span>
                  <span className="project-tag">Consumer</span>
                  <span className="project-tag">Gamification</span>
                </div>
                <span className="project-origin">Independent project</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────────────── */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-inner">
              <div>
                <span className="contact-eyebrow">Get in touch</span>
                <h2 className="contact-heading">Let's work together.</h2>
                <p className="contact-subtext">
                  Get in touch if you want to work together or you're curious
                  about anything on this page.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
