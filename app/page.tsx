const base = process.env.NODE_ENV === "production" ? "/arslan-gartenloewe" : "";

const services = [
  ["01", "Gartenpflege", "Regelmäßig oder einmalig: Rasen, Hecken, Sträucher und Beete zuverlässig in Form halten."],
  ["02", "Neu- & Umgestaltung", "Aus gewachsenen Gärten werden Außenräume, die wieder zu Ihrem Leben passen."],
  ["03", "Pflaster & Naturstein", "Saubere Wege, Flächen und Einfassungen – solide vorbereitet und präzise ausgeführt."],
  ["04", "Terrassenbau", "Beständige Lieblingsplätze aus Platten, Pflaster oder Naturstein – passend zu Haus und Garten."],
  ["05", "Zaun & Sichtschutz", "Mehr Privatsphäre und klare Grundstücksgrenzen mit einer stimmigen, langlebigen Lösung."],
  ["06", "Baum- & Gehölzpflege", "Fachgerechter Schnitt, Pflege und Fällarbeiten für sichere, gesunde Außenanlagen."],
];

const projects = [
  ["weitere-01.jpg", "Heckenpflege", "Große Formhecken sauber, gleichmäßig und sicher zurückgeschnitten."],
  ["weitere-08.jpg", "Gehölzschnitt", "Konsequenter Rückschnitt für klare Grenzen und einen gesunden Neuaustrieb."],
  ["projekt-10.jpg", "Baumpflege", "Arbeiten an hohen Bäumen mit dem notwendigen Blick für Sicherheit und Umfeld."],
  ["projekt-01.jpg", "Sichtschutz & Fläche", "Moderner Sichtschutz kombiniert mit einer neu gepflasterten Nutzfläche."],
  ["projekt-03.jpg", "Terrassenbau", "Großformatige Platten, präzise Höhen und eine robuste Einfassung."],
  ["projekt-06.png", "Pflasterarbeiten", "Fläche sauber aufgebaut und Stein für Stein neu gefasst."],
];

const fullServices = [
  "Gartenneu- und -umgestaltung", "Gartenpflege – einmalig oder ganzjährig", "Pflaster- und Plattenarbeiten", "Gartenwege anlegen",
  "Terrassenbau", "Natursteinarbeiten aller Art", "Zäune und Sichtschutz", "Landschaftsbau",
  "Rasenflächen erneuern", "Rollrasen verlegen", "Rasen vertikutieren", "Heckenschnitt",
  "Strauchschnitt", "Baumschnitt und Baumpflege", "Baumfällung", "Planung und Beratung",
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Hauptnavigation">
          <a href="#start" className="brand" aria-label="Arslan Garten-Löwe Startseite">
            <img src={`${base}/logo.png`} alt="Arslan Garten-Löwe" />
            <span><strong>ARSLAN</strong><small>GARTEN-LÖWE</small></span>
          </a>
          <div className="nav-links">
            <a href="#leistungen">Leistungen</a><a href="#projekte">Projekte</a><a href="#ueber-uns">Über uns</a>
          </div>
          <a className="button button-small" href="tel:+4917685466600">Jetzt anrufen</a>
        </nav>
      </header>

      <section id="start" className="hero">
        <div className="hero-image" role="img" aria-label="Pflasterarbeiten in einem Garten" style={{backgroundImage:`url(${base}/images/projekt-06.png)`}} />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow"><span /> Norderstedt & Hamburg-Nord</p>
          <h1>Gärten, die bleiben.<br/><em>Arbeit, die überzeugt.</em></h1>
          <p className="hero-copy">Gartenpflege, Umgestaltung und Landschaftsbau – persönlich geplant, sauber ausgeführt und zuverlässig betreut.</p>
          <div className="hero-actions">
            <a className="button" href="mailto:info@arslan-gartenloewe.de?subject=Projektanfrage%20über%20die%20Website">Projekt anfragen <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#projekte">Arbeiten ansehen <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof">
            <a href="https://www.my-hammer.de/auftragnehmer/arslan-gartenpflege-und-gestaltung/bewertungen" target="_blank" rel="noreferrer" aria-label="65 Bewertungen bei MyHammer ansehen"><strong>4,9 / 5 <b>↗</b></strong><span>65 Bewertungen auf MyHammer</span></a>
            <a href="https://www.provenexpert.com/de-de/arslan-garten-loewe-gartenpflege-garten-landschaftsbau/" target="_blank" rel="noreferrer" aria-label="Google-Bewertungen über ProvenExpert ansehen"><strong>5,0 / 5 <b>↗</b></strong><span>8 Google-Bewertungen</span></a>
            <a href="https://www.gartenbau.org/norderstedt/arslan-garten-loewe-gartenpflege-garten-landschaftsbau-aUOsYJ" target="_blank" rel="noreferrer" aria-label="Bewertung bei Gartenbau.org ansehen"><strong>5,0 / 5 <b>↗</b></strong><span>Bewertung auf Gartenbau.org</span></a>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section services-section reveal">
        <div className="shell">
          <div className="section-head split">
            <div><p className="eyebrow dark"><span /> Was wir für Sie tun</p><h2>Alles für Ihren<br/><em>Außenbereich.</em></h2></div>
            <p>Von der regelmäßigen Pflege bis zur kompletten Umgestaltung: Wir verbinden gutes Handwerk mit einem klaren Blick für das Ganze.</p>
          </div>
          <div className="service-grid">
            {services.map(([n,t,d]) => <article className="service-card" key={n}><span className="service-no">{n}</span><h3>{t}</h3><p>{d}</p><a href="mailto:info@arslan-gartenloewe.de?subject=Anfrage%20zu%20einer%20Leistung" aria-label={`${t} anfragen`}>Anfragen <span>↗</span></a></article>)}
          </div>
          <div className="full-services">
            <div className="full-services-intro"><p className="eyebrow dark"><span /> Leistungskatalog</p><h3>Unser Unternehmen<br/><em>bietet.</em></h3><p>Ein Ansprechpartner für Pflege, Bau und Gestaltung – von der ersten Beratung bis zur sauberen Übergabe.</p></div>
            <ul>{fullServices.map((item,i)=><li key={item} style={{animationDelay:`${i*35}ms`}}><span aria-hidden="true">↗</span>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="green-focus reveal">
        <div className="shell green-focus-grid">
          <div className="green-focus-copy"><p className="eyebrow dark"><span /> Pflege & Gestaltung</p><h2>Mehr Grün.<br/><em>Mehr Garten.</em></h2><p>Ob regelmäßige Pflege oder neue Gartengestaltung: Im Mittelpunkt steht ein lebendiger Außenraum, der zu Ihnen passt und dauerhaft gut funktioniert.</p><a className="text-link dark-link" href="mailto:info@arslan-gartenloewe.de?subject=Anfrage%20Gartenpflege%20und%20Gestaltung">Gartenprojekt besprechen <span>↗</span></a></div>
          <div className="green-image green-image-main"><img src={`${base}/images/gartengestaltung-symbolbild.jpg`} alt="Inspiration für eine grüne Gartengestaltung" loading="lazy"/><small>Inspiration · illustrative Darstellung</small></div>
          <div className="green-image green-image-side"><img src={`${base}/images/gartenpflege-symbolbild.jpg`} alt="Illustrative Darstellung professioneller Heckenpflege" loading="lazy"/><small>Gartenpflege · illustrative Darstellung</small></div>
        </div>
      </section>

      <section id="projekte" className="section projects-section reveal">
        <div className="shell">
          <div className="section-head"><p className="eyebrow"><span /> Echte Arbeiten</p><h2>Vom ersten Schnitt<br/>bis zum <em>letzten Stein.</em></h2></div>
          <div className="project-grid">
            {projects.map(([img,t,d],i) => <article className={`project-card project-${i+1}`} key={img}>
              <img src={`${base}/images/${img}`} alt={`${t} von Arslan Garten-Löwe`} loading={i ? "lazy" : undefined}/>
              <div className="project-caption"><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></div>
            </article>)}
          </div>
          <p className="project-note">Keine Katalogbilder. Hier sehen Sie echte Arbeiten aus unserem Alltag.</p>
        </div>
      </section>

      <section id="ueber-uns" className="section about-section reveal">
        <div className="shell about-grid">
          <div className="about-visual"><img src={`${base}/images/projekt-05.jpg`} alt="Pflasterarbeiten von Arslan Garten-Löwe" loading="lazy"/><div className="about-stamp"><strong>100%</strong><span>Echte<br/>Handarbeit</span></div></div>
          <div className="about-copy"><p className="eyebrow dark"><span /> Warum Arslan</p><h2>Direkt. Sauber.<br/><em>Verlässlich.</em></h2><p className="lead">Ein Ansprechpartner, ein eingespieltes Team und ein Ergebnis, das sich sehen lassen kann.</p>
            <ul><li><span>01</span><div><strong>Persönliche Beratung</strong><p>Wir hören zu, schauen uns die Situation vor Ort an und empfehlen, was wirklich passt.</p></div></li><li><span>02</span><div><strong>Sorgfältige Ausführung</strong><p>Wir arbeiten präzise, halten Absprachen ein und hinterlassen die Baustelle ordentlich.</p></div></li><li><span>03</span><div><strong>Regional erreichbar</strong><p>Für Norderstedt, Hamburg-Nord, Quickborn, Henstedt-Ulzburg und Umgebung.</p></div></li></ul>
          </div>
        </div>
      </section>

      <section className="image-ribbon" aria-label="Weitere echte Arbeiten"><div className="ribbon-track">{["projekt-11.jpg","projekt-07.jpg","projekt-04.jpg","projekt-09.jpg","projekt-02.jpg"].map((img,i)=><figure key={img}><img src={`${base}/images/${img}`} alt={`Arslan Garten-Löwe Projektansicht ${i+1}`} loading="lazy"/></figure>)}</div></section>

      <section className="review-section reveal"><div className="shell review-grid"><div><p className="eyebrow dark"><span /> Kundenstimme</p><div className="stars" aria-label="5 von 5 Sternen">★★★★★</div></div><blockquote>„Sauber, unkompliziert, schnell. Unsere alten Büsche wurden entfernt, entsorgt und eine neue Hecke gepflanzt. Wir sind sehr zufrieden.“<cite>– Bewertung auf Gartenbau.org, März 2025</cite></blockquote></div><div className="shell profile-links"><div className="profile-intro"><strong>Nachprüfbare Stimmen.</strong><span>Sehen Sie selbst, wie Kunden unsere Arbeit bewerten.</span></div><a href="https://www.provenexpert.com/de-de/arslan-garten-loewe-gartenpflege-garten-landschaftsbau/" target="_blank" rel="noreferrer" aria-label="Bewertungen bei ProvenExpert ansehen"><span className="profile-rating">5,0</span><span><strong>Google-Bewertungen</strong><small>8 Bewertungen · via ProvenExpert</small></span><b aria-hidden="true">↗</b></a><a href="https://www.gartenbau.org/norderstedt/arslan-garten-loewe-gartenpflege-garten-landschaftsbau-aUOsYJ" target="_blank" rel="noreferrer" aria-label="Profil bei Gartenbau.org ansehen"><span className="profile-rating">5,0</span><span><strong>Gartenbau.org</strong><small>Profil und Kundenstimme ansehen</small></span><b aria-hidden="true">↗</b></a></div></section>

      <section id="kontakt" className="contact-section reveal"><div className="shell contact-grid"><div><p className="eyebrow"><span /> Ihr Garten. Unser nächstes Projekt.</p><h2>Erzählen Sie uns,<br/>was Sie <em>vorhaben.</em></h2></div><div className="contact-actions"><a className="button light" href="mailto:info@arslan-gartenloewe.de?subject=Projektanfrage%20über%20die%20Website">E-Mail schreiben <span>↗</span></a><a href="tel:+4917685466600">+49 176 854 66 600</a><a href="https://wa.me/4917685466600" target="_blank" rel="noreferrer">Per WhatsApp anfragen ↗</a></div></div></section>

      <footer><div className="shell footer-grid"><a href="#start" className="brand footer-brand"><img src={`${base}/logo.png`} alt=""/><span><strong>ARSLAN</strong><small>GARTEN-LÖWE</small></span></a><div><strong>Kontakt</strong><a href="tel:+4917685466600">+49 176 854 66 600</a><a href="mailto:info@arslan-gartenloewe.de">info@arslan-gartenloewe.de</a></div><div><strong>Standort</strong><p>Friedrichsgaber Weg 411<br/>22846 Norderstedt</p></div><div><strong>Rechtliches</strong><a href="https://arslan-gartenloewe.de/privacy-policy" target="_blank" rel="noreferrer">Datenschutz</a><a href="mailto:info@arslan-gartenloewe.de?subject=Impressum">Impressum anfragen</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Arslan Garten-Löwe</span><span>Bewertungen: MyHammer, Google/ProvenExpert und Gartenbau.org.</span></div></footer>

      <div className="mobile-bar"><a href="tel:+4917685466600">Anrufen</a><a href="https://wa.me/4917685466600">WhatsApp</a></div>
    </main>
  );
}
