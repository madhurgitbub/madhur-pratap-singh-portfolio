import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madhur Pratap Singh — Software Engineer",
  description: "Software Engineer | Data Analyst | Machine Learning Engineer. Building scalable software and data-driven solutions.",
  keywords: ["Madhur Pratap Singh", "Software Engineer", "Data Analyst", "Machine Learning", "Python", "SQL", "Portfolio"],
  authors: [{ name: "Madhur Pratap Singh" }],
  openGraph: {
    title: "Madhur Pratap Singh — Software Engineer",
    description: "Software Engineer | Data Analyst | ML Engineer",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise-bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
