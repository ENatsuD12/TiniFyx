import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 

// Define la interfaz para la estructura de datos de cada plan
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isFeatured: boolean;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, RouterLink],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {
  // Array de objetos que contiene la información de los planes de precios
  plans: PricingPlan[] = [
    {
      id: 'esencial',
      name: 'Esencial',
      price: '$399 / mes',
      description: 'Ideal para pequeños negocios y emprendedores que buscan simplicidad y control inicial.',
      features: [
        'Acceso a Punto de Venta Básico',
        'Gestión de 50 facturas/mes',
        '10 Firmas digitales/mes',
        'Soporte estándar',
        'Reportes básicos',
        'Actualizaciones de software',
      ],
      ctaText: 'Elegir Plan Esencial',
      ctaLink: '/checkout/esencial', // Ruta al proceso de compra o registro
      isFeatured: true, // Este plan está destacado
    },
    {
      id: 'licencia-personalizada',
      name: 'Licencia Personalizada / Desarrollo',
      price: 'Precio a Tratar',
      description: 'Para empresas con requerimientos específicos, integraciones avanzadas o desarrollo a medida de TiniFyx.',
      features: [
        'Aplicación completa para tu empresa',
        'Integraciones a medida',
        'Soporte premium dedicado 24/7',
        'Desarrollo de funcionalidades personalizadas',
        'Consultoría estratégica',
        'Escalabilidad ilimitada',
      ],
      ctaText: 'Contactar para Consultoría',
      ctaLink: '/contacto', // Ruta a la sección de contacto
      isFeatured: false, // Este plan no está destacado
    },
  ];

  constructor() {}
}
