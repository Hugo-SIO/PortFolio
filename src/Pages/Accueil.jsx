import React from "react";
import "./Accueil.css"; // On utilisera ce fichier pour le CSS

export default function Accueil() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Développeur Back-End • Hugo Almazan-Laforet</h1>
        <p>
          Bonjour ! J'ai 20 ans et je suis passionné par le développement back-end. 
          J'ai réalisé plusieurs projets lors de mes stages et missions.
        </p>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <div className="icon">🛠️</div>
          <h3>Mes Projets</h3>
          <p>Applications web et back-end réalisés en BTS et en autonomie.</p>
        </div>

        <div className="card">
          <div className="icon">💻</div>
          <h3>Compétences</h3>
          <p>Node.js, PHP, MySQL, Git, API REST, Docker (bases).</p>
        </div>

        <div className="card">
          <div className="icon">📄</div>
          <h3>Mon Parcours</h3>
          <p>BTS SIO SLAM • Stages et missions d'intérim • À la recherche de nouvelles opportunités.</p>
        </div>
      </section>

      {/* Stack / Compétences */}
      <section className="stack">
        <span>Node.js</span>
        <span>PHP</span>
        <span>MySQL</span>
        <span>Git</span>
        <span>API REST</span>
        <span>Docker</span>
      </section>
    </div>
  );
}