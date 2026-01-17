import React from "react";
import "./Experiences.css";

export default function Experiences() {
  const experiences = [
    {
      entreprise: "KLine LIMA, 01150 Saint-Vulbas",
      icon: "KLine.png",
      missions: [
        {
          poste: "Stage Développeur Front-End / Back-End",
          date: "Janvier - Février 2026",
          description: "Refonte de l'application en utilisant le langage Angular et .NET."
        },
        {
          poste: "Mission intérim Développeur Front-End / Back-End",
          date: "Juillet - Août 2025",
          description: "Refonte et amélioration de l'application interne avec ajout de nouvelles fonctionnalités."
        },
        {
          poste: "Stage Développeur Front-End / Back-End",
          date: "Mai - Juillet 2025",
          description: "Réalisation d'une application web interne pour gérer les visites comportementales de sécurité en utilisant le langage React.js et Node.js."
        },
      ]
    }
  ];

  return (
    <div className="experiences-container">
      <h1>Mes Expériences</h1>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-icon"><img src={exp.icon}/></div>
            <div className="experience-content">
              <h2>{exp.entreprise}</h2>
              {exp.missions.map((mission, idx) => (
                <div key={idx} className="mission">
                  <h3>{mission.poste}</h3>
                  <span className="date">{mission.date}</span>
                  <p>{mission.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}