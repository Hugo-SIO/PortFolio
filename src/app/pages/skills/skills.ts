import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Skill { name: string; level: number; }
interface SkillGroup { title: string; icon: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  groups: SkillGroup[] = [
    { title: 'Front-End', icon: 'monitor', skills: [
      { name: 'React.js', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'Blazor', level: 10 },
      { name: 'HTML5 / CSS3', level: 90 },
    ]},
    { title: 'Back-End', icon: 'server', skills: [
      { name: 'PHP', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: '.NET / C#', level: 65 },
    ]},
    { title: 'Base de données', icon: 'database', skills: [
      { name: 'SQL Server', level: 70 },
      { name: 'MySQL', level: 75 },
      { name: 'PostgreSQL', level: 45 },
    ]},
    { title: 'DevOps & Outils', icon: 'git-branch', skills: [
      { name: 'Git', level: 80 },
      { name: 'Azure DevOps', level: 40 },
    ]},
    { title: 'Logiciel', icon: 'cpu', skills: [
      { name: 'Java', level: 70 },
      { name: 'C#', level: 80 },
      { name: 'C++', level: 10 },
    ]},
  ];
}