import { Component, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  constructor() {}

  // AfterViewInit se usa para asegurar que el DOM ha sido renderizado
  ngAfterViewInit(): void {
    // Si necesitas alguna manipulación del DOM después de que la vista se inicialice, hazlo aquí.
    // Por ejemplo, si la animación del 'click' necesitara JavaScript, iría aquí.
    // Para esta animación, CSS es suficiente.
  }

  /**
   * Realiza un scroll suave a la sección de servicios.
   * Asume que hay un elemento con el ID 'servicios' en el DOM.
   */
  scrollToServices(): void {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("La sección con ID 'servicios' no fue encontrada. Asegúrate de que existe en tu plantilla principal.");
    }
  }
}
