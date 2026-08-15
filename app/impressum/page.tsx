import type { Metadata } from "next";

const base = process.env.NODE_ENV === "production" ? "/arslan-gartenloewe" : "";

export const metadata: Metadata = {
  title: "Impressum | Arslan Garten-Löwe",
  description: "Impressum und Anbieterkennzeichnung von Arslan Garten-Löwe in Norderstedt.",
  robots: { index: true, follow: true },
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="shell legal-nav">
          <a href={`${base}/`} className="brand" aria-label="Zur Startseite von Arslan Garten-Löwe">
            <img src={`${base}/logo.png`} alt="Arslan Garten-Löwe" />
            <span><strong>ARSLAN</strong><small>GARTEN-LÖWE</small></span>
          </a>
          <a className="legal-back" href={`${base}/`}><i className="arrow-back" aria-hidden="true" /> Zurück zur Website</a>
        </div>
      </header>

      <section className="legal-hero">
        <div className="shell">
          <p className="eyebrow"><span /> Rechtliche Angaben</p>
          <h1>Impressum.</h1>
        </div>
      </section>

      <section className="legal-content">
        <div className="shell legal-grid">
          <aside>
            <span>Stand</span>
            <strong>15. August 2026</strong>
          </aside>
          <article>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p><strong>Mücahit Arslan</strong><br />Arslan Gartenlöwe<br />Tannenallee 27<br />22844 Norderstedt</p>

            <h2>Kontakt</h2>
            <p>Telefon: <a href="tel:+4917685466600">+49 176 854 66 600</a><br />E-Mail: <a href="mailto:arslan-gartenbau@web.de">arslan-gartenbau@web.de</a></p>

            <div className="legal-note">
              <strong>Vorläufige Fassung</strong>
              <p>Diese Angaben wurden aus dem bisherigen Impressum übernommen. Anschrift und E-Mail-Adresse werden derzeit mit dem Inhaber abgeglichen.</p>
            </div>
          </article>
        </div>
      </section>

      <footer className="legal-footer"><div className="shell"><span>© {new Date().getFullYear()} Arslan Garten-Löwe</span><a href={`${base}/`}>Zur Startseite</a></div></footer>
    </main>
  );
}
