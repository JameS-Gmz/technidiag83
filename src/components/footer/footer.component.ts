import { Component, OnInit } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { ClicsService } from '../../services/clic.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [ButtonIconComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  compteurClics: number = 0;

  constructor(private clicsService: ClicsService) { }

  ngOnInit(): void {
    // Récupérer le compteur au démarrage du Footer
    this.clicsService.obtenirCompteur().subscribe(response => {
      this.compteurClics = response.compteur;
    }, error => {
      console.error('Erreur lors de la récupération du compteur', error);
    });
  }
}