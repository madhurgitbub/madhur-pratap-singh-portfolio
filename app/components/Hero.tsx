"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROLES = ["Software Engineer", "Data Analyst", "ML Engineer", "Problem Solver", "Tech Enthusiast"];

const STATS = [
  { label: "Projects Built", value: "10+" },
  { label: "Certifications", value: "4" },
  { label: "Technologies", value: "15+" },
  { label: "Internship", value: "1" },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.5 + 0.1,
    }));

    let mouse = { x: -9999, y: -9999 };
    window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x += dx / dist * 1.5;
          p.y += dy / dist * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.o})`;
        ctx.fill();
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
}

function TypingText() {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[idx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && txt.length < target.length) {
      timeout = setTimeout(() => setTxt(target.slice(0, txt.length + 1)), 80);
    } else if (!deleting && txt.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && txt.length > 0) {
      timeout = setTimeout(() => setTxt(txt.slice(0, -1)), 40);
    } else if (deleting && txt.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [txt, deleting, idx]);

  return (
    <span style={{ color: "#a5b4fc", fontWeight: 700 }}>
      {txt}<span className="animate-blink" style={{ borderRight: "2px solid #6366f1", marginLeft: 1 }} />
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
      <ParticleCanvas />

      {/* Gradient blobs */}
      <div style={{
        position: "absolute", top: "20%", left: "10%", width: 500, height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }} className="hero-grid">

          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 99, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 8px #6366f1" }} className="animate-pulse-glow" />
              <span style={{ fontSize: 12, fontWeight: 500, color: "#a5b4fc", letterSpacing: "0.05em" }}>Open to opportunities</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16 }}>
              <span className="glow-text">Madhur Pratap</span><br />
              <span style={{ color: "#f0f0f8" }}>Singh</span>
            </h1>

            <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", marginBottom: 24, color: "#9ca3af", fontWeight: 400, minHeight: 36 }}>
              <TypingText />
            </div>

            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}>
              B.Tech CSE student at IPS Academy, Indore. Passionate about building scalable software, transforming data into insights, and exploring the frontiers of ML.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("projects")}
                style={{
                  padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  border: "none", color: "#fff", transition: "all 0.2s",
                  boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >View Projects →</button>

              <a
                href="mailto:madhurpratapsingh2005@gmail.com"
                style={{
                  padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f0f0f8", textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
              >Contact Me</a>

              <a
                href="https://github.com/madhurgitbub"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f0f0f8", textDecoration: "none", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap" }}>
              {STATS.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f0f0f8", letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }} className="hero-photo">
            <div style={{ position: "relative" }} className="animate-float">
              {/* Glow ring */}
              <div style={{
                position: "absolute", inset: -3, borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
                zIndex: 0,
              }} />
              <div style={{
                position: "relative", zIndex: 1,
                width: 220, height: 220, borderRadius: "50%", overflow: "hidden",
                border: "3px solid var(--bg)",
              }}>
                <Image
                  src="/madhur.jpg"
                  alt="Madhur Pratap Singh"
                  width={220}
                  height={220}
                  style={{ objectFit: "cover", objectPosition: "center top", filter: "saturate(1.1) contrast(1.05)" }}
                  priority
                />
              </div>
              {/* Floating badge */}
              <div style={{
                position: "absolute", bottom: 10, right: -10, zIndex: 2,
                background: "rgba(99,102,241,0.9)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 10, padding: "6px 12px", fontSize: 11, fontWeight: 600, color: "#fff",
              }}>B.Tech CSE 🎓</div>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: "https://github.com/madhurgitbub", icon: "GH", label: "GitHub" },
                { href: "https://linkedin.com", icon: "in", label: "LinkedIn" },
                { href: "mailto:madhurpratapsingh2005@gmail.com", icon: "@", label: "Email" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "#9ca3af", textDecoration: "none", fontSize: 12, fontWeight: 700, transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(99,102,241,0.2)"; (e.currentTarget as HTMLAnchorElement).style.color = "#a5b4fc"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { order: -1; }
        }
      `}</style>
    </section>
  );
}
