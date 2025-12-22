import { useState, useEffect } from 'react';
import styles from "./Projets.module.css";

export default function Projets() {
  const [projets, setProjets] = useState([]);
  const [filtre, setFiltre] = useState("Tous");
  const [langages, setLangages] = useState([]);
  
  useEffect(() => {
    fetch("https://api.github.com/users/Hugo-SIO/repos")
      .then(res => res.json())
      .then(data => {
        setProjets(data);
        // Récupération des langages uniques
        const langs = [...new Set(data.map(repo => repo.language).filter(Boolean))];
        setLangages(langs);
      });
  }, []);

  // Filtrer les projets
  const projetsFiltres =
    filtre === "Tous"
      ? projets
      : projets.filter(repo => repo.language === filtre);

  return (
    <section className={styles.projetsSection}>
      <h2 className={styles.titre}>Mes projets GitHub</h2>

      {/* Filtre */}
      <div className={styles.filtreContainer}>
        <label>Filtrer par langage :</label>
        <select
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
          className={styles.select}
        >
          <option value="Tous">Tous</option>
          {langages.map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Liste des projets filtrés */}
      <ul className={styles.liste}>
        {projetsFiltres.map((repo) => (
          <li key={repo.id} className={styles.carte}>
            <span className={styles.nom}>{repo.name}</span>
            <p className={styles.langage}>
              Langage : {repo.language ?? "Inconnu"}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
