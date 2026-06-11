"use client";
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
  isFeatured?: boolean;
  featuredDesc?: string;
  featuredTags?: string[];
  featuredEmoji?: string;
};

const FEATURED: Record<string, Partial<Repo>> = {
  "AgroTech": {
    isFeatured: true,
    featuredEmoji: "🌾",
    featuredDesc: "Full-stack agricultural platform connecting farmers with machinery owners. Built with dedicated Admin, Provider, and Farmer panels. Features live booking, weather API, marketplace API, secure payments, and availability tracking.",
    featuredTags: ["Full Stack", "React", "Node.js", "Weather API", "Payments"],
  },
  "SmartExam": {
    isFeatured: true,
    featuredEmoji: "📝",
    featuredDesc: "AI-powered secure online examination system. Prevents tab switching, copy-paste, and multiple windows. Includes timer-based tests, instant results, activity tracking, and comprehensive admin panel.",
    featuredTags: ["Full Stack", "Security", "JavaScript", "Anti-Cheating"],
  },
  "EDA-Feature-Extraction": {
    isFeatured: true,
    featuredEmoji: "🤖",
    featuredDesc: "Machine learning pipeline with complete EDA, feature engineering, and model training. Evaluated using accuracy, precision, recall, and confusion matrix with rich visualizations.",
    featuredTags: ["ML", "Python", "Pandas", "Scikit-Learn", "Seaborn"],
  },
};

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SQL: "#e38c00",
  Jupyter: "#DA5B0B",
};

const FILTERS = ["All", "Python", "JavaScript", "TypeScript", "HTML", "Data Analytics", "Full Stack"];

function RepoCard({ repo }: { repo: Repo }) {
  const feat = FEATURED[repo.name];
  const isFeatured = !!feat?.isFeatured;
  const color = isFeatured ? "#6366f1" : "#374151";
  const emoji = feat?.featuredEmoji || "📁";
  const desc = feat?.featuredDesc || repo.description || "No description available.";
  const tags = feat?.featuredTags || (repo.topics?.length ? repo.topics.slice(0, 4) : [repo.language || "Code"]);

  return (
    <div
      className={`glass-card ${isFeatured ? "gradient-border" : ""}`}
      style={{
        padding: 24, display: "flex", flexDirection: "column", gap: 14,
        transition: "transform 0.25s, box-shadow 0.25s", cursor: "pointer",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = isFeatured ? "0 20px 60px rgba(99,102,241,0.2)" : "0 12px 30px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {isFeatured && (
        <div style={{
          position: "absolute", top: 14, right: 14,
          fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 99,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff", letterSpacing: "0.08em",
        }}>FEATURED</div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
          background: isFeatured ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.05)",
          fontSize: 18,
        }}>{emoji}</div>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#f0f0f8" }}>{repo.name.replace(/-/g, " ")}</div>
      </div>

      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, flexGrow: 1 }}>{desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
        <div style={{ display: "flex", gap: 14 }}>
          {repo.language && (
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#6b7280" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: LANG_COLORS[repo.language] || "#888" }} />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span style={{ fontSize: 11, color: "#6b7280" }}>⭐ {repo.stargazers_count}</span>
          )}
          {repo.forks_count > 0 && (
            <span style={{ fontSize: 11, color: "#6b7280" }}>🍴 {repo.forks_count}</span>
          )}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 11, color: "#a5b4fc", textDecoration: "none", fontWeight: 600 }}
            onClick={e => e.stopPropagation()}
          >Code ↗</a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, color: "#67e8f9", textDecoration: "none", fontWeight: 600 }}
              onClick={e => e.stopPropagation()}
            >Demo ↗</a>
          )}
        </div>
      </div>
    </div>
  );
}

// Static fallback repos
const STATIC_REPOS: Repo[] = [
  { id: 1, name: "AgroTech", description: "Full-stack agricultural platform", language: "JavaScript", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/madhurgitbub", homepage: null, topics: ["fullstack", "react", "nodejs"], updated_at: "2025-08-01", isFeatured: true },
  { id: 2, name: "SmartExam", description: "AI-powered online exam system", language: "JavaScript", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/madhurgitbub", homepage: null, topics: ["security", "exam", "fullstack"], updated_at: "2026-03-01", isFeatured: true },
  { id: 3, name: "EDA-Feature-Extraction", description: "ML pipeline with complete EDA", language: "Python", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/madhurgitbub", homepage: null, topics: ["ml", "python", "pandas"], updated_at: "2026-05-01", isFeatured: true },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>(STATIC_REPOS);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/madhurgitbub/repos?sort=updated&per_page=20")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const merged = data.map((r: Repo) => ({
            ...r,
            ...(FEATURED[r.name] || {}),
          }));
          // Sort: featured first, then by date
          merged.sort((a: Repo, b: Repo) => {
            if (a.isFeatured && !b.isFeatured) return -1;
            if (!a.isFeatured && b.isFeatured) return 1;
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });
          setRepos(merged);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { setLoading(false); }, []);

  const filtered = repos.filter(r => {
    if (filter === "All") return true;
    if (filter === "Data Analytics") return r.language === "Python" || r.topics?.includes("data-analytics");
    if (filter === "Full Stack") return r.topics?.some(t => ["fullstack", "full-stack", "react", "nodejs"].includes(t));
    return r.language === filter;
  });

  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Projects</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f0f0f8", marginBottom: 16 }}>
            Things I&apos;ve <span className="glow-text">built</span>
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 500, margin: "0 auto" }}>
            Projects from GitHub — automatically updated whenever a new repo is pushed.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "8px 18px", borderRadius: 99, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: filter === f ? "1px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
                background: filter === f ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.03)",
                color: filter === f ? "#a5b4fc" : "#6b7280",
                transition: "all 0.2s",
              }}
            >{f}</button>
          ))}
        </div>

        {loading ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {[1, 2, 3].map(i => (
              <div key={i} className="glass-card" style={{ height: 220, background: "rgba(255,255,255,0.02)", borderRadius: 16 }} />
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {filtered.map(r => <RepoCard key={r.id} repo={r} />)}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="https://github.com/madhurgitbub"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af", textDecoration: "none",
              background: "rgba(255,255,255,0.03)", transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#a5b4fc"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(99,102,241,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
          >
            View all repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
