import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {

    const data = {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject, // ✅ ajouté
      message: form.value.message
    };

    this.http.post('http://localhost:3000/contact', data)
      .subscribe({
        next: () => {
          alert("Message envoyé !");
          form.reset();
        },
        error: () => alert("Erreur envoi")
      });
  }
}