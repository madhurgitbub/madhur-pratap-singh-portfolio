"use client";
import { useState, useEffect } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Certificates", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
          <a
            href="/resume.pdf"
            download
            style={{
              marginLeft: 8, padding: "7px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", textDecoration: "none", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
          >Resume ↗</a>
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
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-burger { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
