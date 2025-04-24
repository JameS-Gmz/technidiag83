import { Component, OnInit } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { ClicsService } from '../../services/clic.service';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonIconComponent, MapComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  compteurClics: number = 0;

  constructor(private clicsService: ClicsService) {}

  ngOnInit(): void {
    // Enregistrer un clic (visite de la page) lors du chargement de la page
    this.clicsService.enregistrerClic().subscribe(response => {
      console.log('Clic enregistré avec succès!');
    }, error => {
      console.error('Erreur lors de l\'enregistrement du clic', error);
    });

    // Récupérer le compteur et l'afficher
    this.clicsService.obtenirCompteur().subscribe(response => {
      this.compteurClics = response.compteur;
      console.log('Compteur actuel :', this.compteurClics);
    }, error => {
      console.error('Erreur lors de la récupération du compteur', error);
    });
  }
}