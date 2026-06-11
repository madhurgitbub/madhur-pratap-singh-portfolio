"use client";
import { useEffect, useRef, useState } from "react";

const SKILL_GROUPS = [
  {
    title: "Languages",
    color: "#6366f1",
    skills: [
      { name: "Python", level: 88 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 72 },
      { name: "HTML/CSS", level: 78 },
    ],
  },
  {
    title: "Data & ML",
    color: "#06b6d4",
    skills: [
      { name: "Pandas & NumPy", level: 85 },
      { name: "Scikit-Learn", level: 78 },
      { name: "Matplotlib/Seaborn", level: 80 },
      { name: "Power BI / Excel", level: 75 },
    ],
  },
  {
    title: "Core CS",
    color: "#8b5cf6",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "Computer Networks", level: 72 },
      { name: "Database Management", level: 83 },
    ],
  },
];

const TECH_BADGES = [
  "Python", "SQL", "HTML5", "CSS3", "JavaScript", "React",
  "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn",
  "Power BI", "Excel", "VS Code", "Jupyter", "PyCharm",
  "Git", "GitHub", "Linux", "Node.js",
];

function AnimatedBar({ level, color, animate }: { level: number; color: string; animate: boolean }) {
  return (
    <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
      <div style={{
        height: "100%",
        borderRadius: 99,
        width: animate ? `${level}%` : "0%",
        background: `linear-gradient(90deg, ${color}, ${color}99)`,
        transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: `0 0 8px ${color}60`,
      }} />
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ padding: "100px 0", background: "rgba(13,13,20,0.4)" }} ref={ref}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Skills</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f0f0f8" }}>
            My <span className="glow-text">technical toolkit</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 48 }} className="skills-grid">
          {SKILL_GROUPS.map(g => (
            <div key={g.title} className="glass-card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 4, height: 20, borderRadius: 2, background: g.color }} />
                <div style={{ fontWeight: 700, fontSize: 14, color: "#f0f0f8" }}>{g.title}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {g.skills.map(s => (
                  <div key={s.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 13, color: "#9ca3af" }}>{s.name}</span>
                      <span style={{ fontSize: 12, color: g.color, fontWeight: 600, fontFamily: "JetBrains Mono, monospace" }}>{s.level}%</span>
                    </div>
                    <AnimatedBar level={s.level} color={g.color} animate={visible} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating tech badges */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", marginBottom: 20, letterSpacing: "0.1em", textTransform: "uppercase" }}>Technologies & Tools</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {TECH_BADGES.map((t, i) => (
              <div
                key={t}
                style={{
                  padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 500,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                  color: "#9ca3af", cursor: "default", transition: "all 0.2s",
                  animation: visible ? `float ${3 + (i % 3) * 0.5}s ease-in-out infinite` : "none",
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(99,102,241,0.12)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLDivElement).style.color = "#a5b4fc";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.color = "#9ca3af";
                }}
              >{t}</div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr !important; } } @media (min-width: 769px) and (max-width: 900px) { .skills-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}
