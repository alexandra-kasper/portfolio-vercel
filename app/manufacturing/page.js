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
                <li><a href="#problem">01. The Problem</a></li>
                <li><a href="#role">02. My Role</a></li>
                <li><a href="#outcome">03. The Outcome</a></li>
                <li><a href="#philosophy">04. The Philosophy</a></li>
                <li><a href="#scope">05. The Scope</a></li>
              </ul>
            </aside>

            <main className="cs-content">

              {/* 01 — The Problem */}
              <section className="cs-section" id="problem">
                <span className="cs-section-num">01</span>
                <h2 className="cs-section-title">The Problem</h2>
                <span className="cs-section-subtitle">
                  A small gap with outsized consequences
                </span>
                <div className="cs-sub">
                  <p>
                    In June 2022, 9 months before the NovaSeq X product launch,
                    end-to-end yield for Flow Cell Manufacturing was sitting at
                    94.26% - but 97.5% was needed to reach per-unit cost targets.
                    That gap looks small - but closing it meant preventing more
                    than 55% of all scrap on a line with hundreds of distinct
                    failure modes.
                  </p>
                </div>
              </section>

              {/* 02 — My Role */}
              <section className="cs-section" id="role">
                <span className="cs-section-num">02</span>
                <h2 className="cs-section-title">My Role</h2>
                <span className="cs-section-subtitle">
                  Sole PM across five historically siloed teams
                </span>
                <div className="cs-sub">
                  <p>
                    I was recruited internally to design and implement a data
                    strategy for the new line. The scope was open-ended - previous
                    tools on legacy lines had failed to gain traction, and my
                    starting point was to find out why: what was and wasn&apos;t
                    working, and for whom.
                  </p>
                  <p>
                    I was the sole PM on this project, without direct authority
                    over any of the engineering resources. I had to advocate for
                    and coordinate contributions from data engineering, data
                    science, and product engineering, while working closely with
                    quality, validation, and process engineering throughout.
                  </p>
                </div>
              </section>

              {/* 03 — The Outcome */}
              <section className="cs-section" id="outcome">
                <span className="cs-section-num">03</span>
                <h2 className="cs-section-title">The Outcome</h2>
                <span className="cs-section-subtitle">
                  Yield, savings, and a shift in how engineers relate to data
                </span>
                <div className="cs-sub">
                  <p>
                    Yield rose from 94.26% to 97.98%. $14M in annual cost savings
                    at early production volumes - a figure expected to grow as
                    NovaSeq X volume scales - and 100% tool adoption across the
                    team. Perhaps more durably, the team shifted from reactive
                    firefighting to proactive troubleshooting - a change in how
                    engineers relate to data that no metric fully captures.
                  </p>
                </div>
              </section>

              {/* 04 — The Philosophy */}
              <section className="cs-section" id="philosophy">
                <span className="cs-section-num">04</span>
                <h2 className="cs-section-title">The Philosophy</h2>
                <span className="cs-section-subtitle">
                  Trust as the foundation for user action
                </span>
                <div className="cs-sub">
                  <p>
                    The impact of any user-facing data tool depends on the action
                    a user takes based on the information they receive. The
                    foundation for user action is trust.
                  </p>
                </div>
              </section>

              {/* 05 — The Scope */}
              <section className="cs-section" id="scope">
                <span className="cs-section-num">05</span>
                <h2 className="cs-section-title">The Scope</h2>
                <span className="cs-section-subtitle">
                  The scope of what the product team delivered, with state at
                  beginning of project
                </span>
                <div className="cs-sub">
                  <p>
                    I defined the scope, aligned the team, stakeholders, and users
                    around it, and drove execution.
                  </p>
                </div>
                <div
                  className="cs-img-wrap"
                  onClick={() => openLightbox("https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/Frame1.png")}
                >
                  <img
                    src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/Frame1.png"
                    alt="Product Scope Snapshot"
                  />
                  <span className="cs-img-hint">Click to zoom</span>
                </div>
                <p className="cs-caption">
                  Product Scope Snapshot - deliverables across Capture,
                  Infrastructure, Analytics, Utilization, and Maintenance.
                </p>
              </section>

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
