"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Simulate send (replace with EmailJS)
    await new Promise(r => setTimeout(r, 1200));
    setStatus("sent");
    setTimeout(() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  const socials = [
    { label: "Email", value: "madhurpratapsingh2005@gmail.com", href: "mailto:madhurpratapsingh2005@gmail.com", icon: "✉️" },
    { label: "GitHub", value: "github.com/madhurgitbub", href: "https://github.com/madhurgitbub", icon: "⌨️" },
    { label: "LinkedIn", value: "linkedin.com/in/madhur", href: "https://linkedin.com", icon: "🔗" },
    { label: "Phone", value: "+91 8127059423", href: "tel:+918127059423", icon: "📱" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 0", background: "rgba(13,13,20,0.4)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Contact</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f0f0f8" }}>
            Let&apos;s <span className="glow-text">work together</span>
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 480, margin: "16px auto 0" }}>
            I&apos;m always open to interesting projects, collaborations, and new opportunities.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="contact-grid">
          {/* Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: "16px 20px", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 16,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: "rgba(99,102,241,0.12)", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18,
                }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#e0e0ff" }}>{s.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: 32 }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#10b981", marginBottom: 8 }}>Message Sent!</div>
                <div style={{ fontSize: 14, color: "#6b7280" }}>I&apos;ll get back to you soon.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 8 }}>{f.label}</label>
                    <input
                      type={f.type}
                      value={form[f.key as "name" | "email"]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      style={{
                        width: "100%", padding: "10px 14px", borderRadius: 10,
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                        color: "#f0f0f8", fontSize: 14, outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(99,102,241,0.5)"}
                      onBlur={e => (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 8 }}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity..."
                    rows={4}
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: 10,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                      color: "#f0f0f8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box",
                      fontFamily: "Inter, sans-serif", transition: "border-color 0.2s",
                    }}
                    onFocus={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(99,102,241,0.5)"}
                    onBlur={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
                    background: status === "sending" ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    border: "none", color: "#fff", transition: "all 0.2s",
                    boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                  }}
                >{status === "sending" ? "Sending..." : "Send Message →"}</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
