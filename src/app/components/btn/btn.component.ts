import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() textoBtn: string = "Botão padrão";
  @Input() href: string = '#'; 
}
