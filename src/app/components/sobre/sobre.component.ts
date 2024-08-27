import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  sobres = [
    {name: "Wilton Araujo", cargo: "UX/UI Designer", photoUrl: 'assets/pessoal/Wilton-Araujo.jpg', like: "https://www.linkedin.com/in/marco-junior-307513216/" },
    {name: "Marco Junior", cargo: "Dev Full Stack", photoUrl: 'assets/pessoal/Marco-Junior.png', like: "https://www.linkedin.com/in/marco-junior-307513216/" },
    {name: "Lourival Barboza", cargo: "Co Fundador", photoUrl: 'assets/pessoal/Lourival-Barboza.jpg', like: "https://www.linkedin.com/in/marco-junior-307513216/" },
    {name: "Rafael Cavalcante", cargo: "Gerente", photoUrl: 'assets/pessoal/Rafael-Cavalcante.jpg', like: "https://www.linkedin.com/in/marco-junior-307513216/" }
  ];

}
