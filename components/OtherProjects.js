import Link from "next/link";

const ALL_PROJECTS = [
  {
    slug: "easystride",
    num: "01",
    title: "EasyStride",
    desc: "A shin-mounted wearable for female runners with injury history. Built for injury prevention over performance, emphasizing consistency as the strongest modifiable predictor of staying healthy.",
    tags: ["Wearable", "IoT", "Health Tech"],
    href: "/easystride",
  },
  {
    slug: "manufacturing",
    num: "02",
    title: "Apollo Dash",
    desc: "A decision-grade manufacturing analytics platform - 200+ individually configured metrics across a 13-tool flow cell line and a 55% scrap rate reduction that enabled the $200 genome.",
    tags: ["Data", "Analytics", "Manufacturing"],
    href: "/manufacturing",
  },
];

export default function OtherProjects({ currentSlug }) {
  const others = ALL_PROJECTS.filter((p) => p.slug !== currentSlug);
  return (
    <section className="other-projects">
      <div className="wrap">
        <p className="section-eyebrow">Other projects</p>
        <div className="other-projects-grid">
          {others.map((p) =>
            p.href ? (
              <Link key={p.slug} href={p.href} className="other-card">
                <p className="other-card-num">{p.num}</p>
                <div className="other-card-bar" />
                <h3 className="other-card-title">{p.title}</h3>
                <p className="other-card-desc">{p.desc}</p>
                <div className="other-card-tags">
                  {p.tags.map((t) => <span key={t} className="other-card-tag">{t}</span>)}
                </div>
              </Link>
            ) : (
              <div key={p.slug} className="other-card" style={{ opacity: 0.6 }}>
                <p className="other-card-num">{p.num}</p>
                <div className="other-card-bar" />
                <h3 className="other-card-title">{p.title}</h3>
                <p className="other-card-desc">{p.desc}</p>
                <div className="other-card-tags">
                  {p.tags.map((t) => <span key={t} className="other-card-tag">{t}</span>)}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
