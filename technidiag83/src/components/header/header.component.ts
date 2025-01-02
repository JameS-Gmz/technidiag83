import { Component } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonIconComponent,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  dropdownOpen = false;

  // Fonction pour alterner l'état du menu (ouvert/fermé)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

  }


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
