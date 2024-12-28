import { Component, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {
  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event, form: any): void {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    this.http.post('http://46.202.173.219:3000/send-devis', form.value)
      .subscribe(response => {
        this.showConfirmationMessage('Votre devis a été envoyé avec succès.');
      }, error => {
        this.showConfirmationMessage('Une erreur est survenue lors de l\'envoi de votre devis. Veuillez réessayer.');
      });
  }

  showConfirmationMessage(message: string): void {
    const messageElement = this.renderer.createElement('div');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(messageElement, text);
    this.renderer.addClass(messageElement, 'confirmation-message');
    const formElement = this.el.nativeElement.querySelector('form');
    this.renderer.insertBefore(formElement.parentNode, messageElement, formElement.nextSibling);
  }
} 