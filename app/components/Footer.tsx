"use client";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "32px 24px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Built by <span style={{ color: "#a5b4fc", fontWeight: 600 }}>Madhur Pratap Singh</span> — Indore, India
        </div>
        <div style={{ fontSize: 12, color: "#374151" }}>
          © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
}
