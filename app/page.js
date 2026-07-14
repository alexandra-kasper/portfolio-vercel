import Link from "next/link";
import NextImage from "next/image";
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
                My background is in engineering, built in the fast-paced,
                high-stakes world of genomics manufacturing. I care about
                lowering the mental load behind data-driven decisions, earning
                real trust with users and stakeholders, and designing IoT
                hardware that is rooted in user needs. I&apos;m currently building
                an IMU-based wearable for running injury prevention, and loving
                every step of the process.
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
                Community, Adventure, and Meaningful Work. These are the values
                that have always guided me. The people who comprise my community
                - <span className="accent-text">friends, family, classmates,
                and coworkers</span> - are always my number one priority. From
                March 2025 to July 2026, that meant caring for my mother through
                stage 4 lung cancer. Throughout my career, it&apos;s meant hosting
                celebrations for dozens of coworkers&apos; milestones. Adventure
                means <span className="accent-text">walking into uncertainty</span> wherever
                I find it, whether that&apos;s scuba diving, backcountry camping,
                sitting down at my pottery wheel, or starting a new project at
                work. And meaningful work, to me, has three parts: it has to
                have <span className="accent-text">real impact on people&apos;s
                lives</span>, it has to be <span className="accent-text">technically
                challenging</span>, and it has to let me be <span className="accent-text">creative</span> - that
                pull toward creativity is what first drew me into product
                management.
              </p>
            </div>

            <div className="about-subsection">
              <p className="about-sub-label">Professional</p>
              <p>
                Six years in the genomics space gave me technically rich, deeply{" "}
                <span className="accent-text">cross-functional work</span> -
                collaborating with engineering, quality, data science, and
                product - <span className="accent-text">without ever holding
                direct authority</span> over the teams I led. I never quite felt
                like a typical engineer; I gravitated instead toward organizing
                and synthesizing complex ideas to{" "}
                <span className="accent-text">get teams aligned</span> around a
                shared spec or charter, work that spanned{" "}
                <span className="accent-text">mechanical design</span>,{" "}
                <span className="accent-text">metrology</span>,{" "}
                <span className="accent-text">data analysis</span>, and more.
                That instinct led me to become the sole PM on Illumina&apos;s
                NovaSeq X manufacturing data platform, a project that met real
                resistance early on and eventually reached 100% adoption. Coming
                up with <span className="accent-text">creative solutions to
                alarm fatigue</span> with process engineers was the first time I
                felt that same creative spark at work that I&apos;d only ever felt
                in my hobbies.
              </p>
            </div>

            <div className="about-subsection">
              <p className="about-sub-label">Why Product Management</p>
              <p>
                Nothing gets my creative juices flowing like someone telling me
                they have a want or need I know I can fulfill - it&apos;s the same
                instinct behind every cup, bowl, or serving platter I&apos;ve
                crafted from clay. I&apos;ve been leaning into the joy I found with
                product work at Illumina through{" "}
                <span className="accent-text">EasyStride</span> (linked below),
                where <span className="accent-text">product positioning</span>,{" "}
                <span className="accent-text">competitive analysis</span>,{" "}
                <span className="accent-text">user interviews</span>,{" "}
                <span className="accent-text">hardware prototyping</span>, and{" "}
                <span className="accent-text">app design</span> have all been
                part of the same creative process. Product management lets me
                step further into everything I value: the collaboration satisfies
                my need for <span className="accent-text">community</span>, the
                constant change feels like{" "}
                <span className="accent-text">adventure</span>, and building for
                consumer wellness means the{" "}
                <span className="accent-text">impact</span> is real and
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
                  <NextImage
                    src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/app_design_display.png"
                    alt="EasyStride app interface"
                    width={1600}
                    height={1000}
                    sizes="(max-width: 740px) 100vw, 50vw"
                    style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }}
                    priority
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
                  A shin-mounted wearable for runners with injury history. Built
                  for injury prevention over performance, it emphasizes
                  consistency - the strongest modifiable predictor of staying
                  healthy - and is designed to motivate and reward progress, not
                  just measure it.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Wearable</span>
                  <span className="project-tag">Hardware</span>
                  <span className="project-tag">Mobile App</span>
                  <span className="project-tag">Product Strategy</span>
                </div>
                <span className="project-origin">Independent Project</span>
                <Link href="/easystride" className="project-link">View product overview →</Link>
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
                  <span className="project-tag">Data Infrastructure</span>
                  <span className="project-tag">Analytics</span>
                  <span className="project-tag">User Trust</span>
                  <span className="project-tag">Automated Anomaly Detection</span>
                </div>
                <div className="project-tags" style={{marginTop: 0}}>
                  <span className="project-origin">Industry Project</span>
                  <span className="project-origin">Illumina</span>
                </div>
                <Link href="/manufacturing" className="project-link">View product overview →</Link>
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
