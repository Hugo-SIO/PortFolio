import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Project { id: number; title: string; description: string; tags: string[]; }

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    // { id: 1, title: '', description: '', tags: [] }
  ];
}