"use client";

import { useEffect, useState } from "react";

const dishes = [
  { name: "Poulet braisé façon Savana", detail: "Mariné 24 h, alloco croustillant, sauce verte maison", price: "16 500", tag: "Signature", image: "photo-1532634896-26909d0d4b34" },
  { name: "Thieboudienne rouge", detail: "Riz parfumé, poisson du jour, légumes fondants", price: "18 000", tag: "Tradition", image: "photo-1512621776951-a57141f2eefd" },
  { name: "Mafé de bœuf tendre", detail: "Sauce arachide veloutée, patate douce & riz parfumé", price: "15 000", tag: "Coup de cœur", image: "photo-1547592180-85f173990554" },
];

function Arrow({ diagonal = false }) {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={diagonal ? "M3.5 12.5 12.5 3.5M4 3.5h8.5V12" : "M2.5 8h10m-4-4 4 4-4 4"} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  const phrases = ["l’Afrique à votre table.", "le goût du partage.", "vos envies, autrement."];
  const [phrase, setPhrase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setPhrase((value) => (value + 1) % phrases.length), 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="announcement"><span>Une cuisine de cœur, une expérience à part</span><span className="announcement-right">Abidjan · Cocody&nbsp;&nbsp; / &nbsp;&nbsp; Ouvert aujourd’hui jusqu’à 23h</span></div>
      <header className="nav-wrap">
        <a className="brand" href="#accueil" aria-label="Maison Savana, accueil"><span className="brand-mark">M<span>✳</span>S</span><span className="brand-name">MAISON <b>SAVANA</b></span></a>
        <button className="menu-toggle" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#histoire" onClick={() => setMenuOpen(false)}>Notre histoire</a><a href="#carte" onClick={() => setMenuOpen(false)}>La carte</a><a href="#experience" onClick={() => setMenuOpen(false)}>L’expérience</a><a href="#contact" onClick={() => setMenuOpen(false)}>Nous trouver</a>
        </nav>
        <a className="nav-cta" href="#reservation">Réserver une table <Arrow diagonal /></a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-image" role="img" aria-label="Table généreuse aux couleurs de l'Afrique" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow light"><span className="eyebrow-line"/> CUISINE AFRICAINE & CONTEMPORAINE</div>
          <h1>Le goût de<br/><em className="typewriter" key={phrase}>{phrases[phrase]}</em></h1>
          <p>Des recettes qui racontent, des produits qui rassemblent.<br/>Bienvenue à votre nouvelle table préférée.</p>
          <div className="hero-actions"><a className="button button-gold" href="#carte">Découvrir la carte <Arrow /></a><a className="text-link light-link" href="#histoire">L’esprit Savana <span><Arrow diagonal /></span></a></div>
        </div>
        <div className="hero-note"><span className="note-star">✳</span><span>DU TERROIR,<br/>DU CŒUR,<br/>DU CARACTÈRE.</span></div>
        <a className="scroll-cue" href="#histoire"><span>FAITES DÉFILER</span><i/></a>
        <div className="hero-count">01 <span/> 03</div>
      </section>

      <section className="intro section-pad" id="histoire">
        <div className="intro-heading"><div className="eyebrow"><span className="eyebrow-line"/> BIENVENUE CHEZ VOUS</div><h2>Le meilleur des<br/><em>deux mondes.</em></h2></div>
        <div className="intro-copy"><p>Chez Maison Savana, les souvenirs d’enfance rencontrent les idées d’aujourd’hui. Nous cuisinons avec générosité, en laissant les épices, les saisons et le plaisir de partager guider chaque assiette.</p><a className="text-link" href="#experience">Découvrir notre histoire <span><Arrow diagonal /></span></a></div>
        <div className="intro-stamp"><span>✳</span><small>AFRIQUE<br/>DANS L’ÂME</small></div>
      </section>

      <section className="menu-section section-pad" id="carte">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> QUELQUE CHOSE DE BON</div><h2>Nos <em>incontournables</em></h2></div><a className="text-link menu-all" href="#reservation">Toute la carte <span><Arrow diagonal /></span></a></div>
        <div className="dish-grid">{dishes.map((dish, index) => <article className="dish-card" key={dish.name} style={{ "--delay": `${index * 120}ms` }}><div className="dish-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${dish.image}?auto=format&fit=crop&w=1000&q=85)` }}><span className="dish-tag">{dish.tag}</span><button aria-label={`En savoir plus sur ${dish.name}`} className="dish-plus"><Arrow diagonal /></button></div><div className="dish-info"><div><h3>{dish.name}</h3><p>{dish.detail}</p></div><strong>{dish.price} <small>FCFA</small></strong></div></article>)}</div>
        <div className="menu-footnote"><span>✳</span> Des produits frais, une cuisine faite sur place, chaque jour.</div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-photo" role="img" aria-label="Un moment de partage autour d'un repas" />
        <div className="experience-copy"><div className="eyebrow light"><span className="eyebrow-line"/> PLUS QU’UN REPAS</div><h2>On vient pour<br/>la cuisine.<br/><em>On revient pour<br/>l’atmosphère.</em></h2><p>Une lumière douce, des conversations qui s’attardent, et cette envie de commander « juste un dernier petit quelque chose ».</p><a className="button button-outline" href="#reservation">Vivre l’expérience <Arrow /></a><span className="exp-decoration">S</span></div>
      </section>

      <section className="quote-band"><span className="quote-star">✳</span><blockquote>« Le bonheur est fait maison.<br/><em>Et il se partage. »</em></blockquote><span className="quote-by">— LA PHILOSOPHIE SAVANA</span></section>

      <section className="reservation section-pad" id="reservation"><div className="reservation-copy"><div className="eyebrow"><span className="eyebrow-line"/> À TRÈS BIENTÔT</div><h2>Votre table<br/><em>vous attend.</em></h2><p>Un déjeuner entre amis, un dîner à deux ou une occasion à célébrer. On s’occupe du reste.</p><a className="button button-dark" href="#contact">Réserver une table <Arrow /></a></div><div className="reservation-image" role="img" aria-label="Une table prête à accueillir les convives"/><div className="reservation-detail"><span>MAISON SAVANA</span><b>Cocody, Abidjan</b><a href="#contact">Voir l’adresse <Arrow diagonal /></a></div></section>

      <footer id="contact"><div className="footer-top"><a className="brand footer-brand" href="#accueil"><span className="brand-mark">M<span>✳</span>S</span><span className="brand-name">MAISON <b>SAVANA</b></span></a><p>De l’Afrique dans l’assiette.<br/>Du bonheur autour de la table.</p><a className="footer-booking" href="#reservation">Venez, on vous garde une place <Arrow diagonal /></a></div><div className="footer-bottom"><span>© 2026 Maison Savana. Fait avec le cœur.</span><span>Abidjan, Côte d’Ivoire</span><a href="#accueil">Instagram ↗</a></div></footer>
    </main>
  );
}
