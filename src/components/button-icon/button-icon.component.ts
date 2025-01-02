import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-icon',
  imports: [RouterLink],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css'
})
export class ButtonIconComponent {
  @Input() routerLink = "";
  @Input() img: String = ""
  @Input() text: String = ""
}
