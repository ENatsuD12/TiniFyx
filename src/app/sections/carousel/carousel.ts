import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel implements OnInit {
  companyLogos: string[] = [
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo1', // Placeholder para Logo 1
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo2', // Placeholder para Logo 2
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo3', // Placeholder para Logo 3
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo4', // Placeholder para Logo 4
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo5', // Placeholder para Logo 5
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo6', // Placeholder para Logo 6
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo7', // Placeholder para Logo 7
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo8', // Placeholder para Logo 8
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo9', // Placeholder para Logo 9
    'https://placehold.co/120x60/F0F0F0/000000?text=Logo10', // Placeholder para Logo 10
  ];

  // Array que contendrá los logotipos duplicados para el efecto de carrusel infinito.
  // Se duplica el array original para que la animación pueda hacer un loop sin saltos.
  companyLogosDisplayed: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // Duplicamos los logotipos para el carrusel infinito.
    // Esto asegura que cuando la animación llega al final de la primera copia,
    // la segunda copia ya está en posición para un reinicio suave.
    this.companyLogosDisplayed = [...this.companyLogos, ...this.companyLogos];
  }
}
