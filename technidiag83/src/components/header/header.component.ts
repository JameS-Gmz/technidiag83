import { Component } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonIconComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
