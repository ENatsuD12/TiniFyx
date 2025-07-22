import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  // Contact information for the footer
  contactInfo = {
    email: 'contacto@tinifyx.com',
    phone: '+52 999 123 4567', // Example phone number for Mérida, Yucatán, Mexico
  };

  // Main navigation links
  mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Planes y Precios', path: '/precios' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'FAQ', path: '/faq' },
  ];

  // Service-specific links
  serviceLinks = [
    { name: 'Firmas Digitales', path: '/servicios/firmas' },
    { name: 'Punto de Venta', path: '/servicios/punto-venta' },
    { name: 'Facturación Electrónica', path: '/servicios/facturacion' },
  ];

  // Legal and miscellaneous links
  legalLinks = [
    { name: 'Aviso de Privacidad', path: '/privacidad' },
    { name: 'Términos y Condiciones', path: '/terminos' },
    { name: 'Políticas de Cookies', path: '/cookies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Soporte', path: '/soporte' },
  ];

  // Social media links with inline SVG icons
  socialLinks = [
    {
      name: 'Facebook',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.01 3.657 9.124 8.438 9.879V14.62H8.054V12h2.384V9.38c0-2.35 1.428-3.64 3.54-3.64 1.014 0 1.905.075 2.16.108v2.48h-1.46c-1.14 0-1.36.54-1.36 1.33v1.73h2.72l-.44 2.62h-2.28v7.26C18.343 21.124 22 17.01 22 12c0-5.523-4.477-10-10-10z"/></svg>`,
      url: 'https://facebook.com/tinifyx',
    },
    {
      name: 'X (Twitter)',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.89L4.99 21.75H1.68l7.73-8.83L1.254 2.25H8.08l4.714 6.23L18.244 2.25zm-2.88 16.635h1.93L8.67 5.107H6.55l8.814 13.778z"/></svg>`,
      url: 'https://twitter.com/tinifyx',
    },
    {
      name: 'Instagram',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.29 4.132.559 3.363.828 2.673 1.258 2.074 1.857.872 3.06 0 4.335 0 6c0 1.665.872 2.94 2.074 4.143.599.599 1.29.982 2.053 1.251.772.268 1.642.426 2.92.486 1.28.058 1.676.072 4.65.072s3.37-.014 4.65-.072c1.278-.058 2.148-.216 2.92-.486.763-.269 1.453-.692 2.053-1.291 1.202-1.203 2.072-2.478 2.072-4.143 0-1.665-.872-2.94-2.074-4.143-.599-.599-1.29-.982-2.053-1.251-.772-.268-1.642-.426-2.92-.486C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.859.074 1.173.055 1.86.207 2.33.397.458.188.798.406 1.15.75.352.345.57.692.75 1.15.19.47.342 1.157.397 2.33.058 1.274.074 1.656.074 4.859s-.016 3.585-.074 4.859c-.055 1.173-.207 1.86-.397 2.33-.188.458-.406.798-.75 1.15-.345.352-.692.57-1.15.75-.47.19-1.157.342-2.33.397-1.274.058-1.656.074-4.859.074s-3.585-.016-4.859-.074c-1.173-.055-1.86-.207-2.33-.397-.458-.188-.798-.406-1.15-.75-.352-.345-.57-.692-.75-1.15-.19-.47-.342-1.157-.397-2.33-.058-1.274-.074-1.656-.074-4.859s.016-3.585.074-4.859c.055-1.173.207-1.86.397-2.33.188-.458.406-.798.75-1.15.345-.352.692-.57 1.15-.75.47-.19 1.157-.342 2.33-.397C8.415 2.16 8.797 2.16 12 2.16zm0 3.635c-3.405 0-6.165 2.76-6.165 6.165s2.76 6.165 6.165 6.165 6.165-2.76 6.165-6.165-2.76-6.165-6.165-6.165zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.5-6.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/></svg>`,
      url: 'https://instagram.com/tinifyx',
    },
  ];

  // Dynamically get the current year for the copyright
  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
