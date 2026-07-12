"use client";
import Link from "next/link";
import { useEffect } from "react";
import AuroraBackground from "../../components/AuroraBackground";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import OtherProjects from "../../components/OtherProjects";

export default function Manufacturing() {
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
              <span className="cs-tag">Industry Project</span>
              <span className="cs-tag">Illumina</span>
              <span className="cs-tag">Data</span>
              <span className="cs-tag">Analytics</span>
            </div>
            <h1 className="cs-title">Apollo Dash</h1>
            <p className="cs-subtitle">
              Large-scale manufacturing data platform for new automated line - 200+ individually configured metrics, 5 engineering teams aligned around shared infrastructure, and a 55% scrap rate reduction that enabled the $200 genome.
            </p>
          </div>
        </section>

        <div className="cs-stats-bar">
          <div className="cs-stats-inner">
            <div className="cs-stat">
              <div className="cs-stat-value"><em>94.26%</em> → <em>97.98%</em></div>
              <div className="cs-stat-label">Yield improvement</div>
            </div>
            <div className="cs-stat">
              <div className="cs-stat-value"><em>$14M</em></div>
              <div className="cs-stat-label">Annual cost savings</div>
            </div>
            <div className="cs-stat">
              <div className="cs-stat-value"><em>100%</em></div>
              <div className="cs-stat-label">Tool adoption</div>
            </div>
            <div className="cs-stat">
              <div className="cs-stat-value"><em>&gt;55%</em></div>
              <div className="cs-stat-label">Scrap prevented</div>
            </div>
          </div>
        </div>

        <div className="cs-body">
          <div className="cs-body-inner">
            <aside className="cs-toc">
              <p className="cs-toc-label">On this page</p>
              <ul className="cs-toc-list">
                <li><a href="#overview">Context & Overview</a></li>
                <li><a href="#transferability">Transferability</a></li>
                <li><a href="#scene">Setting the Scene</a></li>
                <li><a href="#failures">Why Previous Attempts Failed</a></li>
                <li><a href="#outcomes">Designing for User Outcomes</a></li>
                <li><a href="#interviews">User Interviews</a></li>
                <li><a href="#trust">Trust</a></li>
                <li><a href="#solution">Solution Overview</a></li>
                <li><a href="#tradeoffs">Key Tradeoffs</a></li>
                <li><a href="#impact">Impact & Outcomes</a></li>
                <li><a href="#differently">What I'd Do Differently</a></li>
                <li><a href="#artifacts">Artifacts</a></li>
              </ul>
            </aside>

            <main className="cs-content">
              <section className="cs-section" id="overview">
                <span className="cs-section-num">Context & Overview</span>
                <div className="cs-sub">
                  <span className="cs-sub-label">The problem</span>
                  <h3 className="cs-sub-title">A small gap with outsized consequences</h3>
                  <p>In June 2022, 9 months before the NovaSeq X product launch, end-to-end yield for Flow Cell Manufacturing was sitting at 94.26% - but 97.5% was needed to reach per-unit cost targets. That gap looks small - but closing it meant preventing more than 55% of all scrap on a line with hundreds of distinct failure modes.</p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">My role</span>
                  <h3 className="cs-sub-title">Sole PM across five historically siloed teams</h3>
                  <p>I was recruited internally to design and implement a data strategy for the new line. The scope was open-ended - previous tools on legacy lines had failed to gain traction, and my starting point was to find out why: what was and wasn't working, and for whom.</p>
                  <p>I was the sole PM on this project, without direct authority over any of the engineering resources. I had to advocate for and coordinate contributions from data engineering, data science, and product engineering, while working closely with quality, validation, and process engineering throughout.</p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">The outcome</span>
                  <h3 className="cs-sub-title">Yield, savings, and a shift in how engineers relate to data</h3>
                  <p>Yield rose from 94.26% to 97.98%. $14M in annual cost savings at early production volumes - a figure expected to grow as NovaSeq X volume scales - and 100% tool adoption across the team. Perhaps more durably, the team shifted from reactive firefighting to proactive troubleshooting - a change in how engineers relate to data that no metric fully captures.</p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">The philosophy</span>
                  <h3 className="cs-sub-title">Trust as the foundation for user action</h3>
                  <p>The impact of any user-facing data tool depends on the action a user takes based on the information they receive. The foundation for user action is trust.</p>
                </div>
                <div className="cs-sub">
                  <span className="cs-sub-label">The scope</span>
                  <h3 className="cs-sub-title">Phases across Capture, Infrastructure, Analytics, Utilization, and Maintenance</h3>
                  <div className="cs-img-wrap" onClick={() => openLightbox("https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/Frame1.png")}>
                    <img src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/Frame1.png" alt="Product Scope Snapshot" />
                    <span className="cs-img-hint">Click to zoom</span>
                  </div>
                  <p className="cs-caption">Product Scope Snapshot - phases across Capture, Infrastructure, Analytics, Utilization, and Maintenance.</p>
                </div>
              </section>

              {[
                { id: "transferability", num: "02", title: "A Note on Transferability", text: "Coming soon - parallels with wearables and consumer health technology." },
                { id: "scene",           num: "03", title: "Setting the Scene",                              text: "Coming soon." },
                { id: "failures",        num: "04", title: "Why Every Previous Attempt Failed",              text: "Coming soon." },
                { id: "outcomes",        num: "05", title: "A Different Starting Point: Designing for User Outcomes", text: "Coming soon." },
                { id: "interviews",      num: "06", title: "User Interviews",                                text: "Coming soon." },
                { id: "trust",           num: "07", title: "Trust",                                         text: "Coming soon." },
                { id: "solution",        num: "08", title: "Solution Overview",                             text: "Coming soon." },
                { id: "tradeoffs",       num: "09", title: "Key Tradeoffs",                                 text: "Coming soon." },
                { id: "impact",          num: "10", title: "Impact & Outcomes",                             text: "Coming soon." },
                { id: "differently",     num: "11", title: "What I'd Do Differently",                       text: "Coming soon." },
                { id: "artifacts",       num: "13", title: "Artifacts",                                     text: "Coming soon." },
              ].map(({ id, num, title, text }) => (
                <section className="cs-section" id={id} key={id}>
                  <span className="cs-section-num">{num}</span>
                  <h2 className="cs-section-title">{title}</h2>
                  <div className="cs-placeholder">{text}</div>
                </section>
              ))}
            </main>
          </div>
        </div>

        <OtherProjects currentSlug="manufacturing" />

        <div className="lightbox" id="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <img id="lb-img" src="" alt="Zoomed view" onClick={(e) => e.stopPropagation()} />
        </div>

        <Footer />
      </div>
    </>
  );
}
