import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface ExperienceItem {
  date: string; role: string; company: string; description: string; icon: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  klineExperiences: ExperienceItem[] = [
    { date: 'Juin — Juillet 2026', role: 'Intérim Développeur informatique', company: 'K-Line LIMA, Saint-Vulbas (01)', description: '', icon: 'briefcase' },
    { date: 'Janvier — Février 2026', role: 'Stage Développeur Front-End / Back-End', company: 'K-Line LIMA, Saint-Vulbas (01)', description: "Refonte de l'application BeSafe en utilisant Angular et .NET.", icon: 'briefcase' },
    { date: 'Octobre 2025', role: 'Mission intérim Développeur Front-End / Back-End', company: 'K-Line LIMA, Saint-Vulbas (01)', description: "Réalisation d'une application web interne pour gérer le rapport Qualimarine au sein de la chaîne de production laquage (KLIMArine).", icon: 'briefcase' },
    { date: 'Juillet — Août 2025', role: 'Mission intérim Développeur Front-End / Back-End', company: 'K-Line LIMA, Saint-Vulbas (01)', description: "Amélioration de l'application BeSafe avec ajout de nouvelles fonctionnalités.", icon: 'briefcase' },
    { date: 'Mai — Juillet 2025', role: 'Stage Développeur Front-End / Back-End', company: 'K-Line LIMA, Saint-Vulbas (01)', description: "Réalisation d'une application web interne pour gérer les visites comportementales de sécurité, en React.js et Node.js (BeSafe).", icon: 'briefcase' }
  ];

  otherExperiences: ExperienceItem[] = [
    { date: 'Avril 2022', role: 'Stage de découverte service informatique', company: 'Soverglass, Saint-Vulbas (01)', description: "Stage de découverte du service informatique.", icon: 'compass' }
  ];
}