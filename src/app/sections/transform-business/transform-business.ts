import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceData {
  id: string;
  name: string;
  problem: string;
  imageUrl: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-transform-business',
  imports: [CommonModule, RouterLink],
  templateUrl: './transform-business.html',
  styleUrl: './transform-business.css'
})
export class TransformBusiness {
  services: ServiceData[] = [
    {
      id: 'firmas',
      name: 'Firmas Digitales',
      problem: '¿Cansado de generar firmas manuales y el manejo de papeleo teniendo pérdida de tiempo?',
      imageUrl: 'https://placehold.co/600x400/D1E7DD/000000?text=Firmas+Digitales', // Placeholder para imagen de Firmas Digitales
      title: 'Firmas, contratos y convenios a un solo click',
      description: 'Automatiza y digitaliza tus procesos de firma. Ahorra tiempo, reduce costos y mejora la seguridad de tus documentos con nuestra solución de firmas digitales.',
      features: [
        'Creación y gestión de firmas electrónicas',
        'Integración con documentos PDF',
        'Seguimiento de estado en tiempo real',
        'Validez legal garantizada',
      ],
    },
    {
      id: 'punto-venta',
      name: 'Punto de Venta',
      problem: '¿Problemas con el control de inventario y la gestión de ventas en tu negocio?',
      imageUrl: 'https://placehold.co/600x400/F8D7DA/000000?text=Punto+de+Venta', // Placeholder para imagen de Punto de Venta
      title: 'Gestiona tus ventas y stock de forma eficiente',
      description: 'Nuestro sistema de punto de venta te permite registrar ventas, controlar inventario y generar reportes de manera sencilla, optimizando la operación de tu negocio.',
      features: [
        'Interfaz intuitiva y fácil de usar',
        'Gestión de productos y categorías',
        'Control de inventario en tiempo real',
        'Reportes de ventas detallados',
      ],
    },
    {
      id: 'facturacion',
      name: 'Facturación Electrónica',
      problem: '¿Complicaciones con la emisión de facturas y el cumplimiento fiscal?',
      imageUrl: 'https://placehold.co/600x400/CCE5FF/000000?text=Facturacion+Electronica', // Placeholder para imagen de Facturación Electrónica
      title: 'Facturación electrónica simplificada y segura',
      description: 'Emite facturas electrónicas de forma rápida y cumple con todas las regulaciones fiscales. Nuestra plataforma te asegura precisión y eficiencia en cada transacción.',
      features: [
        'Emisión de CFDI (Comprobante Fiscal Digital por Internet)',
        'Integración con sistemas contables',
        'Almacenamiento seguro de facturas',
        'Actualizaciones automáticas de normativas fiscales',
      ],
    },
  ];

  // Variable para controlar qué servicio está actualmente seleccionado.
  // Se inicializa con el ID del primer servicio.
  selectedServiceId: string = this.services[0].id;

  /**
   * Getter que devuelve el objeto del servicio actualmente seleccionado.
   * Retorna `undefined` si no se encuentra ningún servicio con el ID actual.
   */
  get selectedService(): ServiceData | undefined {
    return this.services.find(service => service.id === this.selectedServiceId);
  }

  /**
   * Actualiza el ID del servicio seleccionado cuando se hace clic en un botón.
   * @param id El ID del servicio a seleccionar.
   */
  selectService(id: string): void {
    this.selectedServiceId = id;
  }
}
