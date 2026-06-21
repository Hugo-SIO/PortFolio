import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  onSubmit() {}
}