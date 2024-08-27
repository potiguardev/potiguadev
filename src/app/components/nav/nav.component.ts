import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe isso

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
