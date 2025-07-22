import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf

@Component({
  selector: 'app-navbar',
  standalone: true, // Indica que es un componente standalone
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'], // Cambiado a .css
})
export class navbarcomponent {
  // Propiedad para controlar la visibilidad del menú móvil
  isMenuOpen: boolean = false;

  constructor() {}

  /**
   * Alterna el estado de isMenuOpen para mostrar u ocultar el menú móvil.
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Cierra el menú móvil. Útil cuando se hace clic en un enlace dentro del menú.
   */
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}