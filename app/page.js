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

            {/* Values - three column display type */}
            <div className="about-values">
              <div className="about-value">
                <div className="about-value-bar" />
                <span className="about-value-text">Community</span>
              </div>
              <div className="about-value">
                <div className="about-value-bar" />
                <span className="about-value-text">Adventure</span>
              </div>
              <div className="about-value">
                <div className="about-value-bar" />
                <span className="about-value-text">Meaningful Work</span>
              </div>
            </div>

            <div className="about-subsection">
              <p className="about-sub-label">Personal</p>
              <p>
                These are the values that have always guided me. My loved ones
                come first - from June 2024 to July 2026, that meant caring for
                my mother through stage 4 lung cancer. Adventure means walking
                into uncertainty wherever I find it, whether that&apos;s scuba
                diving, backcountry camping, or a new project at work. And
                meaningful work, to me, has three parts: it has to have real
                impact on people&apos;s lives, it has to be technically
                challenging, and it has to let me be creative - that pull toward
                creativity is what first drew me into product management.
              </p>
            </div>

            <div className="about-subsection">
              <p className="about-sub-label">Professional</p>
              <p>
                Six years in the genomics space gave me technically rich, deeply
                cross-functional work - engineering, quality, data science,
                product - without ever holding direct authority over any of it.
                I never quite felt like a typical engineer; I gravitated instead
                toward organizing and synthesizing complex ideas to get teams
                aligned around a shared spec or charter, work that spanned
                mechanical design, metrology, data analysis, and more. That
                instinct led me to become the sole PM on Illumina&apos;s NovaSeq X
                manufacturing data platform, a project that met real resistance
                early on and eventually reached 100% adoption. Coming up with
                creative solutions to alarm fatigue with process engineers was
                the first time I felt that same creative spark at work that
                I&apos;d only ever felt in my hobbies.
              </p>
            </div>

            <div className="about-subsection">
              <p className="about-sub-label">Why Product Management</p>
              <p>
                Nothing gets my creative juices flowing like someone telling me
                they have a problem I know I can solve - it&apos;s the same instinct
                behind every bowl, pair of earrings, or painting I&apos;ve made for
                someone just to see them smile. I&apos;ve been chasing that feeling
                deeper ever since, most recently through EasyStride (linked
                below), where product positioning, competitive analysis, user
                interviews, hardware prototyping, and app design have all been
                part of the same creative process. Product management lets me
                step further into everything I value: the collaboration satisfies
                my need for community, the constant change feels like adventure,
                and building for consumer wellness means the impact is real and
                immediate.
              </p>
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
                  <img
                    src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/app_design_display.png"
                    alt="EasyStride app interface"
                  />
                </div>
              </Link>
              <div className="project-text">
                <span className="project-num">01</span>
                <div className="project-bar" />
                <Link href="/easystride" className="project-title-link">
                  <h3 className="project-title">EasyStride</h3>
                </Link>
                <p className="project-desc" style={{fontStyle:'italic', marginBottom:'4px', color:'var(--ink-mid)'}}>Wearable Injury Prevention for Running</p>
                <p className="project-desc">
                  A shin-mounted wearable for female runners with injury history. Built for injury prevention over performance, it emphasizes consistency - the strongest modifiable predictor of staying healthy - and is designed to motivate and reward progress, not just measure it.
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

            {/* Apollo Dash - image on right */}
            <div className="project-row flip">
              <Link href="/manufacturing" className="project-img-link">
                <div className="project-img-wrap">
                  <img
                    src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/mfg_dash_img.png"
                    alt="Apollo Dash manufacturing dashboard"
                  />
                </div>
              </Link>
              <div className="project-text">
                <span className="project-num">02</span>
                <div className="project-bar" />
                <Link href="/manufacturing" className="project-title-link">
                  <h3 className="project-title">Apollo Dash</h3>
                </Link>
                <p className="project-desc" style={{fontStyle:'italic', marginBottom:'4px', color:'var(--ink-mid)'}}>Large-scale manufacturing data platform for new automated line</p>
                <p className="project-desc">
                  A decision-grade manufacturing analytics platform - 200+ individually configured metrics across a 13-tool flow cell line, 5 engineering teams aligned around shared infrastructure, and a 55% scrap rate reduction that enabled the $200 genome.
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
