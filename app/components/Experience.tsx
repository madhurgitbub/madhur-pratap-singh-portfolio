"use client";

const experiences = [
  {
    company: "Bluestock Fintech",
    role: "Data Analyst Intern",
    duration: "Apr 2026 – Jun 2026",
    type: "Remote",
    color: "#6366f1",
    tasks: [
      "Worked on real-world fintech & stock market datasets for analysis and reporting",
      "Performed data cleaning, preprocessing, and transformation using Pandas & Python",
      "Created analytical reports and dashboards for business insights using Power BI",
      "Executed multiple tasks within deadlines while collaborating remotely",
      "Applied SQL, Excel, Python, and Power BI during the internship",
    ],
    tags: ["Python", "SQL", "Pandas", "Power BI", "Excel", "Data Analysis"],
  },
  {
    company: "IMS Institute",
    role: "Teaching Assistant",
    duration: "Jun 2024 – Aug 2025",
    type: "Indore, India",
    color: "#06b6d4",
    tasks: [
      "Supported academic learning and problem-solving sessions for students",
      "Developed strong communication, mentoring, and presentation skills",
      "Assisted in designing course materials and supporting faculty",
    ],
    tags: ["Teaching", "Communication", "Mentoring", "Problem Solving"],
  },
  {
    company: "Nation Service Scheme",
    role: "Student Volunteer",
    duration: "Oct 2023 – Present",
    type: "Indore, India",
    color: "#8b5cf6",
    tasks: [
      "Active NSS Volunteer with leadership and community engagement",
      "Organized social service and awareness programs",
      "Developed teamwork, communication, and event management skills",
    ],
    tags: ["Leadership", "Teamwork", "Community Service"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0", background: "rgba(13,13,20,0.4)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Experience</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f0f0f8" }}>
            Where I&apos;ve <span className="glow-text">worked</span>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 19, top: 0, bottom: 0, width: 2,
            background: "linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4, transparent)",
            borderRadius: 2,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingLeft: 56 }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                style={{ position: "relative", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"}
              >
                {/* Dot */}
                <div style={{
                  position: "absolute", left: -46, top: 24, width: 14, height: 14, borderRadius: "50%",
                  background: exp.color, boxShadow: `0 0 12px ${exp.color}60`,
                  border: "2px solid var(--bg)",
                }} />

                <div className="glass-card" style={{ padding: "28px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#f0f0f8", marginBottom: 4 }}>{exp.role}</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: exp.color }}>{exp.company}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>{exp.duration}</div>
                      <span style={{
                        fontSize: 11, padding: "3px 10px", borderRadius: 99,
                        background: `${exp.color}18`, border: `1px solid ${exp.color}40`,
                        color: exp.color, fontWeight: 600,
                      }}>{exp.type}</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", marginBottom: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                    {exp.tasks.map((t, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontSize: 14, color: "#9ca3af", lineHeight: 1.6 }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
