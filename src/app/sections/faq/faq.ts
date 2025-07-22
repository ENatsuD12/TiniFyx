import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and *ngIf
import { RouterLink } from '@angular/router';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean; // Initial state: collapsed
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  // Array of objects containing questions and answers
  faqs: FaqItem[] = [
    {
      id: 'q1',
      question: '¿Qué es TiniFyx y cómo puede ayudar a mi negocio?',
      answer: 'TiniFyx es un administrador de microservicios diseñado para simplificar la gestión de tu negocio. Ofrecemos soluciones para punto de venta, facturación electrónica y firmas digitales, todo en un solo lugar.',
      isOpen: false, // Initial state: collapsed
    },
    {
      id: 'q2',
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: 'Actualmente aceptamos pagos a través de Oxxo, PayPal y Mercado Pago para tu comodidad.',
      isOpen: false,
    },
    {
      id: 'q3',
      question: '¿TiniFyx es adecuado para negocios de cualquier tamaño?',
      answer: 'Sí, TiniFyx está diseñado para escalar contigo. Desde el emprendimiento más pequeño hasta la empresa más grande, ofrecemos soluciones eficientes que se adaptan a tu presupuesto y necesidades.',
      isOpen: false,
    },
    {
      id: 'q4',
      question: '¿Puedo probar TiniFyx antes de comprar un plan?',
      answer: '¡Absolutamente! Te invitamos a probar TiniFyx gratis por 7 días. Descubre cómo podemos transformar tu negocio sin riesgos ni complicaciones.',
      isOpen: false,
    },
    {
      id: 'q5',
      question: '¿Mis datos están seguros con TiniFyx?',
      answer: 'La seguridad de tus datos es nuestra prioridad. Utilizamos tecnología blockchain y cumplimos con la norma NOM-151 para garantizar la integridad y el respaldo legal de tus documentos y operaciones.',
      isOpen: false,
    },
  ];

  /**
   * Toggles the 'isOpen' state of a specific FAQ item.
   * @param faqId The ID of the FAQ item to toggle.
   */
  toggleFaq(faqId: string): void {
    this.faqs = this.faqs.map((faq) => ({
      ...faq,
      isOpen: faq.id === faqId ? !faq.isOpen : faq.isOpen, // Only toggles the selected one
    }));
  }
}
