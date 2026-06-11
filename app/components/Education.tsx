"use client";

const education = [
  {
    degree: "B.Tech — Computer Science & Information Technology",
    school: "IPS Academy, Indore",
    duration: "Sep 2023 – Present",
    color: "#6366f1",
    icon: "🎓",
    highlights: ["DSA & Algorithms", "Machine Learning", "Computer Networks", "DBMS", "Object-Oriented Programming"],
  },
  {
    degree: "Higher Secondary (Class XII)",
    school: "Maharishi Vidya Mandir",
    duration: "Feb 2021 – Apr 2022",
    color: "#8b5cf6",
    icon: "🏫",
    highlights: ["Mathematics", "Physics", "Computer Science"],
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "80px 0", background: "rgba(13,13,20,0.4)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Education</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f0f0f8" }}>
            Academic <span className="glow-text">background</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {education.map((e, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: 28, display: "flex", gap: 24, alignItems: "flex-start",
                transition: "transform 0.2s",
              }}
              onMouseEnter={el => (el.currentTarget as HTMLDivElement).style.transform = "translateX(4px)"}
              onMouseLeave={el => (el.currentTarget as HTMLDivElement).style.transform = "translateX(0)"}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 12, flexShrink: 0,
                background: `${e.color}20`, border: `1px solid ${e.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
              }}>{e.icon}</div>

              <div style={{ flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                  <div style={{ fontWeight: 800, fontSize: 16, color: "#f0f0f8" }}>{e.degree}</div>
                  <span style={{
                    fontSize: 12, padding: "3px 10px", borderRadius: 99,
                    background: `${e.color}18`, border: `1px solid ${e.color}35`, color: e.color, fontWeight: 600,
                  }}>{e.duration}</span>
                </div>
                <div style={{ fontSize: 14, color: "#9ca3af", marginBottom: 14 }}>{e.school}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.highlights.map(h => <span key={h} className="tag" style={{ fontSize: 10 }}>{h}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
