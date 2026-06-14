"use client";

const traits = [
  { icon: "⚡", title: "Fast Learner", desc: "Adapts quickly to new technologies and frameworks" },
  { icon: "🎯", title: "Problem Solver", desc: "Approaches challenges with analytical precision" },
  { icon: "📊", title: "Data Driven", desc: "Turns raw data into actionable business insights" },
  { icon: "🤝", title: "Team Player", desc: "Experienced in collaborative environments & NSS" },
];

const skills_quick = ["Python", "SQL", "Machine Learning", "Data Analytics", "DSA", "OOP", "React", "Power BI"];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0", position: "relative" }}>
      {/* Background accent */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>About Me</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f0f0f8" }}>
            Building the future,{" "}
            <span className="glow-text">one line at a time</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="about-grid">
          {/* Left */}
          <div>
            <p style={{ fontSize: 16, color: "#9ca3af", lineHeight: 1.9, marginBottom: 20 }}>
              I&apos;m a Software Engineer and B.Tech student at IPS Academy, Indore — passionate about the intersection of software engineering, data science, and machine learning.
            </p>
            <p style={{ fontSize: 16, color: "#9ca3af", lineHeight: 1.9, marginBottom: 32 }}>
              From building full-stack agricultural platforms to training ML models and creating data dashboards, I thrive on projects that have real-world impact. I&apos;ve earned certifications from IIT Bombay and Scaler, and completed a Data Analyst internship at Bluestock Fintech.
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#f0f0f8", marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>Core Skills</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills_quick.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div style={{ padding: "12px 20px", borderRadius: 10, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#a5b4fc" }}>2023</div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>Started B.Tech</div>
              </div>
              <div style={{ padding: "12px 20px", borderRadius: 10, background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#67e8f9" }}>4</div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>Certifications</div>
              </div>
              <div style={{ padding: "12px 20px", borderRadius: 10, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#c4b5fd" }}>10+</div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>Projects</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {traits.map(t => (
              <div
                key={t.title}
                className="glass-card gradient-border"
                style={{ padding: "24px 20px", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(99,102,241,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#f0f0f8", marginBottom: 6 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
