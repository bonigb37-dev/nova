"use client";

import { useEffect, useState } from "react";

const featured = [
  { name: "Poisson braisé du jour", detail: "Mariné aux épices, alloco et sauce verte maison", price: "À partir de 8 500", tag: "Le favori", image: "photo-1512621776951-a57141f2eefd" },
  { name: "Poulet bicyclette", detail: "Grillé au feu de bois, attiéké et oignons frais", price: "À partir de 7 500", tag: "Tradition", image: "photo-1532634896-26909d0d4b34" },
  { name: "Pizza Nova", detail: "Tomate, mozzarella, basilic et ingrédients frais", price: "À partir de 6 000", tag: "À partager", image: "photo-1579751626657-72bc17010498" },
];

const menu = [
  { title: "Grillades & cuisine africaine", note: "Les saveurs du feu et du terroir", items: [
    ["Poisson braisé", "Selon arrivage · attiéké ou riz, alloco, sauce maison", "8 500"], ["Tilapia grillé", "Entier, épices maison · riz ou aloco", "9 500"], ["Poulet bicyclette", "Grillé au feu de bois · attiéké et oignons", "7 500"], ["Poulet braisé", "Demi-poulet · pommes sautées ou aloco", "6 500"], ["Brochettes de bœuf", "Marinade aux herbes · frites et salade", "6 000"], ["Mafé de bœuf", "Sauce arachide, riz parfumé et légumes", "6 500"], ["Poulet yassa", "Oignons fondants, citron et riz", "6 000"],
  ]},
  { title: "Pizzas", note: "Pâte maison, garniture généreuse", items: [
    ["Margherita", "Tomate, mozzarella, basilic", "5 000"], ["Reine", "Jambon, champignons, mozzarella", "6 500"], ["Poulet épicé", "Poulet mariné, poivrons, mozzarella", "7 000"], ["Nova spéciale", "Bœuf, poulet, légumes et fromage", "8 000"],
  ]},
  { title: "Burgers & chawarmas", note: "À savourer sur place ou à emporter", items: [
    ["Nova Burger", "Steak haché, cheddar, salade, tomate, sauce maison", "6 000"], ["Double Cheese", "Deux steaks, double cheddar, oignons confits", "8 000"], ["Burger poulet croustillant", "Poulet pané, salade croquante, sauce légère", "5 500"], ["Chawarma poulet", "Poulet grillé, crudités, sauce à l’ail", "4 000"], ["Chawarma bœuf", "Bœuf épicé, crudités et sauce maison", "4 500"],
  ]},
  { title: "Steaks & plats du jour", note: "Cuisson à votre goût, garniture au choix", items: [
    ["Steak de bœuf grillé", "Sauce poivre ou champignons · frites", "8 500"], ["Filet de bœuf", "Jus corsé · pommes sautées et légumes", "10 000"], ["Escalope de poulet", "Crème légère · riz ou pommes sautées", "6 500"], ["Plat du jour", "Demandez notre suggestion fraîche du jour", "Dès 5 000"],
  ]},
  { title: "Accompagnements", note: "Ajoutez votre côté préféré", items: [
    ["Alloco", "Bananes plantain mûres, dorées à la minute", "1 500"], ["Frites de pommes de terre", "Croustillantes, faites maison", "1 500"], ["Pommes sautées", "Pommes de terre dorées aux herbes", "2 000"], ["Riz parfumé", "Riz légèrement épicé", "1 000"], ["Attiéké", "Semoule de manioc et oignons frais", "1 000"], ["Salade fraîche", "Légumes de saison et vinaigrette maison", "1 500"],
  ]},
  { title: "Boissons chaudes & fraîches", note: "Pour accompagner chaque moment", items: [
    ["Thé à la menthe", "Infusion fraîchement préparée", "1 000"], ["Café / café au lait", "Espresso ou douceur lactée", "1 000"], ["Jus de bissap ou gingembre", "Fait maison, servi frais", "1 500"], ["Jus de fruits frais", "Selon les fruits de saison", "2 000"], ["Sodas & eau minérale", "Demandez les formats disponibles", "À partir de 1 000"],
  ]},
  { title: "Glaces & desserts", note: "Une note douce pour terminer", items: [
    ["Boule de glace", "Vanille, chocolat, fraise, coco, mangue, caramel", "1 000"], ["Coupe deux parfums", "Choisissez parmi nos parfums du moment", "2 000"], ["Coupe Nova", "Trois parfums, coulis et éclats croustillants", "3 500"], ["Fondant au chocolat", "Servi tiède avec une boule de glace", "3 500"], ["Salade de fruits frais", "Fruits de saison découpés minute", "2 500"],
  ]},
];

function Arrow({ diagonal = false }) {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={diagonal ? "M3.5 12.5 12.5 3.5M4 3.5h8.5V12" : "M2.5 8h10m-4-4 4 4-4 4"} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Brand({ footer = false }) {
  return <a className={`brand${footer ? " footer-brand" : ""}`} href="#accueil" aria-label="Nova-Retau, accueil"><svg className="brand-symbol" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="23"/><path d="M13 35V17l13 17V17l13 18"/><path className="brand-sun" d="M20 12h12M26 7v5"/></svg><span className="brand-name"><b>NOVA</b><span>RETAU</span></span></a>;
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
      <div className="announcement"><span>Nova-Retau · La cuisine qui rassemble</span><span className="announcement-right">Grillades · Pizzas · Saveurs d’ici et d’ailleurs</span></div>
      <header className="nav-wrap">
        <Brand />
        <button className="menu-toggle" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}><a href="#histoire" onClick={() => setMenuOpen(false)}>Notre maison</a><a href="#carte" onClick={() => setMenuOpen(false)}>La carte</a><a href="#experience" onClick={() => setMenuOpen(false)}>L’expérience</a><a href="#contact" onClick={() => setMenuOpen(false)}>Nous trouver</a></nav>
        <a className="nav-cta" href="#carte">Voir la carte <Arrow diagonal /></a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-image" role="img" aria-label="Une table généreuse aux saveurs d’Afrique"/><div className="hero-shade"/>
        <div className="hero-content"><div className="eyebrow light"><span className="eyebrow-line"/> GRILLADES · CUISINE · CONVIVIALITÉ</div><h1>Le goût de<br/><em className="typewriter" key={phrase}>{phrases[phrase]}</em></h1><p>Des grillades au feu de bois, des plats généreux et des douceurs pour tous.<br/>Bienvenue chez Nova-Retau.</p><div className="hero-actions"><a className="button button-gold" href="#carte">Explorer la carte <Arrow /></a><a className="text-link light-link" href="#histoire">Notre maison <span><Arrow diagonal /></span></a></div></div>
        <div className="hero-note"><span className="note-star">✳</span><span>FRAIS,<br/>GÉNÉREUX,<br/>FAIT MAISON.</span></div><a className="scroll-cue" href="#histoire"><span>FAITES DÉFILER</span><i/></a><div className="hero-count">01 <span/> 03</div>
      </section>

      <section className="intro section-pad" id="histoire"><div className="intro-heading"><div className="eyebrow"><span className="eyebrow-line"/> BIENVENUE CHEZ NOVA-RETAU</div><h2>À chacun<br/><em>son envie.</em></h2></div><div className="intro-copy"><p>Un poisson braisé à partager, une pizza tout juste sortie du four, un chawarma sur le pouce ou une glace après le repas : Nova-Retau réunit les saveurs et les envies dans une ambiance chaleureuse.</p><a className="text-link" href="#carte">Parcourir la carte <span><Arrow diagonal /></span></a></div><div className="intro-stamp"><span>✳</span><small>LE GOÛT<br/>DU PARTAGE</small></div></section>

      <section className="menu-section section-pad" id="carte"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> LES FAVORIS DE LA MAISON</div><h2>Nos <em>incontournables</em></h2></div><a className="text-link menu-all" href="#menu-complet">Toute la carte <span><Arrow diagonal /></span></a></div>
        <div className="dish-grid">{featured.map((dish, index) => <article className="dish-card" key={dish.name} style={{ "--delay": `${index * 120}ms` }}><div className="dish-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${dish.image}?auto=format&fit=crop&w=1000&q=85)` }}><span className="dish-tag">{dish.tag}</span></div><div className="dish-info"><div><h3>{dish.name}</h3><p>{dish.detail}</p></div><strong>{dish.price} <small>FCFA</small></strong></div></article>)}</div>
        <div className="menu-footnote"><span>✳</span> Préparé avec soin, à commander selon votre appétit.</div>
      </section>

      <section className="full-menu section-pad" id="menu-complet"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> UNE CARTE POUR TOUTES LES ENVIES</div><h2>La carte <em>Nova-Retau</em></h2></div><p className="menu-currency">Prix indicatifs en FCFA, à confirmer auprès du restaurant.</p></div><div className="menu-category-grid">{menu.map((category) => <article className="menu-category" key={category.title}><div className="category-heading"><div><h3>{category.title}</h3><p>{category.note}</p></div><span>✳</span></div><ul>{category.items.map(([name, detail, price]) => <li key={name}><div><strong>{name}</strong><p>{detail}</p></div><b>{price}</b></li>)}</ul></article>)}</div></section>

      <section className="experience" id="experience"><div className="experience-photo" role="img" aria-label="Un moment de partage autour d'un repas"/><div className="experience-copy"><div className="eyebrow light"><span className="eyebrow-line"/> PLUS QU’UN REPAS</div><h2>On vient pour<br/>la cuisine.<br/><em>On revient pour<br/>l’atmosphère.</em></h2><p>Une table pour les repas en famille, les pauses entre amis et les petites envies à toute heure.</p><a className="button button-outline" href="#carte">Trouver votre bonheur <Arrow /></a><span className="exp-decoration">N</span></div></section>
      <section className="quote-band"><span className="quote-star">✳</span><blockquote>« Le bonheur est fait maison.<br/><em>Et il se partage. »</em></blockquote><span className="quote-by">— LA PHILOSOPHIE NOVA-RETAU</span></section>
      <section className="reservation section-pad" id="reservation"><div className="reservation-copy"><div className="eyebrow"><span className="eyebrow-line"/> ON VOUS ATTEND</div><h2>Votre table<br/><em>vous attend.</em></h2><p>Un déjeuner entre amis, un dîner à deux ou une envie gourmande. Découvrez la carte et composez votre moment.</p><a className="button button-dark" href="#contact">Nous contacter <Arrow /></a></div><div className="reservation-image" role="img" aria-label="Une table prête à accueillir les convives"/><div className="reservation-detail"><span>CHEZ NOVA-RETAU</span><b>Saveurs & convivialité</b><a href="#carte">Voir la carte <Arrow diagonal /></a></div></section>
      <footer id="contact"><div className="footer-top"><Brand footer/><p>Des saveurs pour tous.<br/>Du bonheur autour de la table.</p><a className="footer-booking" href="#carte">Découvrir la carte <Arrow diagonal /></a></div><div className="footer-bottom"><span>© 2026 Nova-Retau. Fait avec le cœur.</span><span>Grillades · Pizzas · Cuisine généreuse</span><a href="#accueil">Retour en haut ↑</a></div></footer>
    </main>
  );
}
