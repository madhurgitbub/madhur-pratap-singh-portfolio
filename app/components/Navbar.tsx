"use client";
import { useState, useEffect, useRef } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Certificates", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, color: "#fff",
          }}>M</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#f0f0f8", letterSpacing: "-0.02em" }}>Madhur</span>
        </button>

        {/* Desktop */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "7px 14px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                color: active === l ? "#a5b4fc" : "#9ca3af",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { if (active !== l) (e.currentTarget as HTMLButtonElement).style.color = "#e0e0ff"; }}
              onMouseLeave={e => { if (active !== l) (e.currentTarget as HTMLButtonElement).style.color = "#9ca3af"; }}
            >{l}</button>
          ))}
          <div ref={resumeRef} style={{ position: "relative", marginLeft: 8 }}>
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              style={{
                padding: "7px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff", border: "none", cursor: "pointer", transition: "opacity 0.2s",
                display: "flex", alignItems: "center", gap: 6,
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity = "1"}
            >
              Resume {resumeOpen ? "▲" : "▼"}
            </button>
            {resumeOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "rgba(15,15,25,0.97)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(99,102,241,0.3)", borderRadius: 10,
                overflow: "hidden", minWidth: 210, zIndex: 2000,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}>
                <a
                  href="/Madhur_Data_Analyst_Resume.pdf"
                  download="Madhur_Data_Analyst_Resume.pdf"
                  onClick={() => setResumeOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "12px 16px", color: "#e0e0ff", textDecoration: "none",
                    fontSize: 13, fontWeight: 500, transition: "background 0.2s",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(99,102,241,0.15)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
                >
                  <span style={{ fontSize: 16 }}>📊</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>Data Analyst</div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>Download PDF</div>
                  </div>
                </a>
                <a
                  href="/Madhur_Software_Engineer_Resume.pdf"
                  download="Madhur_Software_Engineer_Resume.pdf"
                  onClick={() => setResumeOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "12px 16px", color: "#e0e0ff", textDecoration: "none",
                    fontSize: 13, fontWeight: 500, transition: "background 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(99,102,241,0.15)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
                >
                  <span style={{ fontSize: 16 }}>💻</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>Software Engineer</div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>Download PDF</div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-burger"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#f0f0f8", fontSize: 20, padding: 8 }}
        >{open ? "✕" : "☰"}</button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, top: 60,
          background: "rgba(5,5,8,0.97)", backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
          zIndex: 999,
        }}>
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "14px 32px", fontSize: 20, fontWeight: 600,
                color: "#f0f0f8", width: "100%", textAlign: "center",
              }}
            >{l}</button>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <a
              href="/Madhur_Data_Analyst_Resume.pdf"
              download="Madhur_Data_Analyst_Resume.pdf"
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff", textDecoration: "none",
              }}
            >📊 Data Analyst</a>
            <a
              href="/Madhur_Software_Engineer_Resume.pdf"
              download="Madhur_Software_Engineer_Resume.pdf"
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.4)",
                color: "#a5b4fc", textDecoration: "none",
              }}
            >💻 Software Engineer</a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-burger { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
