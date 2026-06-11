"use client";

const certs = [
  {
    title: "Python Programming",
    issuer: "IIT Bombay",
    icon: "🐍",
    color: "#6366f1",
    desc: "Hands-on Python programming, problem-solving, data handling, and application development.",
    year: "2024",
  },
  {
    title: "SQL & Database Management",
    issuer: "IIT Bombay",
    icon: "🗄️",
    color: "#8b5cf6",
    desc: "Strong foundation in database management, SQL queries, and relational database concepts.",
    year: "2024",
  },
  {
    title: "Web Development",
    issuer: "Internshala",
    icon: "🌐",
    color: "#06b6d4",
    desc: "HTML, CSS, JavaScript, responsive design, and building dynamic web applications.",
    year: "2024",
  },
  {
    title: "SQL Training",
    issuer: "Scaler",
    icon: "📊",
    color: "#10b981",
    desc: "Advanced SQL queries, joins, subqueries, relational databases, and data management operations.",
    year: "2024",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Achievements</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f0f0f8" }}>
            Certifications & <span className="glow-text">credentials</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {certs.map((c, i) => (
            <div
              key={i}
              className="glass-card gradient-border"
              style={{
                padding: 28, transition: "transform 0.25s, box-shadow 0.25s",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${c.color}25`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Background glow */}
              <div style={{
                position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%",
                background: `radial-gradient(circle, ${c.color}20 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#f0f0f8", marginBottom: 6 }}>{c.title}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{
                  fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 99,
                  background: `${c.color}20`, border: `1px solid ${c.color}40`, color: c.color,
                }}>{c.issuer}</span>
                <span style={{ fontSize: 11, color: "#6b7280" }}>{c.year}</span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>{c.desc}</p>

              <div style={{
                display: "flex", alignItems: "center", gap: 6, marginTop: 20,
                fontSize: 12, color: c.color, fontWeight: 600,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
