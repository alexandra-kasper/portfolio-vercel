import Link from "next/link";

const ALL_PROJECTS = [
  {
    slug: "easystride",
    num: "01",
    title: "EasyStride Gait Assistant Wearable",
    desc: "A wearable gait analyzer for recreational runners with injury history - real-time biomechanics that clinical PT misses, delivered without a clinic visit.",
    tags: ["Wearable", "IoT", "Health Tech"],
    href: "/easystride",
  },
  {
    slug: "manufacturing",
    num: "02",
    title: "NovaSeqX Flow Cell Manufacturing Data Platform",
    desc: "From 94.26% to 97.98% yield and $14M in annual savings through user-centered automated analytics and dashboard design.",
    tags: ["Data", "Analytics", "Manufacturing"],
    href: "/manufacturing",
  },
  {
    slug: "tamawatchi",
    num: "03",
    title: "Tamawatchi Social Fitness App",
    desc: "An app harnessing the Tamagotchi effect to turn fitness goals into pet care - your creature thrives when you do.",
    tags: ["Mobile", "Consumer", "Gamification"],
    href: null,
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
