// user-card.component.ts

import { Component, Input } from '@angular/core';
import { Iusuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: Iusuario; 
}
